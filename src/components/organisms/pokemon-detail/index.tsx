"use client";

import { FC, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Container from "@/components/atoms/container";
import DetailCard from "@/components/molecules/detail-card";
import { fetchData } from "@/lib/fetchData";
import { usePokemonStore } from "@/store/usePokemonStore";

const PokemonDetail: FC = () => {
  const { url, detail, setDetail } = usePokemonStore();

  const { data, isFetching: isLoading } = useQuery({
    queryKey: ["pokemonDetail", url],
    queryFn: () => fetchData(url),
    enabled: !!url,
  });

  useEffect(() => {
    if (!data) return;
    setDetail(data);
  }, [data, setDetail]);

  return (
    <Container className="w-full h-full sm:h-dvh flex items-center justify-center">
      {<DetailCard data={detail} isLoading={isLoading} />}
    </Container>
  );
};

export default PokemonDetail;
