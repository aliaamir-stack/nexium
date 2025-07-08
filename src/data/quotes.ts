export interface Quote {
  content: string;
  author: string;
  mood: "inspirational" | "life" | "love" | "wisdom" | "technology";
}

export const quotes: Quote[] = [
  {
    content: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
    mood: "technology",
  },
  {
    content: "Life is 10% what happens to us and 90% how we react to it.",
    author: "Charles R. Swindoll",
    mood: "life",
  },
  {
    content: "Love all, trust a few, do wrong to none.",
    author: "William Shakespeare",
    mood: "love",
  },
  {
    content: "The only true wisdom is in knowing you know nothing.",
    author: "Socrates",
    mood: "wisdom",
  },
  {
    content: "Your time is limited, so don’t waste it living someone else’s life.",
    author: "Steve Jobs",
    mood: "inspirational",
  },
  {
    content: "Technology is best when it brings people together.",
    author: "Matt Mullenweg",
    mood: "technology",
  },
  {
    content: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein",
    mood: "inspirational",
  },
  {
    content: "Life isn’t about finding yourself. Life is about creating yourself.",
    author: "George Bernard Shaw",
    mood: "life",
  },
  {
    content: "Where there is love there is life.",
    author: "Mahatma Gandhi",
    mood: "love",
  },
  {
    content: "Wisdom begins in wonder.",
    author: "Socrates",
    mood: "wisdom",
  },
  {
    content: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
    mood: "technology",
  },
  {
    content: "The purpose of our lives is to be happy.",
    author: "Dalai Lama",
    mood: "life",
  },
  {
    content: "Love is composed of a single soul inhabiting two bodies.",
    author: "Aristotle",
    mood: "love",
  },
  {
    content: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
    mood: "inspirational",
  },
  {
    content: "The fool doth think he is wise, but the wise man knows himself to be a fool.",
    author: "William Shakespeare",
    mood: "wisdom",
  },
  {
    content: "Technology like art is a soaring exercise of the human imagination.",
    author: "Daniel Bell",
    mood: "technology",
  },
  {
    content: "Life is really simple, but we insist on making it complicated.",
    author: "Confucius",
    mood: "life",
  },
  {
    content: "To love and be loved is to feel the sun from both sides.",
    author: "David Viscott",
    mood: "love",
  },
  {
    content: "Knowing yourself is the beginning of all wisdom.",
    author: "Aristotle",
    mood: "wisdom",
  },
  {
    content: "The best way to get a good idea is to get a lot of ideas.",
    author: "Linus Pauling",
    mood: "technology",
  },
];
