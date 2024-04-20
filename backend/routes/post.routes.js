import express from 'express';
import validateToken from './../middlewares/validateUser.js';
import {
    addComment,
    createPost,
    fetchPost,
    savePost,
    fetchSavePost,
} from '../controllers/post.schema.js';
const router = express.Router();

// * Fetch Post
router.get('/fetchPost', fetchPost);

// * Create Post
router.post('/createPost', validateToken, createPost);

// * Add comment
router.post('/addComment', validateToken, addComment);

// * Save Post
router.get('/savePost', validateToken, savePost);

router.get('/fetchSavedPost', validateToken, fetchSavePost);

export default router;
