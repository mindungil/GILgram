import mongoose, {Schema, model, Document} from "mongoose";

interface feed extends Document{
    user: string;
    posts: string[];
}

const feedSchema = new Schema<feed>({
    user: {type: String, requried: true},
    posts: {type: [String], default: []},
})

const Feed = model<feed>('Feed', feedSchema);

export default Feed;