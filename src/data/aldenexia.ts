// Public-facing race and class text for the World page.
// Source: the Aldenexia player manual, trimmed. Keep spoilers out (no story factions' plans, no relics).

export const races = [
  { slug: "human", home: "Lumora, the sandstone city of the Solgrave Expanse", name: "Human", text: "Adaptable and ambitious, humans are the backbone of Lumora and the villages around it. They can take up any calling, and they get along, more or less, with everyone." },
  { slug: "elf", home: "Vaelwyn", name: "Elf", text: "Graceful and ancient, elves are attuned to Aldenexia's forests and its arcane currents. They guard their sacred groves and keep a wary eye on anything the Void has touched." },
  { slug: "dwarf", home: "Brondrak Hold", name: "Dwarf", text: "Stout, hardy folk of the mountains, known for their craftsmanship and their sense of honour. They forge weapons for the Luminar Covenant, the faith of the light, and stand among its staunchest friends." },
  { slug: "gnome", home: "Grebblewick", name: "Gnome", text: "Clever and inventive, gnomes are tinkerers and scholars who can't leave a mystery alone, even the dangerous ones. Their experiments with Void-touched relics earn them suspicious looks from every side." },
  { slug: "halfling", home: "Cinderglen", name: "Halfling", text: "Nimble, cheerful farming folk of Cinderglen and the Emberstone Hills. Luck and a light step make them natural explorers, and Lumora's villagers love them, though halflings would rather stay out of other people's wars." },
  { slug: "half-elf", home: "Sylvaren", name: "Half-Elf", text: "Born between two peoples, half-elves pair human adaptability with elven talent. They move easily between worlds and often end up as the go-between." },
  { slug: "ogre", home: "Thalden's Reach", name: "Ogre", text: "Towering, brutal and very hard to stop, ogres come out of Aldenexia's wilds as fearsome warriors. Most are feared wherever they go; a few are looking for a better way." },
  { slug: "troll", home: "Veyra's Hollow, deep in the Rotmire Swamp", name: "Troll", text: "Savage, primal and quick to heal, trolls live in Aldenexia's swamps and worship old, wild gods. Their resilience makes them notoriously hard to kill." },
  { slug: "volkyne", home: "Xul-Dura", name: "Vol'kyne", text: "The \"void kin\", once called dark elves: grey-skinned, cunning and ambitious, from cities deep underground. Masters of shadow and dark magic, they are openly distrusted in Lumora." },
  { slug: "half-orc", home: "Ironfist Hold", name: "Half-Orc", text: "Fierce and resilient, half-orcs pair orcish strength with human adaptability. Often outcasts, many sell their swords in Aldenexia's wars, and some fight to earn the respect they're denied." },
  { slug: "lizardkin", home: "Sauros Reach, on a warm lagoon above the Rotmire", name: "Lizardkin", text: "Reptilian folk of the swamps and marshes, armoured in their own scales. They swim fast, hold their breath far longer than anyone else and bite hard, and they hold a deep mistrust of the Luminar Covenant." },
];

export const classGroups = [
  {
    role: "Tanks",
    classes: [
      { name: "Voidknight", hook: "Fights on stolen blood.", text: "A blood knight who traded honour for the Void, stealing life and strength from his foes and paying for his dark arts in blood." },
      { name: "Lightsworn", hook: "Swears to guard an ally.", text: "A radiant defender bound by sacred oaths: he takes the blows meant for others, and the undead and Void-touched suffer near his light." },
      { name: "Blademaster", hook: "The harder you hit him, the harder he hits back.", text: "A seasoned sellsword who builds Resolve by taking hits, then spends it on finishing strikes and rallying shouts." },
    ],
  },
  {
    role: "Healers",
    classes: [
      { name: "Lightmender", hook: "The healer who answers the emergency.", text: "Channels divine light into the biggest heals, the fastest prayers and the strongest resurrections in the game." },
      { name: "Spiritweaver", hook: "Holds the ground with totems and slows.", text: "Bridges the mortal and spirit realms: healing totems, crippling slows, and the ancestors at the call." },
      { name: "Wildspeaker", hook: "Heals ahead of the damage.", text: "A keeper of the wilds who plants life where it will be needed, with beasts fighting at her side." },
    ],
  },
  {
    role: "Melee",
    classes: [
      { name: "Aetherfist", hook: "The longer the fight flows, the deadlier he gets.", text: "A mystic warrior who hones body and soul past mortal limits and channels ki into an unbroken stream of strikes." },
      { name: "Shadowblade", hook: "Darkness is his armour and his edge.", text: "The darker it gets, the harder he is to see and the harder his ambush lands. The only class that can poison a blade." },
      { name: "Woodstalker", hook: "Sets the field before the pull.", text: "Archer, swordsman and beast-friend who tracks his quarry and lays hidden traps. He has won before the prey knows it's hunted." },
    ],
  },
  {
    role: "Casters",
    classes: [
      { name: "Arcanist", hook: "Distance is his armour.", text: "The biggest single hits in the game, stronger the farther the target, and the most fragile of all up close." },
      { name: "Chaosborne", hook: "Reads the storm and rides it.", text: "Born with magic in her blood, she casts by instinct, building a storm inside that breaks into raw power." },
      { name: "Gravecaller", hook: "The battlefield's dead are her resource.", text: "Raises the dead, spreads plague through the pack and feeds on what the fight leaves behind." },
      { name: "Runecaster", hook: "Runes for allies, chains for enemies.", text: "Binds power into long-lasting runes on allies, and bends enemy minds with mesmerise, charm and slow." },
    ],
  },
  {
    role: "Support",
    classes: [
      { name: "Troubadour", hook: "The song is the weapon; the timing is the art.", text: "Keeps three to five songs going at once, each growing stronger the longer it plays, then pours them all into one great finale." },
    ],
  },
];
