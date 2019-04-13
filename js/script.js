/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
  Quotes Database consisting of quote and source.
  additonal properties include citation, year, and tags.
***/
const quotes = [
  {
    quote:
      "A creative man is motivated by the desire to achieve, not by the desire to beat others.",
    source: "Ayn Rand",
    tags: "Motivational"
  },
  {
    quote:
      "Setting goals is the first step in turning the invesible into the visible.",
    source: "Tony Robbins",
    tags: "Motivational"
  },
  {
    quote: "The Way Get Started Is To Quit Talking And Begin Doing.",
    source: "Walt Disney",
    tags: "Motivational"
  },
  {
    quote: "Don’t Let Yesterday Take Up Too Much Of Today.",
    source: "Will Rogers",
    tags: "Motivational"
  },
  {
    quote:
      "You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.",
    source: "Anonymous",
    tags: "Motivational"
  },
  {
    quote: "Whether You Think You Can Or Think You Can’t, You’re Right.",
    source: "Henry Ford",
    tags: "Motivational"
  },
  {
    quote:
      "How many times do I have to teach you: just because something works doesn’t mean it can’t be improved.",
    source: "Shuri",
    citation: "Black Panther",
    year: 2018,
    tags: "Movie Quotes"
  }
];

/***
  getRandomQuote` gets a random quote object from the `quotes` array.
***/
const getRandomQuote = () => quotes[Math.floor(Math.random() * quotes.length)];

/***
  getRandomColor() generate a number from 0 to 255 for each RGB and apply to body background color.
***/
const getRandomColor = () => {
  const randomColor = () => Math.floor(Math.random() * 256);
  document.body.style.backgroundColor = `rgb(${randomColor()},${randomColor()},${randomColor()})`;
};

/***
  printQuote function call the getRandomQuote to select the object in the array of quotes.
  Check wether the quote contain a citation or year.
  display the quote inside the div with an id of 'quote-box'.
  call getRandomColor to change background color.
***/

const printQuote = () => {
  const randomQuote = getRandomQuote();
  let quote = "";
  quote += `<p class="quote">${randomQuote.quote}</p> 
      <p class="source">${randomQuote.source}`;
  if (randomQuote.citation) {
    quote += `<span class="citation">${randomQuote.citation}</span>`;
  }
  if (randomQuote.year) {
    quote += `<span class="year">${randomQuote.year}</span>`;
  }
  if (randomQuote.tags) {
    quote += `<span>, ${randomQuote.tags}</span>`;
  }
  quote += `</p>`;
  document.getElementById("quote-box").innerHTML = quote;
  getRandomColor();
};

//Automatically call printQuote every 20 seconds
setInterval(() => printQuote(), 20000);

document
  .getElementById("loadQuote")
  .addEventListener("click", printQuote, false);
