import { FC, memo } from "react";

interface IPostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Post: FC<IPostProps> = ({ body, title, id }) => {
  console.warn("Post rerender");

  return (
    <div key={id}>
      <div>
        Title:
        <span>{title}</span>
      </div>
      <div>
        Body:
        <span>{body}</span>
      </div>
    </div>
  );
};

export default memo(Post);
