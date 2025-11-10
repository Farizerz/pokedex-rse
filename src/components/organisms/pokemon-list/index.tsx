"use client";

import { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import Container from "@/components/atoms/container";
import ListCard from "@/components/organisms/pokemon-list/list-card";
import { fetchData } from "@/lib/fetchData";
import { usePokemonStore } from "@/store/usePokemonStore";
import { useSearchStore } from "@/store/useSearchStore";
import { URL } from "@/utils/constants/url";

interface IPokemon {
  name: string;
  url: string;
}

const PokemonList: FC = () => {
  const { searchQuery } = useSearchStore();
  const { detail, setUrl } = usePokemonStore();

  const { data } = useQuery({
    queryKey: ["pokemons"],
    queryFn: () => fetchData(`${URL.POKEMON}?limit=1025`),
  });

  const filtered =
    data?.results.filter((item: IPokemon) => item.name.includes(searchQuery)) ??
    [];

  return (
    <Container className="w-full min-h-[50%] h-[50%] sm:h-dvh flex items-center justify-center sm:pt-13 xl:pt-22 font-pokemon">
      <section className="w-full h-full rounded-md border-[5px] border-slate shadow-[0_0_0_5px_slate] flex flex-col gap-1 sm:gap-2 px-4 py-2 overflow-y-auto bg-mango">
        {!data ? null : filtered.length > 0 ? (
          filtered.map((item: IPokemon, index: number) => (
            <ListCard
              key={index}
              no={parseInt(
                item.url.replace(`${URL.POKEMON}/`, "").replace("/", "")
              )}
              name={item.name.slice(0, 1).toUpperCase() + item.name.slice(1)}
              onClick={
                detail?.name !== item.name
                  ? () => {
                      setUrl(item.url);
                    }
                  : () => {}
              }
            />
          ))
        ) : (
          <h1 className="w-full h-full flex items-center justify-center text-2xl">
            NO DATA
          </h1>
        )}
      </section>
    </Container>
  );
};

export default PokemonList;
