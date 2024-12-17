import express from "express";
import {
  newPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "../controllers/postController.js";
const router = express.Router();

//Working with JSON

router.get("/", getPosts);

//Get single post
router.get("/:id", getPost);

//Create new post
router.post("/", newPost);

//Update Post
router.put("/:id", updatePost);

//Delete Post
router.delete("/:id", deletePost);

export default router;
