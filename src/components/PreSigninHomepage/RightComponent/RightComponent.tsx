/* eslint-disable */

import React from "react";
import "./rightComponent.css";
import ImageCarousel from "./ImageCarousel/ImageCarousel.jsx";
import CreateAPostBar from "./CreateAPostBar/CreateAPostBar.jsx";
import PreSigninPost from "./PreSigninPost/PreSigninPost";
import PreSigninPicturePost from "./PreSigninPost/PreSigninPicturePost/PreSigninPicturePost.jsx";
import UserInteractionBar from "./UserInteractionBar/userInteractionBar";
import PopularCommunities from "../LeftComponent/AccordianComponents/PopularCommunities";
import { bigSubRedditPostData } from "./bigSubRedditPostData.jsx";

function RightComponent() {
  return (
    <div id="rightComponent">
      <div>
        <ImageCarousel />
        <CreateAPostBar />

        {bigSubRedditPostData.map((e) => (
          <PreSigninPicturePost
            key={e.key}
            title={e.title}
            link={e.link}
            src={e.src}
          />
        ))}
      </div>
      <div id="popularCommunities">
        <PopularCommunities />
      </div>
    </div>
  );
}

export default RightComponent;
