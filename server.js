/* eslint-disable */
import express from "express";
import subredditRoutes from "./src/components/Homepage/RightComponent/CreateCommunityComponent/communityServer/routes.js";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/api/v1/subreddits", subredditRoutes);
app.listen(port, () => console.log(`app is listening in ${port}`));
