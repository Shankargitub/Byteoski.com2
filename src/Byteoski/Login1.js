import React from 'react';
import './Login1.css';
import image from '../Byteoski/image1.png'; 
import Navbar from './Navbar';

export const Login1 = () => {
  return (
    <section className="Login">
      <div className="Container mt-5">
        <div className="signup-content">
          <div className="signup-form">
            <h2 className="form-title">
              <span>Login</span> in
            </h2>
            <p className="zSHiv">Lorem ipsum dolor sit amet consectetur.</p>

            <form className="Registration-form" id="Registration-form">
              <div className="form-group"> 
             
                <label className="Email">
                <i class="zmdi zmdi-email"></i>Your Email
                
                </label>
              </div>

              <div className="form-group">
                <label htmlFor="Password">
                  <i class="zmdi zmdi-key"></i>Password
                </label>
              </div>

              <div className="form-check">
                <input type="checkbox" className="input" id="exampleCheck1" />
                <label className="label" htmlFor="exampleCheck1">
                  Remember me
                </label>
              </div>

              <div className="check-box2">
                <p className="label2">Forgot your password?</p>
              </div>

              <div className="button1">
                <button className="btn btn-outline-success py-200px" type="submit">
                  Login
                </button>
              </div>

              <div className="continue">
                <p>__________________________or Continue____________________</p>
              </div>

              <div className="button-container">
                <button className="google-button">
                  <i className="zmdi zmdi-google"></i>Google
                </button>
                <button className="github-button">
                  <i className="zmdi zmdi-github-alt"></i> GitHub
                </button>
              </div>
            </form>
          </div>
        </div>
      </div> 
   
      <img src={image} alt="Image" className="form-image" />
    </section>
  );
};

