import React from 'react';

function Article(props) {
  let baseUrl = 'https://reddit.com';

  return (
    <article>
      <a href={ baseUrl + props.article.permalink } target="_blank">
        <h3>{ props.article.title }</h3>
      </a>
    </article>
  )
}

export default Article;