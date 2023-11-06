import React from "react";
import "./PreSigninPost.css";
import Button from "@mui/material/Button";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import ReportMenu from "./ReportMenu/ReportMenu";
import PreSigninPicturePost from "./PreSigninPicturePost/PreSigninPicturePost";

function PreSigninPost() {
  return (
    <div>
      <a href="www.reddit.com/r/meirl/comments/17oeft9/meirl/"></a>
      <span className="subRedditContainer">
        <span className="imageSubredditSpanContainer">
          <span className="imageSubredditSpanBox">
            <span className="imageSubredditSpan">
              <a className="imageSubredditAnchor">
                <div className="imageSubredditContainer">
                  <div className="imageSubredditBox">
                    <img
                      className="imageSubreddit"
                      src="https://b.thumbs.redditmedia.com/4ADRnu2cwKIkpQt0N-g36-iq6EfTNFVV1RComMcEZiU.png"
                    ></img>
                  </div>
                </div>
                <span>r/meirl</span>
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
  );
}

export default PreSigninPost;
