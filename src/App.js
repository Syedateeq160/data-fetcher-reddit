import React, { useState, useEffect } from 'react';

import Article from './components/Article';

function App() {
  const [article, setArticle] = useState([]);
  const [subreddit, setSubreddit] = useState('Reddit Data Fetcher');
  useEffect(() => {
    fetch("https://www.reddit.com/r/" + 'cybersecurity' +".json").then(
      res => {
        if (res.status !== 200) {
          console.warn("ERROR! API NOT WORKING");
          return;
        }
        res.json().then(data => {
          if (data != null)
            setArticle(data.data.children);
        });
      }
    )
  }, [subreddit]);

  return (
    <div className="App">
       <h1> Reddit Data Fetcher</h1>
      <header className="App-header">
        <input  type="text" className="input" value={subreddit} placeholder="Type to search" onChange={e => setSubreddit(e.target.value)}/>
      </header>
      <div className="articles">
        {(article != null) ? article.map((article, index) => <Article key={index} article={article.data} />) : ''}
      </div>
    </div>
  );
}

export default App;
