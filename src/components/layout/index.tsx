import { FC } from "react";
import dynamic from "next/dynamic";
import Background from "@/components/atoms/background";
import Navbar from "@/components/molecules/navbar";
import PokemonDetail from "@/components/organisms/pokemon-detail";
import PokemonList from "@/components/organisms/pokemon-list";
import Loading from "./loading";

const InnerLayout: FC = () => {
  return (
    <div className="w-screen h-dvh">
      <Background />
      <Navbar />
      <div className="w-full h-full flex flex-col sm:grid sm:grid-cols-2">
        <PokemonDetail />
        <PokemonList />
      </div>
    </div>
  );
};

const Layout = dynamic(() => Promise.resolve(InnerLayout), {
  loading: () => <Loading />,
});

export default Layout;
