import DefaultSizePost from "./DefaultSizePost/DefaultSizePost";
import Box from "@mui/material/Box";

export default function Post() {
  return (
    <Box
      sx={{
        width: 640,
        height: 650,
        backgroundColor: "primary.dark",
      }}
    >
      <DefaultSizePost />
    </Box>
  );
}
