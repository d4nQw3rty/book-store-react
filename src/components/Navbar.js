import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  {
    id: 1,
    path: '/',
    text: 'Books',
  },
  {
    id: 2,
    path: '/Categories',
    text: 'Categories',
  },
];

const Navbar = () => (
  <>
    <header>
      <h1>Bookstore CMS</h1>
      <nav>
        <ul className="list">
          {links.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path}>
                { link.text }
              </NavLink>
            </li>
          ))}

        </ul>
      </nav>
    </header>
  </>
);

export default Navbar;
