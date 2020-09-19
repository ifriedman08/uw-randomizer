import { sample } from "lodash";

export interface Skill {
  name: string;
  description: string;
  iconName?: string;
}

const skillsTable: { [key: string]: Skill } = {
  education: {
    name: "education",
    description:
      "When you gain one or more Data Points about a subject, each ally that was present or involved also gains a Data Point about the subject.",
    iconName: "school",
  },
  chemistry: {
    name: "chemistry",
    description:
      "When creating an antidote, vaccine, drug, poison or pathogen in a lab, state the effect you want it to have and its method of transmission (spray, injector, pill, etc). Roll+Expertise.\nOn a 10+, you successfully create it.\nOn a 7-9, it will have reduced potency or have unintended side effects.",
    iconName: "flask",
  },
  surgery: {
    name: "surgery",
    description:
      "When using a medical facility, your Patch Up can be used to install prosthetics and perform surgical reconstruction on living beings. This treats critical injuries.",
    iconName: "medkit",
  },
  deduction: {
    name: "deduction",
    description:
      "When you first witness a situation, you may ask one of the following questions, the GM will answer honestly.\nWho or what? \n- is most vulnerable in this situation? \n- is most dangerous in this situation? \n- caused this situation?",
    iconName: "search",
  },
  technobabble: {
    name: "technobabble",
    description:
      "You can Command crew using Expertise rather than Influence. Subjects of your Command can perform minor technical or scientific tasks, no matter their skill set.",
    iconName: "wifi",
  },
  stealth: {
    name: "stealth",
    description:
      "Whenever you can move around freely and are unobserved, you can choose to vanish without a trace. While missing, you may show up in the midst of events, as long as you can explain how you got there.",
    iconName: "contact",
  },
  sabotage: {
    name: "sabotage",
    description:
      "When you tamper with machines, plans, etc, describe how you go about it and Roll+[Stat].\nOn a 10+ the target of your tampering is doomed to fail, just as you planned.\nOn a 7-9, the target of your tampering is doomed to fail spectacularly, horrifically or comically, at the GM's discretion.",
    iconName: "build",
  },
  assassination: {
    name: "assassination",
    description:
      "Any successful (10+) Move that results in someone's death also leaves no evidence that you committed the act.",
    iconName: "locate",
  },
  surveillance: {
    name: "surveillance",
    description:
      "After you Access someone's personal systems, you can track that person's public movements from then on (general location, interactions, transactions, etc). You can only have one surveillance subject at a time.",
    iconName: "videocam",
  },
  interrogation: {
    name: "interrogation",
    description:
      "When you question someone who is at your mercy, gain 3 Data Points about them: their lives, their job, their transactions, their friends, their family, their guilt, their shame, etc.",
    iconName: "help",
  },
  outfit: {
    name: "outfit",
    description:
      "Own a unique Class 3 Attire. If your attire is ever lost or damaged, you can abandon it and spend an extended period of time claiming new attire as your Outfit, adding an extra upgrade to it.",
    iconName: "shirt",
  },
  marketing: {
    name: "marketing",
    description:
      "When you arrive in a civilized area, choose a type of market. You can easily find that kind of market here.\n- Elite: High class, exacting.\n- Secretive: Discrete, illicit.\n- Motivated: Fast, agreeable.",
    iconName: "cash",
  },
  acumen: {
    name: "acumen",
    description:
      "When you first visit a market or environment, you may ask one of the following questions, and the GM will answer honestly:\n- What is profitably exploitable here?\n- What is in high demand here?\n- Who is the biggest economic player?",
    iconName: "card",
  },
  luxury: {
    name: "luxury",
    description:
      "Your clothing, belongings and quarters are all lavish and expensive. Gain one of the following NPCs as a retainer: Butler, Assistant, Consort or Advisor. Name the NPC and give them a 2-4 word description.",
    iconName: "star",
  },
  bribe: {
    name: "bribe",
    description:
      "You can use Acquisition to purchase the following: \n- Political power \n- Legal decisions \n- Faction involvement \n- Diplomatic immunity",
    iconName: "wallet",
  },
  "boldly go": {
    name: "boldly go",
    description:
      "When leading an expedition into the unknown, Roll+Mettle. \nOn a 10+, choose 1. \nOn a 7-9, the GM will choose 1. \nYou encounter: \n- something potentially profitable \n- something currently useful \n- something uniquely awesome",
    iconName: "rocket",
  },
  reconnaissance: {
    name: "reconnaissance",
    description:
      "When you make an Assessment of any aspect of a wilderness (animals, plants, weather, terrain, hazards, etc) you gain 3 Data Points about that subject on a 10+, and 1 Data Point about that subject on a 7-9.",
    iconName: "search",
  },
  survival: {
    name: "survival",
    description:
      "You can scrounge up the following from all but the most barren, inhospitable surroundings:\n- Somewhat edible food and drink\n- Basic medicine or first-aid materials\n- Rustic Wilderness Kit\n- Primitive Class 0 melee weapon",
    iconName: "bonfire",
  },
  recklessness: {
    name: "recklessness",
    description:
      "When you make a needlessly risky Move where the odds are a million to one, roll 1d6 instead of making a normal Roll. On a 4, 5 or 6, the Move is a fantastically lucky success. On a 1, 2 or 3, the Move is a spectacularly awful failure with harsh consequences.",
    iconName: "warning",
  },
  "custom vehicle": {
    name: "custom vehicle",
    description:
      "You own a custom-designed Class 3 land vehicle. If that vehicle is ever lost, you can spend an extended period of time claiming a new land vehicle as your Custom Vehicle, adding an extra upgrade to it.",
    iconName: "car",
  },
  repair: {
    name: "repair",
    description:
      "When using a repair bay or workshop, your Patch Up can be used to install replacement parts and perform major reconstruction on machines. This repairs critical and fatal breakages.",
    iconName: "build",
  },
  construction: {
    name: "construction",
    description:
      "A few hours of work creates a small structure with one of the following traits, or adds that trait to an existing room.\n- Shelter\n- Defensible\n- Concealed\n- Workspace",
    iconName: "construct",
  },
  tinker: {
    name: "tinker",
    description:
      "You can assemble the following from scrap metal and spare parts:\n- Shoddy Class 0 melee weapon\n- Makeshift Class 0 explosive\n- Crude Engineering Kit",
    iconName: "hammer",
  },
  upgrade: {
    name: "upgrade",
    description:
      "Your Patch Up can very temporarily add up to one additional upgrade to a weapon or vehicle, briefly increasing its Class by +1.",
    iconName: "trending-up",
  },
  dismantle: {
    name: "dismantle",
    description:
      "When forcefully dismantling, demolishing or breaking something, Roll+Physique.\nOn a 10+, choose 2.\nOn a 7-9, choose 1.\n- It doesn't take very long.\n- It doesn't attract too much attention.\n- You recover useful components.\n- You could rebuild or reassemble it.\n- You gain a Data Point about it.",
    iconName: "cog",
  },
  tactics: {
    name: "tactics",
    description:
      "When you Open Fire or Launch Assault, you choose one or more consequences on a partial success (7-9), not the GM.",
    iconName: "clipboard",
  },
  toughness: {
    name: "toughness",
    description:
      "You can suffer two injuries of each severity, rather than one.",
    iconName: "heart",
  },
  "unique weapon": {
    name: "unique weapon",
    description:
      "Own a unique Class 3 firearm or heavy weapon. If that weapon is ever lost, you can abandon it and spend an extended period of time claiming a new weapon as your Unique Weapon, adding an extra upgrade to it.",
    iconName: "flame",
  },
  "heavy lifting": {
    name: "heavy lifting",
    description:
      "Ignore the Clumsy trait inflicted by heavy weapons, heavy armor, encumbrance and high gravity.",
    iconName: "fitness",
  },
  authority: {
    name: "authority",
    description:
      "Whenever you are in a position of clear superiority over a group of NPCs, you can Command those NPCs even if the order goes against their own traits, loyalties and willingness.",
    iconName: "medal",
  },
  fame: {
    name: "fame",
    description:
      "Decide what you are famous/infamous for. Factions, groups and people of importance always know who you are when you meet them. Allies may use your +Influence if they speak in your name, but you'll suffer for any faux-pas.",
    iconName: "star",
  },
  leadership: {
    name: "leadership",
    description:
      "You have a hand-picked, elite Class 3 Crew. Given enough time and training, you can replace lost members of this crew with new NPCs.",
    iconName: "people",
  },
  contacts: {
    name: "contacts",
    description:
      "You have acquaintances and contacts all over the galaxy. When arriving anywhere civilized, introduce a contact. That NPC operates here.",
    iconName: "contacts",
  },
  inspiration: {
    name: "inspiration",
    description:
      "Choose an emotion and the medium/ art with which you convey it, then Roll+Influence or +Physique.\nOn a 7-9, the emotion takes hold of your audience.\nOn a 10+, as above, and choose 1:\n- You gain a keen admirer.\n- You are treated lavishly.\n- You can Command the audience.",
    iconName: "bulb",
  },
  diplomacy: {
    name: "diplomacy",
    description:
      "Factions will ignore political boundaries, jurisdictions, your personal relationship, and even their own prejudices when you call in a Favor.",
    iconName: "globe",
  },
  criminal: {
    name: "criminal",
    description:
      "Any successful (10+) Move that involves theft, smuggling, extortion or similar crimes also leaves no evidence that could indict you.",
    iconName: "glasses",
  },
  "sneak attack": {
    name: "sneak attack",
    description:
      "When you get the drop on someone, Roll+Mettle.\nOn a 10+, choose 1.\nOn a 7-9, the GM will give you 2 of the following options, choose 1 of them.\n- Kill them\n- Injure them\n- Rob/disarm them\n- Capture/disable them",
    iconName: "flash",
  },
  scapegoat: {
    name: "scapegoat",
    description:
      "When you would suffer social, legal or financial consequences, name someone and Roll+Expertise.\nOn a 10+, they suffer instead.\nOn a 7-9, as above. They know it was you. On a 6-, it didn't work, and they know what you tried to do.",
    iconName: "walk",
  },
  "false identity": {
    name: "false identity",
    description:
      "You maintain a number of fake identities that have neutral standing with all factions. As long as a chosen identity holds, your actions do not incur Debt or earn Favor.",
    iconName: "contact",
  },
  addict: {
    name: "addict",
    description:
      "Choose one of your five stats. As long as you regularly dose yourself with your drug of choice, increase that stat by +1. Failure to subsequently dose yourself will reduce that stat by -2 until you dose yourself again or recover from the lengthy effects of withdrawal.",
    iconName: "medical",
  },
  weightlessness: {
    name: "weightlessness",
    description:
      "Ignore the Clumsy trait and/or movement restrictions inflicted by micro- gravity, low-gravity, freefall, climbing and jump jets. A successful (10+) Move while in those situations lets you describe a moment of exceptional acrobatic grace.",
    iconName: "cloudy",
  },
  cosmopolitan: {
    name: "cosmopolitan",
    description:
      "When you make an Assessment of any aspect of a society (culture, traditions, laws, government, economy, etc) you gain 3 Data Points about that subject on a 10+, and 1 Data Point about that subject on a 7-9.",
    iconName: "business",
  },
  navigation: {
    name: "navigation",
    description:
      "When you plan a long voyage, choose 1. The voyage will be:\n- Fast: You know a shortcut.\n- Safe: Choose a faction to avoid.\n- Pleasant: +2 to Cramped Quarters.\n- Profitable: If you deliver the passengers who are asking for passage.",
    iconName: "compass",
  },
  calibrations: {
    name: "calibrations",
    description:
      "When you diligently calibrate your favorite console or vehicle, make a Get Involved using Interface and record the result. The next time anyone uses it, the result of the Get Involved applies.",
    iconName: "build",
  },
  "custom flyer": {
    name: "custom flyer",
    description:
      "You own a custom-designed Class 3 shuttle or speeder vehicle. If that vehicle is ever lost, you can spend an extended period of time claiming a new vehicle as your Custom Vehicle, adding an extra upgrade to it.",
    iconName: "jet",
  },
  upload: {
    name: "upload",
    description:
      "Expend a Data Point on the SectorNet to have the facts about the subject:\n- be erased, hidden, classified.\n- become common knowledge.\n- be falsified, pivotally altered.",
    iconName: "cloud-upload",
  },
  hijack: {
    name: "hijack",
    description:
      "When you Access a system, it locks out everyone else. You can open the system to anyone you wish.",
    iconName: "lock",
  },
  program: {
    name: "program",
    description:
      "When you Access a system, choose a behavior that the system could perform and a condition that will trigger that behavior.",
    iconName: "code-working",
  },
  network: {
    name: "network",
    description:
      "You can simultaneously track the location and health of a dozen willing subjects through a console or HUD. You are able to remotely Get Involved or issue Commands.",
    iconName: "wifi",
  },
  "artificial intelligence": {
    name: "artificial intelligence",
    description:
      "You have the loyalty of a digital, artificial intelligence NPC. Give it a name and a 2-4 word description of its personality. It can enter, unlock and activate systems at your Command. Your AI can only be in one system at a time.",
    iconName: "cog",
  },
  "cutting edge": {
    name: "cutting edge",
    description:
      "Interacting with new, advanced technology comes naturally to you. On the other hand, dealing with old, clunky, obsolete dreck is rather aggravating. You gain +1 to your Interface stat, to a maximum of +2.",
    iconName: "cloud-upload",
  },
  branded: {
    name: "branded",
    description:
      "You have a prominent, recognisable physical mark (scars, burns, tattoos, prison barcode, slave brand), as a testament to the hardships you've survived. You gain +1 to your Physique stat, to a maximum of +2.",
    iconName: "flash",
  },
  resourceful: {
    name: "resourceful",
    description:
      "You're good at making do with limited resources, and getting the most out of what you have, making you a bit of a hoarder. You gain +1 to your Expertise stat, to a maximum of +2.",
    iconName: "bonfire",
  },
  affable: {
    name: "affable",
    description:
      "You get along well with almost everyone in your own way. You are most comfortable around others, and get lonely quickly. You gain +1 to your Influence stat, to a maximum of +2.",
    iconName: "contacts",
  },
  "fine tuning": {
    name: "fine tuning",
    description:
      "You're adept at interfacing with climate controlled living spaces; natural environments tend to be uncomfortable. You gain +1 to your Interface stat, to a maximum of +2.",
    iconName: "build",
  },
  scrappy: {
    name: "scrappy",
    description:
      "Life has beaten you down, but you never, ever give up. No matter how bad things get, you rarely back down, even when you really should. You gain +1 to your Mettle stat, to a maximum of +2.",
    iconName: "fitness",
  },
  decorum: {
    name: "decorum",
    description:
      "You are well versed in the rules of etiquette, civility and propriety. You can carry yourself with grace in formal affairs, but are ill-at-ease in casual settings. You gain +1 to your Influence stat, to a maximum of +2.",
    iconName: "cube",
  },
  vocation: {
    name: "vocation",
    description:
      "You've spent many years training in a variety of techniques and trades. Sadly, you've never had time for fun or relaxation. You gain +1 to your Expertise stat, to a maximum of +2.",
    iconName: "school",
  },
  discipline: {
    name: "discipline",
    description:
      "You know the rules, the codes, the processes, the scripture, the laws. They give you stability. You don't deal well with change. You gain +1 to your Mettle stat, to a maximum of +2.",
    iconName: "qr-scanner",
  },
  "hard labor": {
    name: "hard labor",
    description:
      "You can perform long grueling hours of physical labor with minimal rest. You've collected a wide variety of aches, pains and minor ailments from doing this. You gain +1 to your Physique stat, to a maximum of +2.",
    iconName: "hammer",
  },
  harder: {
    name: "harder",
    description:
      "You resist damage as a Vehicle would: Incoming damage is reduced by one step before you Brace for Impact, unless that damage has Penetrating or Breaching.",
  },
  better: {
    name: "Better",
    description:
      "Your body can support two additional cybernetic Mods. You gain two free cybermods if this Skill was chosen during character creation.",
  },
  faster: {
    name: "faster",
    description:
      "Your run speed and reaction time are incredibly fast. You can include extreme acts of acrobatics, reflexes, and/or flexibility in your Moves (quick- drawing weapons, catching bullets, running up walls, outrunning explosions, sprinting on water, etc.).",
  },
  technologic: {
    name: "technologic",
    description:
      "You can establish a wireless mental connection to any computer system within line of sight. Open and Accessed systems remain connected to you as long as you are within signal range. ",
  },
  stronger: {
    name: "stronger",
    description:
      "Your unarmed and melee attacks are Destructive, Impact, and Penetrating.",
  },
  pact: {
    name: "pact",
    description:
      "Create a Faction consisting of just your deity. You gain 1 Favor and 3 Debt with it. You communicate with your deity through prayer and can call in Favors. Your deity makes demands and calls in your Debts through dreams and prophecy. ",
  },
  "lay on hands": {
    name: "lay on hands",
    description:
      "Your Patch Up takes only a few seconds. You do not need tools or materials to perform a Patch Up, just a touch and a word.",
  },
  relic: {
    name: "relic",
    description: `Create a Class 3 melee weapon. Choose one:
- It is a symbol of your order.
- It is a sign of your greatness.
- It is feared and reviled.
A Relic is almost indestructible. If you become separated, you always have a vague, painful sense of where it is.`,
  },
  wisdom: {
    name: "wisdom",
    description: `When you are in Cramped Quarters with yourself or another, choose any number of the following:
- Peace: Each participant recovers from a minor debility.
- Quiet: Get Involved has no effect on the Cramped Quarters.
- Enlightenment: Do not roll, simply use the 7-9 result.
- Introspection: Each participant`,
  },
  inscribe: {
    name: "inscribe",
    description:
      "When you perform a Patch Up using a Ritual Kit, you can very temporarily add an Attire upgrade to a person or set of Attire.",
  },
  trinkets: {
    name: "trinkets",
    description:
      "Whenever you successfully engage a foreign society (visit, experience, infiltrate, attack, etc.), gain a Class 1 Cargo of miscellaneous baubles, trinkets, and other cultural detritus.",
  },
  linguist: {
    name: "linguist",
    description:
      "You can communicate passably in the languages of all known societies and species. A successful Assessment of a newly-encountered or long-dead culture grants you permanent access to their written and/or spoken language.",
  },
  advise: {
    name: "advise",
    description: `
    When you steer someone towards a decision or desire, Roll+Influence.
    -On a 10+, they readily accept your advice and will act on it if they can.
    -On a 7-9, they’re cautious, conflicted or confused. They need time before they’re ready to act.
    `,
  },
  adaptive: {
    name: "adaptive",
    description:
      "You can partake of all the most exotic consumables (food, drink, narcotics, etc.) avoiding those that are poisonous to your species. You can use machinery, games, devices, vehicles, tools, equipment, and weapons not designed for your species.",
  },

  mediate: {
    name: "mediate",
    description: `When you successfully interfere or Get Involved in an interpersonal situation (including Cramped Quarters), choose 1:
- Each participant gains a Data Point about another participant.
- Escalate the situation. The choices are now Fight or Flight.
- Defuse the situation. Violence is currently not an option.`,
  },
  bravery: {
    name: "bravery",
    description:
      "You feel no terror, revulsion or hopelessness. You never have to Face Adversity to overcome emotions. Any Crew you Command is Fearless.",
  },
  nemesis: {
    name: "nemesis",
    description:
      "Whenever you fail a Move, declare who or what caused you to fail. You gain a Data Point about that subject.",
  },
  terrify: {
    name: "terrify",
    description: `When your presence becomes known, Roll+Influence or +Physique.
- On a 10+, people are meek and respectful.
- On a 7-9, people are cautious and worried.
- On a 6-, people are panicked and hostile.`,
  },

  obsession: {
    name: "obsession",
    description:
      "Choose the subject of your Obsession. When you would gain a Data Point about a tangentially related subject, gain a Data Point about your Obsession instead.",
  },
  martyr: {
    name: "martyr",
    description: `When a nearby victim would suffer harm or consequences, you may interpose yourself and Roll+Mettle.
- On a 10+, they are protected, and you suffer a lesser consequence. On a 7-9, you suffer instead of them.
- On a 6-, you share in their suffering.`,
  },
  telekinesis: {
    name: "telekinesis",
    description: `You can project physical actions over a short distance (interact, carry, punch, etc.), using the appropriate +Stats as if you were physically there.`,
  },
  launch: {
    name: "launch",
    description: `You can propel small, inanimate objects with deadly speed and precision using +Mettle. Large, oddly shaped or defiant subjects (small vehicles, people) tend to be clumsier projectiles, and are propelled with +Physique.`,
  },
  animate: {
    name: "animate",
    description: `Choose a collection of objects. Those objects become a Class 1 Artificial Crew (see page 101) with an upgrade that matches the materials used. You can only have one Animated Crew at a time.`,
  },
  barrier: {
    name: "barrier",
    description: `You can project a flat or hemispherical barrier of force that deflects or resists impacts, leveraging your +Mettle as a manifestation of solid willpower. This is extremely encumbering; you will be Clumsy while maintaining it.`,
  },
  flight: {
    name: "flight",
    description: `You can soar, glide, and hover in midair.`,
  },
  telepathy: {
    name: "telepathy",
    description: `With a moment of focus, you can:
- Communicate mentally with someone within line of sight.
- Communicate mentally with someone you know well.
- Sense the general life force, health, and emotional state of everyone within a given area.`,
  },
  probe: {
    name: "probe",
    description:
      "Grasping the head of another being allows you to forcefully Access their mind (with +Interface), exactly as if it was a computer system.",
  },
  precognition: {
    name: "precognition",
    description:
      "If your mind is clear, you may suffer a minor mental debility (headache, nausea, vertigo, etc.) to declare that a roll you just made was merely a glimpse of possible future. Briefly describe the immediate or long-term consequences of that future, then reroll.",
  },
  compel: {
    name: "compel",
    description: `You can Command any group or individual, no matter their disposition, no matter the command. On a 10+, choose 1 consequence.
On a 7-9, choose 2 consequences.
- They only obey non-harmful parts of your command.
- They are stilted, clumsy, and obviously controlled.
- You suffer a mental or emotional debility as backlash.`,
  },
  clairvoyance: {
    name: "clairvoyance",
    description:
      "Meditation allows you to use your +Mettle to make Assessment about specific people, objects, and locations over any distance. The glimpses granted by a failed Clairvoyance can be extremely disturbing.",
  },
  teleport: {
    name: "teleport",
    description: `You can instantly move yourself and nearby targets across any distance, using +Mettle to overcome potential adversity, if you either:
- See your destination clearly.
- Know the destination intimately.
- Don’t care where you end up, as long as it’s Not Here.`,
  },

  regeneration: {
    name: "regeneration",
    description: `A moment of stillness allows you to reduce the severity of one of your injuries by one step, if available. This can regrow limbs/organs lost to Critical Injuries, and happens while you are dead.`,
  },
  alchemy: {
    name: "alchemy",
    description: `When using a Ritual Kit to Patch Up a person, object, or material, choose from this list instead of the standard Patch Up: Spread rust, rot, or erosion. Purify, clean, and rejuvenate. Transmute one material into another.`,
  },
  evoke: {
    name: "evoke",
    description: `Each time you Evoke the elements, choose between Fire, Frost, Lightning, Darkness, and Light. You may create and manipulate that element as part of any Move or Skill. You may wield it as a weapon when you Launch Assault or Open Fire. You may only Evoke one element at a time.`,
  },
  transform: {
    name: "transform",
    description: `You can take on the form and bodily capabilities of a physical subject up to three times bigger or smaller than you...
- Immediately after an Assessment of the subject.
- At any time by spending a Data Point about the subject.
You can return to your original form at any time. Assuming a shape larger than the available area is a bad idea.`,
  },
  insolence: {
    name: "insolence",
    description: `When you solve a problem by defying customs, propriety, and the desires of those around you, you can roll +Mettle instead of whatever the usual stat would be. This will likely be selfish, rude, and possibly hurtful.`,
  },
  ritual: {
    name: "ritual",
    description:
      "When you entrust a situation to the power of your rituals, fortunes, hexes, and charms, you can roll +Expertise instead of whatever the usual stat would be. This will likely be complicated, unpredictable, and deeply unsettling.",
  },
  strength: {
    name: "strength",
    description:
      "When you handle a situation with rage, violence, and brute force, you can roll +Physique instead of whatever the usual stat would be. This will likely be loud, ugly, and possibly painful.",
  },
  abnegation: {
    name: "abnegation",
    description:
      "When you black out and allow your programming to take over in order to solve a problem, you can roll +Interface instead of whatever the usual stat would be. Your programming won’t undermine its own agenda.",
  },
  tranquility: {
    name: "tranquility",
    description:
      "When you handle a situation with the wisdom of a koan, parable, or aphorism, you can roll +Influence instead of whatever the usual stat would be. This will likely be soft, subtle, and slow.",
  },
  procognition: {
    name: "precognition",
    description:
      "If your mind is clear, you may suffer a minor mental debility (headache, nausea, vertigo, etc.) to declare that a roll you just made was merely a glimpse of possible future. Briefly describe the immediate or long-term consequences of that future, then reroll.",
  },
};

const careersTable = {
  academic: {
    name: "academic",
    summary:
      "The Academic career represents years of study and learning, with a strong focus on science and logic. Academics can be found in specialist positions in other fields, leveraging their years of study.",
    descriptions: [
      "thin",
      "pallid",
      "elderly",
      "kind-hearted",
      "aloof",
      "distracted",
    ],
    skillOptions: [
      "education",
      "chemistry",
      "surgery",
      "deduction",
      "technobabble",
    ],
    iconName: "school",
    workspaceOptions: [
      {
        name: "medical",
        description:
          "Sterile environment. Medbay, cryotubes, surgical servo arms, isolation chamber, recovery ward.",
      },
      {
        name: "research",
        description:
          "Sensors gather scientific readings. Laboratory, containment units, sample scanners, sealed storage.",
      },
    ],
    advancementOptions: [
      "A life is saved or destroyed by science.",
      "A vital lesson is imparted.",
      "An experiment yields surprising results.",
      "A subject is thoroughly analyzed.",
      "A fascinating phenomenon is explained.",
    ],
  },
  clandestine: {
    name: "clandestine",
    summary:
      "The Clandestine career is a sinister profession, relying on information and invisibility. Clandestine operatives tend toward low profiles and subtlety, no matter their complimentary profession.",
    descriptions: [
      "hawk nosed",
      "sinister",
      "wiry",
      "bland",
      "suspicious",
      "bald",
    ],
    skillOptions: [
      "stealth",
      "sabotage",
      "assassination",
      "surveillance",
      "interrogation",
    ],
    iconName: "finger-print",
    workspaceOptions: [
      {
        name: "stealthy",
        description:
          "Difficult to detect, high tech camouflage, cloaking or concealment. Scanning bafflers, sound dampening, hidden doors/rooms.",
      },
      {
        name: "secure",
        description:
          "Sensors to track people and movement. Security cameras, monitoring stations, holding cells, security doors.",
      },
    ],
    advancementOptions: [
      "An intentional 'accident' happens.",
      "A victim experiences true fear.",
      "A conspiracy is uncovered.",
      "An act is performed covertly.",
      "A dark secret is extracted.",
    ],
  },
  commercial: {
    name: "commercial",
    summary:
      "The Commercial career's strength lies in making deals, acquiring goods and managing the complex web of inter-faction debt and influence. Almost all other careers benefit in some way from the Commercial's purchasing power.",
    descriptions: [
      "oily",
      "well-fed",
      "manicured",
      "harried",
      "miserly",
      "cunning",
    ],
    skillOptions: ["outfit", "marketing", "acumen", "luxury", "bribe"],
    iconName: "cash",
    workspaceOptions: [
      {
        name: "mercantile",
        description:
          "Prominent advertisement, easy access. Large cargo storage space, automatic loader-unloader systems.",
      },
      {
        name: "leisure",
        description:
          "Relaxing, inviting, well-lit. Studio, lounge, entertainment systems, recreation area.",
      },
    ],
    advancementOptions: [
      "A solution is purchased.",
      "A frivolous expense is made.",
      "A celebration is held.",
      "A rich resource is found.",
      "A cargo unit is exchanged.",
    ],
  },
  explorer: {
    name: "explorer",
    summary:
      "The Explorer is the most daring and risky career, forever seeking new horizons and new treasures. Other careers that regularly deal with harsh environments and unexplored reaches benefit from the Explorer's courage and survival instinct.",
    descriptions: [
      "weathered",
      "battered",
      "unkempt",
      "rude",
      "cheerful",
      "brash",
    ],
    skillOptions: [
      "boldly go",
      "reconnaissance",
      "survival",
      "recklessness",
      "custom vehicle",
    ],
    iconName: "compass",
    workspaceOptions: [
      {
        name: "rugged",
        description:
          "Withstands harsh climates and weather. Decontamination units, hydroponics facilities, advanced water/air/waste recyclers, self-sufficient.",
      },
      {
        name: "survey",
        description:
          "Planetary scanners (weather, geological activity, etc). Probe launcher, topography holo-projector, motor-pool.",
      },
    ],
    advancementOptions: [
      "An alien wilderness is traversed.",
      "A bold act fails spectacularly.",
      "A needed item is scrounged up.",
      "A ludicrous stunt turns the tides.",
      "A forgotten place is excavated.",
    ],
  },
  industrial: {
    name: "industrial",
    summary:
      "The Industrial career shapes its surroundings by constructing, improving and demolishing. Other careers benefit greatly from the Industrial's ability to create, repair, maintain a variety of machines.",
    descriptions: [
      "muscled",
      "grimy",
      "wrinkled",
      "rigorous",
      "rugged",
      "focused",
    ],
    skillOptions: ["repair", "construction", "tinker", "upgrade", "dismantle"],
    iconName: "construct",
    workspaceOptions: [
      {
        name: "refinery",
        description:
          "Heavy raw-material collectors. Gathers, processes raw matter into refined materials. Material storage tanks.",
      },
      {
        name: "manufactory",
        description:
          "Engineering bays. Builds, upgrades and repairs. Workbenches, tool racks, winches, pulleys, lifts.",
      },
    ],
    advancementOptions: [
      "A piece of junk proves pivotal.",
      "A piece of technology is 'improved'.",
      "A breakage occurs.",
      "An explosion alters the situation.",
      "A structural weakness is exposed.",
    ],
  },
  military: {
    name: "military",
    summary:
      "The Military career specializes in combat, with a heavy reliance on command, discipline and strategy. Careers that have to deal with hostilities or war zones benefit greatly when combined with the Military career's command of the battlefield.",
    descriptions: [
      "scarred",
      "grizzled",
      "massive",
      "skittish",
      "weary",
      "grim",
    ],
    skillOptions: [
      "tactics",
      "toughness",
      "unique weapon",
      "heavy lifting",
      "authority",
    ],
    iconName: "medal",
    workspaceOptions: [
      {
        name: "armored",
        description:
          "Made of reinforced materials. Difficult to damage, can withstand direct impacts and explosions. Reinforced blast doors, structurally sound.",
      },
      {
        name: "barracks",
        description:
          "Efficient, defensible, practical. Berthing for many soldiers, lockers, gym, training ring, mobilization area.",
      },
    ],
    advancementOptions: [
      "An objective is taken by force.",
      "A perilous order is obeyed.",
      "An injury is sustained.",
      "A problem is resolved with firepower.",
      "A worthy enemy is exterminated.",
    ],
  },
  personality: {
    name: "personality",
    summary:
      "The Personality career revolves around influencing others through charm, good looks and oratory. Personality is useful to any career that relies on persuasion or fame.",
    descriptions: [
      "stunning",
      "sexy",
      "chiselled",
      "placid",
      "soft",
      "haughty",
    ],
    skillOptions: [
      "fame",
      "leadership",
      "contacts",
      "inspiration",
      "diplomacy",
    ],
    iconName: "star",
    workspaceOptions: [
      {
        name: "habitation",
        description:
          "Living space for many guests or crew. Communal eating rooms, extended life-support/facilities.",
      },
      {
        name: "stately",
        description:
          "Expensive, luxurious, finely appointed décor. More expensive to maintain, but provides much higher quality of life.",
      },
    ],
    advancementOptions: [
      "A relationship changes drastically.",
      "A statement starts or ends a fight.",
      "A difficult promise is upheld.",
      "A rumor spreads like wildfire.",
      "An unlikely hero is exalted.",
    ],
  },
  scoudrel: {
    name: "scoudrel",
    summary:
      "The Scoundrel is the most underhanded career, relying on lies, violence, betrayal and theft to achieve goals. The Scoundrel career can be a benefit to other careers that live outside the law.",
    descriptions: ["thick", "dapper", "sly", "meaty", "slick", "cold"],
    skillOptions: [
      "criminal",
      "sneak attack",
      "scapegoat",
      "false identity",
      "addict",
    ],
    iconName: "glasses",
    workspaceOptions: [
      {
        name: "facade",
        description:
          "False identification/registry, disguised as something else. Crawlspaces, hidden compartments, false walls.",
      },
      {
        name: "sleazy",
        description:
          "Ramshackle, grimy, dimly lit. Space for drinking, smoking, recreational drug use, or other vices.",
      },
    ],
    advancementOptions: [
      "A deal ends in betrayal.",
      "A broken law goes unpunished.",
      "A valuable is stolen.",
      "A threat is pre-emptively removed.",
      "An unsuspecting victim is exploited.",
    ],
  },
  starfarer: {
    name: "starfarer",
    summary:
      "The Starfarer career involves traveling all over the galaxy, experiencing a multitude of cultures and societies. The Starfarer's ease with spaceships, vehicles and navigation make it useful to many other careers that are on the move.",
    descriptions: ["bony", "quick", "tall", "sunny", "restless", "tolerant"],
    skillOptions: [
      "weightlessness",
      "cosmopolitan",
      "navigation",
      "calibrations",
      "custom flyer",
    ],
    iconName: "rocket",
    workspaceOptions: [
      {
        name: "navigation",
        description:
          "Wide bay windows, observation decks, star-charts, holo-screens. Satellite uplinks, orbital tracking systems, airspace control/coordination tower.",
      },
      {
        name: "launch pad",
        description:
          "Aircraft/shuttle hangar with wide bay doors, launchpads for shuttles and speeders.",
      },
    ],
    advancementOptions: [
      "A passenger reaches a destination.",
      "A solution leverages gravity.",
      "A piloting maneuver causes a reversal.",
      "A system is pushed to the limit.",
      "A new culture is experienced.",
    ],
  },
  technocrat: {
    name: "technocrat",
    summary:
      "The Technocrat career is the most wired-in and computer-centric of the careers, focusing on programming, data and electronic warfare. Other careers benefit from the Technocrat's mastery of the computer systems that run almost all of civilized space.",
    descriptions: [
      "nearsighted",
      "lanky",
      "underfed",
      "smug",
      "awkward",
      "intense",
    ],
    skillOptions: [
      "upload",
      "hijack",
      "program",
      "network",
      "artificial intelligence",
    ],
    iconName: "power",
    workspaceOptions: [
      {
        name: "communication",
        description:
          "High-powered communications array, transceivers, antennae. Screens, conference rooms, holo-projectors.",
      },
      {
        name: "observer",
        description:
          "Advanced, multi-band sensors, capable of long-distance scans. Probe launchers. Recording equipment, shielded data storage.",
      },
    ],
    advancementOptions: [
      "A system's security is breached.",
      "A solution is found on the SectorNet.",
      "A computer crash causes chaos.",
      "A pivotal data cluster is accessed.",
      "An offending program is expunged.",
    ],
  },
};
const originsTable = {
  advanced: {
    summary:
      "The Advanced grew up in prosperous, high tech societies, well ahead of the galactic technology curve, enjoying an unprecedented quality of life. Technologies and gadgets that would be rare or fantastical elsewhere were considered commonplace.",
    descriptions: [
      "angular",
      "robust",
      "strapping",
      "carefree",
      "lazy",
      "arrogant",
    ],
    skillOptions: [
      "cutting edge",
      "artificial intelligence",
      "custom flyer",
      "surveillance",
    ],
    iconName: "navigate",
  },
  brutal: {
    summary:
      "The Brutal were forged in the most volatile conditions; war zones, slavery or in barbaric, bloodthirsty societies. Life was short and cruel, blood and pain are the norm. There was no room for weakness or mercy, no place for honor or fair play.",
    descriptions: [
      "tired",
      "disfigured",
      "suppressed",
      "cruel",
      "angry",
      "severe",
    ],
    skillOptions: ["branded", "assassination", "toughness", "sneak attack"],
    iconName: "flash",
  },
  colonist: {
    summary:
      "The Colonists are born and raised out on the fringes of galactic civilization, living in domes, colony pods or habitation modules, working diligently and tirelessly to terraform planets to make them more hospitable for the next generation.",
    descriptions: ["hard", "serious", "calloused", "dusky", "solid", "prudent"],
    skillOptions: ["resourceful", "tinker", "custom vehicle", "heavy lifting"],
    iconName: "home",
  },
  crowded: {
    summary:
      "The Crowded have lived their lives shoulder-to- shoulder with humanity. They come from the cramped confines of heavily-populated hive cities, underground facilities, domes and space stations. They are one face among billions.",
    descriptions: [
      "lively",
      "compact",
      "stout",
      "spare",
      "loud",
      "agoraphobic",
    ],
    skillOptions: ["affable", "contacts", "network", "bribe"],
    iconName: "people",
  },
  galactic: {
    summary:
      "The Galactics are born and raised in orbital stations, starships, and asteroid mining colonies. Most have lived their whole lives among the stars, surrounded and protected by machinery and electronics, breathing recycled air and eating hydroponic food.",
    descriptions: [
      "sharp",
      "guarded",
      "stoic",
      "isolated",
      "energetic",
      "graceful",
    ],
    skillOptions: ["fine tuning", "program", "weightlessness", "repair"],
    iconName: "planet",
  },
  impoverished: {
    summary:
      "The Impoverished grew up on the margins, in the slums, in slavery and prisons and filth. They have little to call their own, only what they could scrape and scrounge together. They've fought tooth and nail to survive against oppressive conditions.",
    descriptions: ["gaunt", "haggard", "sickly", "filthy", "vulgar", "fierce"],
    skillOptions: ["scrappy", "stealth", "recklessness", "criminal"],
    iconName: "trending-down",
  },
  privileged: {
    summary:
      "The Privileged are the nobility of the galaxy, the elite. Their families hold great power and influence, be it financial, political or religious. Moving in such exalted circles, wielding their family name and power, they have grown up expecting courtesy and respect.",
    descriptions: [
      "manicured",
      "plump",
      "groomed",
      "snobbish",
      "sleek",
      "pompous",
    ],
    skillOptions: ["decorum", "luxury", "fame", "scapegoat"],
    iconName: "star",
  },
  productive: {
    summary:
      "The Productive live in societies, cultures or groups that place high importance on education and social responsibility. From a young age they begin training for their destined profession, devoting any spare time to higher education and secondary vocations.",
    descriptions: [
      "slight",
      "curious",
      "faded",
      "greying",
      "detached",
      "introverted",
    ],
    skillOptions: ["vocation", "calibrations", "education", "acumen"],
    iconName: "construct",
  },
  regimented: {
    summary:
      "The Regimented have lived very strict lives. Whether in a militaristic society, a religious organisation or an authoritarian government, they have been indoctrinated to the advantages of discipline, obedience and loyalty.",
    descriptions: [
      "athletic",
      "meditative",
      "sturdy",
      "organised",
      "formal",
      "strict",
    ],
    skillOptions: ["discipline", "leadership", "tactics", "deduction"],
    iconName: "clipboard",
  },
  rustic: {
    summary:
      "The Rustic were raised on the very edges of galactic society, on the most inhospitable and savage worlds. With only basic machinery and tools, they were forced to toil by the sweat of their brow, shaping the hostile landscape.",
    descriptions: ["wrinkled", "creaking", "wiry", "aged", "weary", "strong"],
    skillOptions: ["hard labor", "construction", "survival", "chemistry"],
    iconName: "hammer",
  },
};

export const generateSkill = (): Skill | null => {
  const skillKey = sample(Object.keys(skillsTable));
  if (!skillKey) return null;
  return skillsTable[skillKey];
};
