import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js"; //Database connection

//Routes
import userAuthRoutes from "./routes/user.routes.js";
import postRoutes from "./routes/post.routes.js";

// const PORT = process.env.PORT || 3000;
const PORT = 3000;
const app = express();

//Middlewares
dotenv.config({
  path: "./.env",
});

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());

//Cors Configuration
// const corsOptions = {
//     origin: function (origin, callback) {
//         callback(
//             null,
//             (origin && origin.startsWith(process.env.CORS_ORIGIN)) || '*',
//         );
//     },
//     credentials: true,
// };

// app.use(cors(corsOptions));

app.use((req, res, next) => {
  if (req.path !== "/favicon.ico") {
    console.log(req.method, req.path);
  }
  next();
});

app.use("/api/v1/auth", userAuthRoutes);
app.use("/api/v1/post", postRoutes);

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`);
  connectDB();
});
