import * as React from "react";
import Box from "@mui/material/Box";
import "./DefaultSizePost.css";
import SailingIcon from "@mui/icons-material/Sailing";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export default function BoxSx() {
  return (
    <Box
      sx={{
        width: 640,
        height: 665,
        marginTop: "20px",
        backgroundColor: "grey",
        "&:hover": {
          backgroundColor: "grey",
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <Box
        sx={{
          width: 600,
          height: 665,
          marginTop: "20px",
          backgroundColor: "red",
          "&:hover": {
            backgroundColor: "red",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
        id="mainComponent"
      >
        <div id="DefaultSizePostTopBar">
          <div id="sailingIcon">
            {" "}
            <SailingIcon fontSize="small" />
          </div>
          <div id="DefaultSizePostTopBarDetails">
            <div>r/Aquariums</div>
            <div>
              <span>Posted by</span>
            </div>
            <div>
              <div>
                <a>u/Goofyboi</a>
              </div>
            </div>
            <span>3 hours ago </span>
          </div>
        </div>
      </Box>
    </Box>
  );
}
