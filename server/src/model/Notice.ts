import mongoose, {model, Document, Schema} from "mongoose";

interface notice extends Document{
    user: string[];
    sender: string;
    content: string;
    post: string;
    read: boolean;
}

const noticeSchema = new Schema<notice>({
    user: {type: [String], default: []},
    sender: {type: String, required: true},
    content: {type: String, required: true},
    post: {type: String, required: false},
    read: {type: Boolean, required: false},
});

const Notice = model<notice>('Notice', noticeSchema);

export default Notice;