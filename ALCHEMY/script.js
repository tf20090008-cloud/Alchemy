const initialElements = [
    { id: "fire", name: "Api", emoji: "🔥", discovered: true, base: true },
    { id: "water", name: "Air", emoji: "💧", discovered: true, base: true },
    { id: "earth", name: "Tanah", emoji: "🌍", discovered: true, base: true },
    { id: "air", name: "Udara", emoji: "💨", discovered: true, base: true },
    { id: "steam", name: "Uap", emoji: "♨️", discovered: false },
    { id: "mud", name: "Lumpur", emoji: "🟤", discovered: false },
    { id: "dust", name: "Debu", emoji: "🌫️", discovered: false },
    { id: "energy", name: "Energi", emoji: "⚡", discovered: false },
    { id: "lava", name: "Lava", emoji: "🌋", discovered: false },
    { id: "rain", name: "Hujan", emoji: "🌧️", discovered: false },
    { id: "plant", name: "Tanaman", emoji: "🌱", discovered: false },
    { id: "life", name: "Kehidupan", emoji: "🧬", discovered: false },
    { id: "stone", name: "Batu", emoji: "🪨", discovered: false },
    { id: "metal", name: "Logam", emoji: "🔩", discovered: false },
    { id: "sand", name: "Pasir", emoji: "🏖️", discovered: false },
    { id: "glass", name: "Kaca", emoji: "🫙", discovered: false },
    { id: "cloud", name: "Awan", emoji: "☁️", discovered: false },
    { id: "snow", name: "Salju", emoji: "❄️", discovered: false },
    { id: "ice", name: "Es", emoji: "🧊", discovered: false },
    { id: "sun", name: "Matahari", emoji: "☀️", discovered: false },
    { id: "moon", name: "Bulan", emoji: "🌙", discovered: false },
    { id: "star", name: "Bintang", emoji: "⭐", discovered: false },
    { id: "tree", name: "Pohon", emoji: "🌳", discovered: false },
    { id: "flower", name: "Bunga", emoji: "🌸", discovered: false },
    { id: "fruit", name: "Buah", emoji: "🍎", discovered: false },
    { id: "animal", name: "Hewan", emoji: "🐾", discovered: false },
    { id: "human", name: "Manusia", emoji: "🧑", discovered: false },
    { id: "tool", name: "Alat", emoji: "🛠️", discovered: false },
    { id: "house", name: "Rumah", emoji: "🏠", discovered: false },
    { id: "rainbow", name: "Pelangi", emoji: "🌈", discovered: false },
    { id: "storm", name: "Badai", emoji: "🌪️", discovered: false },
    { id: "electricity", name: "Listrik", emoji: "🔌", discovered: false },
    { id: "computer", name: "Komputer", emoji: "💻", discovered: false },
    { id: "book", name: "Buku", emoji: "📖", discovered: false },
    { id: "idea", name: "Ide", emoji: "💡", discovered: false },
    { id: "music", name: "Musik", emoji: "🎵", discovered: false },
    { id: "time", name: "Waktu", emoji: "⏳", discovered: false },
    { id: "space", name: "Luar Angkasa", emoji: "🌌", discovered: false },
    { id: "galaxy", name: "Galaksi", emoji: "🌠", discovered: false },
    { id: "universe", name: "Semesta", emoji: "🌌", discovered: false },
    { id: "puddle", name: "Genangan", emoji: "💦", discovered: false },
    { id: "land", name: "Daratan", emoji: "🗺️", discovered: false },
    { id: "pressure", name: "Tekanan", emoji: "🎈", discovered: false },
    { id: "volcano", name: "Gunung Api", emoji: "🌋", discovered: false },
    { id: "ash", name: "Abu", emoji: "🌫️", discovered: false },
    { id: "clay", name: "Tanah Liat", emoji: "🏺", discovered: false },
    { id: "brick", name: "Batu Bata", emoji: "🧱", discovered: false },
    { id: "pond", name: "Kolam", emoji: "🏞️", discovered: false },
    { id: "ocean", name: "Samudra", emoji: "🌊", discovered: false },
    { id: "salt", name: "Garam", emoji: "🧂", discovered: false },
    { id: "beach", name: "Pantai", emoji: "🏝️", discovered: false },
    { id: "forest", name: "Hutan", emoji: "🌲", discovered: false },
    { id: "jungle", name: "Rimba", emoji: "🌴", discovered: false },
    { id: "garden", name: "Kebun", emoji: "🪴", discovered: false },
    { id: "village", name: "Desa", emoji: "🏘️", discovered: false },
    { id: "city", name: "Kota", emoji: "🏙️", discovered: false },
    { id: "robot", name: "Robot", emoji: "🤖", discovered: false },
    { id: "telescope", name: "Teleskop", emoji: "🔭", discovered: false },
    { id: "planet", name: "Planet", emoji: "🪐", discovered: false },
    { id: "astronaut", name: "Astronaut", emoji: "👨‍🚀", discovered: false },
    { id: "castle", name: "Kastel", emoji: "🏰", discovered: false },
    { id: "diamond", name: "Berlian", emoji: "💎", discovered: false },
    { id: "jewel", name: "Permata", emoji: "🔮", discovered: false },
    { id: "wood", name: "Kayu", emoji: "🪵", discovered: false },
    { id: "oxygen", name: "Oksigen", emoji: "🫧", discovered: false },
    { id: "pollen", name: "Serbuk Sari", emoji: "🌼", discovered: false },
    { id: "algae", name: "Alga", emoji: "🦠", discovered: false },
    { id: "forge", name: "Tempa", emoji: "🔨", discovered: false },
    { id: "sword", name: "Pedang", emoji: "⚔️", discovered: false },
    { id: "armor", name: "Baju Zirah", emoji: "🛡️", discovered: false },
    { id: "companion", name: "Sahabat", emoji: "🐕", discovered: false },
    { id: "bouquet", name: "Buket", emoji: "💐", discovered: false },
    { id: "furniture", name: "Perabot", emoji: "🛋️", discovered: false },
    { id: "ink", name: "Tinta", emoji: "🖋️", discovered: false },
    { id: "story", name: "Cerita", emoji: "📜", discovered: false },
    { id: "culture", name: "Budaya", emoji: "🎭", discovered: false },
    { id: "art", name: "Seni", emoji: "🎨", discovered: false },
    { id: "gravity", name: "Gravitasi", emoji: "🌀", discovered: false },
    { id: "dimension", name: "Dimensi", emoji: "🪞", discovered: false },
    { id: "comet", name: "Komet", emoji: "☄️", discovered: false },
    { id: "meteor", name: "Meteor", emoji: "🌑", discovered: false },
    { id: "light", name: "Cahaya", emoji: "🔦", discovered: false },
    { id: "crystal", name: "Kristal", emoji: "🔷", discovered: false },
    { id: "phoenix", name: "Phoenix", emoji: "🐦‍🔥", discovered: false, rare: true },
    { id: "unicorn", name: "Unicorn", emoji: "🦄", discovered: false, rare: true },
    { id: "dragon", name: "Naga", emoji: "🐉", discovered: false, rare: true },
    { id: "mermaid", name: "Putri Duyung", emoji: "🧜‍♀️", discovered: false, rare: true },
    { id: "magic", name: "Sihir", emoji: "🪄", discovered: false, rare: true },
    { id: "black-hole", name: "Lubang Hitam", emoji: "🕳️", discovered: false, rare: true },
    { id: "aurora", name: "Aurora", emoji: "🌅", discovered: false, rare: true },
    { id: "myth", name: "Mitos", emoji: "🗿", discovered: false, rare: true },
    { id: "elixir", name: "Eliksir", emoji: "🧿", discovered: false, rare: true },
    { id: "immortality", name: "Keabadian", emoji: "♾️", discovered: false, rare: true },
    { id: "starlight", name: "Cahaya Bintang", emoji: "🌟", discovered: false, rare: true },
    { id: "nebula", name: "Nebula", emoji: "✺", discovered: false, rare: true },
    { id: "celestial-light", name: "Cahaya Langit", emoji: "🔆", discovered: false, rare: true },
    { id: "solar-diamond", name: "Berlian Surya", emoji: "🔶", discovered: false, rare: true },
    { id: "cosmic-life", name: "Kehidupan Kosmik", emoji: "🧫", discovered: false, rare: true },
    { id: "arcane-art", name: "Seni Arcana", emoji: "🜃", discovered: false, rare: true },
    { id: "timekeeper", name: "Penjaga Waktu", emoji: "⏱️", discovered: false, rare: true },
    { id: "quantum", name: "Kuantum", emoji: "⚛️", discovered: false, rare: true },
    { id: "void-crystal", name: "Kristal Void", emoji: "🔹", discovered: false, rare: true },
    { id: "world-tree", name: "Pohon Dunia", emoji: "🌿", discovered: false, rare: true },
    { id: "creator", name: "The Creator", emoji: "👁️", discovered: false, epic: true }
];


const combinations = {
    "air+fire": "energy", "air+water": "rain", "earth+water": "mud", "air+earth": "dust",
    "fire+water": "steam", "earth+fire": "lava", "air+steam": "cloud", "cloud+water": "rain",
    "earth+rain": "plant", "earth+energy": "life", "air+energy": "electricity", "fire+stone": "metal",
    "fire+earth": "lava", "air+life": "animal", "earth+life": "plant", "fire+ice": "water",
    "water+water": "puddle", "earth+earth": "land", "fire+fire": "energy", "air+air": "pressure",
    "sand+fire": "glass", "water+ice": "snow", "cloud+energy": "storm", "plant+sun": "flower",
    "plant+time": "tree", "flower+plant": "fruit", "animal+earth": "human", "human+tool": "house",
    "electricity+computer": "idea", "star+star": "galaxy", "galaxy+galaxy": "universe", "sun+rain": "rainbow",
    "moon+sun": "time", "stone+air": "sand", "life+energy": "human", "metal+electricity": "computer",
    "book+human": "idea", "music+human": "idea", "space+star": "galaxy",
    "energy+steam": "air", "fire+energy": "sun", "water+energy": "moon", "time+sun": "space",
    "sun+space": "star", "land+fire": "stone", "stone+water": "sand", "metal+stone": "tool",
    "volcano+fire": "ash", "earth+mud": "clay", "clay+fire": "brick", "earth+puddle": "pond",
    "pond+water": "ocean", "fire+ocean": "salt", "sand+water": "beach", "tree+tree": "forest",
    "forest+rain": "jungle", "house+plant": "garden", "house+house": "village", "house+village": "city",
    "computer+metal": "robot", "star+tool": "telescope", "earth+space": "planet", "human+space": "astronaut",
    "city+stone": "castle", "pressure+stone": "diamond", "diamond+metal": "jewel",
    "fire+lava": "volcano", "tool+tree": "wood", "algae+sun": "oxygen",
    "air+plant": "pollen", "plant+water": "algae", "fire+metal": "forge",
    "forge+stone": "sword", "human+metal": "armor", "animal+human": "companion",
    "flower+pollen": "bouquet", "tool+wood": "furniture", "book+water": "ink",
    "book+ink": "story", "human+story": "culture", "culture+music": "art",
    "moon+planet": "gravity", "gravity+space": "dimension", "light+star": "comet",
    "comet+ice": "meteor", "fire+idea": "light", "ice+pressure": "crystal",
    "ash+fire": "phoenix", "animal+rainbow": "unicorn", "animal+fire": "dragon",
    "human+ocean": "mermaid", "idea+jewel": "magic", "gravity+star": "black-hole",
    "castle+story": "myth", "life+water": "elixir", "rainbow+star": "aurora",
    "elixir+time": "immortality", "light+moon": "starlight", "cloud+galaxy": "nebula",
    "star+sun": "celestial-light", "diamond+sun": "solar-diamond", "life+universe": "cosmic-life",
    "art+magic": "arcane-art", "immortality+time": "timekeeper", "dimension+energy": "quantum",
    "black-hole+crystal": "void-crystal", "tree+universe": "world-tree"
};


const rareElementIds = ["phoenix", "unicorn", "dragon", "mermaid", "magic", "black-hole", "aurora", "myth", "elixir", "immortality", "starlight", "nebula", "celestial-light", "solar-diamond", "cosmic-life", "arcane-art", "timekeeper", "quantum", "void-crystal", "world-tree"];
const specialElements = [
    { id: "soul-orbit", name: "Orbit Jiwa", emoji: "🜂", discovered: false },
    { id: "starforge", name: "Tempa Bintang", emoji: "⚜️", discovered: false },
    { id: "dream-key", name: "Kunci Mimpi", emoji: "🗝️", discovered: false },
    { id: "void-crown", name: "Mahkota Void", emoji: "♜", discovered: false },
    { id: "aurora-seal", name: "Segel Aurora", emoji: "🪬", discovered: false },
    { id: "mythic-eye", name: "Mata Mitos", emoji: "◉", discovered: false },
    { id: "dragon-heart", name: "Jantung Naga", emoji: "♥️", discovered: false },
    { id: "elixir-core", name: "Inti Eliksir", emoji: "🜁", discovered: false },
    { id: "immortal-flame", name: "Api Abadi", emoji: "🔱", discovered: false },
    { id: "unicorn-prism", name: "Prisma Unicorn", emoji: "◈", discovered: false }
];
const specialCombinations = {
    "phoenix+unicorn": "soul-orbit", "dragon+mermaid": "starforge", "magic+black-hole": "dream-key",
    "aurora+myth": "void-crown", "elixir+immortality": "aurora-seal", "phoenix+dragon": "mythic-eye",
    "unicorn+magic": "dragon-heart", "black-hole+elixir": "elixir-core", "aurora+immortality": "immortal-flame",
    "mermaid+myth": "unicorn-prism"
};
const mythicalElement = { id: "mythical", name: "Kosmos Absolut", emoji: "👁️‍🗨️", discovered: false, epic: true };
const periodicElementData = [
    ["H", "Hidrogen"], ["He", "Helium"], ["Li", "Litium"], ["Be", "Berilium"], ["B", "Boron"], ["C", "Karbon"], ["N", "Nitrogen"], ["O", "Oksigen"], ["F", "Fluorin"], ["Ne", "Neon"],
    ["Na", "Natrium"], ["Mg", "Magnesium"], ["Al", "Aluminium"], ["Si", "Silikon"], ["P", "Fosfor"], ["S", "Sulfur"], ["Cl", "Klorin"], ["Ar", "Argon"], ["K", "Kalium"], ["Ca", "Kalsium"],
    ["Sc", "Skandium"], ["Ti", "Titanium"], ["V", "Vanadium"], ["Cr", "Kromium"], ["Mn", "Mangan"], ["Fe", "Besi"], ["Co", "Kobalt"], ["Ni", "Nikel"], ["Cu", "Tembaga"], ["Zn", "Seng"],
    ["Ga", "Galium"], ["Ge", "Germanium"], ["As", "Arsen"], ["Se", "Selenium"], ["Br", "Bromin"], ["Kr", "Kripton"], ["Rb", "Rubidium"], ["Sr", "Stronsium"], ["Y", "Itrium"], ["Zr", "Zirkonium"],
    ["Nb", "Niobium"], ["Mo", "Molibdenum"], ["Tc", "Teknesium"], ["Ru", "Rutenium"], ["Rh", "Rodium"], ["Pd", "Paladium"], ["Ag", "Perak"], ["Cd", "Kadmium"], ["In", "Indium"], ["Sn", "Timah"],
    ["Sb", "Antimon"], ["Te", "Telurium"], ["I", "Iodin"], ["Xe", "Xenon"], ["Cs", "Sesium"], ["Ba", "Barium"], ["La", "Lantanum"], ["Ce", "Serium"], ["Pr", "Praseodimium"], ["Nd", "Neodimium"],
    ["Pm", "Prometium"], ["Sm", "Samarium"], ["Eu", "Europium"], ["Gd", "Gadolinium"], ["Tb", "Terbium"], ["Dy", "Disprosium"], ["Ho", "Holmium"], ["Er", "Erbium"], ["Tm", "Tulium"], ["Yb", "Iterbium"],
    ["Lu", "Lutetium"], ["Hf", "Hafnium"], ["Ta", "Tantalum"], ["W", "Wolfram"], ["Re", "Renium"], ["Os", "Osmium"], ["Ir", "Iridium"], ["Pt", "Platina"], ["Au", "Emas"], ["Hg", "Raksa"],
    ["Tl", "Talium"], ["Pb", "Timbal"], ["Bi", "Bismut"], ["Po", "Polonium"], ["At", "Astatin"], ["Rn", "Radon"], ["Fr", "Fransium"], ["Ra", "Radium"], ["Ac", "Aktinium"], ["Th", "Torium"],
    ["Pa", "Protaktinium"], ["U", "Uranium"], ["Np", "Neptunium"], ["Pu", "Plutonium"], ["Am", "Amerisium"], ["Cm", "Kurium"], ["Bk", "Berkelium"], ["Cf", "Kalifornium"], ["Es", "Einsteinium"], ["Fm", "Fermium"],
    ["Md", "Mendelevium"], ["No", "Nobelium"], ["Lr", "Lawrensium"], ["Rf", "Rutherfordium"], ["Db", "Dubnium"], ["Sg", "Seaborgium"], ["Bh", "Bohrium"], ["Hs", "Hassium"], ["Mt", "Meitnerium"], ["Ds", "Darmstadtium"],
    ["Rg", "Roentgenium"], ["Cn", "Kopernisium"], ["Nh", "Nihonium"], ["Fl", "Flerovium"], ["Mc", "Moskovium"], ["Lv", "Livermorium"], ["Ts", "Tenesin"], ["Og", "Oganeson"]
];
const nonmetalSymbols = new Set(["H", "C", "N", "O", "F", "P", "S", "Se", "Cl", "Br", "I", "At", "Ts"]);
const metalloidSymbols = new Set(["B", "Si", "Ge", "As", "Sb", "Te", "Po"]);
const nobleGasSymbols = new Set(["He", "Ne", "Ar", "Kr", "Xe", "Rn", "Og"]);
const periodicElements = periodicElementData.map(([symbol, name], index) => ({
    symbol, name, number: index + 1,
    type: nobleGasSymbols.has(symbol) ? "noble" : metalloidSymbols.has(symbol) ? "metalloid" : nonmetalSymbols.has(symbol) ? "nonmetal" : "metal"
}));
const educationCompounds = [
    { id: "h2o", formula: "H2O", name: "Air", atoms: { H: 2, O: 1 }, note: "Dua atom hidrogen dan satu atom oksigen." },
    { id: "o2", formula: "O2", name: "Oksigen molekuler", atoms: { O: 2 }, note: "Oksigen yang kita hirup berbentuk molekul diatomik." },
    { id: "co2", formula: "CO2", name: "Karbon dioksida", atoms: { C: 1, O: 2 }, note: "Satu karbon berikatan dengan dua oksigen." },
    { id: "ch4", formula: "CH4", name: "Metana", atoms: { C: 1, H: 4 }, note: "Satu karbon dan empat hidrogen." },
    { id: "nh3", formula: "NH3", name: "Amonia", atoms: { N: 1, H: 3 }, note: "Satu nitrogen dan tiga hidrogen." },
    { id: "nacl", formula: "NaCl", name: "Natrium klorida", atoms: { Na: 1, Cl: 1 }, note: "Garam dapur: natrium dan klorin." },
    { id: "hcl", formula: "HCl", name: "Asam klorida", atoms: { H: 1, Cl: 1 }, note: "Satu hidrogen dan satu klorin." },
    { id: "h2so4", formula: "H2SO4", name: "Asam sulfat", atoms: { H: 2, S: 1, O: 4 }, note: "Tiga jenis unsur dengan total tujuh atom." },
    { id: "caco3", formula: "CaCO3", name: "Kalsium karbonat", atoms: { Ca: 1, C: 1, O: 3 }, note: "Banyak ditemukan pada batu kapur." },
    { id: "fe2o3", formula: "Fe2O3", name: "Besi(III) oksida", atoms: { Fe: 2, O: 3 }, note: "Salah satu senyawa penyusun karat." },
    { id: "c6h12o6", formula: "C6H12O6", name: "Glukosa", atoms: { C: 6, H: 12, O: 6 }, note: "Molekul gula sederhana dengan 24 atom." },
    { id: "cuo", formula: "CuO", name: "Tembaga(II) oksida", atoms: { Cu: 1, O: 1 }, note: "Satu tembaga dan satu oksigen." },
    { id: "h2", formula: "H2", name: "Hidrogen molekuler", atoms: { H: 2 }, note: "Hidrogen biasanya berpasangan sebagai molekul diatomik." },
    { id: "n2", formula: "N2", name: "Nitrogen molekuler", atoms: { N: 2 }, note: "Nitrogen di udara berbentuk molekul diatomik." },
    { id: "cl2", formula: "Cl2", name: "Klorin molekuler", atoms: { Cl: 2 }, note: "Dua atom klorin membentuk satu molekul." },
    { id: "co", formula: "CO", name: "Karbon monoksida", atoms: { C: 1, O: 1 }, note: "Satu karbon dan satu oksigen." },
    { id: "so2", formula: "SO2", name: "Sulfur dioksida", atoms: { S: 1, O: 2 }, note: "Satu sulfur berikatan dengan dua oksigen." },
    { id: "so3", formula: "SO3", name: "Sulfur trioksida", atoms: { S: 1, O: 3 }, note: "Satu sulfur dan tiga oksigen." },
    { id: "no2", formula: "NO2", name: "Nitrogen dioksida", atoms: { N: 1, O: 2 }, note: "Satu nitrogen dan dua oksigen." },
    { id: "h2o2", formula: "H2O2", name: "Hidrogen peroksida", atoms: { H: 2, O: 2 }, note: "Dua hidrogen dan dua oksigen." },
    { id: "naoh", formula: "NaOH", name: "Natrium hidroksida", atoms: { Na: 1, O: 1, H: 1 }, note: "Tersusun dari natrium, oksigen, dan hidrogen." },
    { id: "kcl", formula: "KCl", name: "Kalium klorida", atoms: { K: 1, Cl: 1 }, note: "Satu kalium dan satu klorin." },
    { id: "mgo", formula: "MgO", name: "Magnesium oksida", atoms: { Mg: 1, O: 1 }, note: "Satu magnesium dan satu oksigen." },
    { id: "mgcl2", formula: "MgCl2", name: "Magnesium klorida", atoms: { Mg: 1, Cl: 2 }, note: "Satu magnesium dan dua klorin." },
    { id: "cao", formula: "CaO", name: "Kalsium oksida", atoms: { Ca: 1, O: 1 }, note: "Satu kalsium dan satu oksigen." },
    { id: "fecl2", formula: "FeCl2", name: "Besi(II) klorida", atoms: { Fe: 1, Cl: 2 }, note: "Satu besi dan dua klorin." },
    { id: "fecl3", formula: "FeCl3", name: "Besi(III) klorida", atoms: { Fe: 1, Cl: 3 }, note: "Satu besi dan tiga klorin." },
    { id: "cuso4", formula: "CuSO4", name: "Tembaga(II) sulfat", atoms: { Cu: 1, S: 1, O: 4 }, note: "Tembaga, sulfur, dan empat oksigen." },
    { id: "ethanol", formula: "C2H6O", name: "Etanol", atoms: { C: 2, H: 6, O: 1 }, note: "Alkohol sederhana dengan dua karbon." },
    { id: "acetic-acid", formula: "C2H4O2", name: "Asam asetat", atoms: { C: 2, H: 4, O: 2 }, note: "Senyawa utama dalam cuka." }
];
const saveKey = "alchemy-mini-save-v1";
const redeemCode = [50, 48, 48, 57, 74, 117, 108, 105, 50, 57, 80, 101, 116, 97, 108, 71, 114, 97, 110, 100, 101].map((value) => String.fromCharCode(value)).join("");
const achievementDefinitions = [
    { id: "first-mix", icon: "⚗️", title: "Percobaan Pertama", description: "Berhasil menciptakan reaksi pertama.", condition: () => stats.successfulMixes >= 1 },
    { id: "three-mixes", icon: "🧪", title: "Mulai Panas", description: "Berhasil menciptakan 3 reaksi.", condition: () => stats.successfulMixes >= 3 },
    { id: "ten-mixes", icon: "🔬", title: "Peneliti Tekun", description: "Berhasil menciptakan 10 reaksi.", condition: () => stats.successfulMixes >= 10 },
    { id: "twenty-five-mixes", icon: "🧫", title: "Ahli Reaksi", description: "Berhasil menciptakan 25 reaksi.", condition: () => stats.successfulMixes >= 25 },
    { id: "first-discovery", icon: "✨", title: "Penemuan Pertama", description: "Membuka elemen baru pertama kali.", condition: () => discoveredCount() >= 4 },
    { id: "five-elements", icon: "🌱", title: "Kolektor Pemula", description: "Membuka 5 elemen.", condition: () => discoveredCount() >= 5 },
    { id: "ten-elements", icon: "🧭", title: "Mulai Menjelajah", description: "Membuka 10 elemen.", condition: () => discoveredCount() >= 10 },
    { id: "twenty-elements", icon: "🗺️", title: "Peta Mulai Penuh", description: "Membuka 20 elemen.", condition: () => discoveredCount() >= 20 },
    { id: "forty-elements", icon: "📚", title: "Arsip Berjalan", description: "Membuka 40 elemen.", condition: () => discoveredCount() >= 40 },
    { id: "sixty-elements", icon: "🏛️", title: "Kurator Agung", description: "Membuka 60 elemen.", condition: () => discoveredCount() >= 60 },
    { id: "rare-first", icon: "💎", title: "Jejak Kelangkaan", description: "Menemukan elemen langka pertama.", condition: () => rareDiscoveredCount() >= 1 },
    { id: "rare-five", icon: "🔮", title: "Pemburu Relik", description: "Menemukan 5 elemen langka.", condition: () => rareDiscoveredCount() >= 5 },
    { id: "first-hint", icon: "💡", title: "Minta Petunjuk", description: "Menggunakan hint pertama.", condition: () => hintsUsed >= 1 },
    { id: "three-hints", icon: "🕯️", title: "Cahaya Penuntun", description: "Menggunakan 3 hint.", condition: () => hintsUsed >= 3 },
    { id: "find-life", icon: "🧬", title: "Percikan Kehidupan", description: "Menemukan Kehidupan.", condition: () => getElement("life").discovered },
    { id: "find-human", icon: "🧑", title: "Cermin Diri", description: "Menemukan Manusia.", condition: () => getElement("human").discovered },
    { id: "find-city", icon: "🏙️", title: "Peradaban", description: "Menemukan Kota.", condition: () => getElement("city").discovered },
    { id: "find-universe", icon: "🌌", title: "Di Ujung Semesta", description: "Menemukan Semesta.", condition: () => getElement("universe").discovered },
    { id: "complete-catalog", icon: "🌟", title: "Katalog Lengkap", description: "Membuka semua elemen.", condition: () => discoveredCount() === elements.length },
    { id: "special-complete", icon: "🟢", title: "Alkemis Spesial", description: "Menyelesaikan semua 10 elemen spesial.", condition: () => specialDiscoveredCount() === specialElements.length },
    { id: "rare-alchemist", icon: "👑", title: "Alkemis Abadi", description: "Menggabungkan semua elemen langka di ruang rahasia.", condition: () => unlockedAchievements.has("rare-alchemist") },
    { id: "absolute-cosmos", icon: "👁️‍🗨️", title: "Kosmos Absolut", description: "Membuka hasil konvergensi seluruh elemen spesial.", condition: () => mythicalUnlocked },
    { id: "the-end", icon: "🏁", title: "???????????????", description: "", condition: () => endUnlocked }
];


const elements = structuredClone(initialElements);
let selectedSlots = [null, null];
let stats = { successfulMixes: 0 };
const unlockedAchievements = new Set();
let endUnlocked = false;
let creatorSlots = [false, false];
const grid = document.querySelector("#element-grid");
const emptyState = document.querySelector("#empty-state");
const indexGrid = document.querySelector("#index-grid");
const achievementGrid = document.querySelector("#achievement-grid");
const achievementCount = document.querySelector("#achievement-count");
const rareChamber = document.querySelector("#rare-chamber");
const rareStatus = document.querySelector("#rare-status");
const rareLock = document.querySelector("#rare-lock");
const rareElements = document.querySelector("#rare-elements");
const rareCombineButton = document.querySelector("#rare-combine-button");
const mythicalChamber = document.querySelector("#mythical-chamber");
const mythicalStatus = document.querySelector("#mythical-status");
const mythicalLock = document.querySelector("#mythical-lock");
const mythicalElements = document.querySelector("#mythical-elements");
const mythicalCombineButton = document.querySelector("#mythical-combine-button");
const secretGate = document.querySelector("#secret-gate");
const secretContent = document.querySelector("#secret-content");
const secretQuestionForm = document.querySelector("#secret-question-form");
const secretAnswer = document.querySelector("#secret-answer");
const secretStatus = document.querySelector("#secret-status");
const redeemForm = document.querySelector("#redeem-form");
const redeemInput = document.querySelector("#redeem-input");
const redeemStatus = document.querySelector("#redeem-status");
const endChamber = document.querySelector("#end-chamber");
const endCombineButton = document.querySelector("#end-combine-button");
const endStatus = document.querySelector("#end-status");
const searchInput = document.querySelector("#search-input");
const combineButton = document.querySelector("#combine-button");
const toast = document.querySelector("#result-toast");
const homeScreen = document.querySelector("#home-screen");
const gameScreen = document.querySelector("#game-screen");
const hintButton = document.querySelector("#hint-button");
const specialElementGrid = document.querySelector("#special-element-grid");
const specialEmptyState = document.querySelector("#special-empty-state");
const specialResultGrid = document.querySelector("#special-result-grid");
const specialCount = document.querySelector("#special-count");
const specialCombineButton = document.querySelector("#special-combine-button");
const specialToast = document.querySelector("#special-toast");
const educationScreen = document.querySelector("#education-screen");
const periodicTable = document.querySelector("#periodic-table");
const formulaBuilder = document.querySelector("#formula-builder");
const formulaPreview = document.querySelector("#formula-preview");
const educationAtomCount = document.querySelector("#education-atom-count");
const educationCombineButton = document.querySelector("#education-combine-button");
const educationResult = document.querySelector("#education-result");
const formulaIndexGrid = document.querySelector("#formula-index-grid");
const educationDiscoveryCount = document.querySelector("#education-discovery-count");
const periodicReferenceTable = document.querySelector("#periodic-reference-table");
const periodicReferenceCount = document.querySelector("#periodic-reference-count");
const periodicQuizQuestion = document.querySelector("#periodic-quiz-question");
const periodicQuizOptions = document.querySelector("#periodic-quiz-options");
const periodicQuizFeedback = document.querySelector("#periodic-quiz-feedback");
const periodicQuizScore = document.querySelector("#periodic-quiz-score");
const periodicQuizNext = document.querySelector("#periodic-quiz-next");
const resetDialog = document.querySelector("#reset-dialog");
const resetOptions = document.querySelector(".reset-options");
const resetPlayfunOptions = document.querySelector("#reset-playfun-options");
const secretAnswerKey = "Karena Game Ini Sangat Menyenangkan";
let hintsUsed = 0;
let specialSlots = [null, null];
let educationAtoms = [];
const discoveredEducationCompounds = new Set();
let mythicalUnlocked = false;
let periodicQuizIndex = 0;
let periodicQuizCorrect = 0;
let periodicQuizAnswered = false;
const periodicQuizQuestions = periodicElements.flatMap((element, index) => {
    const distractors = [1, 2, 3].map((offset) => periodicElements[(index + offset) % periodicElements.length]);
    return [
        { question: `Apa simbol kimia untuk ${element.name}?`, answer: element.symbol, options: [element.symbol, ...distractors.map((item) => item.symbol)] },
        { question: `Berapa nomor atom ${element.name}?`, answer: String(element.number), options: [String(element.number), ...distractors.map((item) => String(item.number))] }
    ];
});
function shuffledItems(items) {
    return [...items].sort(() => Math.random() - 0.5);
}
let periodicQuizOrder = shuffledItems(periodicQuizQuestions.map((_, index) => index));


function discoveredCount() { return elements.filter((element) => element.discovered).length; }
function rareDiscoveredCount() { return rareElementIds.filter((id) => getElement(id)?.discovered).length; }
function specialDiscoveredCount() { return specialElements.filter((element) => element.discovered).length; }
function totalElementCount() { return elements.length + specialElements.length + 1; }
function totalDiscoveredCount() { return discoveredCount() + specialDiscoveredCount() + (mythicalUnlocked ? 1 : 0); }
function saveGame() {
    try {
        localStorage.setItem(saveKey, JSON.stringify({
            discoveredIds: elements.filter((element) => element.discovered).map((element) => element.id),
            specialDiscoveredIds: specialElements.filter((element) => element.discovered).map((element) => element.id),
            hintsUsed,
            stats,
            endUnlocked,
            unlockedAchievements: [...unlockedAchievements],
            discoveredEducationCompounds: [...discoveredEducationCompounds],
            mythicalUnlocked
        }));
    } catch (error) {
        console.warn("Progres tidak dapat disimpan.", error);
    }
}


function loadGame() {
    try {
        const saved = JSON.parse(localStorage.getItem(saveKey));
        if (!saved) return;
        const discoveredIds = new Set(Array.isArray(saved.discoveredIds) ? saved.discoveredIds : []);
        elements.forEach((element) => { element.discovered = element.base || discoveredIds.has(element.id); });
        const specialDiscoveredIds = new Set(Array.isArray(saved.specialDiscoveredIds) ? saved.specialDiscoveredIds : []);
        specialElements.forEach((element) => { element.discovered = specialDiscoveredIds.has(element.id); });
        mythicalUnlocked = saved.mythicalUnlocked === true;
        mythicalElement.discovered = mythicalUnlocked;
        hintsUsed = Number.isFinite(saved.hintsUsed) ? Math.max(0, saved.hintsUsed) : 0;
        stats = { successfulMixes: Number.isFinite(saved.stats?.successfulMixes) ? Math.max(0, saved.stats.successfulMixes) : 0 };
        endUnlocked = saved.endUnlocked === true;
        unlockedAchievements.clear();
        if (Array.isArray(saved.unlockedAchievements)) {
            saved.unlockedAchievements.forEach((id) => {
                if (achievementDefinitions.some((achievement) => achievement.id === id)) unlockedAchievements.add(id);
            });
        }
        discoveredEducationCompounds.clear();
        if (Array.isArray(saved.discoveredEducationCompounds)) saved.discoveredEducationCompounds.forEach((id) => discoveredEducationCompounds.add(id));
    } catch (error) {
        localStorage.removeItem(saveKey);
        console.warn("Data progres tidak valid dan diabaikan.", error);
    }
}


function subscriptNumber(number) {
    return String(number).replace(/[0-9]/g, (digit) => "₀₁₂₃₄₅₆₇₈₉"[digit]);
}


function educationFormulaFromAtoms() {
    const counts = {};
    educationAtoms.forEach((symbol) => { counts[symbol] = (counts[symbol] || 0) + 1; });
    const order = [...new Set(educationAtoms)];
    return { counts, formula: order.map((symbol) => `${symbol}${counts[symbol] > 1 ? subscriptNumber(counts[symbol]) : ""}`).join("") };
}


function renderPeriodicTable() {
    const neededSymbols = new Set(educationCompounds.flatMap((compound) => Object.keys(compound.atoms)));
    const formulaElements = periodicElements.filter((element) => neededSymbols.has(element.symbol));
    const elementsMarkup = formulaElements.map((element) => `<button class="periodic-element ${element.type}" type="button" data-education-element="${element.symbol}" title="${element.name} (${element.symbol})"><b>${element.symbol}</b><small>${element.number}</small><span>${element.name}</span></button>`).join("");
    periodicTable.innerHTML = elementsMarkup;
    periodicReferenceTable.innerHTML = periodicElements.map((element) => `<button class="periodic-element ${element.type}" type="button" data-periodic-reference="${element.symbol}" title="${element.name} (${element.symbol})"><b>${element.symbol}</b><small>${element.number}</small><span>${element.name}</span></button>`).join("");
    periodicReferenceCount.textContent = `${periodicElements.length} unsur`;
}


function renderPeriodicQuiz() {
    const quiz = periodicQuizQuestions[periodicQuizOrder[periodicQuizIndex]];
    const options = shuffledItems(quiz.options);
    periodicQuizQuestion.textContent = `${periodicQuizIndex + 1}. ${quiz.question}`;
    periodicQuizOptions.innerHTML = options.map((option) => `<button class="quiz-option" type="button" data-quiz-answer="${option}">${option}</button>`).join("");
    periodicQuizFeedback.textContent = "";
    periodicQuizFeedback.className = "quiz-feedback";
    periodicQuizNext.hidden = true;
    periodicQuizAnswered = false;
    periodicQuizScore.textContent = `${periodicQuizCorrect} / ${periodicQuizIndex} benar`;
}


function answerPeriodicQuiz(answer) {
    if (periodicQuizAnswered) return;
    periodicQuizAnswered = true;
    const quiz = periodicQuizQuestions[periodicQuizOrder[periodicQuizIndex]];
    const correct = answer === quiz.answer;
    if (correct) periodicQuizCorrect += 1;
    document.querySelectorAll(".quiz-option").forEach((option) => {
        option.disabled = true;
        if (option.dataset.quizAnswer === quiz.answer) option.classList.add("is-correct");
        if (option.dataset.quizAnswer === answer && !correct) option.classList.add("is-wrong");
    });
    periodicQuizFeedback.textContent = correct ? "Benar. Ingatanmu tentang unsur semakin kuat." : `Belum tepat. Jawaban yang benar: ${quiz.answer}.`;
    periodicQuizFeedback.className = `quiz-feedback ${correct ? "is-correct" : "is-wrong"}`;
    periodicQuizScore.textContent = `${periodicQuizCorrect} / ${periodicQuizIndex + 1} benar`;
    periodicQuizNext.hidden = false;
    periodicQuizNext.textContent = periodicQuizIndex === periodicQuizQuestions.length - 1 ? "Ulangi quiz ↻" : "Pertanyaan berikutnya →";
}


function advancePeriodicQuiz() {
    if (periodicQuizIndex === periodicQuizQuestions.length - 1) {
        periodicQuizIndex = 0;
        periodicQuizCorrect = 0;
        periodicQuizOrder = shuffledItems(periodicQuizQuestions.map((_, index) => index));
    } else {
        periodicQuizIndex += 1;
    }
    renderPeriodicQuiz();
}


function renderEducationFormula() {
    const { counts, formula } = educationFormulaFromAtoms();
    educationAtomCount.textContent = `${educationAtoms.length} atom`;
    if (educationAtoms.length === 0) {
        formulaBuilder.innerHTML = '<p class="formula-empty">Pilih unsur untuk mulai meracik.</p>';
        formulaPreview.textContent = "—";
        educationCombineButton.disabled = true;
        return;
    }
    formulaBuilder.innerHTML = Object.entries(counts).map(([symbol, count]) => `<button class="formula-chip" type="button" data-education-remove="${symbol}" title="Kurangi ${symbol}"><strong>${symbol}</strong><span>× ${count}</span><i>−</i></button>`).join("");
    formulaPreview.textContent = formula;
    educationCombineButton.disabled = false;
}


function renderEducationIndex() {
    educationDiscoveryCount.textContent = `${discoveredEducationCompounds.size} / ${educationCompounds.length} ditemukan`;
    formulaIndexGrid.innerHTML = educationCompounds.map((compound) => {
        const found = discoveredEducationCompounds.has(compound.id);
        return `<article class="formula-index-card${found ? " is-found" : ""}"><div class="formula-index-symbol">${found ? compound.formula : "?"}</div><div><strong>${found ? compound.name : "Senyawa tersembunyi"}</strong><small>${found ? compound.note : "Temukan dengan komposisi atom yang tepat."}</small></div><b>${found ? "Ditemukan" : "Belum"}</b></article>`;
    }).join("");
}


function checkEducationFormula() {
    const { counts, formula } = educationFormulaFromAtoms();
    const compound = educationCompounds.find((item) => Object.keys(item.atoms).length === Object.keys(counts).length && Object.entries(item.atoms).every(([symbol, count]) => counts[symbol] === count));
    if (!compound) {
        educationResult.textContent = `${formula} belum ada di indeks. Coba periksa jumlah atomnya.`;
        educationResult.className = "education-result is-error";
        return;
    }
    discoveredEducationCompounds.add(compound.id);
    saveGame();
    renderEducationIndex();
    educationResult.textContent = `${compound.formula} = ${compound.name}. ${compound.note}`;
    educationResult.className = "education-result is-success";
}


function showEducationView(viewId = "education-lab-view") {
    educationScreen.hidden = false;
    educationScreen.classList.add("is-visible");
    document.querySelectorAll(".education-nav-button").forEach((button) => button.classList.toggle("is-active", button.dataset.educationView === viewId));
    document.querySelectorAll(".education-view").forEach((view) => { view.hidden = view.id !== viewId; view.classList.toggle("is-active", view.id === viewId); });
}


function closeEducationView() {
    educationScreen.classList.remove("is-visible");
    educationScreen.hidden = true;
    homeScreen.classList.remove("is-hidden");
}


function resetPlayfunProgress() {
    elements.splice(0, elements.length, ...structuredClone(initialElements));
    specialElements.forEach((element) => { element.discovered = false; });
    mythicalUnlocked = false;
    mythicalElement.discovered = false;
    selectedSlots = [null, null];
    specialSlots = [null, null];
    creatorSlots = [false, false];
    endUnlocked = false;
    hintsUsed = 0;
    stats = { successfulMixes: 0 };
    unlockedAchievements.clear();
    renderElements();
    renderIndex();
    renderSpecialElements();
    updateProgress();
    updateBoard();
    updateSpecialBoard();
    renderAchievements();
    renderRareChamber();
    renderEndChamber();
    saveGame();
}


function resetAllProgress() {
    localStorage.removeItem(saveKey);
    resetPlayfunProgress();
    discoveredEducationCompounds.clear();
    educationAtoms = [];
    renderEducationFormula();
    renderEducationIndex();
    periodicQuizIndex = 0;
    periodicQuizCorrect = 0;
    periodicQuizOrder = shuffledItems(periodicQuizQuestions.map((_, index) => index));
    renderPeriodicQuiz();
    saveGame();
}


function refreshPlayfunAfterPartialReset() {
    renderElements();
    renderIndex();
    renderSpecialElements();
    renderMythicalChamber();
    updateProgressDisplay();
    updateBoard();
    updateSpecialBoard();
    renderAchievements();
    renderRareChamber();
    renderEndChamber();
    saveGame();
}


function resetCommonElements() {
    const initialById = new Map(initialElements.map((element) => [element.id, element]));
    elements.forEach((element) => {
        if (!element.rare && !element.epic) element.discovered = initialById.get(element.id)?.base === true;
    });
    selectedSlots = [null, null];
    refreshPlayfunAfterPartialReset();
}


function resetRareElements() {
    elements.forEach((element) => { if (element.rare || element.epic) element.discovered = false; });
    specialElements.forEach((element) => { element.discovered = false; });
    mythicalUnlocked = false;
    mythicalElement.discovered = false;
    selectedSlots = [null, null];
    specialSlots = [null, null];
    creatorSlots = [false, false];
    endUnlocked = false;
    refreshPlayfunAfterPartialReset();
}


function resetAchievements() {
    unlockedAchievements.clear();
    refreshPlayfunAfterPartialReset();
}


function renderMythicalChamber() {
    const discoveredSpecial = specialDiscoveredCount();
    const allSpecialDiscovered = discoveredSpecial === specialElements.length;
    mythicalChamber.classList.toggle("is-unlocked", mythicalUnlocked);
    mythicalLock.textContent = mythicalUnlocked ? "✦ Terbuka" : "🔒 Terkunci";
    mythicalStatus.textContent = mythicalUnlocked ? "Konvergensi berhasil. Semua elemen spesial menyatu menjadi Kosmos Absolut." : `Temukan semua ${specialElements.length} elemen spesial untuk membuka konvergensi Kosmos Absolut (${discoveredSpecial}/${specialElements.length}).`;
    mythicalElements.innerHTML = specialElements.map((element) => `<div class="mythical-element${element.discovered ? " is-found" : ""}"><span>${element.discovered ? element.emoji : "?"}</span><small>${element.discovered ? element.name : "Tersembunyi"}</small></div>`).join("");
    mythicalCombineButton.disabled = !allSpecialDiscovered || mythicalUnlocked;
    mythicalCombineButton.textContent = mythicalUnlocked ? "Kosmos Absolut sudah ditemukan" : "Gabungkan semua elemen spesial";
}


function combineMythicalElements() {
    if (specialDiscoveredCount() !== specialElements.length || mythicalUnlocked) return;
    mythicalUnlocked = true;
    mythicalElement.discovered = true;
    renderMythicalChamber();
    renderIndex();
    updateProgress();
    mythicalStatus.textContent = "Konvergensi berhasil. Semua elemen spesial menyatu menjadi Kosmos Absolut!";
    toast.textContent = "👁️‍🗨️ Menemukan Kosmos Absolut!";
    toast.className = "result-toast visible";
    setTimeout(() => toast.className = "result-toast", 3200);
}


function renderSpecialElements() {
    const discoveredRare = rareElementIds.map((id) => getElement(id)).filter((element) => element?.discovered);
    specialElementGrid.innerHTML = discoveredRare.map((element) => `<button class="special-element-card" type="button" data-special-element="${element.id}" title="Pilih ${element.name}"><span>${element.emoji}</span><small>${element.name}</small></button>`).join("");
    specialEmptyState.hidden = discoveredRare.length > 0;
    specialResultGrid.innerHTML = specialElements.map((element) => `<article class="special-result-card${element.discovered ? " is-found" : ""}"><span>${element.discovered ? element.emoji : "?"}</span><div><strong>${element.discovered ? element.name : "Tersembunyi"}</strong><small>${element.discovered ? "Elemen spesial" : "Racik dari dua elemen rare"}</small></div></article>`).join("");
    specialCount.textContent = `${specialDiscoveredCount()} / ${specialElements.length} diracik`;
}


function updateSpecialBoard() {
    document.querySelectorAll(".special-slot").forEach((slot, index) => {
        const element = getElement(specialSlots[index]) || specialElements.find((item) => item.id === specialSlots[index]);
        slot.classList.toggle("selected", Boolean(element));
        slot.querySelector(".special-slot-icon").textContent = element ? element.emoji : "✦";
        slot.querySelector("small").textContent = element ? element.name : "Pilih elemen rare";
    });
    specialCombineButton.disabled = specialSlots.some((slot) => !slot);
}


function showSpecialToast(message) {
    specialToast.textContent = message;
    specialToast.className = "result-toast visible";
    setTimeout(() => specialToast.className = "result-toast", 2600);
}


function combineSpecial() {
    const resultId = specialCombinations[combinationKey(specialSlots[0], specialSlots[1])];
    if (!resultId) { showSpecialToast("Belum ada racikan spesial untuk pasangan ini"); return; }
    const result = specialElements.find((element) => element.id === resultId);
    const isNew = !result.discovered;
    result.discovered = true;
    specialSlots = [resultId, null];
    renderSpecialElements();
    renderMythicalChamber();
    renderIndex();
    updateSpecialBoard();
    updateProgress();
    showSpecialToast(isNew ? `Menemukan ${result.emoji} ${result.name}!` : `${result.emoji} ${result.name} lagi!`);
}


function renderElements(filter = "") {
    const visible = elements.filter((element) => element.discovered && element.name.toLowerCase().includes(filter.toLowerCase()));
    grid.innerHTML = visible.map((element) => `<button class="element-card" type="button" data-element="${element.id}" title="Pilih ${element.name}"><span class="emoji">${element.emoji}</span><span class="name">${element.name}</span></button>`).join("");
    emptyState.hidden = visible.length > 0;
}


function getRecipe(resultId) {
    const recipe = Object.entries(combinations).find(([, result]) => result === resultId);
    if (!recipe) return null;
    return recipe[0].split("+").map((id) => getElement(id));
}


function renderAchievements() {
    const unlockedCount = unlockedAchievements.size;
    achievementCount.textContent = `${unlockedCount} / ${achievementDefinitions.length}`;
    achievementGrid.innerHTML = achievementDefinitions.map((achievement) => {
        const unlocked = unlockedAchievements.has(achievement.id);
        const title = achievement.id === "the-end" && unlocked ? "🙂" : achievement.title;
        const description = achievement.description ? `<small>${achievement.description}</small>` : "";
        return `<article class="achievement-card${unlocked ? " is-unlocked" : ""}"><span class="achievement-icon">${unlocked ? achievement.icon : "🔒"}</span><div><strong>${title}</strong>${description}</div><b>${unlocked ? "Terbuka" : "Terkunci"}</b></article>`;
    }).join("");
}


function renderRareChamber() {
    const discoveredRare = rareDiscoveredCount();
    const allRareDiscovered = discoveredRare === rareElementIds.length;
    rareChamber.classList.toggle("is-unlocked", allRareDiscovered);
    rareLock.textContent = allRareDiscovered ? "✦ Terbuka" : "🔒 Terkunci";
    rareStatus.textContent = allRareDiscovered ? "Semua 20 elemen langka terkumpul. Satukan mereka untuk meraih achievement terakhir." : `Temukan semua ${rareElementIds.length} elemen langka untuk membuka ruang ini (${discoveredRare}/${rareElementIds.length}).`;
    rareElements.innerHTML = rareElementIds.map((id) => {
        const element = getElement(id);
        return `<div class="rare-element${element.discovered ? " is-found" : ""}"><span>${element.discovered ? element.emoji : "?"}</span><small>${element.discovered ? element.name : "Tersembunyi"}</small></div>`;
    }).join("");
    rareCombineButton.disabled = !allRareDiscovered || unlockedAchievements.has("rare-alchemist");
    rareCombineButton.textContent = unlockedAchievements.has("rare-alchemist") ? "Achievement sudah didapat" : "Gabungkan semua elemen langka";
}


function checkAchievements() {
    achievementDefinitions.forEach((achievement) => {
        if (!unlockedAchievements.has(achievement.id) && achievement.condition()) unlockedAchievements.add(achievement.id);
    });
    renderAchievements();
    renderRareChamber();
    saveGame();
}


function renderEndChamber() {
    const creator = getElement("creator");
    const available = Boolean(creator?.discovered);
    endChamber.hidden = !available;
    if (!available) return;
    document.querySelectorAll(".creator-slot").forEach((slot, index) => {
        slot.classList.toggle("selected", creatorSlots[index]);
        slot.disabled = endUnlocked;
    });
    endCombineButton.disabled = !creatorSlots.every(Boolean) || endUnlocked;
    endCombineButton.textContent = endUnlocked ? "Tamat 🏁" : "Gabungkan menjadi Tamat";
    endStatus.textContent = endUnlocked ? "🙂" : "";
}


function renderIndex() {
    const discovered = elements.filter((element) => element.discovered);
    const regularCards = discovered.map((element) => {
        const recipe = element.base ? "Elemen dasar" : getRecipe(element.id);
        const recipeText = recipe ? (Array.isArray(recipe) ? `${recipe[0].emoji} ${recipe[0].name} + ${recipe[1].emoji} ${recipe[1].name}` : recipe) : "Belum ada resep";
        const rarityLabel = element.epic ? "Elemen epic · " : element.rare ? "Elemen langka · " : "";
        const rarityClass = element.epic ? " epic-card" : element.rare ? " rare-card" : element.base ? " base-card" : " common-card";
        return `<article class="index-card${rarityClass}"><span class="index-emoji">${element.emoji}</span><div><strong>${element.name}</strong><small>${rarityLabel}${recipeText}</small></div></article>`;
    }).join("");
    const specialCards = specialElements.filter((element) => element.discovered).map((element) => `<article class="index-card special-index-card"><span class="index-emoji">${element.emoji}</span><div><strong>${element.name}</strong><small>Elemen spesial · Racik Spesial</small></div></article>`).join("");
    const mythicalCard = mythicalUnlocked ? `<article class="index-card mythical-index-card"><span class="index-emoji">${mythicalElement.emoji}</span><div><strong>${mythicalElement.name}</strong><small>Elemen epic · Konvergensi semua elemen spesial</small></div></article>` : "";
    indexGrid.innerHTML = regularCards + specialCards + mythicalCard;
}


function updateProgress() {
    updateProgressDisplay();
    checkAchievements();
}


function updateProgressDisplay() {
    const totalDiscovered = totalDiscoveredCount();
    const totalElements = totalElementCount();
    document.querySelector("#discovery-count").textContent = `${totalDiscovered} / ${totalElements} elemen ditemukan`;
    document.querySelector("#progress-bar").style.width = `${(totalDiscovered / totalElements) * 100}%`;
    const baseElements = elements.filter((item) => item.base).length;
    const newDiscoveries = totalDiscovered - baseElements;
    const hintsEarned = Math.floor(newDiscoveries / 3);
    hintButton.disabled = hintsUsed >= hintsEarned;
    hintButton.title = hintButton.disabled ? "Temukan 3 elemen baru untuk mendapatkan hint" : "Lihat satu resep bantuan";
}


function getElement(id) { return elements.find((element) => element.id === id); }
function combinationKey(first, second) { return [first, second].sort().join("+"); }


function updateBoard() {
    document.querySelectorAll(".mix-slot").forEach((slot, index) => {
        const element = getElement(selectedSlots[index]);
        slot.classList.toggle("selected", Boolean(element));
        slot.querySelector(".slot-emoji").textContent = element ? element.emoji : "+";
        slot.querySelector(".slot-label").textContent = element ? element.name : "Pilih elemen";
    });
    combineButton.disabled = selectedSlots.some((slot) => !slot);
}


function selectElement(id) {
    const openSlot = selectedSlots.findIndex((slot) => !slot);
    selectedSlots[openSlot === -1 ? 0 : openSlot] = id;
    updateBoard();
}


function discover(id) {
    const element = getElement(id);
    if (!element) return;
    element.discovered = true;
    updateProgress();
    renderElements(searchInput.value);
    renderIndex();
    checkAchievements();
}


function combine() {
    const resultId = combinations[combinationKey(selectedSlots[0], selectedSlots[1])];
    if (!resultId) {
        toast.textContent = "Belum ada reaksi... coba pasangan lain";
        toast.className = "result-toast visible";
        setTimeout(() => toast.className = "result-toast", 1800);
        return;
    }
    const result = getElement(resultId) || { id: resultId, name: resultId, emoji: "✨" };
    if (!getElement(resultId)) elements.push(result);
    const isNew = !result.discovered;
    stats.successfulMixes += 1;
    discover(resultId);
    toast.textContent = isNew ? `Menemukan ${result.emoji} ${result.name}!` : `${result.emoji} ${result.name} lagi!`;
    toast.className = "result-toast visible";
    setTimeout(() => toast.className = "result-toast", 1800);
    selectedSlots = [resultId, null];
    renderElements(searchInput.value);
    renderIndex();
    updateBoard();
}


function combineRareElements() {
    if (rareDiscoveredCount() !== rareElementIds.length) return;
    const creator = getElement("creator");
    creator.discovered = true;
    unlockedAchievements.add("rare-alchemist");
    renderElements(searchInput.value);
    renderIndex();
    checkAchievements();
    rareStatus.textContent = "Konvergensi berhasil. The Creator telah terbangun!";
    rareCombineButton.textContent = "Achievement sudah didapat";
    toast.textContent = "👁️ Menemukan The Creator!";
    toast.className = "result-toast visible";
    setTimeout(() => toast.className = "result-toast", 3000);
}


function redeemAllElements() {
    elements.forEach((element) => { element.discovered = true; });
    specialElements.forEach((element) => { element.discovered = true; });
    mythicalUnlocked = true;
    mythicalElement.discovered = true;
    renderElements(searchInput.value);
    renderIndex();
    updateProgress();
    renderAchievements();
    renderRareChamber();
    renderEndChamber();
    renderSpecialElements();
    renderMythicalChamber();
    redeemInput.value = "";
    redeemStatus.textContent = "Semua elemen telah terbuka dan progres tersimpan.";
    redeemStatus.className = "redeem-status is-success";
}


function showView(viewId, activeButton) {
    document.querySelectorAll(".nav-button").forEach((item) => item.classList.toggle("is-active", item === activeButton));
    document.querySelectorAll(".view-panel").forEach((panel) => {
        const isActive = panel.id === viewId;
        panel.hidden = !isActive;
        panel.classList.toggle("is-active", isActive);
    });
}


function closeSecret() {
    const alchemyButton = document.querySelector('[data-view="alchemy-view"]');
    showView("alchemy-view", alchemyButton);
}


function combineCreators() {
    if (!creatorSlots.every(Boolean) || endUnlocked) return;
    endUnlocked = true;
    creatorSlots = [false, false];
    checkAchievements();
    renderEndChamber();
    endStatus.textContent = "Tamat 🏁";
    toast.textContent = "🏁 Tamat";
    toast.className = "result-toast visible";
    setTimeout(() => toast.className = "result-toast", 3000);
}


function openSecret() {
    secretGate.hidden = false;
    secretContent.hidden = true;
    secretAnswer.value = "";
    secretStatus.textContent = "";
    secretStatus.className = "redeem-status";
    secretAnswer.focus();
}


function showHint() {
    const discoveredIds = new Set(elements.filter((element) => element.discovered).map((element) => element.id));
    const possibleRecipe = Object.entries(combinations).find(([recipe, resultId]) => {
        const result = getElement(resultId);
        const ingredients = recipe.split("+");
        return result && !result.discovered && ingredients.every((id) => discoveredIds.has(id));
    });
    const discoveredRareIds = new Set(rareElementIds.filter((id) => getElement(id)?.discovered));
    const possibleSpecialRecipe = Object.entries(specialCombinations).find(([recipe, resultId]) => {
        const result = specialElements.find((element) => element.id === resultId);
        const ingredients = recipe.split("+");
        return result && !result.discovered && ingredients.every((id) => discoveredRareIds.has(id));
    });
    if (!possibleRecipe && !possibleSpecialRecipe) {
        toast.textContent = "Belum ada resep yang siap dicoba";
        toast.className = "result-toast visible";
        setTimeout(() => toast.className = "result-toast", 2200);
        return;
    }
    const [recipe, resultId] = possibleRecipe || possibleSpecialRecipe;
    const isSpecialRecipe = Boolean(possibleSpecialRecipe && !possibleRecipe);
    const ingredients = recipe.split("+").map((id) => getElement(id));
    const result = isSpecialRecipe ? specialElements.find((element) => element.id === resultId) : getElement(resultId);
    toast.textContent = `Hint: ${ingredients[0].emoji} ${ingredients[0].name} + ${ingredients[1].emoji} ${ingredients[1].name} = ${result.emoji} ${result.name}`;
    toast.className = "result-toast visible";
    hintsUsed += 1;
    updateProgress();
    setTimeout(() => toast.className = "result-toast", 4200);
}


grid.addEventListener("click", (event) => { const card = event.target.closest("[data-element]"); if (card) selectElement(card.dataset.element); });
document.querySelectorAll(".mix-slot").forEach((slot, index) => slot.addEventListener("click", () => { selectedSlots[index] = null; updateBoard(); }));
document.querySelectorAll(".special-slot").forEach((slot, index) => slot.addEventListener("click", () => { specialSlots[index] = null; updateSpecialBoard(); }));
specialElementGrid.addEventListener("click", (event) => { const card = event.target.closest("[data-special-element]"); if (!card) return; const openSlot = specialSlots.findIndex((slot) => !slot); specialSlots[openSlot === -1 ? 0 : openSlot] = card.dataset.specialElement; updateSpecialBoard(); });
periodicTable.addEventListener("click", (event) => { const element = event.target.closest("[data-education-element]"); if (!element) return; educationAtoms.push(element.dataset.educationElement); renderEducationFormula(); });
periodicQuizOptions.addEventListener("click", (event) => { const option = event.target.closest("[data-quiz-answer]"); if (option) answerPeriodicQuiz(option.dataset.quizAnswer); });
periodicQuizNext.addEventListener("click", advancePeriodicQuiz);
formulaBuilder.addEventListener("click", (event) => { const chip = event.target.closest("[data-education-remove]"); if (!chip) return; const symbol = chip.dataset.educationRemove; const atomIndex = educationAtoms.lastIndexOf(symbol); if (atomIndex >= 0) educationAtoms.splice(atomIndex, 1); renderEducationFormula(); });
document.querySelector("#clear-formula-button").addEventListener("click", () => { educationAtoms = []; educationResult.textContent = ""; educationResult.className = "education-result"; renderEducationFormula(); });
educationCombineButton.addEventListener("click", checkEducationFormula);
document.querySelectorAll(".education-nav-button").forEach((button) => button.addEventListener("click", () => showEducationView(button.dataset.educationView)));
document.querySelector("#education-exit-button").addEventListener("click", closeEducationView);
combineButton.addEventListener("click", combine);
specialCombineButton.addEventListener("click", combineSpecial);
hintButton.addEventListener("click", showHint);
rareCombineButton.addEventListener("click", combineRareElements);
mythicalCombineButton.addEventListener("click", combineMythicalElements);
redeemForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (redeemInput.value.trim() !== redeemCode) {
        redeemStatus.textContent = "Kode tidak dikenali.";
        redeemStatus.className = "redeem-status is-error";
        return;
    }
    redeemAllElements();
});
searchInput.addEventListener("input", (event) => renderElements(event.target.value));
document.querySelectorAll(".nav-button").forEach((button) => button.addEventListener("click", () => {
    if (button.dataset.view === "secret-view") {
        showView("secret-view", button);
        openSecret();
        return;
    }
    showView(button.dataset.view, button);
}));
secretQuestionForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (secretAnswer.value.trim() !== secretAnswerKey) {
        closeSecret();
        return;
    }
    secretGate.hidden = true;
    secretContent.hidden = false;
    redeemInput.focus();
});
document.querySelectorAll(".creator-slot").forEach((slot, index) => slot.addEventListener("click", () => {
    creatorSlots[index] = !creatorSlots[index];
    renderEndChamber();
}));
endCombineButton.addEventListener("click", combineCreators);
document.querySelector("#start-button").addEventListener("click", () => {
    homeScreen.classList.add("is-hidden");
    gameScreen.classList.add("is-visible");
});
document.querySelector("#education-mode-button").addEventListener("click", () => {
    homeScreen.classList.add("is-hidden");
    showEducationView();
});
document.querySelector("#home-button").addEventListener("click", () => {
    gameScreen.classList.remove("is-visible");
    homeScreen.classList.remove("is-hidden");
});
document.querySelector("#reset-button").addEventListener("click", () => { resetOptions.hidden = false; resetPlayfunOptions.hidden = true; resetDialog.showModal(); });
document.querySelector("#reset-playfun-button").addEventListener("click", () => { resetOptions.hidden = true; resetPlayfunOptions.hidden = false; });
document.querySelector("#reset-common-elements-button").addEventListener("click", () => { resetCommonElements(); resetDialog.close(); });
document.querySelector("#reset-rare-elements-button").addEventListener("click", () => { resetRareElements(); resetDialog.close(); });
document.querySelector("#reset-achievements-button").addEventListener("click", () => { resetAchievements(); resetDialog.close(); });
document.querySelector("#reset-back-button").addEventListener("click", () => { resetOptions.hidden = false; resetPlayfunOptions.hidden = true; });
document.querySelector("#reset-all-button").addEventListener("click", () => { resetAllProgress(); resetDialog.close(); });
document.querySelector("#reset-cancel-button").addEventListener("click", () => resetDialog.close());


loadGame();
renderElements();
renderIndex();
renderAchievements();
renderRareChamber();
renderMythicalChamber();
renderEndChamber();
renderSpecialElements();
renderPeriodicTable();
renderPeriodicQuiz();
renderEducationFormula();
renderEducationIndex();
updateBoard();
updateSpecialBoard();
updateProgress();