import { sample } from "lodash";

const chanceOfStormsTable = [
  "Always Clear",
  "Always Clear",
  "Always Clear",
  "Always Clear",
  "Rare Storms",
  "Rare Storms",
  "Regular Storms",
  "Regular Storms",
  "Half Stormy",
  "Half Stormy",
  "Rarely Clear",
  "Constant Storms",
];
const exoticStormPresenceTable = [false, false, false, false, false, true];

const stormSeverityTable = [
  "Flavor",
  "Flavor",
  "Flavor",
  "Annoyance",
  "Annoyance",
  "Annoyance",
  "Minor Hazard",
  "Minor Hazard",
  "Minor Hazard",
  "Major Hazard",
  "Major Hazard",
  "Extreme Hazard",
];
const stormWarningTable = [
  "Change in Weather",
  "Change in Weather",
  "Change in Weather",
  "Change in Weather",
  "Change in Weather",
  "Change in Weather",
  "Flora or Fauna Reaction",
  "Flora or Fauna Reaction",
  "Flora or Fauna Reaction",
  "Regular Intervals",
  "Regular Intervals",
  "No Warning",
];

export interface Weather {
  warning?: string;
  severity?: string;
  exotic?: boolean;
  chances?: string;
}

export const generateWeather = (): Weather => {
  return {
    warning: sample(chanceOfStormsTable),
    severity: sample(stormSeverityTable),
    exotic: sample(exoticStormPresenceTable),
    chances: sample(chanceOfStormsTable),
  };
};
