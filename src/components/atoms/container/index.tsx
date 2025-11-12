import { FC, ReactNode, HTMLAttributes } from "react";

interface IContainer extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
}

const Container: FC<IContainer> = ({ className, children, ...rest }) => {
  return (
    <div className={`w-full p-4 xl:px-20 ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default Container;
