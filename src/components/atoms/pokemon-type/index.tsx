import { FC } from "react";
import POKEMON_TYPES from "./pokemon-types.json";

interface IPokemonType {
  type: string;
  modifier?: number | string;
}

const PokemonType: FC<IPokemonType> = ({ type, modifier }) => {
  const getType = POKEMON_TYPES.find((item) => item.name === type);

  return (
    <div className="relative flex items-center">
      <div
        className={`${getType?.color.background} rounded-sm w-[36px] sm:w-[46px] text-center px-[1px] border-t-2 ${getType?.color.borderTop} border-b-2 ${getType?.color.borderBottom}`}
      >
        <h1 className="text-xs sm:text-base text-white text-shadow-gray">
          {getType?.title}
        </h1>
      </div>
      {modifier ? (
        <p className="absolute z-[1] text-xs right-0 -top-[3px] font-bold">
          x {modifier}
        </p>
      ) : null}
    </div>
  );
};

export default PokemonType;
