import { useState } from "react";
import { Villager } from "../types";

interface props {
  villagers: Villager[] | null;
}

const RandomVillagerForm = ({ villagers }: props) => {
  const [villager, setVillager] = useState<Villager | null>(null);

  const randomVillagerGenerator = () => {
    if (villagers) {
      const maxNumber = villagers.length;
      const randomNumber = Math.floor(Math.random()) * maxNumber;
      setVillager(villagers[randomNumber]);
    }
  };

  return (
    <section>
      <h3>Not sure who you're looking to meet?</h3>
      <p>Let us find you a villager at random.</p>
      <button type="button" onClick={randomVillagerGenerator}>RANDOMIZE</button>
      <article>
        {villager ? (
          <>
            <p>Your random villager is...</p>
            <p>{villager.name}</p>
            <a href="#">CHECK THEM OUT</a>
          </>
        ) : (
          <p>Who will it be!</p>
        )}
      </article>
    </section>
  );
};

export default RandomVillagerForm;
