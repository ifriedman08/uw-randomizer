import { sample, random, times } from "lodash";
import { generateFloraBiome } from "./sf-flora";
import { generateFaunaBiome } from "./sf-fauna";
import { FaunaBiome } from "./sf-fauna";
import { FloraBiome } from "./sf-flora";

export const basicsTables = {
  surfaceTypes: [
    "Ocean",
    "Desert",
    "Forest",
    "Marsh",
    "Hills",
    "Mountains",
    "Plains",
    "Exotic",
  ],
  undergroundTypes: [
    "Dry Tunnels",
    "Dry Tunnels",
    "Flooded Tunnels",
    "Underocean",
    "Underforest",
    "Underhills",
    "Volcanic",
    "Exotic",
  ],
  heat: [
    "-1 Heat Level",
    "-1 Heat Level",
    "No Change",
    "No Change",
    "No Change",
    "+1 Heat Level",
    "+1 Heat Level",
  ],
  modifier: [
    "-2 Heat Level",
    "+2 Heat Level",
    "Fluctuating Heat Level",
    "Covered in Crystals",
    "Mobile Migrating Flora",
    "Moving Biome",
    "Unusual Liquids",
    "Steam Vents",
    "Glowing Soil or Rock",
    "Unusual Elevation",
    "Giant Rocks",
    "Local Atmosphere",
    "Irradiated",
    "Thick Fog",
    "Everything Tinted to a Color",
    "Great Chasms",
    "Tar Pits",
    "Floating Islands",
    "Sinkholes",
    "Diseased",
    "Full of Bones",
    "Geysers",
    "Craters",
    "Petrified Flora",
    "Negative Energy",
    "Positive Energy",
    "Airborne Hallucinogen",
    "Unusual Soil or Rock",
    "Tied to a Deity",
    "Planar Taint",
    "Oppressive Silence",
    "Electromagnetic Interference",
    "Surface Metal Deposits",
    "Local Gravity",
  ],
};

export interface Biome {
  heat?: string;
  modifier?: string;
  type?: string;
  flora: FloraBiome;
  fauna: FaunaBiome;
}

export const generateBiomeBasics = (
  count: number,
  biomeClass: "surface" | "underground"
): Biome[] => {
  return times(count, () => {
    const modIdx = random(1, 12) + random(1, 12) + random(1, 12) - 1;
    const types =
      biomeClass === "surface"
        ? basicsTables.surfaceTypes
        : basicsTables.undergroundTypes;
    return {
      heat: sample(basicsTables.heat),
      modifier: basicsTables.modifier[modIdx],
      type: sample(types),
      flora: generateFloraBiome(),
      fauna: generateFaunaBiome(),
    };
  });
};
