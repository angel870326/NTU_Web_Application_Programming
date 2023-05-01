import './style.css';
import React from 'react';


function Header() {
  return (
    <header id="header" class="fixed-top">
      <div class="container d-flex align-items-center justify-content-between">

        <h1 class="logo"><a href="index.html">Angel Wang</a></h1>

        <nav id="navbar" class="navbar">
          <ul>
            <li><a class="nav-link" href="#home">Home</a></li>
            <li><a class="nav-link" href="#about">About</a></li>
            <li><a class="nav-link" href="#artwork">Artwork</a></li>
            <li><a class="nav-link" href="#video">Video</a></li>
          </ul>
        </nav>

      </div>
    </header>

  );
}

export default Header;
