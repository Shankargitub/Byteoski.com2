//import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';

function App() {


  return (
   <> 
   <nav className="Shanakr">
  <div className="Welcome"/>
    <a className="navbar-brand"  chref="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent"/>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page"  chref="/">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link"  chref="/">Link</a>
        </li>
        <li className="nav-item dropdown"/>
          <a className="nav-link dropdown-toggle"  chref="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu"/>
            <li><a className="dropdown-item"  chref="/">Action</a></li>
            <li><a className="dropdown-item"  chref="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item"  chref="/">Something else here</a></li>
          </ul>
      
        <ul>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> 
      <div>

      </div>
  

</nav>
   </>
  );
}

export default App;


