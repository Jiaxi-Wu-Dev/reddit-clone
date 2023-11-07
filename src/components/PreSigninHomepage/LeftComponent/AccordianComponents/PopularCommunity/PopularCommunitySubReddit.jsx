import React from "react";
import "../../../RightComponent/PreSigninPost/preSigninPost.css";
import Button from "@mui/material/Button";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import ReportMenu from "../../../RightComponent/PreSigninPost/ReportMenu/ReportMenu";
import "./popularCommunitySubReddit.css";

function PreSigninPost(props) {
  return (
    <div>
      <a href="www.reddit.com/r/meirl/comments/17oeft9/meirl/"></a>
      <span className="subRedditContainer_">
        <span className="SubredditSpanContainer">
          <span className="SubredditSpanBox">
            <span className="SubredditSpan">
              <a className="SubredditAnchor">
                <div className="SubredditContainer">
                  <div className="SubredditBox">
                    <img
                      id="Subreddit"
                      key={props.key}
                      src={
                        props.src
                      } /* "https://b.thumbs.redditmedia.com/4ADRnu2cwKIkpQt0N-g36-iq6EfTNFVV1RComMcEZiU.png" */
                    ></img>
                  </div>
                </div>
                <div id="subredditMembersText">
                  <span className="meIrl_">{props.subRedditName}</span>
                  <span className="meIrl_">{props.members}</span>
                </div>
              </a>
            </span>
          </span>
        </span>
      </span>
    </div>
  );
}

export default PreSigninPost;
