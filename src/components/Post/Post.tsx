import { observer } from "mobx-react";
import type { FC } from "react";
import type PostModel from "../../models/PostModel";

interface IPostProps {
  model: PostModel;
}

const Post: FC<IPostProps> = ({ model }) => {
  console.warn("Post rerender");

  return (
    <div key={model.id}>
      <div>
        Title:
        <span>{model.title}</span>
      </div>
      <div>
        Body:
        <span>{model.body}</span>
      </div>
    </div>
  );
};

export default observer(Post);
