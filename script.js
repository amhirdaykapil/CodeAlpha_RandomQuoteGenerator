const quotes = [
  {
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    quote: "The best way to predict the future is to invent it.",
    author: "Alan Kay"
  },
  {
    quote: "Do not wait for opportunity. Create it.",
    author: "Unknown"
  },
  {
    quote: "Push yourself, because no one else is going to do it for you.",
    author: "Unknown"
  },
  {
    quote: "Great things never come from comfort zones.",
    author: "Neil Strauss"
  },
  {
    quote: "Don’t watch the clock; do what it does. Keep going.",
    author: "Sam Levenson"
  }
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = quotes[randomIndex].quote;
  document.getElementById("author").innerText = "- " + quotes[randomIndex].author;
}
