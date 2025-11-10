import React from "react";
import Image from "next/image";

const Background = () => {
  return (
    <div className="w-screen h-dvh absolute -z-[1] overflow-hidden">
      <Image
        src={"/icons/pokeball.svg"}
        width={0}
        height={0}
        alt="pokeball"
        className="w-[256px] h-[256px] sm:w-[512px] sm:h-[512px] animate-[spin_10s_linear_infinite] absolute top-20 -left-30 sm:top-50 sm:-left-60"
      />
    </div>
  );
};

export default Background;
