import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import logo from '../assets/logo.png';
import menu from '../assets/menu.png';
import close from '../assets/close.png';

export function Navbar() {
  const links = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'About', path: '/about' },
    { id: 3, name: 'Contact', path: '/contact' },
  ];

  const [menuIsClicked, setMenu] = useState(false);

  function handleClickEvent() {
    setMenu((prev) => !prev);
  }

  return (
    <nav className="navbar-shadow flex items-center bg-gray-800 p-3 justify-between px-[30px] sm:px-[50px] z-10 relative shadow-lg shadow-green-500/50">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="object-fit rounded-full w-[50px]" />
        <p className="text-white font-semibold italic sm:block hidden">
          Erwin | <span>Portfolio</span>
        </p>
      </div>

      {/* Desktop Links */}
      <ul className="list-none gap-10 items-center sm:flex hidden">
        {links.map((link) => (
          <li key={link.id}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? 'text-white italic'
                  : 'text-gray-400 hover:text-white transition'
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <div className="sm:hidden relative">
        <img
          src={menuIsClicked ? close : menu}
          alt="menu icon"
          className="w-[40px] cursor-pointer"
          onClick={handleClickEvent}
        />

        {/* Mobile Dropdown */}
        <ul
          className={`absolute right-0 top-[60px] w-[200px] flex flex-col items-center gap-5 bg-gray-800 py-5 rounded-lg shadow-lg transition-all duration-300 ease-in-out ${
            menuIsClicked ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
          }`}
        >
          {links.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? 'text-white italic'
                    : 'text-gray-400 hover:text-white transition'
                }
                onClick={() => setMenu(false)} // close menu after click
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
