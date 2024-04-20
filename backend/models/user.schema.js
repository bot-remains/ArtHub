import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
        },
        phone: {
            type: Number,
        },
        email: {
            type: String,
        },
        password: {
            type: String,
            required: true,
            // minlength: 5,
        },
        savedPost: {
            type: Schema.Types.ObjectId,
            ref: 'Post',
        },
    },
    {
        timestamps: true,
    },
);

const User = mongoose.model('User', userSchema);

export default User;
