import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

const NavBar = () => {

  return (
    <>
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <span className="badge bg-light text-dark fs-4"><b>News App</b></span>
          </Link>
          <li className="btn btn-primary" data-bs-toggle="button"> 
            <Link to="/feedback" className="nav-link">FeedBack</Link>
          </li>
        </div>
      </nav>

      <nav className="navbar navbar-expand-lg navbar-dark">
        <ul className="container-fluid d-flex gap-1 p-4 justify-content-center align-items-center">
          <li className="btn btn-primary" data-bs-toggle="button"> 
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="btn" data-bs-toggle="button">
            <Link to="/business" className="nav-link">Business</Link>
          </li>
          <li className="btn" data-bs-toggle="button">
            <Link to="/sports" className="nav-link">Sports</Link>
          </li>
          <li className="btn" data-bs-toggle="button">
            <Link to="/science" className="nav-link">Science</Link>
          </li>
          <li className="btn" data-bs-toggle="button">
            <Link to="/health" className="nav-link">Health</Link>
          </li>
          <li className="btn" data-bs-toggle="button">
            <Link to="/entertainment" className="nav-link">Entertainment</Link>
          </li>
          <li className="btn" data-bs-toggle="button">
            <Link to="/technology" className="nav-link">Technology</Link>
          </li>
        </ul>
        </nav>
      
    </>
  );
};

export default NavBar;
