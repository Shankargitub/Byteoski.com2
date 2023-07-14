import React, { useState } from 'react';
import './page2';

export const Header = () => {
  const [isSearchFormActive, setSearchFormActive] = useState(false);
  const [isShoppingActive, setShoppingActive] = useState(false);
  const [isLoginFormActive, setLoginFormActive] = useState(false);
  const [isNavbarActive, setNavbarActive] = useState(false);

  const toggleSearchForm = () => {
    setSearchFormActive(!isSearchFormActive);
    setShoppingActive(false);
    setLoginFormActive(false);
    setNavbarActive(false);
  };

  const toggleShopping = () => {
    setShoppingActive(!isShoppingActive);
    setSearchFormActive(false);
    setLoginFormActive(false);
    setNavbarActive(false);
  };

  const toggleLoginForm = () => {
    setLoginFormActive(!isLoginFormActive);
    setSearchFormActive(false);
    setShoppingActive(false);
    setNavbarActive(false);
  };

  const toggleNavbar = () => {
    setNavbarActive(!isNavbarActive);
    setSearchFormActive(false);
    setShoppingActive(false);
    setLoginFormActive(false);
  };

  const handleScroll = () => {
    setSearchFormActive(false);
    setShoppingActive(false);
    setLoginFormActive(false);
    setNavbarActive(false);
  };

  return (
    <header className="header">
      <a href="#" className="logo">
        <i className="fa fa-shopping-basket" aria-hidden="true"></i>
        Farm2Home
      </a>

      <nav className={isNavbarActive ? 'navbar active' : 'navbar'}>
        <a href="#home">home</a>
        <a href="#features">about us</a>
        <a href="#products">products</a>
        <a href="#reviews">reviews</a>
      </nav>

      <div className="icons">
        <div className="fa fa-bars" id="menu-btn" onClick={toggleNavbar}></div>
        <div className="fa fa-search" id="search-btn" onClick={toggleSearchForm}></div>
        <div className="fa fa-shopping-cart" id="cart-btn" onClick={toggleShopping}></div>
        <div className="fa fa-user" id="login-btn" onClick={toggleLoginForm}></div>
      </div>

      <form className={isSearchFormActive ? 'search-form active' : 'search-form'}>
        <input type="search" id="search-box" placeholder="Search Here...." />
        <label htmlFor="search-box">
          <i className="fa fa-search"></i>
        </label>
      </form>

      <div className={isShoppingActive ? 'shopping-cart active' : 'shopping-cart'}>
        <div className="box">
          <i className="fa fa-trash"></i>
          <img src="image/cart-1.webp" alt="" />
          <div className="content">
            <h1>watermelon</h1>
            <span className="price">Rs.20/-</span>
            <span className="quantity">Qty : 1</span>
          </div>
        </div>

        <div className="box">
          <i className="fa fa-trash"></i>
          <img src="image/cart-2.jpeg" alt="" />
          <div className="content">
            <h1>Onion</h1>
            <span className="price">Rs.30/-</span>
            <span className="quantity">Qty : 1</span>
          </div>
        </div>

        <div className="total">Total : rs.50</div>
        <a href="#" className="btn">
          Checkout
        </a>
      </div>

      <form className={isLoginFormActive ? 'login-form active' : 'login-form'}>
        <h3>login now</h3>
        <input type="email" placeholder="your email" className="box" />
        <input type="password" placeholder="your password" className="box" />
        <p>
          Forget Your Password <a href="#"> Click Here</a>
        </p>
        <p>
          D'ont have a account<a href="#"> Create Now</a>
        </p>
        <input type="submit" value="login now" className="btn" />
      </form>

      <script>
        {window.onscroll = handleScroll}
      </script>
    </header>
  );
};

export default Header;
