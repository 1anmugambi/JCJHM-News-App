import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import ArticleFetch from './Components/ArticleFetch';
import Feedback from './Pages/Feedback';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <Router>
      <div style={{ backgroundColor: darkMode ? '#333' : '#fff', color: darkMode ? '#fff' : '#000' }}>
        <button onClick={toggleDarkMode} style={{ position: 'absolute', top: 20, right: 20 }}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
        <NavBar />
                <Routes>
                  <Route path="/" exact element={<Home />} />
                  <Route path="/business" element={<ArticleFetch category="business" />} />
                  <Route path="/entertainment" element={<ArticleFetch category="entertainment" />} />
                  <Route path="/health" element={<ArticleFetch category="health" />} />
                  <Route path="/science" element={<ArticleFetch category="science" />} />
                  <Route path="/sports" element={<ArticleFetch category="sports" />} />
                  <Route path="/technology" element={<ArticleFetch category="technology" />} />
                  <Route path="/feedback" exact element={<Feedback />} />
                </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
