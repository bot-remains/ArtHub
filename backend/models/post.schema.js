import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const postSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        image: {
            type: String,
            // required: true,
        },
        postName: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
        category: {
            type: String,
        },
        comment: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Comment',
            },
        ],
    },
    {
        timestamps: true,
    },
);

const Post = mongoose.model('Post', postSchema);

export default Post;
