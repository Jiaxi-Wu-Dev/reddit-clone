import React from "react";
import ForwardOutlinedIcon from "@mui/icons-material/ForwardOutlined";
import "./userInteractionBar.css";

function UserInteractionBar() {
  return (
    <div>
      <div id="userInteractionBar">
        <div id="voting">
          <ForwardOutlinedIcon />
          <div>2.3K</div>
          <ForwardOutlinedIcon />
        </div>
        <div>15</div>
        <div>Share</div>
      </div>
    </div>
  );
}

export default UserInteractionBar;
