import React, {useState, useEffect} from 'react'
import {Link,useNavigate} from "react-router-dom";
import styled from "styled-components";
import {ToastContainer,toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { registerRoute } from '../utils/APIRoutes';
import logo from "../assets/Logoblack.png";
import pic2 from "../assets/backgroundlogin.png"

function changeColor(e) {
  e.target.style.backgroundColor ="#6C9BCF";
}

function restoreColor(e){
  e.target.style.backgroundColor = "#6DA9E4";
}


function Register1(){
  const navigate = useNavigate();

  const [values,setValues]=useState({
    firstname:"",
        lastname:"",
        username:"",
        email:"",
        upiID:"",
        password:"",
        confirmPassword:"",
  });

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };




  const handleValidation = () => {
    const { firstname,lastname,username,email,upiID,password,confirmPassword } = values;
    if (password !== confirmPassword) {
      toast.error(
        "Password and confirm password should be same.",
        toastOptions
      );
      return false;
    } else if (username.length < 4) {
      toast.error(
        "Username should be greater than 4 characters.",
        toastOptions
      );
      return false;
    } else if (password.length < 8) {
      toast.error(
        "Password should be equal or greater than 8 characters.",
        toastOptions
      );
      return false;
    } else if (email === "") {
      toast.error("Email is required.", toastOptions);
      return false;
    }
    return true;
  };


  const handleSubmit = async (event)=>{
    event.preventDefault();
    if(handleValidation()){
        console.log("in validation", registerRoute)
        const { firstname,lastname,username,email,upiID,password,confirmPassword} = values;
  const { data } = await axios.post(registerRoute,{
    firstname,
    lastname,
    username,
    email,
    upiID,
    password,
    confirmPassword
    // teamname:"saarang",
  });
  if(data.status===true)
  {
    localStorage.setItem("user", JSON.stringify(data.user));
  }
  navigate("/");
    }
};

const handleChange = (event)=>{
  setValues({ ...values, [event.target.name]: event.target.value });

};













  return (
    <div style={{ 
      backgroundImage: `url("${pic2}")`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      height: '100vh', // set the height of the container
      width: '100%', // set the width of the container
      
}}>
    <FormContainer style={{
      
      boxShadow: '2px 2px 5px #000000',
      width: "500px",
      margin: "auto",
      borderRadius: "20px", 
      position: "relative",
     top: "75px",
     backdropFilter:"blur(8px)",
     backgroundColor: "#F6F1F1",
     
    }}>
    <form action="" onSubmit={(event) => handleSubmit(event)}>
          <div className="brand">
            <img src="" />
            <img src={logo} alt="Logo" style={{
              width: "250px"
            }} />
          </div>
          <input
          style={{
            border: null,
            outline: "none",
            background:"none",
          }}
          
            type="text"
            placeholder="Firstname"
            name="firstname"
            onChange={(e) => handleChange(e)} 
            
          />
           <hr style={{
            marginTop: "0px",
            position: "relative",
            bottom: "10px",
            border: "1px solid black",
    
            }} />
          <input
          style={{
            border: null,
            outline: "none",
            background:"none",
          }}
            type="text"
            placeholder="Lastname"
            name="lastname"
            onChange={(e) => handleChange(e)}
          />
           <hr style={{
            marginTop: "0px",
            position: "relative",
            bottom: "10px",
            border: "1px solid black",
    
            }} />
          <input
          style={{
            border: null,
            outline: "none",
            background:"none",
          }}
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => handleChange(e)}
          />
           <hr style={{
            marginTop: "0px",
            position: "relative",
            bottom: "10px",
            border: "1px solid black",
    
            }} />
          <input
          style={{
            border: null,
            outline: "none",
            background:"none",
          }}
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => handleChange(e)}
          />
           <hr style={{
            marginTop: "0px",
            position: "relative",
            bottom: "10px",
            border: "1px solid black",
    
            }} />
          <input
          style={{
            border: null,
            outline: "none",
            background:"none",
          }}
            type="text"
            placeholder="UPI ID"
            name="upiID"
            onChange={(e) => handleChange(e)}
          />
           <hr style={{
            marginTop: "0px",
            position: "relative",
            bottom: "10px",
            border: "1px solid black",
    
            }} />
          <input
          style={{
            border: null,
            outline: "none",
            background:"none",
          }}
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
           <hr style={{
            marginTop: "0px",
            position: "relative",
            bottom: "10px",
            border: "1px solid black",
    
            }} />
          <input
          style={{
            border: null,
            outline: "none",
            background:"none",
          }}
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={(e) => handleChange(e)}
          />
           <hr style={{
            marginTop: "0px",
            position: "relative",
            bottom: "10px",
            border: "1px solid black",
    
            }} />
          <button type="submit" onMouseOver={changeColor} onMouseLeave={restoreColor} 
          style={{
            fontWeight:500,
            backgroundColor:"#769FCD",
            color: "solid black",
            width: "270px",
            marginTop: "0px",
            paddingTop: "8px",
            marginLeft: "15px",
            paddingBottom:"8px",
            borderRadius: "20px",}}>Register</button>
          <span
          style={{
            marginLeft: "40px",
            fontWeight:500,
          }}>
            Already have an account ? <Link to="/login" style={{
              textDecoration: "none",
             // borderBottom: "1px solid blue",
              color: "blue",
            }}>Login.</Link>
          </span>
        </form>
  
  
    </FormContainer>
    <ToastContainer />
    </div>
  );
}















const FormContainer = styled.div`
display:flex;
justify-content:center;

form{
   border: "1px";
    display:flex;
    flex-direction:column;
    gap:1rem;
    width:60%;
    
    padding-top: 20px;
    padding-bottom: 20px;
    
}

input::placeholder{
  color: black;
}




`
;


export default Register1