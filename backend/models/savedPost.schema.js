import mongoose from "mongoose";
const Schema = mongoose.Schema;

const savedPostSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    postId: {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  },
  {
    timestamps: true,
  },
);

const SavedPost = mongoose.model("SavedPost", savedPostSchema);

export default SavedPost;
