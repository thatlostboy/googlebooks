import React from "react";

const NavBar = () => (
<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <a className="navbar-brand" href="/">GoogleBookSearch</a>
  
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link" href="/search">Search</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/saved">Saved</a>
    </li>
  </ul>
</nav>
);

export default NavBar;