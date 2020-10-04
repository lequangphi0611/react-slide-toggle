import React from "react";
import { render } from "react-dom";
import { useDrag, useDrop, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./style.css";

const DragElement = ({ id, name }) => {
  const [, dragRef] = useDrag({
    item: {
      type: "FOLDER",
      name
    }
  });
  return <div ref={dragRef}>{name}</div>;
};

const DropElement = ({ children }) => {
  const [{ dropResult }, dropRef] = useDrop({
    accept: "FOLDER",
    collect: spec => ({
      dropResult: spec.getDropResult()
    })
  });
  const result = dropResult;
  console.log(result);
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
