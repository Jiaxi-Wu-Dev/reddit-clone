import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";
import "./CreatePostBar.css";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "100%",
  },
}));

export default function CreatePostBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "#1a1a1b" }}>
        <Toolbar id="createPostBar">
          <a id="iconLink">
            <div id="iconLinkComponent">
              <div id="homeIconComponentInner">
                <div id="homeIconComponentInnerInner"></div>
                <div id="homeIconComponentInnerInnerInner">
                  <img
                    id="createBarSnooIcon"
                    alt="profile img"
                    width="32px"
                    height="32px"
                    src="https://styles.redditmedia.com/t5_dv9zx/styles/profileIcon_snoo-nftv2_bmZ0X2VpcDE1NToxMzdfM2I0NzdhNmIxYmUyMzY2MjhiMDg4MzllMWU4Y2Y4YmE4ZDkzNTg5YV82MzkwMjE5_rare_5b9c5b58-8b0f-4c9c-8cdf-b7c6866acd0a-headshot.png?width=256&height=256&frame=1&auto=webp&crop=256:256,smart&s=3d64fc554f4287ccea4b83862b31cbc114ed07d0"
                  ></img>
                </div>
              </div>
            </div>
          </a>
          <Search id="createPostText">
            <StyledInputBase
              placeholder="Create Post"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <div id="postBarIcons">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <ImageOutlinedIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <LinkOutlinedIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
