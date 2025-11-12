import { FC, ButtonHTMLAttributes } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  className?: string;
}

const Button: FC<IButton> = ({ title, className, ...rest }) => {
  return (
    <button
      className={`${className} cursor-pointer bg-white hover:bg-lightgray rounded-sm border-[5px] border-lavender px-2 outline-2 outline-black text-black`}
      {...rest}
    >
      {title}
    </button>
  );
};

export default Button;
