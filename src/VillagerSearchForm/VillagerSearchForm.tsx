import { useState } from "react";
import species from "./species-data";
import personalities from "./personality-data";

const VillagerSearchForm = () => {
  const [villagerName, setVillagerName] = useState("");
  const [villagerSpecies, setVillagerSpecies] = useState("Any");
  const [villagerPersonality, setVillagerPersonality] = useState("Any");

  const speciesOptions = species.map((type) => (
    <option value={type} key={type}>
      {type}
    </option>
  ));

  const personalityOptions = personalities.map((personality) => (
    <option value={personality} key={personality}>
      {personality}
    </option>
  ));

  return (
    <section>
      <h3>Villager Search</h3>
      <p>
        Include all, or any of the below fields. We'll find your villager for
        you!
      </p>
      <form>
        <input
          placeholder="Villager name?"
          type="text"
          value={villagerName}
          onChange={(e) => setVillagerName(e.target.value)}
        />
        <label>
          Species:
          <select
            name="species"
            value={villagerSpecies}
            onChange={(e) => setVillagerSpecies(e.target.value)}
          >
            {speciesOptions}
          </select>
          <label>
            Personality:
            <select
              name="personalities"
              value={villagerPersonality}
              onChange={(e) => setVillagerPersonality(e.target.value)}
            >
              {personalityOptions}
            </select>
          </label>
        </label>
        <button type="submit">SEARCH</button>
      </form>
    </section>
  );
};

export default VillagerSearchForm;
