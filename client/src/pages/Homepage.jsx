import React from "react";
import logo from "../assets/Logoblack.png";
import { Link } from "react-router-dom";
import { Box,Button, background } from "@chakra-ui/react";
import pic2 from "../assets/backgroundhome.png";
import "../homepage.css";
import { fontWeight } from "@mui/system";
function Homepage(){



    
  function changeColor(e) {
    e.target.style.backgroundColor ="#6C9BCF";
  }
  
  function restoreColor(e){
    e.target.style.backgroundColor = "#6DA9E4";
  }




  
    const customStyle = {
        color:"black",
    }
    const customStyle1={
        //bgColor:"blue.100",
        color: "black",
             
      }




    
    return(<div
    style={{ 
            backgroundImage: `url("${pic2}")`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            height: '100vh', // set the height of the container
            width: '100%', // set the width of the container
           
    }}>
     <div>
      
    </div>
    <div className="class1" style={{
            display:'flex',
            justifyContent:'space-between',
            paddingTop:'10px',
            //alignItems: 'center',
            width: '92%',
            margin: 'auto',
           
            
        }}>






            <img src={logo} alt="Logo" />
           <Link to="/login">

           <button type= "button" className="login" onMouseOver={changeColor} onMouseLeave={restoreColor} style={{
                fontFamily: '  ',
                paddingTop: '5px',
                paddingBottom: '5px',  
                paddingLeft: '10px',
                paddingRight: '10px',
                marginTop: '10px',
                width: "100px",
                borderRadius: '10px',
                fontSize: '15px',
                border: '2px solid black',
                color:'black',
                fontWeight:600,
                backgroundColor:"#6C9BCF",
                //backgroundColor:'#6DA9E4',
            }}>LOGIN</button>

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
                <h1 style={customStyle}>We Support,</h1>
                <h1 style={customStyle}>You Manage.</h1>
            </div>
            
            <button className="know" onMouseOver={changeColor} onMouseLeave={restoreColor}  style={{
                
                border: '2px solid black',
                paddingLeft : '10px',
                paddingRight: '10px',
                paddingTop: '5px',
                paddingBottom: '5px',
                borderRadius: '10px',
                marginTop: '10px',
                fontWeight:600,

               backgroundColor:"#6C9BCF",
                color:'black'
            }}>KNOW MORE</button>
        </div>
   
       
    </div>)
}
export default Homepage;