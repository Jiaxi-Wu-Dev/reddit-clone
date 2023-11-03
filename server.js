/* eslint-disable */
import express from "express";
import bodyParser from "body-parser";
import subredditRoutes from "./src/components/Homepage/RightComponent/CreateCommunityComponent/communityServer/routes.js";
import cors from "cors";

const database = {
  users: [
    {
      id: "1",
      userName: "dartz",
      email: "jiaxi.wu@gmail.com",
      password: "cookies",
      karma: 0,
      joined: new Date(),
    },
    {
      id: "2",
      userName: "nitro1",
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
  res.send(database.users);
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

app.post("/register", (req, res) => {
  const { email, password, name } = req.body;

  database.users.push({
    id: "1",
    userName: name,
    email: email,
    password: password,
    karma: 0,
    joined: new Date(),
  });
  res.json(database.users[database.users.length - 1]);
});

app.get("/signin", (req, res) => {
  res.send("signin");
});

app.use("/subreddits", subredditRoutes);
app.listen(port, () => console.log(`app is listening in ${port}`));
