// Spelling Bee Word Lists - 4th-6th Grade
// Words are organized by difficulty level (1 = easiest, 5 = hardest)

const SPELLING_WORDS = {
  // List 1 - Easier words (difficulty 1-3)
  list1: [
    // Difficulty 1 - Common, phonetically regular words
    "adorn", "advance", "against", "amount", "answer", "appeal", "argue",
    "banner", "barrier", "beacon", "behave", "bottle", "bottom", "bubble",
    "bugle", "butcher", "camera", "canary", "canteen", "career", "certain",
    "choice", "cider", "citizen", "cluster", "coarse", "comfort", "control",
    "cotton", "cough", "council", "coupon", "current", "dazzle", "dealt",
    "debt", "desert", "divine", "dollar", "dough", "enough", "favorite",
    "follow", "foreman", "fraction", "frighten", "funeral", "future", "glossy",
    "gnaw", "guest", "hidden", "honesty", "ignore", "image", "launch",
    "legal", "mattress", "mellow", "memory", "mention", "mission", "motto",
    "muscle", "musician", "obvious", "olive", "ornate", "panic", "passion",
    "pencil", "pollute", "posture", "pound", "powder", "pressure", "primary",
    "punctual", "purpose", "radiance", "ransom", "redeem", "referee", "relapse",
    "reminder", "rescue", "retrieve", "revenge", "royalty", "season", "severe",
    "shield", "source", "squeal", "stadium", "starve", "symbol", "traffic",
    "trespass", "utensil", "valve", "vanilla", "verbal", "verge", "veteran",
    "villain", "vision", "waltz", "weight", "welcome", "wharf", "whimper",
    "wizard", "worsen",

    // Difficulty 2-3 - Slightly harder List 1 words
    "archery", "baboon", "ballad", "betrayal", "bravery", "cabbage", "canine",
    "carcass", "cardiac", "chronic", "circuit", "citrus", "congress", "corral",
    "cruel", "definite", "ecology", "electron", "emerald", "emerge", "excellent",
    "forgery", "fortress", "fraud", "fungus", "graduation", "hydrant", "hyena",
    "immigrant", "longitude", "obtuse", "protein", "raccoon", "saxophone",
    "sinister", "toxin"
  ],

  // List 2 - Harder words (difficulty 3-5)
  list2: [
    // Difficulty 3 - Moderate
    "aardvark", "acreage", "antelope", "antique", "appointment", "artificial",
    "attendance", "attraction", "bachelor", "barrack", "boundary", "bulletin",
    "cemetery", "cistern", "classical", "compartment", "concise", "convertible",
    "counterfeit", "courtesy", "criticism", "cuisine", "cultivation", "cuticle",
    "daughter", "designer", "disguise", "employment", "engineer", "foliage",
    "fragrance", "general", "geyser", "glacier", "gooey", "granite", "illusion",
    "immediate", "incubator", "influence", "interrupt", "jockey", "laughter",
    "lucid", "machinery", "minority", "moderation", "mournful", "mustache",
    "naughty", "nausea", "niche", "nominee", "nostalgia", "numerator", "occasion",
    "occupation", "opportunity", "parallel", "parliament", "pension", "performance",
    "phoenix", "prairie", "radioactive", "raspberry", "rebuke", "receipt",
    "reluctant", "respite", "shepherd", "skeptic", "surgeon", "temperature",
    "vacancy", "vaccine", "vicinity", "wreckage",

    // Difficulty 4 - Challenging
    "ambivalent", "amicable", "anemone", "apostrophe", "aqueduct", "beguile",
    "benevolent", "blatant", "bolster", "cajole", "candor", "circumference",
    "clemency", "cognizant", "complacent", "continuum", "cursory", "dauntless",
    "dearth", "deciduous", "demure", "desolate", "dilate", "disparate", "docile",
    "docket", "dormant", "duress", "eclectic", "eerie", "eligible", "empathy",
    "environmental", "esoteric", "feral", "impervious", "impinge", "ingenious",
    "insidious", "kilter", "languid", "maverick", "militia", "oblique", "obstinate",
    "odyssey", "palate", "paragon", "pensive", "plethora", "pliable", "primeval",
    "quell", "rancor", "rescind", "ruse", "salient", "shoat", "surmise",
    "tenuous", "trepidation", "valiant", "vanquish", "veneer", "vernal",

    // Difficulty 5 - Most challenging
    "taciturn", "taut", "wizened", "yammer", "yawp", "zealous", "zephyr"
  ]
};

// Assign difficulty scores to each word
const WORD_DIFFICULTY = {};

// List 1 words: difficulty 1-2
SPELLING_WORDS.list1.forEach((word, index) => {
  if (index < 100) {
    WORD_DIFFICULTY[word] = 1;
  } else {
    WORD_DIFFICULTY[word] = 2;
  }
});

// List 2 words: difficulty 3-5
SPELLING_WORDS.list2.forEach((word, index) => {
  if (index < 76) {
    WORD_DIFFICULTY[word] = 3;
  } else if (index < 140) {
    WORD_DIFFICULTY[word] = 4;
  } else {
    WORD_DIFFICULTY[word] = 5;
  }
});

// Get all words as a flat array
function getAllWords() {
  return [...SPELLING_WORDS.list1, ...SPELLING_WORDS.list2];
}

// Get words by difficulty range
function getWordsByDifficulty(minDiff, maxDiff) {
  return getAllWords().filter(word => {
    const diff = WORD_DIFFICULTY[word];
    return diff >= minDiff && diff <= maxDiff;
  });
}

// Export for use in main app
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SPELLING_WORDS, WORD_DIFFICULTY, getAllWords, getWordsByDifficulty };
}
