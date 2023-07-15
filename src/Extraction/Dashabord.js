import React from 'react' 
import './Dashabord.css';   
import Logo2 from '../Extraction/man-png.png';

export const Dashabord = () => {  
    const containerStyle = {
        display: 'flex',
        alignItems: 'center',
      };
    
      const svgStyle = {
        marginRight: '10px',
      };
    return (  
        <>  
        <div className="first">
           <div className="second">
            <div className="third">  
            <svg xmlns="http://www.w3.org/2000/svg" width="54" height="32" viewBox="0 0 54 32" fill="none">
  <path d="M1 1.56543H52.4526M1 15.829H44.9371M1 30.0926H34.5309" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg> 
   <div className="fourth">
       <p className="para">Credits</p> 
       <p className="para1">: 1500</p>  
       <button className="para2"> <span>Upgrade</span></button>  
       
   </div>   
   <div className="para15">
   <label className="para3">API KEY</label>     
   </div>

   


            </div>  
            <div className="para5" > 
            <label className="email">Extraction 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9" fill="none" className="para6">
  <path d="M15 1L8 8L1 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </label> 
            </div>  
            <div className="para7" > 
            <label className="email1">Lead genration
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9" fill="none" className="para8">
  <path d="M15 1L8 8L1 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </label> 
            </div>  
            <div className="para9" > 
            <label className="email2">Monitoring
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9" fill="none" className="para10">
  <path d="M15 1L8 8L1 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </label> 
            </div>  
            <div className="para11" > 
            <label className="email3">Monitoring
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9" fill="none" className="para12">
  <path d="M15 1L8 8L1 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </label> 
            </div>   
            <div className="para13" > 
            <label className="email4">Monitoring
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9" fill="none" className="para14">
  <path d="M15 1L8 8L1 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg> 

            </label> 
            </div>   
            < div className="para18">
              <label className="email6">Extraction  
              <img src={Logo2} alt="Logo" className="man-png" />   
             

              </label> 
            </div>
  
            < div className="para19">
              <label className="email7">Url 
              <button className="para20"><span>Submit</span></button>
             
               
              </label> 
            </div> 
            <div className="para21">  
            <div className="para22"> 
            <h3 className="para23">&lt;Click on the <span>submit</span> button to see the <br />outputs here&gt;</h3>
             <p className="para24">After you have generated a section by filling up the inputs on the left you <br />can see the result here   </p>

            </div>
          

            </div>

           </div>
        </div>
        </>

);
};