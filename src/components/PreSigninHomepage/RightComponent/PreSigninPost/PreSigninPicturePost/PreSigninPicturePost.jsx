import React from "react";
import "./preSigninPicturePost.css";
import Typography from "@mui/material/Typography";
import UserInteractionBar from "../../UserInteractionBar/UserInteractionBar";

import Button from "@mui/material/Button";
import ReportMenu from "../ReportMenu/ReportMenu";

function PreSigninPicturePost(props) {
  return (
    <div id="picturePostContainer">
      <div>
        <a href={props.link}></a>
        <span className="subRedditContainer">
          <span className="imageSubredditSpanContainer">
            <span className="imageSubredditSpanBox">
              <span className="imageSubredditSpan">
                <a className="imageSubredditAnchor">
                  <div className="imageSubredditContainer">
                    <div className="imageSubredditBox">
                      <img
                        className="imageSubreddit"
                        src={props.subRedditIcon}
                      ></img>
                    </div>
                  </div>
                  <span id="meIrl">{props.subReddit}</span>
                </a>
              </span>
            </span>
          </span>
          <div id="containedButtons">
            <div>
              <Button id="joinButton" variant="contained" textTransform="none">
                <Typography textTransform="none" id="postCreateText">
                  Join
                </Typography>
              </Button>
            </div>
            <div>
              <ReportMenu />
            </div>
          </div>
        </span>
      </div>
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
