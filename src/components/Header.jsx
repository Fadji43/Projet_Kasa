//logo + nav
import React from 'react';
import logo from './image/logo_kasa.png';
import './components/Header.scss';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="Logo" className="header-logo" />
      </div>
      <div className="header-right">
        <nav>
          <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/about">À propos</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
