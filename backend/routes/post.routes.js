import express from 'express';
import validateToken from './../middlewares/validateUser.js';
import {
    addComment,
    createPost,
    fetchPost,
    savePost,
    fetchSavePost,
    showPost,
} from '../controllers/post.schema.js';
const router = express.Router();

// * Fetch Post
router.get('/fetchPost', fetchPost);

// * Create Post
router.post('/createPost', validateToken, createPost);

// * Add comment
router.post('/addComment/:id', validateToken, addComment);

// * Save Post
router.get('/savePost/:id', validateToken, savePost);

router.get('/fetchSavedPost', validateToken, fetchSavePost);

router.get('/showPost/:id', showPost);

export default router;
