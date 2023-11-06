import React from "react";
import "./rightComponent.css";
import ImageCarousel from "./ImageCarousel/ImageCarousel.jsx";
import CreateAPostBar from "./CreateAPostBar/CreateAPostBar.jsx";
import PreSigninPost from "./PreSigninPost/PreSigninPost";
import PreSigninPicturePost from "./PreSigninPost/PreSigninPicturePost/PreSigninPicturePost.jsx";
import UserInteractionBar from "./UserInteractionBar/userInteractionBar";

function RightComponent() {
  return (
    <div id="rightComponent">
      <ImageCarousel />
      <CreateAPostBar />

      <PreSigninPicturePost />
      <PreSigninPicturePost />
      <PreSigninPicturePost />
      <PreSigninPicturePost />
    </div>
  );
}

export default RightComponent;
