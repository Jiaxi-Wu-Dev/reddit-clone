import * as React from "react";
import DefaultSizePost from "./DefaultSizePost/DefaultSizePost";
import Box from "@mui/material/Box";

export default function Post() {
  return (
    <Box
      sx={{
        width: 640,
        height: 1500,
        backgroundColor: "primary.dark",
      }}
    >
      <DefaultSizePost />
    </Box>
  );
}
