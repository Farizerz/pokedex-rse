import { create } from "zustand";
import { IPokemonDetail } from "@/types/pokemonDetail";

interface IAbilityState {
  name: string;
  description: string;
}

interface IDetailState {
  url: string;
  setUrl: (value: string) => void;
  ability: IAbilityState;
  setAbility: (value: IAbilityState) => void;
  detail: IPokemonDetail | null;
  setDetail: (value: IPokemonDetail | null) => void;
}

export const usePokemonStore = create<IDetailState>((set) => ({
  url: "",
  setUrl: (value) => set({ url: value }),
  ability: {
    name: "",
    description: "",
  },
  setAbility: (value) =>
    set({
      ability: {
        name: value.name,
        description: value.description,
      },
    }),
  detail: null,
  setDetail: (value) => set({ detail: value }),
}));
