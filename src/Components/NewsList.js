import React from 'react';
import NewsItem from './NewsItem';
import "bootstrap/dist/css/bootstrap.min.css"

const NewsList = ({ news }) => {
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4" style={{minHeight: "100vh"}}>
      {news.map((article, index) => (
        <NewsItem key={index} article={article} />
      ))}
    </div>
  );
};

export default NewsList;
