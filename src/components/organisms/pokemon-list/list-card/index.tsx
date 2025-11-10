import { FC, memo } from "react";
import { usePokemonStore } from "@/store/usePokemonStore";

interface IListCard {
  no: number;
  name: string;
  onClick?: () => void;
}

const ListCard: FC<IListCard> = ({ no, name, onClick }) => {
  const { detail } = usePokemonStore();
  return (
    <button
      className={`cursor-pointer w-full flex flex-row justify-between items-center font-pokemon p-2 rounded-sm text-shadow-gray focus:outline-none ${
        detail?.name === name.toLowerCase() ? "bg-yellow" : "bg-white"
      } hover:bg-yellow`}
      onClick={onClick}
    >
      <p className="text-xl 2xl:text-3xl text-charcoal">
        <span className="font-bold text-xl 2xl:text-2xl text-black">No</span>
        {no}
      </p>
      <h1 className="text-xl 2xl:text-3xl text-charcoal">{name}</h1>
    </button>
  );
};

export default memo(ListCard);
