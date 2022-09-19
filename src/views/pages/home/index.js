import React, { useEffect, useState } from "react";
import { getCards } from "services/cardService";
import LoadingContainer from "views/components/LoadingContainer";
import CardGrid from "views/components/CardGrid";
import PokemonCard from "views/components/PokemonCard";
import Error from "../error";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({ total: 0, entries: [] });
  const [isError, setIsError] = useState(false);

  const loadData = async () => {
    setIsLoading(true);
    const response = await getCards();
    setData(response);
    setIsLoading(false);
  };

  const handleClick = () => {
    setIsError(true);
  };

  useEffect(() => {
    loadData();
  }, []);

  return isError ? (
    <Error />
  ) : (
    <LoadingContainer isOpen={isLoading}>
      <CardGrid
        data={data.entries}
        component={PokemonCard}
        componentProps={{ onClick: handleClick }}
      />
    </LoadingContainer>
  );
}
