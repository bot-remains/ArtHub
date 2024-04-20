import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const commentSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        review: {
            type: String,
            required: true,
        },
        postId: {
            type: Schema.Types.ObjectId,
            ref: 'Post',
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;
