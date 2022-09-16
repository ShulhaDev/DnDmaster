export const heroes = [
  {
    race: "elf",
    race_abilities: [
      "soft paws",
      "silent steps",
      "stealth (complexity 12) - become invisible",
    ],
    hero_class: "ranger",
    strength: "-1",
    agility: "+3",
    intelligence: "-1",
    wisdom: "-1",
    charisma: "-1",
    constitution: "0",
    hp: "17|40",
    mp: "0|2",
    armour: "10|10",
    speed: 5,
    history: {
      name: "Unnamed",
      story: "Some story",
      temper: "calm and confident",
    },
    stance: "archer",
    stances: [
      {
        name: "archer",
        abilities: [
          { name: "Volley", description: "Attack up to three enemies at once" },
          {
            name: "Ice trap",
            description:
              "Placed on ground, freezes target for 1 round if touched",
          },
          { name: "!Bulls Eye!", description: "Doubles regular shot damage" },
        ],
      },
      {
        name: "swordsman",
        abilities: [
          {
            name: "Stealth strike",
            description: "Doubles regular strike damage",
          },
          { name: "Hook", description: "Grappling hook with a 5m rope" },
          {
            name: "!Massacre!",
            description: "Shadow blades flying in the air (4 * D4)",
          },
        ],
      },
    ],
  },
];
