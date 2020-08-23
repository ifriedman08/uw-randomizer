import { sample } from "lodash";

export const traits = [
  [
    ["Sinister", "Controlling", "Secretive", "Popular", "Rapacious", "Austere"],
    ["Wealthy", "Honorable", "Violent", "Degenerate", "Defiant", "Tyrannical"],
    ["Brutal", "Underhanded", "Ancient", "Terrifying", "Fanatic", "Brave"],
  ],
  [
    [
      "Expansionist",
      "Scientific",
      "Authoritarian",
      "Colonizing",
      "Trade",
      "Mercenary",
    ],
    [
      "Merchant",
      "Industrious",
      "Criminal",
      "Military",
      "Anarchist",
      "Starfaring",
    ],
    [
      "Rebel",
      "High Tech",
      "Diplomatic",
      "Corporate",
      "Regimented",
      "Political",
    ],
  ],
  [
    ["Government", "Cult", "Fleet", "Council", "Corporation", "Federation"],
    ["Society", "Coalition", "Armada", "Network", "Consortium", "Republic"],
    ["Empire", "Religion", "Regime", "Cartel", "Alliance", "Legion"],
  ],
];

export const generateFactionTraits = () => {
  const col1Result = sample(sample(traits[0]));
  const col2Result = sample(sample(traits[1]));
  const col3Result = sample(sample(traits[2]));

  return [col1Result, col2Result, col3Result];
};
