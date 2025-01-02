import mongoose from "mongoose";

const { Schema } = mongoose;

// Define a TypeScript interface for the Post model
interface IPost extends Document {
  title: string;
  desc: string;
  img: string;
  content: string;
  username: string;
}

const postSchema = new Schema<IPost>(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

export default Post;
