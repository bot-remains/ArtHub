import jwt from "jsonwebtoken";

export const validateToken = async (req, res, next) => {
  const cookie = req.cookies?.userCookie;
  if (cookie) {
    jwt.verify(cookie, "123", (err, decoded) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = decoded.user;
      console.log(req.user);
      next();
    });
  } else {
    res.status(401).json("User not authenticated");
  }
};

// import {ApiError} from "../utils/ApiError.js";
// import {asyncHandler} from "../utils/asyncHandler.js";
// import jwt from "jsonwebtoken";
// import User from "../models/user.schema.js";

// export const verifyToken = asyncHandler(async (req, _, next) => {
//   const token = req.cookies?.accessToken;
//   if (!token) return next(new ApiError(401, "User not logged in"));

//   const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
//   const user = await User.findById(decodedToken?._id).select(
//     "-password -refreshToken",
//   );
//   if (!user) return next(new ApiError(401, "Invalid Access Token"));

//   req.user = user;
//   next();
// });
