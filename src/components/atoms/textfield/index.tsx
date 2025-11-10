import { FC, InputHTMLAttributes } from "react";

interface ITextField extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const TextField: FC<ITextField> = ({ className, ...rest }) => {
  return (
    <input
      type="text"
      className={`${className} bg-white/70 border-3 border-black rounded-lg focus:outline-none px-2 font-pokemon text-lg sm:text-xl`}
      {...rest}
    />
  );
};

export default TextField;
