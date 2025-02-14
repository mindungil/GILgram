import mongoose, { Schema, model, Document } from "mongoose";

interface post extends Document {
    author: string,
    image: string,
    caption: string,
    likes: string[],
    comments: string[],
    date: Date,
}

const postSchema = new Schema<post>({
    author: { type: String, required: true },
    image: { type: String, required: true } ,
    caption: { type: String, required: true },
    likes: {type: [String], default: [] },
    comments: {type: [String], default: [] },
    date: {type: Date, default: Date.now },
})

const Post = model<post>('Post', postSchema);

export default Post;