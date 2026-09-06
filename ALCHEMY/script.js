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
    "elixir+time": "immortality"
};


const rareElementIds = ["phoenix", "unicorn", "dragon", "mermaid", "magic", "black-hole", "aurora", "myth", "elixir", "immortality"];
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
    { id: "rare-alchemist", icon: "👑", title: "Alkemis Abadi", description: "Menggabungkan semua elemen langka di ruang rahasia.", condition: () => unlockedAchievements.has("rare-alchemist") },
    { id: "the-end", icon: "🙂", title: "???????????????", description: "", condition: () => endUnlocked }
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
const secretAnswerKey = "Karena Game Ini Sangat Menyenangkan";
let hintsUsed = 0;


function discoveredCount() { return elements.filter((element) => element.discovered).length; }
function rareDiscoveredCount() { return rareElementIds.filter((id) => getElement(id)?.discovered).length; }
function saveGame() {
    try {
        localStorage.setItem(saveKey, JSON.stringify({
            discoveredIds: elements.filter((element) => element.discovered).map((element) => element.id),
            hintsUsed,
            stats,
            endUnlocked,
            unlockedAchievements: [...unlockedAchievements]
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
        hintsUsed = Number.isFinite(saved.hintsUsed) ? Math.max(0, saved.hintsUsed) : 0;
        stats = { successfulMixes: Number.isFinite(saved.stats?.successfulMixes) ? Math.max(0, saved.stats.successfulMixes) : 0 };
        endUnlocked = saved.endUnlocked === true;
        unlockedAchievements.clear();
        if (Array.isArray(saved.unlockedAchievements)) {
            saved.unlockedAchievements.forEach((id) => {
                if (achievementDefinitions.some((achievement) => achievement.id === id)) unlockedAchievements.add(id);
            });
        }
    } catch (error) {
        localStorage.removeItem(saveKey);
        console.warn("Data progres tidak valid dan diabaikan.", error);
    }
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
    rareStatus.textContent = allRareDiscovered ? "Semua elemen langka terkumpul. Satukan mereka untuk meraih achievement terakhir." : `Temukan semua 10 elemen langka untuk membuka ruang ini (${discoveredRare}/10).`;
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
    indexGrid.innerHTML = discovered.map((element) => {
        const recipe = element.base ? "Elemen dasar" : getRecipe(element.id);
        const recipeText = recipe ? (Array.isArray(recipe) ? `${recipe[0].emoji} ${recipe[0].name} + ${recipe[1].emoji} ${recipe[1].name}` : recipe) : "Belum ada resep";
        const rarityLabel = element.epic ? "Elemen epic · " : element.rare ? "Elemen langka · " : "";
        const rarityClass = element.epic ? " epic-card" : element.rare ? " rare-card" : element.base ? " base-card" : " common-card";
        return `<article class="index-card${rarityClass}"><span class="index-emoji">${element.emoji}</span><div><strong>${element.name}</strong><small>${rarityLabel}${recipeText}</small></div></article>`;
    }).join("");
}


function updateProgress() {
    const totalDiscovered = discoveredCount();
    document.querySelector("#discovery-count").textContent = `${totalDiscovered} / ${elements.length} ditemukan`;
    document.querySelector("#progress-bar").style.width = `${(totalDiscovered / elements.length) * 100}%`;
    const newDiscoveries = totalDiscovered - elements.filter((item) => item.base).length;
    const hintsEarned = Math.floor(newDiscoveries / 3);
    hintButton.disabled = hintsUsed >= hintsEarned;
    hintButton.title = hintButton.disabled ? "Temukan 3 elemen baru untuk mendapatkan hint" : "Lihat satu resep bantuan";
    checkAchievements();
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
    renderElements(searchInput.value);
    renderIndex();
    updateProgress();
    renderAchievements();
    renderRareChamber();
    renderEndChamber();
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
    if (!possibleRecipe) {
        toast.textContent = "Belum ada resep yang siap dicoba";
        toast.className = "result-toast visible";
        setTimeout(() => toast.className = "result-toast", 2200);
        return;
    }
    const [recipe, resultId] = possibleRecipe;
    const ingredients = recipe.split("+").map((id) => getElement(id));
    const result = getElement(resultId);
    toast.textContent = `Hint: ${ingredients[0].emoji} ${ingredients[0].name} + ${ingredients[1].emoji} ${ingredients[1].name} = ${result.emoji} ${result.name}`;
    toast.className = "result-toast visible";
    hintsUsed += 1;
    updateProgress();
    setTimeout(() => toast.className = "result-toast", 4200);
}


grid.addEventListener("click", (event) => { const card = event.target.closest("[data-element]"); if (card) selectElement(card.dataset.element); });
document.querySelectorAll(".mix-slot").forEach((slot, index) => slot.addEventListener("click", () => { selectedSlots[index] = null; updateBoard(); }));
combineButton.addEventListener("click", combine);
hintButton.addEventListener("click", showHint);
rareCombineButton.addEventListener("click", combineRareElements);
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
document.querySelector("#home-button").addEventListener("click", () => {
    gameScreen.classList.remove("is-visible");
    homeScreen.classList.remove("is-hidden");
});
document.querySelector("#reset-button").addEventListener("click", () => { localStorage.removeItem(saveKey); elements.splice(0, elements.length, ...structuredClone(initialElements)); selectedSlots = [null, null]; creatorSlots = [false, false]; endUnlocked = false; hintsUsed = 0; stats = { successfulMixes: 0 }; unlockedAchievements.clear(); renderElements(); renderIndex(); updateProgress(); updateBoard(); renderAchievements(); renderRareChamber(); renderEndChamber(); });


loadGame();
renderElements();
renderIndex();
renderAchievements();
renderRareChamber();
renderEndChamber();
updateBoard();
updateProgress();
