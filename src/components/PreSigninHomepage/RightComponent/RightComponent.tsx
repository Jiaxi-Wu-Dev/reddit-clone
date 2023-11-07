import React from "react";
import "./rightComponent.css";
import ImageCarousel from "./ImageCarousel/ImageCarousel.jsx";
import CreateAPostBar from "./CreateAPostBar/CreateAPostBar.jsx";
import PreSigninPost from "./PreSigninPost/PreSigninPost";
import PreSigninPicturePost from "./PreSigninPost/PreSigninPicturePost/PreSigninPicturePost.jsx";
import UserInteractionBar from "./UserInteractionBar/userInteractionBar";
import PopularCommunities from "../LeftComponent/AccordianComponents/PopularCommunities";

function RightComponent() {
  return (
    <div id="rightComponent">
      <div>
        <ImageCarousel />
        <CreateAPostBar />

        <PreSigninPicturePost />
        <PreSigninPicturePost />
        <PreSigninPicturePost />
        <PreSigninPicturePost />
      </div>
      <div id="popularCommunities" defaultExpanded="true">
        <PopularCommunities />
      </div>
    </div>
  );
}

export default RightComponent;
