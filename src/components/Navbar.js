import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
import { ImUser } from 'react-icons/im';

const links = [
  {
    id: 1,
    path: '/',
    text: 'BOOKS',
  },
  {
    id: 2,
    path: '/Categories',
    text: 'CATEGORIES',
  },
];

const Navbar = () => (
  <>
    <header className="header-bg">
      <h1 className="BookStore-CMS">Bookstore CMS</h1>
      <nav>
        <ul className="list">
          {links.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path} activeclassname="active-link" className="link">
                { link.text }
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="ico-container">
        <ImUser className="user-icon" />
      </div>
    </header>
  </>
);

export default Navbar;
