import { create } from "zustand";

interface ISearchState {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}

export const useSearchStore = create<ISearchState>((set) => ({
  searchQuery: "",
  setSearchQuery: (value) => set({ searchQuery: value }),
}));
