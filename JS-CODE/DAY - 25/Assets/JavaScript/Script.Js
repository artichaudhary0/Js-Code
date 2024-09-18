// array of object(Quotes = key(author)-value(quote))
const quotes = [
  {
    autthor: "Oscar Wilde",
    quote:
      "To live is the rarest thing in the world. Most people exist, that is all.",
  },
  {
    autthor: "George Eliot",
    quote:
      "To live is the rarest thing in the world. Most people exist, that is all.",
  },
  {
    autthor: "Ralph Waldo Emerson",
    quote:
      "To live is the rarest thing in the world. Most people exist, that is all.",
  },
  {
    autthor: "Oscar Wilde",
    quote:
      "To live is the rarest thing in the world. Most people exist, that is all.",
  },
  {
    autthor: "Oscar Wilde",
    quote:
      "To live is the rarest thing in the world. Most people exist, that is all.",
  },
  {
    autthor: "Oscar Wilde",
    quote:
      "To live is the rarest thing in the world. Most people exist, that is all.",
  },
  {
    autthor: "Oscar Wilde",
    quote:
      "To live is the rarest thing in the world. Most people exist, that is all.",
  },
];

// display random quotes
function displayQuotes() {
  const randomIndex = Math.floor(Math.random() * quotes.length);

  const quote = quotes[randomIndex];

  document.getElementById("quote-text").innerText = `${quote.quote}`;
  document.getElementById("quote-author").innerText = `- ${quote.autthor}`;
}
// event listener

document
  .getElementById("new-quote-button")
  .addEventListener("click", displayQuotes);

// display a quote when the pages loads
window.onload = displayQuotes;
