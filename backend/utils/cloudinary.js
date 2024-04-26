import {v2 as cloudinary} from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    const transformation = {
      quality: "auto:low",
    };

    let res = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "image",
      transformation: transformation,
    });

    return res;
  } catch (err) {
    console.error("Error uploading to Cloudinary:", err);
    return null;
  } finally {
    // Check if the file exists before attempting to unlink it
    if (fs.existsSync(localFilePath)) {
      try {
        fs.unlinkSync(localFilePath);
      } catch (unlinkErr) {
        console.error("Error deleting file:", unlinkErr);
      }
    }
  }
};
