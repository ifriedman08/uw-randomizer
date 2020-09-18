import { random, sample, sampleSize } from "lodash";

export interface Vessel {
  tier: number;
  class: number;
  form?: { name: string; description: string };
  upgrades?: { name: string; description: string }[];
}

const formTable: Vessel["form"][] = [
  {
    name: "Crawler",
    description:
      "(Land Vessel) Moves overland on wheels or treads. Does not suffer additional damage if locomotion is disabled. Easiest Vessel to build, fix and maintain. Negligible penalties for excess weight.",
  },
  {
    name: "Grav-Flyer",
    description:
      "(Sky Vessel) Fast moving plane/grav-tank, propelled by gravity engines. Must keep moving. Can land and take off on prepared surfaces (landing strips). Low stability, can be destabilized by harsh weather and environmental dangers. Will crash if gravity engines fail.",
  },
  {
    name: "Starship",
    description:
      "(Space Vessel) Operates in vacuum, can enter and exit planetary atmospheres. Tier I-II can land on any surface, Tier III-IV can land on prepared surfaces (landing pads).Tier V+ count landings as crash landings. Vulnerable to hull breaches (decompression).",
  },
  {
    name: "Grav-Platform",
    description:
      "(Sky Vessel) Slow moving skyship held aloft by gravity engines. Can hover in place. Can land and take off on almost any surface. Extremely stable. Will crash if gravity engines fail.",
  },
  {
    name: "Mecha, Humanoid",
    description:
      "(Land Vessel) Strides across terrain on two legs. Full range of humanoid motion. Capable of picking up, carrying, and manipulating objects. Ignores normal “Sections” rules, instead has 5 Sections (Torso, Left Arm, Right Arm, Left Leg, Right Leg). All aspects of the Mecha are controlled from the Torso section. Damage to the legs causes a short fall.",
  },
  {
    name: "Mecha, Quadruped",
    description:
      "(Land Vessel) Strides across terrain on four legs. Greater stability and terrain navigation. In addition to the usual compliment of sections, it has four additional sections (Front Left Leg, Front Right Leg, Back Left Leg, Back Right Leg). Damage to the legs causes a short fall.",
  },

  {
    name: "Watercraft",
    description:
      "(Ocean Vessel) Floats on or under liquid or semi-liquid surfaces. Does not suffer additional issues/damage if locomotion is disabled. Venerable to hull breaches (sinking).",
  },
];

const upgradeTable: Vessel["upgrades"] = [
  {
    name: "Armored",
    description:
      "Gain +1 when rolling Brace for Impact. Vessel is slightly slower, bulkier and heavier for each instance of Armored.",
  },
  {
    name: "Artificial Gravity",
    description:
      "Creates its own internal gravity. Can create small gravitational fields to stabilize or tractor in nearby objects.",
  },

  {
    name: "Automated",
    description:
      "Choose an upgrade installed on this Vessel. That upgrade doesn’t need to be manually operated, and will act as programmed.",
  },
  { name: "Cargo Bay", description: "Holds X Cargo containers." },
  {
    name: "Jump-Drive",
    description:
      "Allows the Vessel to use Jump Points and make Wild Jumps. Requires a Reactor.",
  },
  {
    name: "Launch Bay",
    description:
      "Holds X Vehicles. Vehicles can be launched/deployed from here.",
  },
  {
    name: "Life Support",
    description:
      "Creates its own oxygen. Recycles water and waste for up to 10 people per tier. Necessary for Starships.",
  },
  {
    name: "Massive",
    description: "Built at a greater scale, increase the Vessel’s Tier by 1.",
  },
  {
    name: "Pivot",
    description:
      "The section where this is installed is can rotate/pivot independently of the angle of the rest of the Vessel.",
  },
  {
    name: "Reactor",
    description:
      "A dedicated energy source for demanding systems like Boosters, Jump-Drives, Shields, or Cloak. Can only power one system at a time.",
  },
  {
    name: "Shields",
    description:
      "Deflects environmental harm and debris. Can be actively used by a character to add their +Interface to the Vessel’s Brace For Impact roll.",
  },
  {
    name: "Stylish",
    description: "Impressive, unique, artistic, inspires awe and/or fear.",
  },
  {
    name: "Turrets",
    description:
      "Design a Heavy Weapon (page 94). The Vessel has X turrets equipped with that weapon. Each turret covers a semi-spherical arc.",
  },
  {
    name: "Workspace",
    description:
      "Choose a workspace from any career to install in this section. The higher the tier of Vessel, the larger the workspace.",
  },
  {
    name: "Artillery",
    description:
      "Design an Artillery Weapon (page 96). The Vessel has that weapon attached.",
  },
  {
    name: "Boosters",
    description:
      "Allows non-flying Vessels to jump, hover, or fly. Gives airborne Vessels a massive burst of speed. Requires a Reactor.",
  },
  {
    name: "Cloak",
    description:
      "The Vessel fades from view, and is almost undetectable. It moves slowly and can’t attack while Cloaked. Requires a Reactor.",
  },
  {
    name: "Quarters",
    description:
      "Choose X: Single luxury suite, 2 regular rooms, common room for 4 people, or 8 cryochambers.",
  },
  {
    name: "Sensors",
    description:
      "Long-range detection across multiple bands. Includes advanced targeting and satellite uplink.",
  },
  {
    name: "Weapon",
    description:
      "The Vessel’s hull is equipped with a massive weapon that can be used to ram or sideswipe. Mecha Vessels swing this as a Melee weapon.",
  },
];

export const generateVessel = (): Vessel => {
  const vClass = random(5) + random(5);
  let tier;
  if (vClass <= 3) tier = 1;
  else if (vClass <= 6) tier = 2;
  else if (vClass <= 9) tier = 3;
  else if (vClass <= 12) tier = 4;
  else tier = 2;
  const upgrades = sampleSize(upgradeTable, vClass);
  if (upgrades.some((u) => u.name === "Massive")) {
    tier = tier + 1;
  }

  return {
    tier,
    class: vClass,
    form: sample(formTable),
    upgrades,
  };
};
