import { sample } from "lodash";
import { GeneratedItem, generateItemTraits } from "../../items/utils";

export interface Mod {
  type: "Bio" | "Cyber";
  class?: {
    description?: string;
    extra?: GeneratedItem;
    class?: string;
    locomotion?: string;
  };
}

const classTable: Mod["class"][] = [
  {
    class: "Adaptation",
    description:
      "Choose a type of environment. You can function normally in that environment.",
  },
  {
    class: "Amplifier",
    description:
      "Increases memory, attention, thought speed, and the range of supernatural abilities.",
  },
  {
    class: "Camouflage",
    description: "Blend into your surroundings, especially when not moving.",
  },
  {
    class: "Implements",
    description: "Choose a Kit. It is built directly into your body.",
  },
  {
    class: "Locomotion",
    description:
      "Choose a new means of locomotion: slithering, leaping, climbing, swimming, gliding, hovering.",
  },
  {
    class: "Projectile",
    description:
      "Create effects/projectiles like a Class 1 Firearm. Biomod: Regrow/refill ammunition over time. Cybermod: Spent ammo/cells can be replaced.",
  },
  { class: "Reinforced", description: "+ 1 Armor. Difficult to damage/break." },
  {
    class: "Storage",
    description:
      "Hollow section which can store a variety of small objects. Resists scans.",
  },
  {
    class: "Beauty ",
    description: "Designed to be stunning, dazzling, and distracting.",
  },
  {
    class: "Connector",
    description:
      "Choose a type of vehicle, system, or organism. You can physically attach yourself to it, allowing a direct neural interaction.",
  },
  {
    class: "Link ",
    description:
      "Share thoughts and emotions with others who have the same link.",
  },
  {
    class: "Perception",
    description:
      "Choose a type of information. You can receive sensory data about it when you focus. The more specific the type of information, the more detailed the data collected.",
  },
  {
    class: "Prehensile",
    description:
      "Independent extra limb (or pair of limbs) ending in a Class 0 Melee weapon.",
  },
  {
    class: "Replacement",
    description:
      "Create a Class 1 Melee Weapon that replaces a limb. Manual tasks using that limb are Clumsy without an appropriate upgrade (Glove, Flexible, Hidden, Living, etc.). Does not count towards Mod support maximum.",
  },
];

const locomotionTable = [
  "Slithering",
  "Leaping",
  "Climbing",
  "Swimming",
  "Gliding",
  "Hovering",
];

export const generateMod = (): Mod => {
  const mod = sample(classTable);
  let extra;
  let locomotion;
  if (mod?.class === "Replacement") {
    extra = generateItemTraits("melee", 1);
  } else if (mod?.class === "Projectile") {
    extra = generateItemTraits("firearm", 1);
  } else if (mod?.class === "Prehensile") {
    extra = generateItemTraits("melee", 0);
  } else if (mod?.class === "Locomotion") {
    locomotion = sample(locomotionTable);
  }
  return {
    type: sample(["Bio", "Cyber"]) ?? "Cyber",
    class: {
      class: mod?.class,
      description: mod?.description,
      extra,
      locomotion,
    },
  };
};
