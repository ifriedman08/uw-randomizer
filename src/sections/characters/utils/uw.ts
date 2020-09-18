import { sampleSize } from "lodash";

const originsTable = [
  "Advanced",
  "Brutal",
  "Colonist",
  "Crowded",
  "Forlorn",
  "Galactic",
  "Impoverished",
  "Occult",
  "Primal",
  "Privileged",
  "Productive",
  "Programmed",
  "Regimented",
  "Rustic",
  "Spiritual",
];
const careersTable = [
  "Academic",
  "Augmented",
  "Chosen",
  "Clandestine",
  "Commercial",
  "Consul",
  "Explorer",
  "Fanatic",
  "Industrial",
  "Kinetic",
  "Military",
  "Personality",
  "Personality",
  "Psychic",
  "Scoundrel",
  "Shaper",
  "Starfarer",
  "Technnocrat",
];

export const generateArchetype = () => {
  return `${sampleSize(careersTable, 2).join(" - ")} - ${sampleSize(
    originsTable
  )}`;
};
