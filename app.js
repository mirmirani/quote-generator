
//document.querySelector('.class-name')
//document.querySelector('#id-name')

//https://dev.to/rocktimsaikia/i-created-an-open-source-anime-quote-api-5b7n
//https://github.com/pprathameshmore/QuoteGarden

//https://freshman.tech/random-quote-machine/
//https://github.com/topics/quotes-api




/*
{
    statusCode : int,
    {
      _id: string,
      quoteText: string,
      quoteAuthor: string
    },
  },

  function getQuote() {
    console.log("quote button was clicked");
}

*/


const endpoint = 'https://animechan.vercel.app/api/random'
const newQuoteButton = document.querySelector('#js-new-quote');

newQuoteButton.addEventListener('click', getQuote);





async function getQuote() {
    
    spinner.classList.remove('hidden');

    newQuoteButton.disabled = true;
    
    try {
    
    const response = await fetch(endpoint)
    if (!response.ok) {
        throw Error(response.statusText)
    }

const json = await response.json();
//console.log(json)
displayQuote(json.anime + ': \n' + json.quote + '\n - ' + json.character);
setTweetButton(json.anime + '\n - ' + json.quote + '\n - ' + json.character);
//console.log("<br> - ");
//console.log(json.quoteAuthor);
    } catch (err) {
        alert('Failed to fetch new quote');
    } finally {
        newQuoteButton.disabled = false;
        spinner.classList.add('hidden');
    }
}

function displayQuote(quote) {
    const quoteText = document.querySelector('#js-quote-text');
    quoteText.textContent = quote;

}

const spinner = document.querySelector('#js-spinner')

const twitterButton = document.querySelector('#js-tweet');

function setTweetButton(quote) {
    twitterButton.setAttribute('href', `https://twitter.com/share?text=${quote}`);
}

getQuote();
