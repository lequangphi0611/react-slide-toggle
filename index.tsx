import React from "react";
import { render } from "react-dom";
import { useDrag, useDrop, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./style.css";

const DragElement = ({ id, name }) => {
  const [, dragRef] = useDrag({
    item: {
      type: "FOLDER",
      name,
      another: "another",
      id
    }
  });

  const [, dropRef] = useDrop({
    accept: "FOLDER",
    drop: spec => {
      console.log("drop", spec);
    }
  });
  return (
    <div
      ref={instance => {
        dragRef(instance);
        dropRef(instance);
      }}
    >
      {name}
    </div>
  );
};

const DropElement = ({ children }) => {
  const [{ dropResult, item, t }, dropRef] = useDrop({
    accept: "FOLDER",
    collect: spec => ({
      dropResult: spec.getDropResult(),
      item: spec.getItem(),
      t: spec.didDrop()
    })
  });
  const result = dropResult;
  return <div ref={dropRef}>{children}</div>;
};
const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <DragElement id="root" name="root" />
      <DragElement id="children" name="children" />
      <DropElement>Drop here</DropElement>
    </DndProvider>
  );
};

render(<App />, document.getElementById("root"));
