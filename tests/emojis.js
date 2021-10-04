const emojis = [
  {
    symbol: "👽",
    letter: "a",
    name: "alien",
    category: "faces",
  },
  {
    symbol: "👶",
    letter: "b",
    name: "baby",
    category: "faces",
  },
  {
    symbol: "🌵",
    letter: "c",
    name: "cactus",
    category: "plant",
  },
  {
    symbol: "🍩",
    letter: "d",
    name: "doughnut",
    category: "food",
  },
  {
    symbol: "🐘",
    letter: "e",
    name: "elephant",
    category: "animals",
  },
  {
    symbol: "🍟",
    letter: "f",
    name: "fries",
    category: "food",
  },
  {
    symbol: "👻",
    letter: "g",
    name: "ghost",
    category: "faces",
  },
  {
    symbol: "💜",
    letter: "h",
    name: "heart",
    category: "",
  },
  {
    symbol: "🍦",
    letter: "i",
    name: "ice-cream",
    category: "food",
  },
  {
    symbol: "🤹",
    letter: "j",
    name: "juggler",
    category: "faces",
  },
  {
    symbol: "🥝",
    letter: "k",
    name: "kiwi",
    category: "food",
  },
  {
    symbol: "🐞",
    letter: "l",
    name: "ladybug",
    category: "animals",
  },
  {
    symbol: "🍄",
    letter: "m",
    name: "mushroom",
    category: "",
  },
  {
    symbol: "📰",
    letter: "n",
    name: "news",
    category: "",
  },
  {
    symbol: "🐙",
    letter: "o",
    name: "octopus",
    category: "animals",
  },
  {
    symbol: "💩",
    letter: "p",
    name: "poop",
    category: "faces",
  },
  {
    symbol: "❓",
    letter: "q",
    name: "question",
    category: "",
  },
  {
    symbol: "🤖",
    letter: "r",
    name: "robot",
    category: "faces",
  },
  {
    symbol: "💀",
    letter: "s",
    name: "die",
    category: "faces",
  },
  {
    symbol: "👅",
    letter: "t",
    name: "tongue",
    category: "",
  },
  {
    symbol: "🦄",
    letter: "u",
    name: "unicorn",
    category: "animals",
  },
  {
    symbol: "🌋",
    letter: "v",
    name: "volcano",
    category: "",
  },
  {
    symbol: "🐋",
    letter: "w",
    name: "whale",
    category: "animals",
  },
  {
    symbol: "❗",
    letter: "x",
    name: "exclamation",
    category: "",
  },
  {
    symbol: "☯",
    letter: "y",
    name: "yinyang",
    category: "",
  },
  {
    symbol: "🤐",
    letter: "z",
    name: "zipper",
    category: "faces",
  },
  {
    symbol: "😁",
    name: "grin",
    category: "faces",
  },
  {
    symbol: "😎",
    name: "sunglasses",
    category: "faces",
  },
  {
    symbol: "😆",
    name: "laugh",
    category: "faces",
  },
  {
    symbol: "😠",
    name: "mad",
    category: "faces",
  },
  {
    symbol: "😭",
    name: "cry",
    category: "faces",
  },
  {
    symbol: "😜",
    name: "silly",
    category: "faces",
  },
  {
    symbol: "😱",
    name: "whoops",
    category: "faces",
  },
  {
    symbol: "💻",
    name: "code",
    category: "devices",
  },
  {
    symbol: "✅",
    name: "check",
    category: "",
  },
  {
    symbol: "🙌",
    name: "hands",
    category: "",
  },
  {
    symbol: "💔",
    name: "heartbreak",
    category: "",
  },
  {
    symbol: "🐕",
    name: "dog",
    category: "animals",
  },
  {
    symbol: "🍔",
    name: "burger",
    category: "food",
  },
  {
    symbol: "🍹",
    name: "cocktail",
    category: "drinks",
  },
  {
    symbol: "🍕",
    name: "pizza",
    category: "food",
  },
  {
    symbol: "🌯",
    name: "burrito",
    category: "food",
  },
  {
    symbol: "🌮",
    name: "taco",
    category: "food",
  },
  {
    symbol: "🍇",
    name: "grapes",
    category: "food",
  },
  {
    symbol: "🍓",
    name: "strawberry",
    category: "food",
  },
  {
    symbol: "🍍",
    name: "pineapple",
    category: "food",
  },
  {
    symbol: "🍉",
    name: "watermelon",
    category: "food",
  },
  {
    symbol: "🍌",
    name: "banana",
    category: "food",
  },
  {
    symbol: "🍣",
    name: "sushi",
    category: "food",
  },
  {
    symbol: "🍿",
    name: "popcorn",
    category: "food",
  },
  {
    symbol: "🍱",
    name: "bento",
    category: "food",
  },
  {
    symbol: "🍰",
    name: "cake",
    category: "food",
  },
  {
    symbol: "🍺",
    name: "beer",
    category: "drinks",
  },
  {
    symbol: "🍷",
    name: "wine",
    category: "drinks",
  },
  {
    symbol: "🍖",
    name: "meat",
    category: "food",
  },
  {
    symbol: "🍫",
    name: "chocolate",
    category: "food",
  },
  {
    symbol: "🍼",
    name: "bottle",
    category: "drinks",
  },
  {
    symbol: "🍾",
    name: "champagne",
    category: "drinks",
  },
  {
    symbol: "🍸",
    name: "martini",
    category: "drinks",
  },
  {
    symbol: "🍽",
    name: "dinner",
    category: "",
  },
  {
    symbol: "🏎",
    name: "car",
    category: "vehicles",
  },
  {
    symbol: "🚅",
    name: "train",
    category: "vehicles",
  },
  {
    symbol: "🛫",
    name: "plane",
    category: "vehicles",
  },
  {
    symbol: "🌎",
    name: "earth",
    category: "",
  },
  {
    symbol: "⛵",
    name: "boat",
    category: "vehicles",
  },
  {
    symbol: "🌧",
    name: "rain",
    category: "weather",
  },
  {
    symbol: "🌨",
    name: "snow",
    category: "weather",
  },
  {
    symbol: "🌩",
    name: "thunderstorm",
    category: "weather",
  },
  {
    symbol: "🌞",
    name: "sun",
    category: "weather",
  },
  {
    symbol: "🌪",
    name: "tornado",
    category: "weather",
  },
  {
    symbol: "🔥",
    name: "fire",
    category: "",
  },
  {
    symbol: "🎃",
    name: "halloween",
    category: "holidays",
  },
  {
    symbol: "🎄",
    name: "christmas",
    category: "holidays",
  },
  {
    symbol: "📺",
    name: "tv",
    category: "devices",
  },
  {
    symbol: "🎶",
    name: "music",
    category: "entertainment",
  },
  {
    symbol: "🎬",
    name: "movie",
    category: "entertainment",
  },
  {
    symbol: "🎂",
    name: "birthday",
    category: "holiday",
  },
  {
    symbol: "📖",
    name: "book",
    category: "entertainment",
  },
  {
    symbol: "📓",
    name: "notebook",
    category: "",
  },
  {
    symbol: "🔑",
    name: "key",
    category: "devices",
  },
  {
    symbol: "🛠",
    name: "fix",
    category: "devices",
  },
  {
    symbol: "📱",
    name: "phone",
    category: "devices",
  },
  {
    symbol: "📞",
    name: "call",
    category: "devices",
  },
];

module.exports = emojis;
