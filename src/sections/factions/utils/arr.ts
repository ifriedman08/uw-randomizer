import { sample } from "lodash";

const factions = [
  "Commonwealth",
  "ISAC",
  "Star Gazers",
  "Chronophages",
  "Kardashians",
  "Naughts",
  "Confeddis",
  "RaiderNet",
  "Union",
  "C.B.D",
  "Torillian",
  "Exo",
  "Spartans",
  "Silexian",
  "Soylent Meme",
  "Unity",
  //   "Humai",
  //   "Contra",
  //   "Chaati",
  //   "Veggimites",
  //   "Reptilia",
  //   "Mammalian",
  //   "Tiefling",
  //   "Infernal",
  //   "Celestian",
  //   "Fey",
  //   "Primordial",
];

export const generateHomebrewFaction = (): string | undefined => {
  return sample(factions);
};
