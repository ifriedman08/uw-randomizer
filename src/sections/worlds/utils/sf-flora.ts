import { times, sample } from "lodash";

const amountOfFloraTable = [
  "None",
  "None",
  "Sparse",
  "Sparse",
  "Sparse",
  "Moderate",
  "Moderate",
  "Moderate",
  "Dense",
  "Dense",
  "Dense",
  "Overgrown",
];
const varietyOfFloraTable = [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4];

const typeOfFloraTable = [
  "Grass",
  "Grass",
  "Lichen or Moss",
  "Lichen or Moss",
  "Lichen or Moss",
  "Shrub",
  "Shrub",
  "Shrub",
  "Fern",
  "Fern",
  "Fern",
  "Climber or Vine",
  "Climber or Vine",
  "Tree",
  "Tree",
  "Cactus",
  "Cactus",
  "Fungus",
  "Fungus",
  "Exotic",
];

const floraSizeTable = [
  "Fine",
  "Dimunitive",
  "Tiny",
  "Tiny",
  "Small",
  "Small",
  "Small",
  "Medium",
  "Medium",
  "Medium",
  "Medium",
  "Medium",
  "Medium",
  "Large",
  "Large",
  "Large",
  "Large",
  "Huge",
  "Huge",
  "Gargantuan or bigger",
];

const relativeAmountTable = [-1, -1, -1, 0, 0, 0, 0, 0, 0, 1, 1, 1];

const threatTable = [
  "Helpful",
  "Harmless",
  "Harmless",
  "Harmless",
  "Harmless",
  "Harmless",
  "Harmless",
  "Harmless",
  "Minor Hazard",
  "Minor Hazard",
  "Minor Hazard",
  "Major Hazard",
];

const floraQuirkTable = [
  "Self Destructs",
  "Bioluminescence",
  "Giant Fruit",
  "Changes Color",
  "Creates Noise",
  "Moves Toward Light",
  "Grows in Corpses",
  "Grows on Other Plants",
  "Hardened Exterior",
  "Regenerates Damage",
  "Reacts to Noise",
  "Reacts to Motion",
  "Reacts to Weather",
  "Reacts to Time of Day",
  "Blots out Light",
  "Potent Smell",
  "Carnivorous",
  "Stores Water",
  "Rock-like Appearance",
  "Squirts Liquid",
];

export interface FloraBiome {
  amount?: string;
  typeCount?: number;
  floraTypes?: FloraType[];
}

export interface FloraType {
  size?: string;
  type?: string;
  relativeAmount?: number;
  quirk?: string;
  threat?: string;
}

const generateFloraType = (): FloraType => ({
  size: sample(floraSizeTable),
  quirk: sample(floraQuirkTable),
  relativeAmount: sample(relativeAmountTable),
  threat: sample(threatTable),
  type: sample(typeOfFloraTable),
});

export const generateFloraBiome = (): FloraBiome => {
  const amount = sample(amountOfFloraTable);
  if (amount === "None") {
    return { amount };
  }
  const typeCount = sample(varietyOfFloraTable);
  return {
    amount,
    typeCount,
    floraTypes: times(typeCount ?? 1, () => generateFloraType()),
  };
};

// export const generateNFloraBiomes = (count: number): FloraBiome[] => {
//   return times(count, () => generateFloraBiome());
// };
