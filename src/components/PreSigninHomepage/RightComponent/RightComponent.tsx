/* eslint-disable */

import "./rightComponent.css";
import ImageCarousel from "./ImageCarousel/ImageCarousel.jsx";
import CreateAPostBar from "./CreateAPostBar/CreateAPostBar.jsx";
import PreSigninPicturePost from "./PreSigninPost/PreSigninPicturePost/PreSigninPicturePost.jsx";
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
            subReddit={e.subReddit}
            subRedditIcon={e.subRedditIcon}
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
