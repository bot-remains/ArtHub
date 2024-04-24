import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.schema.js";
import {asyncHandler} from "../utils/asyncHandler.js";
import {ApiError} from "./../utils/apiError.js";
import {ApiResponse} from "./../utils/ApiResponse.js";
const saltRounds = 10;

// * Sign Up
export const signUp = asyncHandler(async (req, res) => {
  const {username, phone, password, email} = req.body;
  const validEmail = await User.findOne({email: email});
  if (validEmail) throw new ApiError(409, "Email already in use");

  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const newUser = new User({
    username,
    phone,
    email,
    password: hashedPassword,
  });
  await newUser.save();
  const accessToken = jwt.sign(
    {
      user: {
        username: newUser.username,
        email: newUser.email,
        id: newUser.id,
      },
    },
    "123",
    {expiresIn: "90m"},
  );

  req.user = {
    username: newUser.username,
    email: newUser.email,
    id: newUser.id,
  };

  res.cookie("userCookie", accessToken, {
    httpOnly: true,
  });

  res
    .status(201)
    .json(new ApiResponse(201, newUser, "User logged in successfully"));
});

// * Log in
export const logIn = asyncHandler(async (req, res) => {
  const {email, password} = req.body;
  const user = await User.findOne({email: email});
  console.log(email, password);
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new ApiError(401, "Invalid Details");
  }

  const accessToken = jwt.sign(
    {
      user: {
        username: user.username,
        email: user.email,
        id: user.id,
      },
    },
    "123",
    {expiresIn: "90m"},
  );

  req.user = {
    username: user.username,
    email: user.email,
    id: user.id,
  };
  // countUser();

  res
    .cookie("userCookie", accessToken, {
      httpOnly: true,
    })
    .status(200)
    .json({user, accessToken});
});

// * LogOut
export const logOut = asyncHandler(async (req, res) => {
  res.clearCookie("userCookie").send("Cookie deleted");
});

// * Fetch User profile
export const getUserInfo = asyncHandler(async (req, res) => {
  const user = req?.user;
  if (!user) {
    return res.status(404).json({message: "User not found in request"});
  }
  const findUser = await User.findById(user.id);
  const order = await Order.find({userId: user.id}).populate("productId");
  console.log("Order : ", order);
  const address = await Address.find({userId: user.id});
  console.log("Address : ", address);
  if (!findUser) {
    return res.status(404).json({message: "User not found"});
  }
  res.status(200).json({
    user: findUser,
    order: order,
    address: address,
  });
});

// ! Update Profile
export const updateUser = asyncHandler(async (req, res) => {
  const user = req.user;
  const email = req.body.email;
  const password = req.body.password;
  const updateUser = await User.findByIdAndUpdate(
    {_id: user.id},
    {password: password, email: email},
    {new: true},
  );
  if (!updateUser) {
    return res.status(404).json({message: "User not found"});
  }

  res.status(200).json({
    message: "User updated successfully",
    user: updateUser,
  });
});

// * Fetch a logged in user data
export const currentUser = asyncHandler(async (req, res) => {
  const user = req?.user;
  if (!user) {
    return res.status(404).json("User not logged in");
  }
  res.status(200).json(user);
});
