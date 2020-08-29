import { sample } from "lodash";

const goalsTable = [
  "Stop the dungeon's monstrous inhabitants from raiding the surface world.",
  "Foil a villain's evil scheme.",
  "Destroy a magical threat inside the dungeon.",
  "Acquire treasure.",
  "Find a particular item for a specific purpose.",
  "Retrieve a stolen item hidden in the dungeon.",
  "Find information needed for a special purpose.",
  "Rescue a captive.",
  "Discover the fate of a previous adventuring party.",
  "Find an NPC who disappeared in the area.",
  "Slay a dragon or some other challenging monster.",
  "Discover the nature and origin of a strange location or phenomenon.",
  "Pursue fleeing foes taking refuge in the dungeon.",
  "Escape from captivity in the dungeon.",
  "Clear a ruin so it can be rebuilt and reoccupied.",
  "Discover why a villain is interested in the dungeon.",
  "Win a bet or complete a rite of passage by surviving in the dungeon for a certain amount of time.",
  "Parley with a villain in the dungeon.",
  "Hide from a threat outside the dungeon.",
  "Locate a dungeon or other site of interest (roll on the Dungeon Goals table to find out why).",
  "Assess the scope of a natural or unnatural disaster. ",
  "Escort an NPC to a destination.",
  "Arrive at a destination without being seen by the villain's forces.",
  "Stop monsters from raiding caravans and farms.",
  "Establish trade with a distant town.",
  "Protect a caravan traveling to a distant town.",
  "Map a new land.",
  "Find a place to establish a colony.",
  "Find a natural resource.",
  "Hunt a specific monster.",
  "Return home from a distant place.",
  "Obtain information from a reclusive hermit.",
  "Find an object that was lost in the wilds.",
  "Discover the fate of a missing group of explorers. ",
  "Pursue fleeing foes.",
  "Assess the size of an approaching army.",
  "Escape the reign of a tyrant.",
  "Protect a wilderness site from attackers.",
  "Seize control of a fortified location such as a fortress, town, or ship.",
  "Defend a location from attackers.",
  "Retrieve an object from inside a secure location in a settlement.",
  "Retrieve an object from a caravan.",
  "Salvage an object or goods from a lost vessel or caravan.",
  "Break a prisoner out ofa jail or prison camp. Escape from a jai l or prison camp.",
  "Successfully travel through an obstacle course to gain recognition or reward.",
  "Infiltrate a fortified location.",
  "Find the source of strange occurrences in a haunted house or other location.",
  "Interfere with the operation of a business.",
  "Rescue a character, monster, or object from a natural or unnatural disaster.",
  "Bring the villain to justice.",
  "ClearthenameofaninnocentNPC.",
  "Protect or hide an NPC.",
  "Protect an object.",
  "Discover the nature and origin of a strange phenomenon that might be the villain's doing.",
  "Find a wanted fugitive.",
  "Overthrow a tyrant.",
  "Uncover a conspiracy to overthrow a ruler.",
  "Negotiate peace between enemy nations or feuding families.",
  "Secure aid from a ruler or council.",
  "Help a villain find redemption.",
  "Parley with a villain.",
  "Smuggle weapons to rebel forces.",
  "Stop a band of smugglers.",
  "Gather intelligence on an enemy force.",
  "Win a tournament.",
  "Determine the villain's identity.",
  "Locate a stolen item.",
  "Make sure a wedding goes off without a hitch.",
];

const villainsTable = {
  goalsTable: [
    {
      goal: "Immortality",
      subGoals: [
        "Acquire a legendary item to prolong life",
        "Ascend to godhood",
        "Become undead or obtain a younger body",
        "Steal a planar creature's essence",
      ],
    },
    {
      goal: "Influence",
      subGoals: [
        "Seize a position of power or title",
        "Win a contest or tournament",
        "Win favor with a powerful individu al",
        "Place a pawn in a position of power",
      ],
    },
    {
      goal: "Magic",
      subGoals: [
        "Obtain an ancient artifact",
        "Build a construct or magical device",
        "Carry out a deity's wishes",
        "Offer sacrifices to a deity",
        "Contact a lost deity or power",
        "Open a gate to another world",
      ],
    },
    {
      goal: "Mayhem",
      subGoals: [
        "Fulfill an apocalyptic prophecy",
        "Enact the vengeful will of a god or patron ",
        "Spread a vile contagion",
        "Overthrow a government",
        "Trigger a natural disaster",
        "Utterly destroy a bloodline or clan",
      ],
    },

    {
      goal: "Passion",
      subGoals: [
        "Prolong the life of a loved one",
        "Prove worthy of another person's love",
        "Raise or restore a dead loved one",
        "Destroy rivals for another person's affection",
      ],
    },
    {
      goal: "Power",
      subGoals: [
        "Conquer a region or incite a rebellion",
        "Seize control ofan army",
        "Become the power behind the throne",
        "Gain the favor of a ruler",
      ],
    },
    {
      goal: "Revenge",
      subGoals: [
        "Avenge a past humiliation or insult",
        "Avenge a past imprisonment or injury",
        "Avenge the death of a loved one",
        "Retrieve stolen property and punish the thief",
      ],
    },
    {
      goal: "Wealth",
      subGoals: [
        "Control natural resources or trade",
        "Marry into wealth",
        "Plunder ancient ruins",
        "Steal land , goods, or money",
      ],
    },
  ],
  methodsTable: [
    {
      method: "Agricultural",
      subMethod: ["Blight", "Crop failure", "Drought", "Famine"],
    },
    {
      method: "Assault or beatings",
    },
    {
      method: "Bounty hunting or assassination",
    },

    {
      method: "Captivity or coercion",
      subMethod: [
        "Bribery",
        "Enticement",
        "Eviction ",
        "Imprisonment ",
        "Kidnapping",
        "Legal intimidation",
        "Press gangs",
        "Shackling",
        "Slavery",
        "Threats or harassment",
      ],
    },
    {
      method: "Confidence scams",
      subMethod: [
        "Breach of contract",
        "Cheating",
        "Fast talking",
        "Fine print",
        "Fraud or swindling",
        "Quackery or tricks",
      ],
    },
    {
      method: "Defamation",
      subMethod: [
        "Framing",
        "Gossiping or slander",
        "Humiliation",
        "Libel or insults",
      ],
    },
    {
      method: "Dueling Execution",
      subMethod: [
        "Beheading",
        "Burning at the stake",
        "Burying alive",
        "Crucifi xion",
        "Drawing and quartering",
        "Hanging",
        "Impalement",
        "Sacrifice (living)",
      ],
    },
    { method: "Impersonation or disguise" },
    { method: "Lying or perjury" },
    {
      method: "Magical mayhem",
      subMethod: [
        "Hauntings",
        "Illusions",
        "Infernal bargains",
        "Mind control",
        "Petrification",
        "Raising or animating the dead ",
        "Summoning monsters ",
        "Weather control",
      ],
    },

    {
      method: "Murder",
      subMethod: [
        "Assassination",
        "Cannibalism",
        "Dismemberment",
        "Drowning",
        "Electrocution",
        "Euthanasia (involuntary)",
        "Disease",
        "Poisoning",
        "Stabbing",
        "Strangulation or suffocation ",
      ],
    },
    { method: "Neglect" },
    {
      method: "Politics",
      subMethod: [
        "Betrayal or treason",
        "Conspiracy",
        "Espionage or spying",
        "Genocide",
        "Oppression",
        "Raising taxes",
      ],
    },
    {
      method: "Religion",
      subMethod: ["Curses", "Desecration", "False gods", "Heresy or cults"],
    },
    { method: "Stalking" },
    {
      method: "Theft or Property Crime",
      subMethod: [
        "Arson",
        "Blackmail or extortion",
        "Burglary",
        "Counterfeiting",
        "Highway robbery",
        "Looting",
        "Mugging",
        "Poaching",
        "Seizing property",
        "Smuggling",
      ],
    },
    {
      method: "Torture",
      subMethod: [
        "Acid",
        "Blinding",
        "Branding",
        "Racking",
        "Thumbscrews",
        "Whipping",
      ],
    },
    {
      method: "Vice",
      subMethod: ["Adultery", "Drugs or alcohol", "Gambling", "Seduction"],
    },
    {
      method: "Warfare",
      subMethod: [
        "Ambush",
        "Invasion",
        "Massacre",
        "Mercen aries",
        "Rebellion",
        "Terrorism",
      ],
    },
  ],
};

export interface GeneratedQuest {
  goal?: string;
}

export interface GeneratedVillain {
  goal?: string;
  subGoal?: string;
  method?: string;
  subMethod?: string;
}

export const generateQuest = (): GeneratedQuest => {
  const goal = sample(goalsTable);
  return { goal };
};

export const generateVillain = (): GeneratedVillain => {
  const goal = sample(villainsTable.goalsTable);
  const method = sample(villainsTable.methodsTable);
  return {
    goal: goal?.goal,
    method: method?.method,
    subGoal: sample(goal?.subGoals),
    subMethod: sample(method?.subMethod),
  };
};
