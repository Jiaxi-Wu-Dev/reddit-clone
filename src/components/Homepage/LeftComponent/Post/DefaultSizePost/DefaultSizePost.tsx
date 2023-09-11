import * as React from "react";
import Box from "@mui/material/Box";
import "./DefaultSizePost.css";
import SailingIcon from "@mui/icons-material/Sailing";

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
          <SailingIcon fontSize="small" />
          r/Aquariums
        </div>
      </Box>
    </Box>
  );
}
