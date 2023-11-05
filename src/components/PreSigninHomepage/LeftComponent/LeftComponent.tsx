/* eslint-disable */

import "./leftComponent.css";
import SideNavigationComponent from "./SideNavigationComponent/SideNavigationComponent";
import Accordian from "./AccordianComponent/Accordian";
import TopicsAccordian from "./AccordianComponent/TopicsAccordian";
import ResourcesAccordian from "./AccordianComponent/ResourcesAccordian";

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
