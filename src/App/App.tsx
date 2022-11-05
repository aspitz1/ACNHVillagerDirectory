import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { Villager } from "../types";
import { getVillagers } from "../queries";

import HomePage from "../HomePage/HomePage";
import VillagerSearchForm from "../VillagerSearchForm/VillagerSearchForm";
import RandomVillagerForm from "../RandomVillagerForm/RandomVillagerForm";

const App = () => {
  const { isLoading, isError, data , error } = useQuery({
    queryKey: ["villagers"],
    queryFn: getVillagers,
  });

  return (
    <>
      <HomePage />
      <VillagerSearchForm />
      <RandomVillagerForm villagers={data} />
    </>
  );
};

export default App;
