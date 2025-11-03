import mongoose, {model, Schema} from "mongoose";
mongoose.connect("mongodb+srv://adityagiri8520_db_user:password100xdevs@cluster0.93yvjs8.mongodb.net/");
const UserSchema = new Schema({
    username: {type: String, unique: true },
    password: String
});
export const User = model('user', UserSchema);

const ContentSchema = new Schema({
    title: String,
    link: String,
    tags: [{type: mongoose.Types.ObjectId, ref: 'Tag'}],
    userId: {type: mongoose.Types.ObjectId, ref: 'user', required: true}
})

const LinkSchema = new Schema({
    hash: String,
    userId: {type: mongoose.Types.ObjectId, ref: 'user', required: true },
})
export const LinkModel = model("Links", LinkSchema);
export const Contentmodel = model('content', ContentSchema);