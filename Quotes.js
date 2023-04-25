import React, { useState, useEffect } from 'react';

import twitterIcon from '../twitter.svg';

import gitIcon from '../github.png';
import linkedinIcon from '../linkedin.svg';



const Quotes = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    getQuote()
  }, []);

  const getQuote = () => {
    let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        let dataQuotes = data.quotes;
        let randomNum = Math.floor(Math.random() * dataQuotes.length);
        let randomQuote = dataQuotes[randomNum];

        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
      })
  }

  const handleClick = () => {
    getQuote();
  }
  
        
  return (
    <div>
    
    <div id="quote-box">
    
      <div id="text"><p>{quote}</p></div>
      <div id="author"><p>{author}</p></div>

      <div id="buttons">
        <div className="social-media">
          <a href="https://twitter.com/SWEATHA_S_V" id="twet-quote">
            <span><img src={twitterIcon} alt="" /></span>
          </a>
          <a href="https://www.linkedin.com/in/sweatha-shanmugam-2a1621244/" id="tumlr-quote">
            <span><img src={linkedinIcon} alt="" /></span>
          </a>
          <a href="https://github.com/Sweathashanmugam" id="tumlr-quote">
            <span><img src={gitIcon} alt="" /></span>
          </a>
        </div>
        <button onClick={()=>{
          handleClick();
          }}  id="new-quote">New Quote</button>
          
      </div>
           </div> 
      <div id='footer'>
      <h4>SWEATHA S V</h4>
      <h4>727721EUEE099</h4></div>    
    </div>
    
  )
}

export default Quotes;