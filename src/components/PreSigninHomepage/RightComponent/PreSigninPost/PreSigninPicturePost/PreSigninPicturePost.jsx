import React from "react";
import "./preSigninPicturePost.css";
import Typography from "@mui/material/Typography";
import UserInteractionBar from "../../UserInteractionBar/UserInteractionBar";
import PreSigninPost from "../PreSigninPost";

function PreSigninPicturePost() {
  return (
    <div id="picturePostContainer">
      <PreSigninPost />
      <Typography>
        <h3 id="topPostText">
          After Sunset in Nambia's coastal dunes. [OC] (2048x1470)
        </h3>
      </Typography>
      <a href="www.reddit.com/r/EarthPorn/comments/17o5n6s/after_sunset_in_namibias_coastal_dunes_oc/">
        <div>
          <img
            id="picturePost"
            src="https://preview.redd.it/after-sunset-in-namibias-coastal-dunes-2048x1470-v0-kl0x6af7zgyb1.jpg?width=640&crop=smart&auto=webp&s=1c4a96a1f5e024a97f1ea231e9dbb138e9032159"
          ></img>
        </div>
        <UserInteractionBar />
      </a>
    </div>
  );
}

export default PreSigninPicturePost;
