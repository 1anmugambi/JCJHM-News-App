import PropTypes from 'prop-types';
import "bootstrap/dist/css/bootstrap.min.css";

const NewsItem = ({ article }) => {
  return (
    <div className="col">
      <div className="card">
        <img src={article.urlToImage} className="card-img-top" alt={article.title} />
        <div className="card-body">
          <h5 className="card-title">{article.title}</h5>
          <p className="card-text">{article.content}</p>
          <a className="btn btn-primary" href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
        </div>
      </div>
    </div>
  );
};

NewsItem.propTypes = {
  article: PropTypes.shape({
    urlToImage: PropTypes.string, // URLs can be null/undefined in real-world data
    title: PropTypes.string.isRequired,
    content: PropTypes.string, // Content can be null/undefined in real-world data
    url: PropTypes.string.isRequired
  }).isRequired
};

export default NewsItem;
