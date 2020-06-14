import React, { Ref, RefObject, useRef } from "react";
import "./slide.css";
import { useTransition, animated } from "react-spring";

const styles: {
  [key: string]: React.CSSProperties;
} = {
  hidden: { opacity: 0, height: 0, overflow: "hidden" },
  visible: { height: "auto", opacity: 1, overflow: "visible" }
};

const getElementHeight = (ref: RefObject<HTMLDivElement>) => {
  return ref.current ? ref.current.getBoundingClientRect().height : 0;
};

const SlideToggleContent = ({
  isVisible = false,
  children
}) => {
  const containerRef = useRef(null);
  const innerRef = useRef(null);
  console.log({ isVisible });
  const transition = useTransition(
    isVisible,
    null,
    {
      enter: () => async (next, cancel) => {
        const height = getElementHeight(innerRef);
        cancel();
        await next({ height, opacity: 1, overflow: "hidden" });
        await next({ ...styles.visible });
      },
      leave: () => async (next, cancel) => {
        const height = getElementHeight(containerRef);
        cancel();
        await next({ height, overflow: "hidden" });
        await next({ ...styles.hidden });
      },
      from: { ...styles.hidden },
      unique: true
    },
    [isVisible, styles]
  );
  return transition.map(({ item: show, props: springProps, key }) => {
    console.log({ show });
    if (show) {
      return (
        <animated.div ref={containerRef} key={key} style={springProps}>
          <div ref={innerRef} className="slide-toggle">
            {children}
          </div>
        </animated.div>
      );
    }

    return null;
  });
};

export default SlideToggleContent;
