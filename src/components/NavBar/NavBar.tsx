import React from 'react';
import {Link, NavLink} from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <>
      <nav className="navbar">
        <div>
          <Link className="logo" to="/">MJAY</Link>
        </div>
        <div>
          <NavLink className="link-nav" to="/catalog-form">Добавить вещь</NavLink>
          <NavLink className="link-nav" to="/">Каталог вещей</NavLink>
          <NavLink className="link-nav" to="/cart">Корзина</NavLink>
        </div>
      </nav>
    </>
  );
};

export default NavBar;