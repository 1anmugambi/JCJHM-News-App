import { useEffect, useState } from 'react';
import NewsList from '../Components/NewsList';
import LoadingSpinner from '../Components/LoadingSpinner';
import Error from '../Components/Error';

const Home = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=50576079b9d840e1a48ff3014f32c5bd');
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
  }, []);

  return (
    <div>
      <h2>Trending News</h2>
      {loading ? <LoadingSpinner /> : error ? <Error message={error} /> : <NewsList news={news} />}
    </div>
  );
};

export default Home;