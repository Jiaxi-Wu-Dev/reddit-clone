import React from "react";
import "./rightComponent.css";
import ImageCarousel from "./ImageCarousel/ImageCarousel.jsx";
import CreateAPostBar from "./CreateAPostBar/CreateAPostBar.jsx";
function RightComponent() {
  return (
    <div id="rightComponent">
      <ImageCarousel />
      <CreateAPostBar />
    </div>
  );
}

export default RightComponent;
