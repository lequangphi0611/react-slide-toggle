import React, { Component, Fragment, useState, useCallback } from "react";
import { render } from "react-dom";
import "./style.css";
import SlideToggleContent from './SlideToggle';


const App = () => {
  const [visible, setVisible] = useState(false);
  const handleToggleClick = useCallback(() => {
    setVisible(!visible);
  }, [visible]);
  return (
    <Fragment>
      <button onClick={handleToggleClick}>toggle</button>
      <SlideToggleContent isVisible={visible}>
        <div>
        <p>Start editing to see some magic happen :)</p>
        <p>Start editing to see some magic happen :)</p>
        <p>Start editing to see some magic happen :)</p>
        <p>Start editing to see some magic happen :)</p>
        <p>Start editing to see some magic happen :)</p>
        <p>Start editing to see some magic happen :)</p>
      </div>
      </SlideToggleContent>
  <div>
        <p>Start editing to see some magic happen :)</p>
        <p>Start editing to see some magic happen :)</p>
        <p>Start editing to see some magic happen :)</p>
        <p>Start editing to see some magic happen :)</p>
        <p>Start editing to see some magic happen :)</p>
        <p>Start editing to see some magic happen :)</p>
      </div>  
      </Fragment>
  );
};

render(<App />, document.getElementById("root"));
