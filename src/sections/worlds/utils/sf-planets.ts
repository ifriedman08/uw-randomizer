import { sample } from "lodash";
import { genPOI } from "./sf-poi";

export interface Planet {
  temperature?:
    | "Extreme Cold"
    | "Severe Cold"
    | "Very Cold"
    | "Cold"
    | "Cool"
    | "Warm"
    | "Hot"
    | "Very Hot"
    | "Severe Heat"
    | "Extreme Heat";
  gravity?: "Normal" | "Low" | "High";
  atmosphere?: "Normal" | "Thin" | "Thick" | "None" | "Corrosive";
  surfaceBiomeCount?: number;
  undergroundBiomeCount?: number;
  pointOfInterest?: string;
}

export const planetTables = {
  temperature: [
    "Extreme Cold",
    "Severe Cold",
    "Very Cold",
    "Very Cold",
    "Cold",
    "Cold",
    "Cool",
    "Cool",
    "Cool",
    "Cool",
    "Warm",
    "Warm",
    "Warm",
    "Warm",
    "Hot",
    "Hot",
    "Very Hot",
    "Very Hot",
    "Severe Heat",
    "Extreme Heat",
  ],
  gravity: [
    "Normal",
    "Normal",
    "Normal",
    "Normal",
    "Low",
    "Low",
    "High",
    "High",
  ],
  atmosphere: [
    "Normal",
    "Normal",
    "Normal",
    "Normal",
    "Thin",
    "Thin",
    "Thick",
    "Thick",
    "None",
    "Corrosive or Toxic",
  ],
  surfaceBiomeCount: [1, 1, 1, 2, 2, 3, 4],
  undergroundBiomeCount: [1, 1, 1, 1, 2, 2, 2, 3],
};

export const generatePlanet = (): Planet => ({
  temperature: sample(planetTables.temperature) as any,
  atmosphere: sample(planetTables.atmosphere) as any,
  gravity: sample(planetTables.gravity) as any,
  surfaceBiomeCount: sample(planetTables.surfaceBiomeCount),
  undergroundBiomeCount: sample(planetTables.undergroundBiomeCount),
  pointOfInterest: genPOI(),
});
