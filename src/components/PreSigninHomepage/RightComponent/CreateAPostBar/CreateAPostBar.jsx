import React from "react";
import Button from "@mui/material/Button";
import "./createAPostBar.css";
import Typography from "@mui/material/Typography";
import HotMenu from "./HotMenu/HotMenu";
import EverythingMenu from "./EverythingMenu/EverythingMenu";
import ExpandMenu from "./ExpandMenu/ExpandMenu";

function CreateAPostBar() {
  return (
    <div>
      <div id="createPostBar">
        <div>
          <Button id="buttonCreatePost" variant="outlined">
            <Typography textTransform="none" id="postCreateText">
              Create a post
            </Typography>
          </Button>
        </div>
        <div id="menuGroups">
          <HotMenu className="individualMenu" />
          <EverythingMenu className="individualMenu" />
          <ExpandMenu className="individualMenu" />
        </div>
      </div>
    </div>
  );
}

export default CreateAPostBar;
