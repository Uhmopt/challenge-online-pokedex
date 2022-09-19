import React, { useEffect, useState } from "react";
import { getCards } from "services/cardService";
import LoadingContainer from "views/components/LoadingContainer";
import CardGrid from "views/components/CardGrid";
import PokemonCard from "views/components/PokemonCard";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({ total: 0, entries: [] });

  const loadData = async () => {
    setIsLoading(true);
    const response = await getCards();
    setData(response);
    setIsLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <LoadingContainer isOpen={isLoading}>
      <CardGrid data={data.entries} component={PokemonCard} />
    </LoadingContainer>
  );
}
