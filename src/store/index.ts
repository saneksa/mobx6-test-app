import PostModel from "../models/PostModel";
import { PostStore } from "./PostStore/PostStore";

export const postStore = new PostStore({
  model: PostModel,
});
