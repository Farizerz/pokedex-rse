"use client";

import { FC, useState, useEffect } from "react";
import { FaGithub as Github } from "react-icons/fa";
import Container from "@/components/atoms/container";
import TextField from "@/components/atoms/textfield";
import { useDebounce } from "@/hooks/useDebounce";
import { useSearchStore } from "@/store/useSearchStore";

const delay = 500;

const Navbar: FC = () => {
  const { setSearchQuery } = useSearchStore();

  const [query, setQuery] = useState("");

  const debouncedSearch = useDebounce(query, delay);

  useEffect(() => {
    setSearchQuery(debouncedSearch.toLowerCase());
  }, [setSearchQuery, debouncedSearch]);

  return (
    <Container className="w-full bg-white/60 flex items-center justify-between fixed h-[42px] 2xl:h-[72px] backdrop-blur-xs">
      <h1 className="font-pokemon text-xl 2xl:text-4xl font-bold text-black">
        POKéDEX
      </h1>
      <div className="w-full flex items-center justify-center">
        <TextField
          className="w-[90%] sm:w-[500px] 2xl:py-2"
          placeholder="Search Pokémon"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <a
        href="https://github.com/Farizerz/pokedex-rse"
        target="_blank"
        aria-label="Pokedex RSE repository"
      >
        <Github className="w-[25px] h-[25px] sm:w-[32px] sm:h-[32px] color-black" />
      </a>
    </Container>
  );
};

export default Navbar;
