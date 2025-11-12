import { create } from "zustand";

interface IModalState {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
}

export const useModalStore = create<IModalState>((set) => ({
  openModal: false,
  setOpenModal: (value) => set({ openModal: value }),
}));
