import { FC, memo } from "react";

interface ITitleProps {
  title: string;
}

const Title: FC<ITitleProps> = ({ title }) => {
  console.warn("rerender Title");

  return <div>{title}</div>;
};

export default memo(Title);
