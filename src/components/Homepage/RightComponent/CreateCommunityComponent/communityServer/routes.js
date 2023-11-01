import Router from "express";
import controller from "./controller.js";

const router = Router();

router.get("/", controller.getSubReddit);
router.get("/:name", controller.getSubRedditByName);

export default router;
