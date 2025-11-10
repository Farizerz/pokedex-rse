import { create } from "zustand";
import { IPokemonDetail } from "@/types/pokemonDetail";

interface IDetailState {
  url: string;
  setUrl: (value: string) => void;
  detail: IPokemonDetail | null;
  setDetail: (value: IPokemonDetail | null) => void;
}

export const usePokemonStore = create<IDetailState>((set) => ({
  url: "",
  setUrl: (value) => set({ url: value }),
  detail: null,
  setDetail: (value) => set({ detail: value }),
}));
