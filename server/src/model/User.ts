import mongoose, {Schema, model, Model, Document} from 'mongoose';
import Message, {message} from './Message';
interface user extends Document{
    name: string;
    email: string;
    password: string;
    gender: boolean;
    image: string;
    bio: string;
    follwers: string[];
    followings: string[];
    posts: string[];
    messages: message[];
    date: Date;
}

const userSchema = new Schema<user>({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    gender: {type: Boolean, required: false},
    image: {type: String, default: ""},
    bio: {type: String, default: ""},
    follwers: {type: [String], defualt: []},
    followings: {type: [String], default: []},
    posts: {type: [String], default: []},
    messages: {type: [Message], default: []},
    date: {type: Date, default: Date.now},
})

const User = model<user>('User', userSchema);

export default User;