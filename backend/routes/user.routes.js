import express from "express";
// import {verifyToken} from "../middlewares/validateUser.js";
import {
  currentUser,
  logIn,
  logOut,
  profile,
  signUp,
} from "../controllers/user.controller.js";
import {fetchSavePost} from "../controllers/post.controller.js";
import {validateToken} from "../middlewares/validateUser.js";

const router = express.Router();

// * Sign Up
router.post("/signup", signUp);

// * Log in
router.post("/login", logIn);

// * LogOut
router.get("/logout", logOut);

// ! Fetch a logged in user data
router.get("/currentUser", validateToken, currentUser);

router.get("/user", validateToken, profile);

export default router;
