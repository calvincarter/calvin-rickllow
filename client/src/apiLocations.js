const locations = [
  {
    id: 1,
    name: 'Earth (C-137)',
    type: 'Planet',
    dimension: 'Dimension C-137'
  },
  {
    id: 3,
    name: 'Citadel of Ricks',
    type: 'Space station',
    dimension: 'unknown'
  },
  {
    id: 4,
    name: "Worldender's lair",
    type: 'Planet',
    dimension: 'unknown'
  },
  {
    id: 5,
    name: 'Anatomy Park',
    type: 'Microverse',
    dimension: 'Dimension C-137'
  },
  {
    id: 6,
    name: 'Interdimensional Cable',
    type: 'TV',
    dimension: 'unknown'
  },
  {
    id: 7,
    name: 'Immortality Field Resort',
    type: 'Resort',
    dimension: 'unknown'
  },
  {
    id: 8,
    name: 'Post-Apocalyptic Earth',
    type: 'Planet',
    dimension: 'Post-Apocalyptic Dimension'
  },
  {
    id: 9,
    name: 'Purge Planet',
    type: 'Planet',
    dimension: 'Replacement Dimension'
  },
  {
    id: 10,
    name: 'Venzenulon 7',
    type: 'Planet',
    dimension: 'unknown'
  },
  { 
    id: 13, 
    name: 'Nuptia 4', 
    type: 'Planet', 
    dimension: 'unknown' 
  },
  {
    id: 14,
    name: "Giant's Town",
    type: 'Fantasy town',
    dimension: 'Fantasy Dimension'
  },
  { 
    id: 15, 
    name: 'Bird World', 
    type: 'Planet', 
    dimension: 'unknown' 
  },
  {
    id: 16,
    name: 'St. Gloopy Noops Hospital',
    type: 'Space station',
    dimension: 'unknown'
  },
  {
    id: 18,
    name: "Mr. Goldenfold's dream",
    type: 'Dream',
    dimension: 'Dimension C-137'
  },
  {
    id: 20,
    name: 'Earth (Replacement Dimension)',
    type: 'Planet',
    dimension: 'Replacement Dimension'
  },
  {
    id: 21,
    name: 'Testicle Monster Dimension',
    type: 'Dimension',
    dimension: 'Testicle Monster Dimension'
  },
  {
    id: 22,
    name: 'Signus 5 Expanse',
    type: 'unknown',
    dimension: 'Cromulon Dimension'
  },
  {
    id: 23,
    name: 'Earth (C-500A)',
    type: 'Planet',
    dimension: 'Dimension C-500A'
  },
  {
    id: 24,
    name: "Rick's Battery Microverse",
    type: 'Microverse',
    dimension: 'Replacement Dimension'
  },
  {
    id: 25,
    name: 'The Menagerie',
    type: 'Menagerie',
    dimension: 'unknown'
  },
  {
    id: 27,
    name: 'Hideout Planet',
    type: 'Planet',
    dimension: 'unknown'
  },
  {
    id: 28,
    name: "Unity's Planet",
    type: 'Planet',
    dimension: 'Replacement Dimension'
  },
  {
    id: 32,
    name: 'Roy: A Life Well Lived',
    type: 'Game',
    dimension: 'Replacement Dimension'
  },
  {
    id: 35,
    name: 'Planet Squanch',
    type: 'Planet',
    dimension: 'Replacement Dimension'
  },
  {
    id: 38,
    name: 'Interdimensional Customs',
    type: 'Customs',
    dimension: 'unknown'
  },
  {
    id: 39,
    name: 'Galactic Federation Prison',
    type: 'Space station',
    dimension: 'unknown'
  },
  { 
    id: 40, 
    name: 'Gazorpazorp', 
    type: 'Planet', 
    dimension: 'unknown' 
  },
  {
    id: 41,
    name: 'Hamster in Butt World',
    type: 'Planet',
    dimension: 'unknown'
  },
  {
    id: 42,
    name: 'Earth (Giant Telepathic Spiders Dimension)',
    type: 'Planet',
    dimension: 'Giant Telepathic Spiders Dimension'
  },
  {
    id: 43,
    name: 'Alphabetrium',
    type: 'Planet',
    dimension: 'Replacement Dimension'
  },
  { 
    id: 44, 
    name: 'Jerryboree', 
    type: 'Daycare', 
    dimension: 'unknown' 
  },
  {
    id: 47,
    name: 'Pluto',
    type: 'Planet',
    dimension: 'Replacement Dimension'
  },
  {
    id: 48,
    name: 'Fantasy World',
    type: 'Planet',
    dimension: 'Fantasy Dimension'
  },
  {
    id: 54,
    name: "Vindicators Base",
    type: 'Spacecraft',
    dimension: 'unknown'
  },
  {
    id: 55,
    name: 'Pawn Shop Planet',
    type: 'Planet',
    dimension: 'Replacement Dimension'
  },
  {
    id: 56,
    name: 'Mega Gargantuan Kingdom',
    type: 'Microverse',
    dimension: 'Replacement Dimension'
  },
  { 
    id: 57, 
    name: 'Gear World', 
    type: 'Planet', 
    dimension: 'unknown' 
  },
  {
    id: 63,
    name: 'Froopyland',
    type: 'Artificially generated world',
    dimension: 'Replacement Dimension'
  },
  {
    id: 64,
    name: 'Detoxifier',
    type: 'Machine',
    dimension: 'Replacement Dimension'
  },
  { 
    id: 65, 
    name: 'Trunk World', 
    type: 'Planet', 
    dimension: 'unknown' 
  },
  {
    id: 67,
    name: 'Blips and Chitz',
    type: 'Arcade',
    dimension: 'Replacement Dimension'
  },
  {
    id: 70,
    name: "Snuffles' Dream",
    type: 'Dream',
    dimension: 'Dimension C-137'
  },
  {
    id: 71,
    name: 'Earth (Pizza Dimension)',
    type: 'Planet',
    dimension: 'Pizza Dimension'
  },
  {
    id: 72,
    name: 'Earth (Phone Dimension)',
    type: 'Planet',
    dimension: 'Phone Dimension'
  },
  {
    id: 73,
    name: 'Greasy Grandma World',
    type: 'Planet',
    dimension: 'unknown'
  },
  {
    id: 74,
    name: 'Earth (Chair Dimension)',
    type: 'Planet',
    dimension: 'Chair Dimension'
  },
  {
    id: 75,
    name: 'Árboles Mentirosos',
    type: 'Planet',
    dimension: 'unknown'
  },
  { 
    id: 76, 
    name: 'Alien Day Spa', 
    type: 'Spa', 
    dimension: 'unknown' 
  },
  {
    id: 77,
    name: 'Earth (Fascist Dimension)',
    type: 'Planet',
    dimension: 'Fascist Dimension'
  },
  {
    id: 78,
    name: 'Snake Planet',
    type: 'Planet',
    dimension: 'Replacement Dimension'
  },
  {
    id: 79,
    name: 'Forbodulon Prime',
    type: 'Planet',
    dimension: 'Replacement Dimension'
  },
  {
    id: 80,
    name: 'Earth (Fascist Shrimp Dimension)',
    type: 'Planet',
    dimension: 'Fascist Shrimp Dimension'
  },
  {
    id: 81,
    name: 'Earth (Fascist Teddy Bear Dimension)',
    type: 'Planet',
    dimension: 'Fascist Teddy Bear Dimension'
  },
  {
    id: 82,
    name: 'Earth (Wasp Dimension)',
    type: 'Planet',
    dimension: 'Wasp Dimension'
  },
  {
    id: 83,
    name: 'Monogatron Mothership',
    type: 'Space station',
    dimension: 'Replacement Dimension'
  },
  {
    id: 84,
    name: 'Gorgon Quadrant',
    type: 'Quadrant',
    dimension: 'Replacement Dimension'
  },
  {
    id: 85,
    name: 'Midland Quasar',
    type: 'Quasar',
    dimension: 'Replacement Dimension'
  },
  {
    id: 87,
    name: 'Globaflyn',
    type: 'Liquid',
    dimension: 'Replacement Dimension'
  },
  {
    id: 92,
    name: 'Earth (Tusk Dimension)',
    type: 'Planet',
    dimension: 'Tusk Dimension'
  },
  {
    id: 94,
    name: 'Draygon',
    type: 'Planet',
    dimension: 'Magic Dimension'
  },
  {
    id: 96,
    name: 'Story Train',
    type: 'Diegesis',
    dimension: 'Replacement Dimension'
  },
  {
    id: 101,
    name: 'Glorzo Asteroid',
    type: 'Asteroid',
    dimension: 'Replacement Dimension'
  },
  {
    id: 102,
    name: 'Alien Acid Plant',
    type: 'Acid Plant',
    dimension: 'Replacement Dimension'
  },
  {
    id: 105,
    name: 'NX-5 Planet Remover',
    type: 'Death Star',
    dimension: 'Replacement Dimension'
  },
  {
    id: 106,
    name: 'Gaia',
    type: 'Planet',
    dimension: 'Replacement Dimension'
  }
];

export default locations;