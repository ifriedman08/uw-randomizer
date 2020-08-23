import { random } from "lodash";

const pointsOfInterestTable = [
  "Crashed Starship",
  "Crashed Satellite",
  "Stranded Survivors",
  "Alien Ruins",
  "Alien Mural",
  "Alien Monument",
  "Outcast Camp",
  "Criminal Base",
  "Precious Material Deposit",
  "Stashed Treasure",
  "Divine Monument",
  "Natural Wonder",
];

export const genPOI = () => {
  const hasPOI = random(1) === 0;
  if (!hasPOI) {
    return;
  } else {
    const dRoll = random(11) + random(11);
    return pointsOfInterestTable[dRoll];
  }
};
