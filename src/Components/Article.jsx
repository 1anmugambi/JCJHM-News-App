import { useEffect, useState } from 'react';  // Removed unnecessary 'react' import if using the new JSX Transform
import PropTypes from 'prop-types';
import NewsList from './NewsList';
import LoadingSpinner from './LoadingSpinner';
import Error from './Error';

const Category = ({ category }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=50576079b9d840e1a48ff3014f32c5bd`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setNews(data.articles);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchNews();
  }, [category]);

  return (
    <div>
      <h2>Latest News in: {category}</h2>
      {loading ? <LoadingSpinner /> : error ? <Error message={error} /> : <NewsList news={news} />}
    </div>
  );
};

Category.propTypes = {
  category: PropTypes.string.isRequired
};

export default Category;
