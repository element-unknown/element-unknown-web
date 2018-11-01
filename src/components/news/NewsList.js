import React from 'react'
import NewsArticle from './NewsArticle';

const NewsList = () => {
  return (
    <div className="container section">
      <div className="card-panel grey lighten-4">
        <h3 className="grey-text text-darken-4 center">Unknown Element News</h3>
        <hr/>
        <NewsArticle />
        <NewsArticle />
        <NewsArticle />
        <NewsArticle />
      </div>
    </div>
  )
}

export default NewsList
