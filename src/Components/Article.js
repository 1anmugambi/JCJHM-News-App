import react, { useEffect, useState } from 'react';
import NewsList from '../Components/NewsList';
import LoadingSpinner from '../Components/LoadingSpinner';
import Error from '../Components/Error';

const Category = ({ category }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=50576079b9d840e1a48ff3014f32c5bd`;

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

export default Category;