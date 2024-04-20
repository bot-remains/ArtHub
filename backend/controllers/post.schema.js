import {asyncHandler} from './../utils/asyncHandler.js';
import Post from './../models/post.schema.js';
import User from './../models/user.schema.js';
import {ApiResponse} from './../utils/ApiResponse.js';
import {ApiError} from './../utils/ApiError.js';
import {uploadOnCloudinary} from './../utils/cloudinary.js';

// * Fetch Post
export const fetchPost = asyncHandler(async (req, res) => {
    const posts = await Post.find();

    res.status(200).json(posts);
});

// * Create Post
export const createPost = asyncHandler(async (req, res) => {
    const {postName, description} = req?.body;
    const userId = req.user.id;
    console.log(userId);
    const user = await User.findOne({_id: userId});
    const coverImageLocalPath = await req.file?.path;
    console.log(req.file);

    if (!coverImageLocalPath) {
        throw new ApiError(406, 'images required');
    }
    const coverImage = await uploadOnCloudinary(coverImageLocalPath);

    if (!coverImage) {
        throw new ApiError(406, ' images required');
    }
    const newPost = new Post({
        postName,
        description,
        image: coverImage?.url,
        userId: user._id,
    });
    await newPost.save();
    res.status(200).json(new ApiResponse(200, newPost));
});

// * Add comment
export const addComment = asyncHandler(async (req, res) => {
    const postId = req.params;
    const comment = req.body;
    const post = await Post.findOne({_id: postId});
    if (!post) {
        throw new ApiError(404, 'Post not found');
    }

    const newComment = await Comment.create({
        userId: req.user.id,
        postId: req.params.id,
        review: comment,
    });

    post.comment.push(newComment);
    await Post.save();
    console.log(post);
    res.status(200).json(new ApiResponse(200, post, 'Comment Submitted'));
});

// * Save Post
export const savePost = asyncHandler(async (req, res) => {
    const postId = req?.params.id;
    const userId = req?.user.id;
    const post = await Post.findOne({_id: postId});
    const user = await User.findOne({_id: userId});
    if (!postId && !userId) {
        throw new Error(404, 'Something is missing');
    }

    user.savedPost.push(post);
    await user.save();
    console.log(user);

    res.status(200).json(new ApiResponse(200, 'Post saved successfully'));
});

export const fetchSavePost = asyncHandler(async (req, res) => {
    const userId = req.user.id;
    const user = await User.findOne({_id: userId}).populate('savedPost');
    if (!user) {
        throw new ApiError(404, 'User not found');
    }
    console.log(user.savedPost || 1);
    res.status(200).json(
        new ApiResponse(200, user, 'Save post fetch successfully'),
    );
});
