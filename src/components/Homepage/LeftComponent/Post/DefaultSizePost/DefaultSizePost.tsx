import * as React from "react";
import Box from "@mui/material/Box";
import "./DefaultSizePost.css";
import SailingIcon from "@mui/icons-material/Sailing";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import RocketIcon from "@mui/icons-material/Rocket";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import BrightnessLowIcon from "@mui/icons-material/BrightnessLow";
import BarChartIcon from "@mui/icons-material/BarChart";
import { Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export default function BoxSx() {
  return (
    <Box
      sx={{
        width: 640,
        height: 665,
        marginTop: "20px",
        backgroundColor: "grey",
      }}
    >
      <Box
        sx={{
          width: 640,
          height: 620,
          marginTop: "20px",
          backgroundColor: "red",
        }}
        id="mainComponent"
      >
        <div id="DefaultSizePostTopBar">
          <div id="sailingIcon">
            {" "}
            <SailingIcon fontSize="small" />
          </div>
          <div id="DefaultSizePostTopBarDetails">
            <div className="TopBarDetails">r/Aquariums</div>
            <div className="TopBarDetails">
              <span>Posted by</span>
            </div>
            <div className="TopBarDetails">
              <div>
                <a>u/Goofyboi</a>
              </div>
            </div>
            <span className="TopBarDetails">3 hours ago </span>
          </div>
        </div>
        <div id="DefaultSizePostTitle">
          <div>
            <a>
              <div>
                <h3 id="title">Help with growing greener aquarium plants!</h3>
              </div>
            </a>
          </div>
          <div id="tag">
            <div>
              <a>
                <div>
                  <span>Help/Advice</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div id="contentBox">
          <div>
            <div>
              <div>
                <a>
                  <div>
                    <div id="pictureBox">
                      <img
                        id="picture"
                        alt="Post Picture"
                        src="https://preview.redd.it/fkj5mv8uwonb1.jpg?width=640&crop=smart&auto=webp&s=97a166585e4fab6f4d47495c6d8051447450db4b"
                      ></img>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="defaultSizePostBottomBar">
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge color="error">
                <RocketIcon />
                <Typography id="best">Best</Typography>
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge color="error">
                <LocalFireDepartmentIcon />
                <Typography id="hot">Hot</Typography>
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <BrightnessLowIcon />
              <Typography id="new">New</Typography>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              color="inherit"
            >
              <BarChartIcon />
              <Typography id="top">Top</Typography>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              color="inherit"
            >
              <MoreHorizIcon />
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
        </div>
      </Box>
    </Box>
  );
}
