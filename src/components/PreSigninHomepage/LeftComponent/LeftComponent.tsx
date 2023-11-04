import React from "react";
import "./leftComponent.css";
import SideNavigationComponent from "./SideNavigationComponent/SideNavigationComponent";
import Accordian from "./AccordianComponent/Accordian";

function LeftComponent() {
  return (
    <div id="leftComponent">
      <SideNavigationComponent />
      <Accordian />
    </div>
  );
}

export default LeftComponent;
