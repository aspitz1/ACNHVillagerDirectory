import { VillagerResponse, Villager } from "../types";

const makeVillager = (villagerData: VillagerResponse): Villager => {
  return {
    id: villagerData.id,
    fileName: villagerData["file-name"],
    name: villagerData.name["name-USen"],
    personality: villagerData.personality,
    birthdayString: villagerData["birthday-string"],
    species: villagerData.species,
    gender: villagerData.gender,
    hobby: villagerData.hobby,
    catchPhrase: villagerData["catch-phrase"],
    iconURI: villagerData["icon_uri"],
    imageURI: villagerData["image_uri"],
    bubbleColor: villagerData["bubble-color"],
    textColor: villagerData["text-color"],
    saying: villagerData.saying,
  }
};

export default makeVillager;