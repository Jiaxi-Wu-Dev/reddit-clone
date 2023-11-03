/* eslint-disable */
import express from "express";
import bodyParser from "body-parser";
import subredditRoutes from "./src/components/Homepage/RightComponent/CreateCommunityComponent/communityServer/routes.js";
import cors from "cors";

const database = {
  users: [
    {
      id: "1",
      name: "Jiaxi",
      email: "jiaxi.wu@gmail.com",
      password: "cookies",
      karma: 0,
      joined: new Date(),
    },
    {
      id: "2",
      name: "Gary",
      email: "gary123@gmail.com",
      password: "testing",
      karma: 0,
      joined: new Date(),
    },
  ],
};

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/signin", (req, res) => {
  if (
    req.body.email === database.users[0].email &&
    req.body.password === database.users[0].password
  ) {
    res.json("sucess, signing in world!");
  } else {
    res.status(400).json("error log test");
    console.log(req.body.email);
  }
});

app.get("/signin", (req, res) => {
  res.send("signin");
});

app.use("/subreddits", subredditRoutes);
app.listen(port, () => console.log(`app is listening in ${port}`));
