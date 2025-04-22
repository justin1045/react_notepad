import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <NavLink to="/write">Write</NavLink>
        <NavLink to="/preview">Preview</NavLink>
      </nav>
    </header>
  );
}

export default Header;