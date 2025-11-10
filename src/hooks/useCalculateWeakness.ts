import { useQueries } from "@tanstack/react-query";
import { fetchData } from "@/lib/fetchData";
import type { IType } from "@/types/pokemonDetail";

interface IPokemonTypes {
  name: string;
  modifier: number;
}

const useCalculateWeakness = (item: IType[] = []) => {
  const pokemonTypes: IPokemonTypes[] = [];

  const typeQuery = useQueries({
    queries: item.map((i) => ({
      queryKey: ["type", i.type.name],
      queryFn: () => fetchData(i.type.url ?? ""),
      staleTime: Infinity,
    })),
  });

  const damages = typeQuery
    .map((item) => item?.data?.damage_relations)
    .filter(Boolean);
  const isFetching = typeQuery.some((q) => q.isFetching);
  const isError = typeQuery.some((q) => q.isError);

  for (let i = 0; i < damages.length; i++) {
    const calculateModifier = (data: IPokemonTypes[], modifier: number) => {
      for (let j = 0; j < data.length; j++) {
        const typeName = data[j].name;
        if (
          !pokemonTypes.some((item: IPokemonTypes) => item.name === typeName)
        ) {
          pokemonTypes.push({
            name: typeName,
            modifier: modifier,
          });
        } else {
          const index = pokemonTypes.findIndex(
            (item) => item.name === typeName
          );
          pokemonTypes[index].modifier *= modifier;
        }
      }
    };

    calculateModifier(damages[i].double_damage_from, 2);
    calculateModifier(damages[i].half_damage_from, 0.5);
    calculateModifier(damages[i].no_damage_from, 0);
  }

  return { pokemonTypes, isFetching, isError };
};

export default useCalculateWeakness;
