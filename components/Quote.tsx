import React, { useEffect, useState } from 'react';

const QuoteComponent = () => {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    const url = 
      'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
    useEffect(() => {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          const quotes = data.quotes;
          const randomIndex = Math.floor(Math.random() * quotes.length);
          const randomQuote = quotes[randomIndex];
          setQuote(randomQuote.quote);
          setAuthor(randomQuote.author);
        })
        .catch(error => {
          console.log('Error:', error);
        });
    }, []);
  
    const generateRandomQuote = () => {
      fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
        .then(response => response.json())
        .then(data => {
          const quotes = data.quotes;
          const randomIndex = Math.floor(Math.random() * quotes.length);
          const randomQuote = quotes[randomIndex];
          setQuote(randomQuote.quote);
          setAuthor(randomQuote.author);
        })
        .catch(error => {
          console.log('Error:', error);
        });
    };

    const handleButtonClick = () => {
      window.open('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
      encodeURIComponent('"' + quote + '" ' + author));
    };

    return (
      <div>
        <div className="text-2xl font-bold">
          <p>{quote}</p>
          <p className= "text-right text-red-900">- {author}</p>
        </div>
        
        <div className="mt-10">
          <button
              title="Tweet this quote!"
              type="button"
              data-te-ripple-init
              data-te-ripple-color="light"
              className="mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
              style={{ backgroundColor: "#1da1f2" }}
              onClick={handleButtonClick}
            >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" 
                />
            </svg>
          </button>

          <button className="bg-gray-400 text-black px-2 py-2 float-right rounded-lg" onClick={generateRandomQuote}>
            <a
              className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
              data-te-nav-link-ref
              data-te-ripple-init
              data-te-ripple-color="light"
              >New Quote
            </a>
          </button>
        </div >
      </div>
    );
  }
  
  export default QuoteComponent;