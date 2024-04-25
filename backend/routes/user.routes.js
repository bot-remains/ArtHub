import express from "express";
import {verifyToken} from "../middlewares/validateUser.js";
import {
  currentUser,
  logIn,
  logOut,
  signUp,
} from "../controllers/user.controller.js";
import {fetchSavePost} from "../controllers/post.schema.js";

const router = express.Router();

// * Sign Up
router.post("/signup", signUp);

// * Log in
router.post("/login", logIn);

// * LogOut
router.get("/logout", logOut);

// ! Fetch a logged in user data
router.get("/currentUser", verifyToken, currentUser);

export default router;
