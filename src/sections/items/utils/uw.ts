import { random, sample, sampleSize } from "lodash";

export interface Tag {
  description: string;
  name: string;
}

export interface GeneratedItem {
  armed?: Tag;
  classLevel: number;
  design?: string;
  locomotion?: string;
  tags: Tag[];
  type: ItemTypes;
  switching?: Tag[];
  weapon?: Tag;
  deadly?: Tag[];
  tool?: Tag;
}

export interface ItemTraits {
  melee: {
    tags: Tag[];
  };
  firearm: {
    types: ("pistol" | "rifle")[];
    tags: Tag[];
  };
  heavy: {
    tags: Tag[];
  };
  explosive: {
    types: ("grenade" | "charge" | "missile")[];
    tags: Tag[];
  };
  artillery: {
    tags: Tag[];
  };
  attire: {
    type: ("rugged" | "simple" | "cultural" | "formal" | "uniform")[];
    tags: Tag[];
  };
  landVehicle: {
    type: ("bike" | "groundcar" | "walker" | "quadwalker")[];
    tags: Tag[];
  };
  flyer: {
    type: ("speeder" | "shuttle")[];
    tags: Tag[];
  };
  crew: {
    type: ("squad" | "techs" | "gang" | "staff" | "artificial")[];
    tags: Tag[];
  };
  beast: {
    type: ("weapon" | "locomotion")[];
    tags: Tag[];
  };
}

export type ItemTypes =
  | "melee"
  | "firearm"
  | "heavy"
  | "explosive"
  | "artillery"
  | "attire"
  | "landVehicle"
  | "flyer"
  | "crew"
  | "beast";

export const itemTraits: ItemTraits = {
  melee: {
    tags: [
      {
        name: "Consecrated",
        description:
          "Dedicated to a cause. Causes great harm to enemies of the cause.",
      },
      {
        description: "Causes harm to anyone but its true owner.",
        name: "Dangerous",
      },
      {
        description:
          "Harms shields, supernatural forces, magic, and incorporeal creatures.",
        name: "Disruptive",
      },
      {
        description:
          "Creates a lasting elemental reaction. Ex: fire, corrosion, frost, smoke, etc.",
        name: "Elemental",
      },
      {
        description:
          "A living organic creature. Minor mobility. Regrows and regenerates if hurt.",
        name: "Living",
      },
      {
        description:
          "Two weapons that act in perfect tandem. Mediocre if used separately.",
        name: "Paired",
      },
      {
        description: "Glows with light. Unleashes blinding flashes.",
        name: "Radiant",
      },
      {
        description:
          "Choose a skill. Lessens/diverts/absorbs some of the consequences of failures.",
        name: "Specialized",
      },
      {
        description: "Called into existence from nothing, can be dismissed.",
        name: "Summoned",
      },
      {
        description:
          "Choose 2 basic upgrades. The weapon can switch forms between those two.",
        name: "Switching",
      },
      {
        description:
          "Choose the element or concept this weapon drinks (heat, blood, fear, etc.).",
        name: "Syphon",
      },
      {
        description:
          "A cyber weapon program that also exists inside the SectorNet.",
        name: "Virtual",
      },
      {
        description: "Inconspicuous, easily hidden, doesn’t show on scanners.",
        name: "Concealed",
      },
      {
        description: "Can parry, deflect, and disarm.",
        name: "Defensive",
      },
      {
        description:
          "Causes property damage and damages machinery and vehicles.",
        name: "Destructive",
      },
      {
        description:
          "Glows with incandescent energy, melts, burns, cauterizes.",
        name: "Energy",
      },
      {
        description:
          "Whip-like length capable of binding and lashing. Optimal Range: Adjacent",
        name: "Flexible",
      },
      {
        description: "A heavy, weaponized glove. Can still manipulate objects.",
        name: "Glove",
      },
      {
        description:
          "Two handed. Long reach. Sweeping attacks. Range: Melee, Adjacent",
        name: "Hafted",
      },
      {
        description:
          "Two handed. Massive, resilient. Heavy, devastating attacks, hard to block.",
        name: "Heavy",
      },
      {
        description:
          "Heavy kinetic force that breaks bones and knocks people over.",
        name: "Impact",
      },
      {
        description:
          "Can pin targets, pierce thin materials, and stab with great accuracy.",
        name: "Piercing",
      },
      {
        description: "Loud mechanical motion rips, tears, grinds or shreds",
        name: "Ripper",
      },
      {
        description: "Chops, cuts, causes bleeding and can sever limbs.",
        name: "Severing",
      },
      {
        description:
          "Electrocutes, harms electronics and robots. Can stun on low settings.",
        name: "Shock",
      },
      {
        description: "Looks impressive, distinctive, and unique.",
        name: "Stylish",
      },
      {
        description:
          "Range: Adjacent, Close. Handful of one-handed throwing weapons.",
        name: "Thrown",
      },
    ],
  },
  firearm: {
    types: ["pistol", "rifle"],
    tags: [
      {
        description:
          "Choose a Skill. Characters with that Skill can use it through the weapon.",
        name: "Channel",
      },
      {
        description:
          "Takes significant time to charge up, vastly increased damage at full charge.",
        name: "Charged",
      },
      {
        description:
          "Dedicated to a cause. Causes great harm to enemies of the cause.",
        name: "Consecrated",
      },
      {
        description:
          "Harms shields, supernatural forces, magic, and incorporeal creatures.",
        name: "Disruptive",
      },
      {
        description:
          "A living organic creature. Regrows its own ammo over time.",
        name: "Living",
      },
      {
        description:
          "Two pistols that act in perfect tandem. Mediocre if used separately.",
        name: "Paired",
      },
      {
        description:
          "Projectiles unleash blinding flashes and illuminate targets.",
        name: "Radiant",
      },
      {
        description:
          "Projectiles bounce off hard surfaces, allowing for trick shots.",
        name: "Ricochet",
      },
      {
        description: "Called into existence from nothing, can be dismissed.",
        name: "Summoned",
      },
      {
        description:
          "Choose 2 basic upgrades. The weapon can switch forms between those two.",
        name: "Switching",
      },
      {
        description:
          "Choose the element or concept this weapon drinks (heat, blood, fear, etc.).",
        name: "Syphon",
      },
      {
        description:
          "A cyber weapon program that also exists inside the SectorNet.",
        name: "Virtual",
      },
      {
        description:
          "Attach Class 0 Small weapon with Sharp, Ripper, Energy or Shock.",
        name: "Attachment",
      },
      {
        description: "Instead of a single shot, sprays shots in a wide cone.",
        name: "Burst",
      },
      {
        description: "Inconspicuous, easily hidden, doesn’t show on scanners.",
        name: "Concealed",
      },
      {
        description:
          "Creates a lasting chemical reaction. Ex: fire, corrosion, frost, smoke, etc.",
        name: "Chemical",
      },
      {
        description: "Causes property damage, damages machinery and vehicles.",
        name: "Destructive",
      },
      {
        description:
          "Loud. Causes messy wounds and property damage near the point of impact.",
        name: "Explosive",
      },
      {
        description:
          "Heavy kinetic force that breaks bones and knocks people over.",
        name: "Impact",
      },
      {
        description: "Can only be fired by you unless you unlock it.",
        name: "Keyed",
      },
      {
        description:
          "Projects focused beams of energy that can cut or melt materials.",
        name: "Laser",
      },
      {
        description: "Lobbed, arcing projectile with a modest area of effect.",
        name: "Launcher",
      },
      {
        description: "Mounted to a forearm or shoulder rig, keeps hands free.",
        name: "Mounted",
      },
      { description: "Ignores Armor.", name: "Penetrating" },
      {
        description: "Fires bright bolts of supercharged, burning energy.",
        name: "Plasma",
      },
      {
        description: "Unleashes suppressing fire at multiple targets.",
        name: "Rapid Fire",
      },
      {
        description:
          "Can fire at distant objects. Optimal Ranges: Far, Distant.",
        name: "Scope",
      },
      {
        description: "Electrocutes, harms electronics and robots.",
        name: "Shock",
      },
      {
        description:
          "Causes heavy bleeding and disfigurement around the target.",
        name: "Shrapnel",
      },
      {
        description: "Suppressed muzzle flash and practically silent shot.",
        name: "Silenced",
      },
      {
        description: "No recoil, can be used in micro-gravity environments.",
        name: "Stabilized",
      },
      {
        description: "Non-lethal. Stuns, snares, or renders unconscious.",
        name: "Stun",
      },
      {
        description: "Looks impressive, distinctive, and unique.",
        name: "Stylish",
      },
    ],
  },
  heavy: {
    tags: [
      {
        description:
          "Takes significant time to charge up, vastly increased damage at full charge.",
        name: "Charged",
      },
      {
        description:
          "Dedicated to a cause. Causes great harm to enemies of the cause.",
        name: "Consecrated",
      },
      {
        description:
          "Harms shields, supernatural forces, magic, and incorporeal creatures.",
        name: "Disruptive",
      },
      {
        description:
          "Creates a brief implosion that draws in nearby targets and objects.",
        name: "Implosion",
      },
      {
        description:
          "A living organic creature. Regrows its own ammo over time.",
        name: "Living",
      },
      {
        description:
          "Projectiles bounce off hard surfaces, allowing for trick shots.",
        name: "Ricochet",
      },
      {
        description: "Called into existence from nothing, can be dismissed.",
        name: "Summoned",
      },
      {
        description:
          "Choose 2 basic upgrades. The weapon can switch forms between those two.",
        name: "Switching",
      },
      {
        description:
          "Can be deployed and given simple directives. Fires using your +Interface.",
        name: "Turret",
      },
      {
        description:
          "A cyber weapon program that also exists inside the SectorNet.",
        name: "Virtual",
      },
      {
        description:
          "Breaching, Impact, and Detonation on a roll of 10+, then needs to recharge. ",
        name: "Volatile",
      },
      {
        description: "Damages starships and reinforced structures.",
        name: "Breaching",
      },
      {
        description:
          "Creates a lasting chemical reaction. Ex: fire, corrosion, frost, smoke, etc.",
        name: "Chemical",
      },
      {
        description:
          "Exceptionally loud and bright. Stuns, deafens, blinds, and knocks away.",
        name: "Concussive",
      },
      {
        description: "Explodes in a large blast radius.",
        name: "Detonation",
      },
      {
        description:
          "Heavy kinetic force that breaks bones and knocks people over.",
        name: "Impact",
      },
      {
        description: "Can only be fired by you unless you unlock it.",
        name: "Keyed",
      },
      {
        description:
          "Projects focused beams of energy that can cut or melt materials.",
        name: "Laser",
      },
      { description: "Ignores Armor.", name: "Penetrating" },
      {
        description: "Fires bright bolts of supercharged, burning energy.",
        name: "Plasma",
      },
      {
        description: "Projectile arcs towards a moving target.",
        name: "Seeking",
      },
      {
        description: "Electrocutes, harms electronics and robots.",
        name: "Shock",
      },
      {
        description:
          "Causes amputation, bleeding, and disfigurement in a wide radius.",
        name: "Shrapnel",
      },
      {
        description:
          "Reduces distance but increases coverage to a wide cone. Optimal Range: Close.",
        name: "Spray",
      },
      {
        description: "Non-lethal. Stuns, snares, or renders unconscious.",
        name: "Stun",
      },
      {
        description: "Looks impressive, distinctive, and unique.",
        name: "Stylish",
      },
      {
        description:
          "Unleashes a constant suppressing fire at multiple targets.",
        name: "Sustained",
      },
    ],
  },
  explosive: {
    types: ["charge", "missile", "grenade"],
    tags: [
      {
        description:
          "Dedicated to a cause. Causes great harm to enemies of the cause.",
        name: "Consecrated",
      },
      {
        description:
          "Harms shields, supernatural forces, magic, and incorporeal creatures.",
        name: "Disruptive",
      },
      {
        description:
          "Creates a brief implosion that draws in nearby targets and objects.",
        name: "Implosion",
      },
      {
        description:
          "Continuous effect for several minutes, or repeats multiple times over an hour.",
        name: "Ongoing",
      },
      {
        description:
          "Sends back telemetry needed to perform an Assessment. Non-lethal.",
        name: "Scanner",
      },
      {
        description:
          "Grenade/Missile only. Used with +Interface, seeks target before exploding.",
        name: "Seeking",
      },
      {
        description: "Called into existence from nothing, can be dismissed.",
        name: "Summoned",
      },
      {
        description:
          "Grenade only. Explodes when conditions are met (signal, proximity, etc.).",
        name: "Triggered",
      },
      {
        description:
          "A cyber weapon program that also exists inside the SectorNet.",
        name: "Virtual",
      },
      {
        description:
          "Becomes Breaching, Concussive, and Kinetic on a roll of 10+ when using it.",
        name: "Volatile",
      },
      {
        description:
          "Breaches reinforced buildings and starships. Charge only.",
        name: "Breaching",
      },
      {
        description:
          "Creates a lasting chemical reaction. Ex: incendiary, corrosion, frost, smoke etc.",
        name: "Chemical",
      },
      {
        description:
          "Scatters secondary explosives in the area, which detonate moments later.",
        name: "Cluster",
      },
      {
        description: "Inconspicuous, easily hidden, doesn’t show on scanners.",
        name: "Concealed",
      },
      {
        description:
          "Exceptionally loud and bright. Stuns, deafens, blinds, and knocks away.",
        name: "Concussive",
      },
      {
        description:
          "Causes property damage, damages machinery and vehicles. Grenade only.",
        name: "Destructive",
      },
      {
        description: "Directed high explosive force, little collateral damage.",
        name: "Focused",
      },
      {
        description:
          "Scrambles and disrupts electronic systems, scanners, and advanced weaponry.",
        name: "Haywire",
      },
      {
        description:
          "Massive area of effect, city block or more. Charge or Missile only.",
        name: "High Yield",
      },
      {
        description:
          "Heavy kinetic force that breaks bones and knocks people over.",
        name: "Kinetic",
      },
      {
        description:
          "Creates a nova of incandescent energy that vaporizes matter.",
        name: "Plasma",
      },
      {
        description: "Electrocutes, harms electronics and robots.",
        name: "Shock",
      },
      {
        description: "Causes heavy bleeding, dismemberment, and disfigurement.",
        name: "Shrapnel",
      },
      {
        description: "Attaches itself to any surfaces, difficult to remove.",
        name: "Sticky",
      },
      {
        description: "Non-lethal. Stuns, snares, or renders unconscious.",
        name: "Stun",
      },
      {
        description:
          "Creates impressive, distinctive, and unique visual effects.      ",
        name: "Stylish",
      },
    ],
  },
  artillery: {
    tags: [
      {
        description:
          "Resists non-Breaching damage. Crew +2 Armor from outside harm.",
        name: "Armored",
      },
      {
        description:
          "Takes significant time to charge up, vastly increased damage at full charge.",
        name: "Charged",
      },
      {
        description:
          "Creates a lasting chemical reaction. Ex: fire, corrosion, frost, smoke, etc.",
        name: "Chemical",
      },
      {
        description:
          "Exceptionally loud and bright. Stuns, deafens, blinds, and knocks away.",
        name: "Concussive",
      },
      {
        description:
          "Dedicated to a cause. Causes great harm to enemies of the cause.",
        name: "Consecrated",
      },
      { description: "Explodes in a large blast radius.", name: "Detonation" },
      {
        description:
          "Harms shields, supernatural forces, magic, and incorporeal creatures.",
        name: "Disruptive",
      },
      {
        description:
          "Heavy kinetic force that breaks bones and knocks people over.",
        name: "Impact",
      },
      {
        description:
          "Creates a brief implosion that draws in nearby targets and objects.",
        name: "Implosion",
      },
      {
        description: "Can only be fired by its owner unless they unlock it.",
        name: "Keyed",
      },
      {
        description:
          "Projects focused beams of energy that can cut or melt materials.",
        name: "Laser",
      },
      {
        description: "Launches Missile explosives (see page 95).",
        name: "Launcher",
      },
      {
        description:
          "A living organic creature. Minor mobility. Regrows its own ammo over time. ",
        name: "Living",
      },
      {
        description:
          "Constant effect for several minutes, or repeats multiple times over an hour. ",
        name: "Ongoing",
      },
      {
        description: "Fires bright bolts of supercharged, burning energy.",
        name: "Plasma",
      },
      {
        description:
          "Can be disassembled, carried, and set up elsewhere. Must be set up to fire. ",
        name: "Portable",
      },
      {
        description:
          "Fired with +Interface. Projectile arcs towards a moving target.",
        name: "Seeking",
      },
      {
        description: "Crew gains +1 Armor. Blocks remote Access and hacking.",
        name: "Shielded",
      },
      {
        description: "Electrocutes, harms electronics and robots.",
        name: "Shock",
      },
      {
        description:
          "Causes amputation, bleeding, and disfigurement in a wide radius.",
        name: "Shrapnel",
      },
      {
        description:
          "Reduces distance but increases coverage to a wide cone. Optimal Range: Far. ",
        name: "Spray",
      },
      {
        description: "Non-lethal. Stuns, snares or renders unconscious.",
        name: "Stun",
      },
      {
        description: "Looks impressive, distinctive, and unique.",
        name: "Stylish",
      },
      {
        description: "Called into existence from nothing, can be dismissed.",
        name: "Summoned",
      },
      {
        description:
          "Unleashes a constant suppressing fire at multiple targets.",
        name: "Sustained",
      },
      {
        description:
          "Choose 2 upgrades. The weapon can switch forms between those two. ",
        name: "Switching",
      },
      {
        description:
          "Concussive, Impact, and Detonation on a roll of 10+, then needs to recharge.",
        name: "Volatile",
      },
    ],
  },
  attire: {
    type: ["rugged", "simple", "cultural", "formal", "uniform"],
    tags: [
      {
        description:
          "Dedicated to a cause. Grants +2 Armor against enemies of that cause.",
        name: "Consecrated",
      },
      {
        description:
          "The wearer and those nearby cannot use supernatural abilities.",
        name: "Disruptive",
      },
      {
        description:
          "Constantly creates the chosen mental state (rage, bliss, focus, etc.).",
        name: "Emotional",
      },
      {
        description:
          "Aspects of the attire inconspicuously fold away, deployed when needed.",
        name: "Folding",
      },
      {
        description:
          "A living organic creature. Heals and regrows naturally if damaged.",
        name: "Living",
      },
      {
        description:
          "Bladed, spiked, etc. Limbs and body count as Severing melee weapons.",
        name: "Sharp",
      },
      {
        description:
          "Mimic different Designs at will (rugged, simple, cultural, formal, uniform).",
        name: "Shifting",
      },
      {
        description: "Called into existence from nothing, can be dismissed.",
        name: "Summoned",
      },
      {
        description:
          "A cyber armor program that also exists inside the SectorNet.",
        name: "Virtual",
      },
      { description: "+2 Armor.", name: "Armored" },
      { description: "Clumsy, +3 Armor.", name: "Carapace" },
      {
        description: "Can receive and broadcast signals over great distances.",
        name: "Comms",
      },
      {
        description:
          "Built in computer with eye-piece HUD, connects wirelessly to other systems.",
        name: "Connected",
      },
      {
        description:
          "Ostentatious, distinctive, intimidating, with embellishments and accessories.",
        name: "Impressive",
      },
      {
        description:
          "Can give small burst jumps, slow descent, and controlled flight in zero-g.",
        name: "Jump Jets",
      },
      {
        description: "+1 Armor that looks like normal fabric.",
        name: "Meshweave",
      },
      {
        description:
          "Choose the Kit that is integrated in the suit. A second Kit can still be carried.",
        name: "Rig",
      },
      {
        description: "Protects from elements, hard to damage, easy to repair.",
        name: "Tough",
      },
      {
        description:
          "An airtight suit, helmet and oxygen tank. Functions in space or under water.",
        name: "Sealed",
      },
      {
        description:
          "Choose a type of information. Screen scans and displays that information.",
        name: "Sensor",
      },
      {
        description:
          "+1 Armor provided by thin, invisible energy shield projected by the suit.",
        name: "Shielded",
      },
      {
        description:
          "Muffled, blends in to environments and is difficult to pick up on scanners.",
        name: "Stealthy",
      },
      {
        description:
          "Choose a type of information. The visor detects that subject.",
        name: "Visor",
      },
    ],
  },
  landVehicle: {
    type: ["bike", "groundcar", "quadwalker", "walker"],
    tags: [
      {
        description:
          "Deals extra ramming damage. +6 Armor against head-on collisions.",
        name: "Battering",
      },
      {
        description:
          "Covered in sharp implements. Can cut down or impale targets on foot.",
        name: "Bladed",
      },
      {
        description:
          "Locked, sealed, shielded compartment. Special codes/keys needed to open.",
        name: "Containment",
      },
      {
        description:
          "Aspects of the vehicle inconspicuously fold away, deployed when needed.",
        name: "Folding",
      },
      {
        description:
          "Designed to be piloted by a chosen person, hostile/resistant to other pilots.",
        name: "Keyed",
      },
      {
        description:
          "A living organic creature. Heals and regrows naturally if damaged.",
        name: "Living",
      },
      {
        description:
          "Can attach an Artillery weapon (see page 96). Vehicle is slow and Clumsy. ",
        name: "Platform",
      },
      {
        description: "+1 Armor (grav field). Blocks remote Access and hacking.",
        name: "Shielded",
      },
      {
        description: "Called into existence from nothing, can be dismissed.",
        name: "Summoned",
      },
      {
        description:
          "Chose a Vehicle/Flyer design. Can change to that design and back again. ",
        name: "Transforming",
      },
      {
        description:
          "A cyber vehicle program that also exists inside the SectorNet. ",
        name: "Virtual",
      },
      {
        description: "Quick, maneuverable, able to perform stunts.",
        name: "Agile",
      },
      {
        description:
          "A heavy weapon attached to the vehicle, fired by the pilot.",
        name: "Armed",
      },
      {
        description: "Greatly increases overland speed. Allows short jumps.",
        name: "Boosters",
      },
      {
        description: "Can be remotely activated and given directions.",
        name: "Controlled",
      },
      {
        description:
          "Impressive, high quality, comfortable. Various quality-of-life features.",
        name: "Luxury",
      },
      { description: "+3 Armor.", name: "Plated" },
      {
        description: "Ponderous. +3 Armor. Ignores non-Breaching damage.",
        name: "Reinforced",
      },
      {
        description:
          "Protects from elements, resists environmental damage, easy to repair.",
        name: "Rugged",
      },
      {
        description:
          "Fully enclosed frame, oxygen source. Can function in space, under water, etc.",
        name: "Sealed",
      },
      {
        description: "The vehicle gathers various types of information.",
        name: "Sensors",
      },
      {
        description:
          "Silent, difficult to pick up on sensors, occupants invisible to sensors.",
        name: "Stealthy",
      },
      {
        description:
          "Choose a melee weapon upgrade to represent a tool attached to this vehicle.",
        name: "Tool",
      },
      {
        description:
          "Can carry a dozen people or a cargo container. Groundcar/Quad Walker only.",
        name: "Transport",
      },
      {
        description: "A heavy weapon on a swivel mount, fired by a passenger.",
        name: "Turret",
      },
      {
        description: "Choose a Kit to be integrated into the vehicle.",
        name: "Workspace",
      },
    ],
  },
  flyer: {
    type: ["shuttle", "speeder"],
    tags: [
      {
        description:
          "Designed for ramming. Head-on collisions only cause Major damage.",
        name: "Battering",
      },
      {
        description:
          "Covered in sharp implements. Can cut down or impale targets on foot.",
        name: "Bladed",
      },
      {
        description:
          "Locked, sealed, shielded compartment. Special codes/keys needed to open.",
        name: "Containment",
      },
      {
        description:
          "Aspects of the vehicle inconspicuously fold away, deployed when needed.",
        name: "Folding",
      },
      {
        description:
          "Designed to be piloted by a chosen person, hostile/resistant to other pilots.",
        name: "Keyed",
      },
      {
        description: "Can carry and launch Missile explosives (see page 95).",
        name: "Launcher",
      },
      {
        description:
          "A living organic creature. Heals and regrows naturally if damaged.",
        name: "Living",
      },
      {
        description: "Called into existence from nothing, can be dismissed.",
        name: "Summoned",
      },
      {
        description:
          "Chose a Vehicle or Flyer design. Can change to that design and back again. ",
        name: "Transforming",
      },
      {
        description:
          "A cyber vehicle program that also exists inside the SectorNet.  ",
        name: "Virtual",
      },
      {
        description: "Quick, maneuverable, able to perform stunts.",
        name: "Agile",
      },
      {
        description:
          "A heavy weapon attached to the vehicle, fired by the pilot.",
        name: "Armed",
      },
      { description: "+2 Armor", name: "Armored" },
      {
        description: "Can be remotely activated and given directions.",
        name: "Controlled",
      },
      {
        description:
          "Impressive, high quality, comfortable. Various quality-of-life features.",
        name: "Luxury",
      },
      {
        description:
          "Protects from elements, resists environmental damage, easy to repair.",
        name: "Rugged",
      },
      {
        description:
          "Fully enclosed frame,oxygen source. Can function in space, under water, etc.",
        name: "Sealed",
      },
      {
        description: "The vehicle gathers various types of information.",
        name: "Sensors",
      },
      {
        description:
          "+1 Armor provided by extended grav field. Blocks remote Access and hacking.",
        name: "Shielded",
      },
      {
        description:
          "Silent, difficult to pick up on sensors, occupants invisible to sensors.",
        name: "Stealthy",
      },
      {
        description:
          "Choose a melee weapon upgrade to represent a tool attached to this vehicle.",
        name: "Tool",
      },
      {
        description:
          "Can carry a dozen people or a cargo container. Shuttle only.",
        name: "Transport",
      },
      {
        description: "A heavy weapon on a swivel mount, fired by a passenger.",
        name: "Turret",
      },
      {
        description: "Choose a Kit to be integrated into the vehicle.     ",
        name: "Workspace",
      },
    ],
  },
  crew: {
    type: ["artificial", "gang", "squad", "staff", "techs"],
    tags: [
      {
        description:
          "Belongs to an existing Xeno or Evolved species, shares that species’ traits.",
        name: "Alien",
      },
      {
        description:
          "Resists and makes use of chosen element (fire, ice, acid, dark, light, etc.).",
        name: "Attuned",
      },
      {
        description:
          "Each member has an augmented sense, implanted armor, or grafted weapon.",
        name: "Cybernetic",
      },
      {
        description:
          "Powerful, mysterious, and have their own inscrutable agenda.",
        name: "Enigmatic",
      },
      {
        description:
          "Crew eventually rebuilds, reconstructs, or restores itself after harm/losses.",
        name: "Regenerating",
      },
      {
        description: "Able to perform minor rituals or assist in larger rites.",
        name: "Spiritual",
      },
      {
        description:
          "Commanded into existence. Dismissed when their task is complete.",
        name: "Summoned",
      },
      {
        description:
          "Their avatars automatically follow you into the SectorNet.",
        name: "Virtual",
      },
      {
        description:
          "Dedicated to a cause. Will try to advance the cause when they have no orders.       ",
        name: "Zealots",
      },
      {
        description:
          "Choose a Class 1 Firearm. The crew is equipped with it and trained in its use.",
        name: "Armed",
      },
      {
        description:
          "Able to bombard with artillery, turrets, or starship weaponry.",
        name: "Artillery",
      },
      {
        description:
          "Graceful, swift, strong, and flexible. Much better than average, physically.",
        name: "Athletic",
      },
      {
        description:
          "Chosen for their good looks and wit. Able to distract and entertain.",
        name: "Beautiful",
      },
      {
        description:
          "Able to build small structures or assist in construction projects.",
        name: "Builders",
      },
      {
        description:
          "Able to commit small-scale criminal activities or assist with larger crimes.",
        name: "Criminal",
      },
      {
        description:
          "Choose a Kit. The crew carries various tools from that kit and can use them.",
        name: "Equipped",
      },
      {
        description:
          "Never afraid or intimidated, will follow insane orders, but often go too far.",
        name: "Fearless",
      },
      {
        description:
          "Imposing in some way. Able to frighten, threaten, dissuade, etc.",
        name: "Imposing",
      },
      {
        description:
          "Able to collect information and report back, or pass on information.",
        name: "Informants",
      },
      {
        description:
          "Only take orders from you. Quickly recover to their normal disposition",
        name: "Loyal",
      },
      {
        description:
          "Able to service and maintain machinery, and assist in repairs and overhauls.",
        name: "Mechanics",
      },
      {
        description:
          "Able to provide long-term convalescent care or assist in medical procedures.",
        name: "Medics",
      },
      {
        description:
          "There are a large number of them, you have trouble keeping track of them all.",
        name: "Numerous",
      },
      {
        description: "Can work in harsh climates for extended periods of time.",
        name: "Rugged",
      },
      {
        description:
          "Able to sneak into (or out of) places, and pass unnoticed.",
        name: "Stealthy",
      },
      {
        description:
          "Able to quickly load, unload, assemble, and pack away heavy objects/cargo.",
        name: "Teamsters",
      },
      {
        description: "Able to destroy terrain and structures.",
        name: "Wreckers",
      },
    ],
  },
  beast: {
    type: ["locomotion", "weapon"],
    tags: [
      {
        description:
          "Perfectly at home in the chosen environment. Can survive harsh climates.",
        name: "Adaptation",
      },
      {
        description:
          "Resists and makes use of chosen element (fire, ice, acid, dark, light, etc.).",
        name: "Attuned",
      },
      {
        description:
          "Impressive, aesthetically pleasing. Can distract, charm, and entertain.",
        name: "Beautiful",
      },
      {
        description:
          "Share thoughts and emotions with their master and others with this bond.",
        name: "Bond",
      },
      {
        description:
          "Choose a melee weapon upgrade. They attack with that upgrade.",
        name: "Deadly",
      },
      {
        description: "Causes property damage, harms vehicles.",
        name: "Destructive",
      },
      {
        description:
          "Able to carry objects with their hands and perform simple manipulations.",
        name: "Dextrous",
      },
      {
        description:
          "Harms shields, supernatural forces, magic, and incorporeal creatures.",
        name: "Disruptive",
      },
      {
        description:
          "Constantly creates a chosen mental state (rage, bliss, focus, etc.).",
        name: "Emotional",
      },
      {
        description:
          "Can carry or drag heavy burdens for extended periods of time.",
        name: "Mighty",
      },
      {
        description:
          "Large. Can be ridden. Steered with +Influence or +Physique.",
        name: "Mount",
      },
      {
        description:
          "New locomotion: slithering, leaping, climbing, swimming, flying, hovering.",
        name: "Movement",
      },
      {
        description:
          "Several animals that work as a team. They take up more room and food.",
        name: "Pack",
      },
      {
        description:
          "Choose a sense (sight, hearing, smell, vibration, etc.).It is extremely advanced.",
        name: "Perception",
      },
      {
        description: "Able to interpose themselves to protect others.",
        name: "Protective",
      },
      {
        description: "Camouflaged, silent, able to sneak and pass unnoticed.",
        name: "Stealthy",
      },
      {
        description:
          "Commanded into existence. Dismissed when their task is complete.",
        name: "Summoned",
      },
      { description: "Able to frighten or threaten.", name: "Terrifying" },
      {
        description:
          "Very small. Can fit on a shoulder or in a pouch. (Cannot be a Mount).",
        name: "Tiny",
      },
      {
        description: "Can survive most harm with only minor injuries.",
        name: "Tough",
      },
      {
        description:
          "Their avatars automatically follow you into the SectorNet.      ",
        name: "Virtual",
      },
    ],
  },
};

const generateMeleeWeapon = (itemClass?: number): GeneratedItem => {
  const classLevel = itemClass ?? random(2) + 2;
  const tags = sampleSize(itemTraits.melee.tags, classLevel);
  let switching;
  if (tags.some((tags) => tags.name === "Switching")) {
    switching = sampleSize(itemTraits.melee.tags, 2);
  }
  return {
    classLevel,
    tags,
    type: "melee",
    switching,
  };
};
const generateFirearm = (itemClass?: number): GeneratedItem => {
  const classLevel = itemClass ?? random(2) + 1;
  const tags = sampleSize(itemTraits.firearm.tags, classLevel);
  let switching;
  if (tags.some((tags) => tags.name === "Switching")) {
    switching = sampleSize(itemTraits.firearm.tags, classLevel);
  }
  return {
    classLevel,
    design: sample(itemTraits.firearm.types),
    tags,
    type: "firearm",
    switching,
  };
};
const generateHeavyWeapon = (itemClass?: number): GeneratedItem => {
  const classLevel = itemClass ?? random(2) + 1;
  const tags = sampleSize(itemTraits.firearm.tags, classLevel);
  let switching;
  if (tags.some((tags) => tags.name === "Switching")) {
    switching = sampleSize(itemTraits.firearm.tags, 2);
  }
  return {
    classLevel,
    design: sample(itemTraits.firearm.types),
    tags,
    type: "heavy",
    switching,
  };
};
const generateExplosive = (itemClass?: number): GeneratedItem => {
  const classLevel = itemClass ?? random(2) + 1;
  const tags = sampleSize(itemTraits.explosive.tags, classLevel);
  return {
    classLevel,
    design: sample(itemTraits.explosive.types),
    tags,
    type: "explosive",
  };
};
const generateArtillery = (itemClass?: number): GeneratedItem => {
  const classLevel = itemClass ?? random(2) + 1;
  const tags = sampleSize(itemTraits.artillery.tags, classLevel);
  let switching;
  if (tags.some((tags) => tags.name === "Switching")) {
    switching = sampleSize(itemTraits.firearm.tags, 2);
  }
  return {
    classLevel,
    tags,
    type: "artillery",
    switching,
  };
};
const generateAttire = (itemClass?: number): GeneratedItem => {
  const classLevel = itemClass ?? random(2) + 1;
  const tags = sampleSize(itemTraits.attire.tags, classLevel);
  return {
    classLevel,
    tags,
    type: "attire",
    design: sample(itemTraits.attire.type),
  };
};
const generateLandVehicle = (itemClass?: number): GeneratedItem => {
  const classLevel = itemClass ?? random(2) + 1;
  const tags = sampleSize(itemTraits.landVehicle.tags, classLevel);
  const tool = tags.some((t) => t.name === "Tool")
    ? sample(itemTraits.melee.tags)
    : undefined;
  return {
    classLevel,
    tags,
    tool,
    type: "landVehicle",
    design: sample(itemTraits.landVehicle.type),
  };
};
const generateFlyer = (itemClass?: number): GeneratedItem => {
  const classLevel = itemClass ?? random(2) + 1;
  const tags = sampleSize(itemTraits.flyer.tags, classLevel);
  const tool = tags.some((t) => t.name === "Tool")
    ? sample(itemTraits.melee.tags)
    : undefined;
  return {
    classLevel,
    tags,
    tool,
    type: "flyer",
    design: sample(itemTraits.flyer.type),
  };
};
const generateCrew = (itemClass?: number): GeneratedItem => {
  const classLevel = itemClass ?? random(2) + 1;
  const tags = sampleSize(itemTraits.crew.tags, classLevel);
  let armed;
  return {
    armed,
    classLevel,
    tags,
    type: "crew",
    design: sample(itemTraits.crew.type),
  };
};
const generateBeast = (itemClass?: number): GeneratedItem => {
  const classLevel = itemClass ?? random(2) + 1;
  const tags = sampleSize(itemTraits.beast.tags, classLevel);
  const design = sample(itemTraits.beast.type);
  let locomotion;
  let weapon;
  if (design === "locomotion") {
    locomotion = sample([
      "slithering",
      "leaping",
      "climbing",
      "swimming",
      "gliding",
      "hovering",
      "flying",
    ]);
  } else if (design === "weapon") {
    weapon = sample(itemTraits.melee.tags);
  }
  return {
    classLevel,
    tags,
    type: "beast",
    design,
    locomotion,
    weapon,
  };
};
export const generateItemTraits = (itemType?: string, itemClass?: number) => {
  const itemTypes = Object.keys(itemTraits);
  let type = itemType ?? sample(itemTypes);
  switch (type) {
    case "melee":
      return generateMeleeWeapon(itemClass);
    case "firearm":
      return generateFirearm(itemClass);
    case "heavy":
      return generateHeavyWeapon(itemClass);
    case "explosive":
      return generateExplosive(itemClass);
    case "artillery":
      return generateArtillery(itemClass);
    case "attire":
      return generateAttire(itemClass);
    case "landVehicle":
      return generateLandVehicle(itemClass);
    case "flyer":
      return generateFlyer(itemClass);
    case "crew":
      return generateCrew(itemClass);
    case "beast":
      return generateBeast(itemClass);
    default:
      break;
  }
};
