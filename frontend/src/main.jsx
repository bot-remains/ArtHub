import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Root from "./Root.jsx";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Explore from "./Pages/Explore.jsx";
import Profile from "./Pages/Profile.jsx";
import SignIn from "./Pages/SignIn.jsx";
import SignUp from "./Pages/SignUp.jsx";
import MyArts from "./Pages/MyArts.jsx";
import Contact from "./Pages/Contact.jsx";
import UploadArt from "./Pages/UploadArt.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="explore" element={<Explore />} />
      <Route element={<PrivateRoute />}>
        <Route path="profile" element={<Profile />} />
      </Route>
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="my-arts" element={<MyArts />} />
      <Route path="contact" element={<Contact />} />
      <Route path="upload-new-art" element={<UploadArt />} />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
