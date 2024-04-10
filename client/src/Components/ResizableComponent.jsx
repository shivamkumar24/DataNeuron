import React from "react";
import { useResizable } from "react-resizable-layout";

const ResizableComponent = ({ children }) => {
  const { registerResizable } = useResizable();
  return (
    <div ref={registerResizable} style={{ width: "100%", height: "100%" }}>
      {children}
    </div>
  );
};

export default ResizableComponent;
