import { sample } from "lodash";

const classesTable = [
  "Artificer",
  "Barbarian",
  "Bard",
  "Cleric",
  "Druid",
  "Fighter",
  "Monk",
  "Paladin",
  "Ranger",
  "Rogue",
  "Sorcerer",
  "Warlock",
  "Wizard",
];

const alignmentX = ["L", "N", "C"];
const alignmentY = ["G", "N", "E"];

export const generateDNDChar = () => {
  let alignment = (sample(alignmentX) ?? "N") + (sample(alignmentY) ?? "N");
  if (alignment === "NN") {
    alignment = "N";
  }
  return `${sample(classesTable)} - ${alignment}`;
};
