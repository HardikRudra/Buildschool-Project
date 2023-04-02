import React from "react";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

function Homepage(){
    
    function changeBackground(e) {
        e.target.style.background = '#B9D7EA';
        e.target.style.color = 'BLACK';
        e.target.style.boxShadow = '1px 2px 9px black';
    }

    function retrieveBackground(e) {
        e.target.style.background = 'white';
        e.target.style.color = 'black'; 
        e.target.style.boxShadow = 'none';
    }

    




    
    return(<div style={{ 
        width:'100vw',
        height:'100%',
        left:'0',
        top:'0',
         }}>
    
        <div className="class1" style={{
            display:'flex',
            justifyContent:'space-between',
            paddingTop:'10px',
            //alignItems: 'center',
            width: '92%',
            margin: 'auto',
            fontFamily: 'Lato',
            
        }}>
            <img src={logo} alt="Logo" />
           <Link to="/login">

           <button type= "button" className="login" onMouseOver = {changeBackground} onMouseLeave={retrieveBackground} style={{
                fontFamily: 'Lato   ',
                paddingTop: '5px',
                paddingBottom: '5px',  
                paddingLeft: '10px',
                paddingRight: '10px',
                marginTop: '10px',
                borderRadius: '20px',
                fontSize: '15px',
                border: '2px black solid',
                color:'black'
            }}>LOG IN</button>

           </Link>
        </div>
        
        
        <div className="class2" style={{
            transform: 'translateY(63%)',
            width:'92%',
            margin: 'auto'
            
        }}>
            <div className="Title" style={{
                fontSize: '80px',
                fontWeight: 'bold',   
            }}>
                <h1>We Support,</h1>
                <h1>You Manage.</h1>
            </div>
            
            <button className="know" onMouseOver = {changeBackground} onMouseLeave={retrieveBackground} style={{
                
                border: '2px solid black',
                paddingLeft : '10px',
                paddingRight: '10px',
                paddingTop: '5px',
                paddingBottom: '5px',
                borderRadius: '20px',
                marginTop: '10px',
                fontFamily: 'lato'
            }}>Know More</button>
        </div>
        
    </div>)
}
export default Homepage;