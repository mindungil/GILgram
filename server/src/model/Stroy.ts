import mongoose, {model, Document, Schema} from "mongoose";

interface story extends Document{
    author: string;
    image: string;
    views: string[];
    deletetime: Date;
}

const storySchema = new Schema<story>({
    author: {type: String, requred: true},
    image: {type: String, default: ""},
    views: {type: [String], default: []},
    deletetime: {type: Date, default: Date.now},
});

const Story = model<story>('Story', storySchema);

export default Story;