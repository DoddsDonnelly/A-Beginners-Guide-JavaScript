var quotes = [
    "Look in the mirror.  Are you looking at me?",
    "It is time for a rhyme, I guess.",
    "Where is my JavaScript book?",
    "If I had a buck for every dollar I spent-Oops, never mind.",
    "I suppose you were expecting a real quote here.",
    "Quotes are great, but don't quote me on that.",
    "What should I write here?",
    "Wut hapns iff eye miss spel ohn purpas?",
    "Mark my words, I will mark my words.",
    "This spot reserved for a better quote."
];
var q_div = document.getElementById("my_quote");
var rand_int = Math.floor(Math.random() * 10);
q_div.innerHTML = quotes[rand_int];