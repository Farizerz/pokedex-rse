import { FC } from "react";
import Image from "next/image";

const Loading: FC = () => {
  return (
    <div className="bg-white w-screen h-screen flex items-center justify-center">
      <Image
        src={"/images/pokeball-sprite.png"}
        width={64}
        height={64}
        alt="loading"
        className="animate-bounce pointer-events-none"
      />
    </div>
  );
};

export default Loading;
