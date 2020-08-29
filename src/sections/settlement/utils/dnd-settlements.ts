import { random, sample } from "lodash";

export interface GeneratedSettlement {
  raceRelation?: string;
  rulerStatus?: string;
  notableTrait?: string;
  knownFor?: string;
  calamity?: string;
}

const settlementTables = {
  getRacialRelatons: () => {
    const dRoll = random(1, 20);
    if (dRoll <= 10) return "Harmony";
    if (dRoll <= 14) return "Tension or rivalry";
    if (dRoll <= 16) return "Racial majority are conquerors ";
    if (dRoll === 17) return "Racial minority are rulers";
    if (dRoll === 18) return "Racial minority are refugees";
    if (dRoll === 19) return "Racial majority oppresses minority ";
    if (dRoll === 20) return "Racial minority oppresses majority";
  },

  getRulerStatus: () => {
    const dRoll = random(1, 20);
    if (dRoll <= 5) return "Respected, fair, and just";
    if (dRoll <= 8) return "Feared tyrant";
    if (dRoll === 9) return "Weakling manipulated by others";
    if (dRoll === 10) return "Illegitimate ruler, simmering civil war";
    if (dRoll === 11) return "Ruled or controlled by a powerful monster";
    if (dRoll === 12) return "Mysterious, anonymous cabal";
    if (dRoll === 13) return "Contested leadership, open fighting";
    if (dRoll === 14) return "Cabal seized power openly";
    if (dRoll === 15) return "Doltish lout";
    if (dRoll === 16) return "On deathbed, claimants compete for power";
    if (dRoll <= 18) return "Iron-willed but respected";
    if (dRoll <= 20) return "Religious leader";
  },
  notableTraits: [
    "Canals in place of streets",
    "Massive statue or monument",
    "Grand temple",
    "Large fortress",
    "Verdant parks and orchards",
    "River divides town",
    "Major trade center",
    "Headquarters ofa powerful family or guild 9 Population mostl y wealthy",
    "Destitute , rundown",
    "Awful smell (tanneries, open sewers) 12 Center of trade for one specific good 13 Site of many battles",
    "Site of a mythic or magical event",
    "Important library or archive",
    "Worship of all gods banned",
    "Sinister reputation",
    "Notable library or academy",
    "Site of important tomb or graveyard 20 Built atop ancient ruins",
  ],
  knownFor: [
    "Delicious cuisine",
    "Rude people",
    "Greedy merchants",
    "Artists and writers",
    "Great herojsavior",
    "Flowers",
    "Hordes of beggars",
    "Tough warriors",
    "Dark magic",
    "Decadence",
    "Piet",
    "Gambling",
    "Godlessness",
    "Education",
    "Wine",
    "High fashion",
    "Political intrigue",
    "Powerful guilds",
    "Strong drink",
    "Patriotis",
  ],
  calamity: [
    "Suspected vampire infestation",
    "New cult seeks converts",
    "Important figure died (murder suspected) ",
    "War between rival thieves' guilds",
    "Plague or famine (sparks riots) ",
    "Plague or famine (sparks riots) ",
    "Corrupt officials",
    "Marauding monsters",
    "Marauding monsters",
    "Powe rful wizard has moved into town",
    "Economic depression (trade disrupted)",
    "Flooding",
    "Undead stirring in cemeteries",
    "Prophecy ofdoom",
    "Brink ofwar",
    "Internal strife (leads to anarchy)",
    "Besieged by enemies",
    "Scandal threatens powerful families",
    "Dungeon discovered (adventurers flock to town) ",
    "Religious sects struggle for power",
  ],
};

export const generateSettlement = (): GeneratedSettlement => {
  return {
    raceRelation: settlementTables.getRacialRelatons(),
    rulerStatus: settlementTables.getRulerStatus(),
    notableTrait: sample(settlementTables.notableTraits),
    knownFor: sample(settlementTables.knownFor),
    calamity: sample(settlementTables.calamity),
  };
};
