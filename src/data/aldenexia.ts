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
  { slug: "volkyne", home: "Xul-Dura", name: "Vol'kyne", text: "The \"void kin\", once called dark elves: grey-skinned, cunning and ambitious, from a city built deep in a great sinkhole. Masters of shadow and dark magic, they are openly distrusted in Lumora." },
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

// Starting cities. Every race starts in its own, or in Kordava (neutral, open to all).
// Surface descriptions only (from the zone lore master): no secrets, relics or plot.
export const cities = [
  { name: "Kordava", region: "An island off the east coast · any race can start here", text: "A free port, \"the only harbour that asks your coin and not your race.\" The Merchant's Guild keeps the peace by making war bad for business, every calling has a trainer in the plaza, and ogres and elves haggle on the same quay without drawing steel. The plaque on the Fountain of Tides says all who come in peace are welcome. Someone has scratched underneath, very small: \"and all who pay.\"" },
  { name: "Lumora", region: "Solgrave Expanse · humans", text: "The human capital, a sandstone trade fortress built round a free oasis among golden dunes, its new wall high enough to be seen from the sea. The Oasis Wardens keep the gate, the Sandveil merchants run the bazaar with all their teeth, and the Sunlit Rest pours the drinks. The Djhanid ride in from the desert to trade in water, not coin. Stay out of the Cisterns, unless you know someone down there." },
  { name: "Vaelwyn", region: "Starbloom Glades · elves", text: "The elves' city, grown round the ancient Pyraeth Vault in the Starbloom Glades and watched over by the Circle Sentinels. Its halls are named for thorn and crystal, its crafters work in living heartwood, and the Root-Gate opens south onto Starbloom Glade. The Circle of Thorns has guarded these groves for ages, and it has never been gentle about it." },
  { name: "Brondrak Hold", region: "Ironcrag Depths · dwarves", text: "The oldest kind of dwarven pride: a forge-citadel in a bowl of the mountain, its adamantine gates facing east onto the only road out. The Emberforge burns at its heart, the Hall of Hammers trains, and its smiths work forge-black iron under the Hold's gate-rune. The Hold Wardens have a saying about the mountain: \"Nine went up. Don't count the ones who came down.\"" },
  { name: "Grebblewick", region: "Steamshade Ruins · gnomes", text: "A town of geniuses, all terraces, steam and clockwork, built round a great clockwork heart and named for the skyship captain who fell out of the sky and decided to stay. Her ship is the inn now, upside down. The Great Clock keeps time on the hill (it sometimes strikes thirteen), the Gearheart Citadel trains, and at the Steamworks Shrine every god has a planet." },
  { name: "Cinderglen", region: "Ebonbloom Wastes · halflings", text: "Terraced burrows round a caldera lake that steams all winter, which is why the halflings settled here and why the ember-apples grow. Cinderglen sings at every meal and keeps every lamp lit: hot baths by the spring, the Merry Kettle by the water, and Hedgewardens walking the night watch with lanterns of red ash-glass. Wipe your feet: the Hearth-Mother will know." },
  { name: "Sylvaren", region: "Moonveil Woodlands · half-elves", text: "Founded where an elven road and a human road came down to the water and laid their blades in the shallows: \"The elves had the tune and the humans the words, and neither would give it away, so they sang it together.\" It's home to Lirael's Concord, the world's go-betweens, and to the Songweaver Annadaeus. Nobody in Sylvaren ever calls a song bad. Not aloud." },
  { name: "Thalden's Reach", region: "Thundermaw Expanse · ogres", text: "A war-fortress in a ring of jagged peaks, home of the Shattered Horn tribe. The great War Horn hangs in the Bloodvault, the Skull Hall trains, and arguments are settled in the Duelling Pit. Half an aurochs roasted on a thunderstone keeps the cold off before a climb, and they still tell of Hoska Bonedrum, who drummed for three days until the fleet came home." },
  { name: "Veyra's Hollow", region: "The Mireborn Domain · trolls", text: "The Mireborn trolls' home, built on an old stone platform deep in the Rotmire Swamp and sinking into the bog \"a finger's width every year. We build up.\" The Mireguard carry bog-iron mauls, the Elder keeps the totem circle, and whatever raiders knock down, the Hollow builds up again. Wipe your feet, or don't: it's a swamp." },
  { name: "Xul-Dura", region: "Duskwrought Lowlands · Vol'kyne", text: "A city built down in a great sinkhole, warm enough to live in, where \"three Houses, one city, and a thousand knives between them\" is the closest thing to a motto. The Spire Wardens watch the court, the market sits under the east wall (keep your purse close), and the only road out runs west to the Zyl-Xul Flats. Visitors of the wrong race are killed on sight." },
  { name: "Ironfist Hold", region: "Bloodrift Highlands · half-orcs", text: "A fortress on a cliff plateau, home of the Ironclad Brotherhood: \"Courage in the open. Never a knife in the back.\" The fifteen-metre statue of the Iron Warlord faces the old battlefield from the cliff edge, the war-forges turn out redstone steel, and every half-orc touches the Brotherhood's War Standard before their first contract." },
  { name: "Sauros Reach", region: "The Mireborn Domain · lizardkin", text: "The Saurscale lizardkin's stilt-town over a lagoon that stays warm all year, up the causeway from the Rotmire. Eggs are laid on the warm stone and named at the Brood Temple, the Shellvault pays in shells and cuts every debt in stone, and the Broodwardens guard the Hatcheries. \"Welcome to the Reach, warm-blood. The water is warm. The welcome depends on you.\"" },
];

// Zone gallery: surface descriptions only.
export const zoneInfo: Record<string, { levels: string; text: string }> = {
  "Kordava": { levels: "Levels 1–6", text: "The free port's island, where new arrivals of every race cut their teeth on the beaches, the warehouses and the cliffs above the harbour." },
  "Ixtamar Beachhead": { levels: "Levels 18–22", text: "Black sand, hot jungle and a smoking volcano: the first sight of a southern continent. A Kordava Guild expedition still holds a camp on the beach, waiting for relief." },
  "Warforge Expanse": { levels: "Levels 3–6", text: "The half-orcs' training ground: a raised battlefield plateau of scrub and scree, siege engines along the cliffs and a great open-air forge at its heart, where the young are made into fighters." },
  "Zulgoroth's Temple": { levels: "Levels 15–20", text: "A drowned precinct round a sunken bay: black terraces, black pools and monoliths that lean the wrong way. Something old and hungry is chained here." },
  "Spectral Tower": { levels: "Group dungeon · levels 18–21", text: "The navigators' tower on the Isle of Merila, four floors for a group to climb. Its last keeper called the tide against raiders long ago, and the tower has not been right since." },
  "Sunder-Keel Shoals": { levels: "Levels 12–16", text: "Mist-shrouded tidal flats where ships that strike stay struck: a graveyard of keels where the drowned walk between the tides. Some nights at the old dock there's a boat with a man in it who doesn't row." },
  "Stormbreak Highlands": { levels: "Levels 14–19", text: "The crossroads of the Northern Highlands: high plateaus where the storms gather round a great spire before they roll east. Scholars keep a weather station in the lee of a crag, and the Stormbinders worship the storm itself." },
  "Lumora Cisterns": { levels: "Dungeon · levels 3–7", text: "Three tiers of old waterworks under Lumora's Old Town, and below them the drowned works of the city that came before. Smugglers, thieves and worse have moved into the dark." },
  "Sacred Springs": { levels: "Levels 3–7", text: "Healing springs in an old druid wood over the ridge from Cinderglen, the green heart of halfling country. Halfling druids aren't buried, they're planted, and the western wood still carries the scars of an old fire." },
  "Lunarfall Sanctum": { levels: "Dungeon · levels 8–12", text: "An old moon-choir sanctum in the Moonveil Woodlands, whose crystals keep any song sung into them. Someone has taken it, and the singing hasn't stopped." },
  "Shifting Isles": { levels: "Levels 16–20", text: "Sixteen small islands in the far eastern ocean, four by four like a board, each one stuck in a single moment of time. Some show the world long ago; some show moments that never happened at all." },
  "Grimwharf Landing": { levels: "Levels 10–14", text: "The one harbour where a troll, a lizardkin or a Vol'kyne can put in without being hanged, kept by an uneasy pact of Vol'kyne overseers, troll muscle and lizardkin pilots. Good folk are watched." },
  "Ashfall Dunes": { levels: "Levels 7–12", text: "Burned hills in the deep desert, where after the great fire one well stayed sweet. The Djhanid walled it and named it Last Water, and every faction in the desert circles it." },
};
