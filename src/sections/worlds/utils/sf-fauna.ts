import { random, sample, times, sampleSize } from "lodash";
import { Sentient, generateSentient } from "./sf-sentients";

const faunaAmountTable = [
  "None",
  "None",
  "Rare",
  "Rare",
  "Rare",
  "Uncommon",
  "Uncommon",
  "Uncommon",
  "Common",
  "Common",
  "Common",
  "Teeming",
];
const faunaVarietyTable = [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4];

const generateFaunaSubType = () => {
  const dRoll = random(1, 100);
  if (dRoll <= 15) return "Arthopoid";
  if (dRoll <= 25) return "Mammalian";
  if (dRoll <= 35) return "Avian";
  if (dRoll <= 47) return "Reptilian";
  if (dRoll <= 59) return "Molluscoid";
  if (dRoll <= 67) return "Fungoid";
  if (dRoll <= 75) return "Plantoid";
  if (dRoll <= 95) return "Ichthyoid";
  return "Exotic";
};

const faunaSizeTable = [
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

const relativeAmoutTable = [-1, -1, -1, 0, 0, 0, 0, 0, 0, 1, 1, 1];

const faunaThreatTable = [
  "Harmless",
  "Harmless",
  "Harmless",
  "Harmless",
  "Minor Threat",
  "Minor Threat",
  "Minor Threat",
  "Minor Threat",
  "Major Threat",
  "Major Threat",
  "Major Threat",
  "Extreme Threat",
];

const faunaTemperamentTable = [
  "Uncaring",
  "Uncaring",
  "Uncaring",
  "Skittish",
  "Skittish",
  "Skittish",
  "Cautious",
  "Cautious",
  "Cautious",
  "Cautious",
  "Territorial",
  "Territorial",
  "Territorial",
  "Volatile",
  "Volatile",
  "Predatory",
  "Predatory",
  "Predatory",
  "Sadistic",
  "Sadistic",
];

const groupingTable = [
  "Loner",
  "Loner",
  "Loner",
  "Mating Pairs",
  "Mating Pairs",
  "Mating Pairs",
  "Packs",
  "Packs",
  "Packs",
  "Herds, Flocks or Swarms",
  "Herds, Flocks or Swarms",
  "Herds, Flocks or Swarms",
];

const locomotionTable = [
  "Walking",
  "Walking",
  "Walking",
  "Walking",
  "Walking",
  "Walking",
  "Walking",
  "Walking",
  "Flying",
  "Flying",
  "Flying",
  "Flying",
  "Burrowing",
  "Burrowing",
  "Climbing",
  "Climbing",
  "Climbing",
  "Slithering",
  "Slithering",
  "Hopping",
];

const quirkTable = [
  "Self Destructs",
  "Bioluminescence",
  "Potent Smell",
  "Exceptionally Fast",
  "Exceptionally Slow",
  "Changes Color",
  "Camouflaged",
  "Webbing",
  "Venomous",
  "Spit Weapon",
  "Gaze Weapon",
  "Regenerates Damage",
  "Amorphous",
  "Shapeshifter",
  "Heavily Armored",
  "Mimicks Sounds",
  "Breathe Weapon",
  "Shapeshifter",
  "Heavily Armored",
  "Injects Live Young",
  "Unusual Diet",
  "Mind Affecting",
  "Parasitic",
];

export interface FaunaType {
  type?: string;
  relativeAmount?: number;
  size?: string;
  threat?: string;
  temperament?: string;
  grouping?: string;
  locomotion?: string;
  quirk?: string;
  isSentient?: boolean;
  sentientDetails?: Sentient;
}

export interface FaunaBiome {
  basicFaunaTypes?: FaunaType[];
  sentientFaunaTypes?: FaunaType[];
  amount?: string;
  variety?: number;
}

const generateSentientCount = () => {
  const dRoll = random(1, 100);
  if (dRoll <= 79) return 0;
  if (dRoll <= 97) return 1;
  return 2;
};

export const generateFaunaType = (
  isSentient?: boolean,
  isCreature?: boolean
): FaunaType => {
  let quirkString;
  if (isCreature) {
    quirkString = sampleSize(quirkTable, random(1, 4)).join(", ");
  } else {
    quirkString =
      random(11) === 11 ? quirkTable[random(11) + random(11)] : undefined;
  }
  return {
    relativeAmount: sample(relativeAmoutTable),
    locomotion: sample(locomotionTable),
    quirk: quirkString,
    size: sample(faunaSizeTable),
    grouping: sample(groupingTable),
    temperament: sample(faunaTemperamentTable),
    type: generateFaunaSubType(),
    threat: sample(faunaThreatTable),
    sentientDetails: isSentient ? generateSentient() : undefined,
  };
};
const generateNFaunaTypes = (
  count: number,
  isSentient?: boolean
): FaunaType[] => {
  return times(count, () => generateFaunaType(isSentient));
};

export const generateFaunaBiome = (): FaunaBiome => {
  const amount = sample(faunaAmountTable);
  if (amount === "None") {
    return {
      amount,
      basicFaunaTypes: undefined,
      sentientFaunaTypes: undefined,
    };
  }
  const variety = sample(faunaVarietyTable) ?? 1;
  let sentientCount = generateSentientCount();
  if (sentientCount > variety) {
    sentientCount = variety;
  }

  const basicFaunaCount = variety - sentientCount;
  return {
    amount: sample(faunaAmountTable),
    variety,
    basicFaunaTypes: generateNFaunaTypes(basicFaunaCount),
    sentientFaunaTypes: generateNFaunaTypes(sentientCount, true),
  };
};
