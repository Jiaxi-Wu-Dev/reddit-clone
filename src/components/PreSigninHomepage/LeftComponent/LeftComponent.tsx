/* eslint-disable */

import "./leftComponent.css";
import SideNavigationComponent from "./SideNavigationComponent/SideNavigationComponent";
import Accordian from "./AccordianComponents/Accordian.jsx";
import TopicsAccordian from "./AccordianComponents/TopicsAccordian";
import ResourcesAccordian from "./AccordianComponents/ResourcesAccordian";

function LeftComponent() {
  return (
    <div id="leftComponent">
      <SideNavigationComponent />
      <Accordian />
      <TopicsAccordian />
      <ResourcesAccordian />
    </div>
  );
}

export default LeftComponent;
