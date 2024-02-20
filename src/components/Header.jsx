import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Home</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/page1">Page 1</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/page2">Page 2</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;