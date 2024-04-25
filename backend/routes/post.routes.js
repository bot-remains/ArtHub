import express from "express";
import {verifyToken} from "../middlewares/validateUser.js";
import {upload} from "./../middlewares/multer.js";
import {
  addComment,
  createPost,
  fetchPost,
  savePost,
  fetchSavePost,
  showPost,
} from "../controllers/post.schema.js";
const router = express.Router();

// * Fetch Post
router.get("/fetchPost", fetchPost);

// * Create Post
router.post("/createPost", verifyToken, upload, createPost);

// * Add comment
router.post("/addComment/:id", verifyToken, addComment);

// * Save Post
router.get("/savePost/:id", verifyToken, savePost);

router.get("/fetchSavedPost", verifyToken, fetchSavePost);

router.get("/showPost/:id", showPost);

export default router;
