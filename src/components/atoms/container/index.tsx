import { FC, ReactNode } from "react";

interface IContainer {
  className?: string;
  children?: ReactNode;
}

const Container: FC<IContainer> = ({ className, children }) => {
  return <div className={`w-full p-4 xl:px-20 ${className}`}>{children}</div>;
};

export default Container;
