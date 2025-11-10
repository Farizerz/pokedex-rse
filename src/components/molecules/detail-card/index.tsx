"use client";

import { FC, useState, useEffect } from "react";
import NextImage from "next/image";
import PokemonType from "@/components/atoms/pokemon-type";
import { capitalize } from "@/utils/functions/helpers";
import type { IPokemonDetail } from "@/types/pokemonDetail";
import useCalculateWeakness from "@/hooks/useCalculateWeakness";

interface IDetailCard {
  data: IPokemonDetail | null;
  isLoading: boolean;
}

const DetailCard: FC<IDetailCard> = ({ data, isLoading }) => {
  const calculateWeakness = useCalculateWeakness(data?.types);
  const [spriteLoading, setSpriteLoading] = useState(true);

  useEffect(() => {
    if (!data || !data?.sprites?.front_default) return;

    //eslint-disable-next-line
    setSpriteLoading(true);

    const img = new Image();
    img.src = data.sprites.front_default;
    img.onload = () => setSpriteLoading(false);

    return () => {
      img.onload = null;
    };
  }, [data]);

  const weak = !calculateWeakness.isFetching
    ? calculateWeakness.pokemonTypes.filter((item) => item.modifier > 1)
    : [];
  const resist = !calculateWeakness.isFetching
    ? calculateWeakness.pokemonTypes.filter((item) => item.modifier < 1)
    : [];

  if (!data) return;

  return (
    <div className="w-full h-full sm:h-auto font-pokemon flex flex-col gap-2 pt-8 items-center">
      <div className="w-[128px] h-[128px] xl:w-[256px] xl:h-[256px] flex items-center justify-center">
        <NextImage
          src={data.sprites.front_default ?? ""}
          alt={data?.name ?? ""}
          width={256}
          height={256}
          className={`w-full h-full [image-rendering:pixelated] ${
            isLoading || spriteLoading ? "hidden" : "inline"
          }`}
          unoptimized
        />
        <NextImage
          src={"/icons/pokeball-sprite.svg"}
          alt="sprite-loading"
          width={32}
          height={32}
          className={`w-[16px] h-[16px] sm:w-[32px] sm:h-[32px] animate-bounce ${
            isLoading || spriteLoading ? "inline" : "hidden"
          }`}
        />
      </div>

      <section className="w-full grid grid-cols-1 gap-0 text-xl lg:text-4xl bg-white text-shadow-gray text-black p-2 lg:p-4 rounded-t-lg rounded-es-lg rounded-ee-[35px] sm:rounded-ee-[55px] border-[5px] border-slate relative">
        <div className="absolute -top-6 left-4 bg-white px-2 border-[5px] border-slate rounded-lg min-w-[70px]">
          <h1 className="text-lg w-full flex justify-between">
            <span>#</span>
            <span>{!isLoading ? data?.id : ""}</span>
          </h1>
        </div>
        <h1 className="w-full flex justify-between">
          <span className="text-start">Name</span>
          <span className="text-end">
            {!isLoading ? capitalize(data.name ?? "") : null}
          </span>
        </h1>
        <h1 className="w-full flex items-center justify-between">
          <span className="text-start">Type</span>
          <div className="flex flex-row gap-1">
            {!isLoading
              ? data.types?.map((item) => (
                  <PokemonType
                    key={item.type.name}
                    type={item.type.name?.toLowerCase() ?? ""}
                  />
                ))
              : null}
          </div>
        </h1>
        <h1 className="w-full flex items-center justify-between">
          <span className="text-start">
            Weak<span className="hidden lg:inline">ness</span>
          </span>
          <div className="flex flex-row gap-1">
            {!isLoading
              ? weak?.map((item) => (
                  <PokemonType
                    key={item.name}
                    type={item.name}
                    modifier={item.modifier}
                  />
                ))
              : null}
          </div>
        </h1>
        <h1 className="w-full flex items-center justify-between">
          <span className="text-start">
            Res<span className="hidden lg:inline">ist</span>
          </span>
          {!calculateWeakness.isFetching && !isLoading ? (
            <div
              className={`${
                resist && resist.length > 5
                  ? "grid grid-cols-6 2xl:flex 2xl:flex-row"
                  : "flex flex-row"
              } gap-1`}
            >
              {resist?.map((item) => (
                <PokemonType
                  key={item.name}
                  type={item.name}
                  modifier={`${item.modifier}`}
                />
              ))}
            </div>
          ) : null}
        </h1>
        <h1 className="w-full flex justify-between">
          <span className="text-start">Ability</span>
          <span className="text-end lg:text-2xl">
            {!isLoading && data.abilities?.length > 0
              ? `${capitalize(data.abilities[0].ability.name ?? "")}${
                  data.abilities.length > 1
                    ? ` / ${capitalize(
                        data.abilities[1].ability.name ?? ""
                      )} (Hidden)`
                    : ""
                }`
              : null}
          </span>
        </h1>
        {data.stats?.length > 0 ? (
          <div className="w-full sm:w-auto min-h-[24px] xl:min-h-[36px] rounded-ee-full mr-2 sm:mr-3 py-1 flex items-center justify-center font-bold bg-slate text-center">
            {!isLoading ? (
              <h1 className="text-xs xl:text-lg text-white flex flex-row gap-2 sm:gap-4">
                <span>HP: {data.stats[0].base_stat}</span>
                <span
                  className={
                    data.stats[1].base_stat > data.stats[3].base_stat
                      ? "text-mango"
                      : ""
                  }
                >
                  Atk: {data.stats[1].base_stat}
                </span>
                <span
                  className={
                    data.stats[2].base_stat > data.stats[4].base_stat
                      ? "text-mango"
                      : ""
                  }
                >
                  Def: {data.stats[2].base_stat}
                </span>
                <span
                  className={
                    data.stats[1].base_stat < data.stats[3].base_stat
                      ? "text-mango"
                      : ""
                  }
                >
                  Sp.Atk: {data.stats[3].base_stat}
                </span>
                <span
                  className={
                    data.stats[2].base_stat < data.stats[4].base_stat
                      ? "text-mango"
                      : ""
                  }
                >
                  Sp.Def: {data.stats[4].base_stat}
                </span>
                <span>Speed: {data.stats[5].base_stat}</span>
              </h1>
            ) : null}
          </div>
        ) : null}
      </section>
    </div>
  );
};

export default DetailCard;
