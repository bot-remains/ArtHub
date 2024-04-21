import jwt from "jsonwebtoken";

const validateToken = async (req, res, next) => {
  const cookie = req.cookies?.userCookie;
  if (cookie) {
    jwt.verify(cookie, "123", (err, decoded) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = decoded.user;
      next();
    });
  } else {
    res.status(401).json("User not authenticated");
  }
};

export default validateToken;
