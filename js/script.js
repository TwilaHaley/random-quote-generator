/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/***
 * `quotes` array of objects
 ***/

const quotes = [
  {
    quote: 'Until I feared I would lose it, I never loved to read. One does not love breathing.',
    source: 'Harper Lee',
    citation: 'novel',
    year: 1960,
    tags: 'Books',
  },
  {
    quote: 'ou can never get a cup of tea large enough or a book long enough to suit me.',
    source: 'C.S. Lewis',
  },
  {
    quote:
      'The more that you read, the more things you will know. The more that you learn, the more places you"ll go',
    source: 'Dr. Seuss',
  },
  {
    quote: 'Books are a uniquely portable magic.',
    source: 'Stephen King',
  },
  {
    quote: 'There is more treasure in books than in all the pirate"s loot on Treasure Island.',
    source: 'Walt Disney',
  },
];
/***
 * `getRandomQuote` function
 * returns a random quote object from the `quotes` array above.
 ***/

function getRandomQuote() {
  let random = Math.floor(Math.random() * quotes.length);
  return quotes[random];
}

/***
 * `printQuote` function return an html elements with one of the quotes above.
 * RandomBodyBgColor function change the body background each time the quote change
 ***/

function printQuote() {
  let randomQuoteObject = getRandomQuote();
  let html = `
  <p class="quote"> ${randomQuoteObject.quote}</p>
  <p class="source"> ${randomQuoteObject.source}
  `;
  if (randomQuoteObject.citation !== undefined) {
    html += `<span class="citation">${randomQuoteObject.citation}</span>`;
  }
  if (randomQuoteObject.year !== undefined) {
    html += `<span class="year">${randomQuoteObject.year}</span>`;
  }
  if (randomQuoteObject.tags !== undefined) {
    html += `<span class="tags">, ${randomQuoteObject.tags}</span>`;
  }
  html += `</p>`;
  function RandomBodyBgColor() {
    const randomColor1 = Math.floor(Math.random() * 256);
    const randomColor2 = Math.floor(Math.random() * 256);
    const randomColor3 = Math.floor(Math.random() * 256);
    const color = `rgb(${randomColor1},${randomColor2},${randomColor3})`;
    document.body.style.background = color;
  }
  RandomBodyBgColor();
  return (document.getElementById('quote-box').innerHTML = html);
}

// setInterval change the quotes automatically every 10 seconds

setInterval(printQuote, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document.getElementById('load-quote').addEventListener('click', printQuote, false);
