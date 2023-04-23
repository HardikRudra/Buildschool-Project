import React, {useState, useEffect} from 'react'
import {Link,useNavigate} from "react-router-dom";
import styled from "styled-components";
import {ToastContainer,toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { loginRoute } from '../utils/APIRoutes';
import logo from "../assets/Logoblack.png";
import pic2 from "../assets/backgroundlogin.png"
import BackgroundImageLoader from 'react-background-image-loader';


export default function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({ username: "", password: "" });
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  

 
  function changeColor(e) {
    e.target.style.backgroundColor ="#6C9BCF";
  }
  
  function restoreColor(e){
    e.target.style.backgroundColor = "#6DA9E4";
  }
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const validateForm = () => {
    const { username, password } = values;
    if (username === "") {
      toast.error("Email and Password is required.", toastOptions);
      return false;
    } else if (password === "") {
      toast.error("Email and Password is required.", toastOptions);
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      const { username, password } = values;
      const { data } = await axios.post(loginRoute, {
        username,
        password,
      });
      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      if (data.status === true) {
        localStorage.setItem(
          process.env.REACT_APP_LOCALHOST_KEY,
          JSON.stringify(data.user)
        );

        navigate("/");
      }
    }
  };
  return (
    <div
    style={{ 
            backgroundImage: `url("${pic2}")`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            height: '100vh', // set the height of the container
            width: '100%', // set the width of the container
            
           
    }}>
    <FormContainer style={{

      boxShadow: '2px 2px 4px #000000',
      width: "400px",
      height: "450px",
      margin: "auto",
     // marginTop: "100px",
     position: "relative",
     top: "100px",
      borderRadius: "20px",
      zIndex:"+1",
      backdropFilter:"blur(8px)",
      backgroundColor: "#F6F1F1",
      opacity: "1"
    
    }}>
    <form action="" onSubmit={(event) => handleSubmit(event)}>
          <div className="brand">

          <img src={logo} alt="Logo" style={{
              width: "250px",
              marginBottom: "25px",
            }} />
          </div>
         
          <input
          style={{
            border: null,
            outline: "none",
            background:"none",
          }}
            type="text"
            className="bottom-border"
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
            background:"none"
          }}
          className="bottom-border"
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



          <button type="submit" className='boton' onMouseOver={changeColor} onMouseLeave={restoreColor} style={{
           backgroundColor:"#6DA9E4",
            color: "black",
            width: "100px",
            marginTop: "25px",
            paddingTop: "4px",
            marginLeft: "90px",
            paddingBottom:"8px",
            border: '2px solid black',
            borderRadius: "10px",}}>Login</button>
          <span style={{
            marginTop: "5px",
              marginLeft: "25px",
              fontWeight:500,
          }}>
            Don't have an account ? <Link to ="/register"
            style={{
              textDecoration: "none",
              //borderBottom: "1px solid black",
              color: "blue",
            }}> Register</Link>
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
    width:70%;
    
    padding-top: 20px;
    padding-bottom: 20px;
    
}

input::placeholder{
  color: black;
}
button:hover{
  background-color: #537FE7;
}

`
;