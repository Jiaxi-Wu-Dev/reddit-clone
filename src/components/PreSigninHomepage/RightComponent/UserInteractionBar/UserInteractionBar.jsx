import React from "react";
import ForwardOutlinedIcon from "@mui/icons-material/ForwardOutlined";
import "./userInteractionBar.css";
import Button from "@mui/material/Button";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import Typography from "@mui/material/Typography";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";

function UserInteractionBar() {
  return (
    <div>
      <div id="userInteractionBar">
        <div>
          <Button id="karmaButton" variant="outlined">
            <ForwardOutlinedIcon
              sx={{ fontSize: 20 }}
              className="transformRotateUp"
            />
            <div>
              <Typography id="roundedCommentsText" textTransform="none">
                1.5K
              </Typography>
            </div>
            <ForwardOutlinedIcon
              sx={{ fontSize: 20 }}
              className="transformRotateDown"
            />
          </Button>
        </div>
        <div id="comments">
          <Button id="roundedCommentsButton" variant="outlined">
            <ChatBubbleOutlineOutlinedIcon sx={{ fontSize: 20 }} />
            <div>
              <Typography id="roundedCommentsText" textTransform="none">
                15
              </Typography>
            </div>
          </Button>
        </div>
        <div>
          <Button id="roundedShare" variant="outlined">
            <FileUploadOutlinedIcon sx={{ fontSize: 20 }} />
            <div>
              <Typography id="roundedShareText" textTransform="none">
                Share
              </Typography>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default UserInteractionBar;
