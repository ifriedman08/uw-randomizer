import { sample } from "lodash";

export interface Market {
  type: string;
  description: string;
}

export const marketsTable: Market[] = [
  {
    description:
      "Highly competitive, cutting-edge market. Class 2 Assets available, Class 1 Assets commonplace, occasional Class 3 prototype. Advanced medical procedures (cybermods) performed regularly.",
    type: "Advanced",
  },
  {
    description:
      "Vile, despicable, and dangerous market. Every Asset and service available for a price, no matter how illegal or depraved. Slave Crews indoctrinated with free Loyalty upgrade. ",
    type: "Brutal",
  },
  {
    description:
      "High demand for food, medical supplies, tools, and work vehicles. Few goods or services for sale, mostly Class 0 Assets and excess survival supplies.",
    type: "Colonist",
  },
  {
    description:
      "Chaotic, unpredictable market. Eclectic selection of goods and services that changes from day to day. Mostly junk, but many Class 0 and Class 1 goods available. Diverse selection of Crews.",
    type: "Crowded",
  },
  {
    description:
      "Isolated, independent market. Factions have no direct control of the market. Characters cannot call in Favors here. Equal parts trash and treasure.",
    type: "Forlorn",
  },
  {
    description:
      "Cultural cross-roads market. Assets from the far reaches of the galaxy. Class 1 and Class 2 assets in a wide variety of cultural styles and variations. Non-humanoid Attire and Crew often available.",
    type: "Galactic",
  },
  {
    description:
      "Meager market, with no real value. High demand for basic necessities, little to no profit or trade potential. Abundant Class 0 Crews. Occasional unique Asset, traded out of desperation.",
    type: "Impoverished",
  },
  {
    description:
      "Bizarre, confusing, exotic market. No “normal” Assets, only strange, alien goods. Market likely to follow strange trading customs, or have unusual currency/measure of exchange.",
    type: "Occult",
  },
  {
    description:
      "Primitive, archaic market. Deals uniquely in very low tech Assets (melee weapons, animals, etc.). High technology viewed with suspicion. No medical care beyond crude Patch Up.",
    type: "Primal",
  },
  {
    description:
      "Market that caters to a specific in-group, rarely dealing with the unprivileged. All Assets are of superior craftsmanship, often have the Stylish upgrade. Class 2 Assets, occasional Class 3. No Class 0.",
    type: "Privileged",
  },
  {
    description:
      "Abundance of manufactured goods. High demand for raw materials, processed materials and basic components. Class 0 Assets commonplace, all Class 1s readily available.",
    type: "Productive",
  },
  {
    description:
      "A digital marketplace. Trades primarily in information. Data Points can be purchased through Acquisition (3 Data Points about a single subject). Goods ordered and fulfilled anonymously.",
    type: "Programmed",
  },
  {
    description:
      "Strictly controlled market. All transactions are done through a regulatory body, usually a Faction. Extensive list of restricted and banned Assets and cargo types. Fill out form 76-F in triplicate.",
    type: "Regimented",
  },
  {
    description:
      "Simple goods available, mostly Class 0 goods with a few Class 1s. Cargo types limited to natural resources, food, and hand-made items.",
    type: "Rustic",
  },
  {
    description:
      "Religious, often theocratic market. Goods exchanged for religious services: blessings, prayers, healing, indulgences, political favor, etc. Blessed items and religious Crews available, though rare.",
    type: "Spiritual",
  },
];

export const generateMarket = (): Market | undefined => sample(marketsTable);
