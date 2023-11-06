import React from "react";
import ForwardOutlinedIcon from "@mui/icons-material/ForwardOutlined";
import "./userInteractionBar.css";
import Button from "@mui/material/Button";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import Typography from "@mui/material/Typography";

function UserInteractionBar() {
  return (
    <div>
      <div id="userInteractionBar">
        <div id="voting">
          <Button variant="outlined">
            <ForwardOutlinedIcon className="transformRotate" />
          </Button>
          <div>2.3K</div>
          <div id="downVoteArrow">
            <Button variant="outlined">
              <ForwardOutlinedIcon className="transformRotate" />
            </Button>
          </div>
        </div>
        <div id="comments">
          <Button className="commentsButtons" variant="outlined">
            <ChatBubbleOutlineOutlinedIcon />

            <div>15</div>
          </Button>
        </div>
        <div>
          <Button className="commentsButtons" variant="outlined">
            <FileUploadOutlinedIcon />
            <div>
              <Typography>Share</Typography>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default UserInteractionBar;
