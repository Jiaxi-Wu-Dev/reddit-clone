import React from "react";
import "./preSigninPicturePost.css";
import Typography from "@mui/material/Typography";
import UserInteractionBar from "../../UserInteractionBar/UserInteractionBar";
import PreSigninPost from "../PreSigninPost";

function PreSigninPicturePost(props) {
  return (
    <div id="picturePostContainer">
      <PreSigninPost key={props.key} />
      <Typography>
        <h3 id="topPostText">{props.title}</h3>
      </Typography>
      <a href={props.link}>
        <div>
          <img id="picturePost" src={props.src}></img>
        </div>
        <UserInteractionBar />
      </a>
    </div>
  );
}

export default PreSigninPicturePost;
