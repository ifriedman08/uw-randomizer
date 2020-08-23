import { random, sample } from "lodash";

const getTechLevel = () => {
  const dRoll = random(1, 22);
  if (dRoll <= 10) return "Stone Age";
  if (dRoll <= 14) return "Bronze Age";
  if (dRoll <= 17) return "Medieval Age";
  if (dRoll <= 19) return "Steam Age";
  if (dRoll <= 20) return "Industrial Age";
  if (dRoll <= 21) return "Nuclear Age";
  return "Space";
};

const attitudesTable = [
  "Hostile",
  "Hostile",
  "Hostile",
  "Hostile",
  "Hostile",
  "Hostile",
  "Hostile",
  "Hostile",
  "Hostile",
  "Hostile",
  "Hostile",
  "Hostile",
  "Fearful",
  "Fearful",
  "Fearful",
  "Fearful",
  "Fearful",
  "Indifferent",
  "Reverent",
  "Friendly",
];
const valuesTable = [
  "Strength or Glory",
  "Family or Kindness",
  "Faith or Zealotry",
  "Knowledge or Science",
  "Equality or Balance",
  "Pleasure or Hedonism",
];

const leadershipTable = [
  "Democratic",
  "Democratic",
  "Republican",
  "Republican",
  "Republican",
  "Republican",
  "Autocratic",
  "Autocratic",
  "Autocratic",
  "Autocratic",
  "Feudal",
  "Feudal",
  "Feudal",
  "Feudal",
  "Gerontocratic",
  "Gerontocratic",
  "Theocratic",
  "Technocratic",
  "Plutocratic",
  "No Leadership or Anarchic",
];

const unityTable = [
  "Many Warring Factions",
  "Many Warring Factions",
  "Many Warring Factions",
  "Many Warring Factions",
  "Many Warring Factions",
  "Many Warring Factions",
  "Divided between a few Great Powers",
  "Divided between a few Great Powers",
  "Divided between a few Great Powers",
  "Divided between two Great Powers",
  "Divided between two Great Powers",
  "United Species",
];
const religionTable = [
  "Animism",
  "Animism",
  "Animism",
  "Animism",
  "Animism",
  "Polytheism",
  "Polytheism",
  "Polytheism",
  "Polytheism",
  "Polytheism",
  "Monotheism",
  "Monotheism",
  "Monotheism",
  "Monotheism",
  "Monotheism",
  "Animatism",
  "Animatism",
  "Ancestor Worship",
  "God King or Personality Cult",
  "Agnostic or Atheist",
];
const architectureTable = [
  "Simple",
  "Heavily Engraved",
  "Underground",
  "Towering",
  "Squat",
  "Crude",
  "Carved out of Material",
  "Easily Moved",
  "Cyclopean",
  "Decadent",
  "Organic",
  "Nonexistent or Cave Men",
];

const artTable = [
  "Theatre",
  "Theatre",
  "Poetry",
  "Poetry",
  "Painting",
  "Painting",
  "Sculpting",
  "Sculpting",
  "Music",
  "Dance",
  "Clothing",
  "Mask Making",
];

const themeTable = [
  "Cowboy",
  "Samurai",
  "Ninja",
  "Pirate",
  "Fascist",
  "Communist",
  "Libertarian",
  "Mobster",
  "Knight",
  "Hippy",
  "Conquistador",
  "Viking",
  "Aztec",
  "Apache",
  "Wuxia",
  "Greco-Roman",
  "Zulu",
  "Mongol",
  "Arabian",
  "Merchant",
  "Macho Man",
  "Australian",
  "American South",
];

const getTheme = () => {
  const dRoll = random(11) + random(11);
  return themeTable[dRoll];
};

export interface Sentient {
  architecture?: string;
  art?: string;
  attitude?: string;
  techLevel?: string;
  leadership?: string;
  values?: string;
  religion?: string;
  unity?: string;
  theme?: string;
}

export const generateSentient = (): Sentient => {
  const result: Sentient = {
    values: sample(valuesTable),
    architecture: sample(architectureTable),
    unity: sample(unityTable),
    theme: getTheme(),
    attitude: sample(attitudesTable),
    techLevel: getTechLevel(),
    leadership: sample(leadershipTable),
    religion: sample(religionTable),
  };
  if (random(1, 4) === 4) result.art = sample(artTable);
  return result;
};
