import mongoose, {Schema, model, Document} from "mongoose";

interface comment extends Document{
    post: string;
    author: string;
    content: string;
    likes: string[];
    date: Date;
}

const commentSchema = new Schema<comment>({
    post: {type: String, required: true},
    author: {type: String, required: true},
    content: {type: String, required: true},
    likes: {type: [String], default: []},
    date: {type: Date, default: Date.now},
})

const Comment = model<comment>('Comment', commentSchema);

export default Comment;