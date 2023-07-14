import React from 'react';
import './page.css';
import Logo1 from '../Byteoski2/Logo.png';
import frame1 from '../Byteoski2/frame.png'; 
import course1 from '../Byteoski2/course-png.png'; 
import images1 from '../Byteoski2/index-png'; 
import images2 from '../Byteoski2/index2-png.png';
import images3 from '../Byteoski2/index3-png.png';  
import images4 from '../Byteoski2/graphic-png.png';
export const Page = () => {
  return ( 
    <section className="Login"> 
 
      <div className="Container mt-5">
        <div className="form-title">
          <h1 className="shiv2">
            Find your <span className="dream">Dream</span> course using our <br /> revolutionary AI
          </h1>
          <p className="al-text">
            Our AI helps you find the course best suited for you based on the most <br /> important parameters and proven data
          </p>

          <div className="form-group">
            <label className="email">
              <i class="zmdi zmdi-search"></i> Search for programs & institute  
              <i className="zmdi zmdi-airplane" style={{ order: 10 }}></i>
            </label>   
            
          
            <nav className="navbar">
              <div className="navbar-brand"></div>
              <ul className="navbar-menu">
                <li className="navbar-item">Home</li>
                <li className="navbar-item">Services</li>
                <li className="navbar-item">Pricing</li>
                <li className="navbar-item">Offers</li>
              </ul>
              <li className="login-label">Log in</li>
            </nav>
          </div>
        </div>
      </div> 
     
      <img src={Logo1} alt="Logo" className="Logo-png" />  
      <img src={images4} alt="Logo" className="graphic-png.png" />  
      <div className="shiv3"> 
        <h1 className="shiv-v4">What is your dream Nation?
        </h1>  
         <p className="al1-text">
            We have over 150 countries in our portfolio of partner schools who <br /> are eager to have you as their student
          </p>   
          <div className="ShivD"></div>
          <img src={frame1} alt="Logo" className="frame-png" />  
          <h2 className="shiv6">Study in top university</h2>  
          <p3 className="shiv7">1500+ university in collobration who are egger to have you as their student</p3>
         
      <div className="container3">
          <div className="box"> 
            <div className="box1">
           <label className="label1">
           <i class="zmdi zmdi-pin"></i> <p>Nebraska Christian College  </p> <p1>Guinea-Bissau</p1>
         
              
            </label> 
          </div>
          <div className="box2">
           
            <label className="label2">
             
             <i class="zmdi zmdi-pin"></i> <p>Levis and clerk college </p> <p1>Czechia</p1>
            </label>
          </div>
          <div className="box3">
             
            <label className="label3">
            <i class="zmdi zmdi-pin"></i><p>Western Kazakhstan<br /> Agricultural University</p> <p1>Costa Rice</p1>
            </label>
           </div>
          <div className="box4"> 
             <label className="label4">
             <i class="zmdi zmdi-pin"></i><p>Grow city college</p> <p1>Latvia</p1>
              
            </label>  
            </div> 
            </div>
            <label className="sign">
            <i className="zmdi zmdi-notifications-active" style={{ color: 'black' }}></i> <span style={{ color: 'white' }}>Signup today to get AI suggestions</span>
            <label className="zid" style={{ order: 10 }}>
  Sign up today
</label>  
            </label>   
           

            <div>
  <header className="custom-header">
   Be sure before you  make a choice
  </header>
  <p className="custom-paragraph">
  Explore your options and find the right course for you. With our platform, you can <br /> compare universities, courses, and programs:
  </p>
</div>  
<div className="center-container">
      <div className="grid-container">
        <div className="option">
          <h3 className="Shiv12">#1</h3>
          <p className="Shiv13">Compare Universities</p>
          <p className="Shiv14"> Find the right course for you by comparing syllabuses, program description, and more.</p>
        </div>
        <div className="option">
          <h3 className="Shiv15">#2</h3>
          <p className="Shiv16">Compare Courses</p>
          <p className="Shiv17">Find the right course for you by comparing syllabuses, program description, and more.</p>
        </div>
        <div className="option">
          <h3 className="Shiv18">#3</h3>
          <p className="Shiv19">Let AI Help You</p>
          <p className="Shiv20">Find the right course for you by comparing syllabuses, program description, and more.</p> 
         
        </div>
      </div>
    </div>  
      
   
            </div>
             </div>   
  <div className="container1">

    
        
<p className="Shiv50"> “ Lorem ipsum dolor sit amet consectetur. Ante morbi  purus eu purus <br /> id mi duis quis porttitor. Pharetra aliquam mi pellentesque adipiscing consequat placerat nunc dictumst est. In eget elementum eu sed. Dictumst enim quis tellus orci congue. Urna varius pretium ut“</p>  
<p  className="Shiv60">______________________________________________________________________________________________________________________________________________________________________________________________________________________</p>  
<p className="Shiv61"><span>Elliot Willson</span><br/>Toronto, Canada: </p>  
<p className="Shivs">* * * * *</p>
</div>
            
  <div className="container2"> 
  <h1 className="Shiv62">Our Success, as verified by <br /> the students</h1>
   <p className="Shiv63">Our success is proven by the stats, and we are proud of what our<br/> customers have to say about us.</p> 
  </div>

  <div className="center1-container">
      <div className="grid1-container">
        <div className="option1">
          <h3 className="Shiv64">3K+</h3>
          <p className="Shiv65">students</p>
          
        </div>
        <div className="option1">
          <h3 className="Shiv66">367</h3>
          <p className="Shiv67">Schools</p>
         
        </div>
        <div className="option1">
          <h3 className="Shiv68">50+</h3>
          <p className="Shiv69">countries</p>
         
         
        </div>
      </div> 
      </div>
     
    </section>
  );
};

