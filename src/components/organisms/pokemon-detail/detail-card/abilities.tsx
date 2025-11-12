"use client";

import { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "@/lib/fetchData";
import { usePokemonStore } from "@/store/usePokemonStore";

interface IAbilities {
  name: string;
  isHidden?: boolean;
  url: string;
  onClick?: () => void;
}

interface IEntries {
  effect: string;
  language: {
    name: string;
    url: string;
  };
  short_effect: string;
}

const Abilities: FC<IAbilities> = ({ name, isHidden, url, onClick }) => {
  const { setAbility } = usePokemonStore();

  const { data, isLoading } = useQuery({
    queryKey: ["abilities", url],
    queryFn: () => fetchData(url),
    enabled: !!url,
  });

  const handleClick = () => {
    onClick?.();
    setAbility({
      name,
      description: data.effect_entries.find(
        (item: IEntries) => item.language.name === "en"
      ).effect,
    });
  };

  if (!data || isLoading) return;

  return (
    <div>
      <p className="text-xs xm:text-sm xl:text-xl text-black">
        <span
          className="cursor-pointer bg-lightgray hover:bg-slate hover:text-white px-2 rounded-sm"
          role="button"
          onClick={handleClick}
        >
          {name} {isHidden ? " (Hidden)" : ""}
        </span>
      </p>
    </div>
  );
};

export default Abilities;
