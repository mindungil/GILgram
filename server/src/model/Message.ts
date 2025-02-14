import mongoose, {model, Document, Schema} from "mongoose";

export interface message extends Document{
    sender: string;
    receiver: string;
    content: string;
    date: Date;
}

const messageSchema = new Schema<message>({
    sender: {type:String, required: true},
    receiver: {type: String, required: true},
    content: {type: String, required: true},
    date: {type:Date, default:Date.now},
})

const Message = model<message>('Message', messageSchema);

export default Message;