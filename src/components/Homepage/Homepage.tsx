import React from "react";
import LeftComponent from "./LeftComponent/LeftComponent";
import RightComponent from "./RightComponent/RightComponent";
import "./Homepage.css";

export default function Homepage() {
  return (
    <div id="homepage">
      <LeftComponent />
      <RightComponent />
    </div>
  );
}
