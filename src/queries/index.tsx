import { Villager } from "../types";
import makeVillager from "../Villager/Villager";

const getVillagers = async () => {
  try {
    const response = await fetch("https://acnhapi.com/v1/villagers");
    if (!response.ok) {
      const errorCode = await response.status;
      throw new Error(`${errorCode}: Oh no! Something is wrong.`);
    } else {
      const data = await response.json();
      const fileNames = Object.keys(data);
      const villagers = fileNames.map((key) => makeVillager(data[key]));
      return villagers;
    }
  } catch (err) {
    console.log(err);
    
    return err;
  }
};

export { getVillagers };
