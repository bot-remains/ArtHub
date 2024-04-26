import express from "express";
import {validateToken} from "./../middlewares/validateUser.js";
import upload from "./../middlewares/multer.js"; // Import without curly braces
import {
  addComment,
  createPost,
  fetchPost,
  savePost,
  fetchSavePost,
  showPost,
  downloadPost,
} from "../controllers/post.controller.js";

const router = express.Router();

// Fetch Post
router.get("/fetchPost", fetchPost);

// Create Post
router.post("/createPost", validateToken, upload, createPost);

// Add comment
router.post("/addComment/:id", validateToken, addComment);

// Save Post
router.get("/savePost/:id", validateToken, savePost);

router.get("/fetchSavedPost", validateToken, fetchSavePost);

router.get("/showPost/:id", showPost);

router.get("/download/:id", downloadPost);

export default router;
