//document.querySelector('.class-name')
//document.querySelector('#id-name')

//https://dev.to/rocktimsaikia/i-created-an-open-source-anime-quote-api-5b7n
//https://github.com/pprathameshmore/QuoteGarden

//https://freshman.tech/random-quote-machine/
//https://github.com/topics/quotes-api


const newQuoteButton = document.querySelector('#js-new-quote');

newQuoteButton.addEventListener('click', getQuote);


const endpoint = 'https://quote-garden.herokuapp.com/api/v2/quotes/random'

/* 
{
    statusCode : int,
    {
      _id: string,
      quoteText: string,
      quoteAuthor: string
    }
  }

  function getQuote() {
    console.log("quote button was clicked");
}

*/

async function getQuote() {
    try {
    
    const response = await fetch(endpoint)
    if (!response.ok) {
        throw Error(response.statusText)
    }

const json = await response.json();
//console.log(json)
displayQuote(json.quote.quoteText + '\n - ' + json.quote.quoteAuthor);
//console.log("<br> - ");
//console.log(json.quoteAuthor);
    } catch (err) {
        console.log(err)
        alert('Failed to fetch new quote');
    }
}

function displayQuote(quote) {
    const quoteText = document.querySelector('#js-quote-text');
    quoteText.textContent = quote;

}