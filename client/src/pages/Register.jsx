import React, {useState, useEffect} from 'react'
import {Link,useNavigate} from "react-router-dom";
import styled from "styled-components";
import {ToastContainer,toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { registerRoute } from '../utils/APIRoutes';
import logo from "../assets/Logo.png";

function changeColor(e) {
  e.target.style.backgroundColor ="#159895";
}

function restoreColor(e){
  e.target.style.backgroundColor = "#769FCD";
}

function Register() {
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

    // useEffect(() => {
    //   if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
    //     navigate("/register");
    //   }
    // }, []);

    const handleChange = (event) => {
      setValues({ ...values, [event.target.name]: event.target.value });
    };






    const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      };

      const handleValidation = () => {
        const { password, confirmPassword, username, email } = values;
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
            
            const { firstname,lastname,username,email,upiID,password } = values;
      const { data } = await axios.post(registerRoute,{
        firstname,
        lastname,
        username,
        email,
        upiID,
        password, 
      });
      if(data.status===false)
      {
        toast.error(data.msg,toastOptions);
      }
      if(data.status===true)
      {
        localStorage.setItem("chat-app-user", JSON.stringify(data.user));
      }
      navigate("/");
        }
    };
    
  
return (
    <div style={{
      //backgroundColor:"black"
    }}>
    <FormContainer style={{
      transform: 'translateY(9%)',
      boxShadow: '2px 2px 5px #000000',
      width: "60%",
      margin: "auto",
      borderRadius: "20px", 
      backgroundColor: "#B9DFEA"
     
    }}>
    <form action="" onSubmit={(event) => handleSubmit(event)}>
          <div className="brand">
            <img src="" />
            <img src={logo} alt="Logo" style={{
              width: "40%"
            }} />
          </div>
          <input
            type="text"
            placeholder="Firstname"
            name="firstname"
            onChange={(e) => handleChange(e)} 
            
          />
          <input
            type="text"
            placeholder="Lastname"
            name="lastname"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            placeholder="UPI ID"
            name="upiID"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={(e) => handleChange(e)}
          />
          <button type="submit" onMouseOver={changeColor} onMouseLeave={restoreColor} style={{
            backgroundColor:"#769FCD",
            color: "white",
            width: "20%",
            margin: "auto",
            paddingTop: "8px",
            paddingBottom:"8px",
            borderRadius: "12px",

          }}>Register</button>
          <span>
            Already have an account ? <Link to="/login">Login.</Link>
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

input{
  height: 50px;
  box-shadow: 1px 1px 1px 2px black;
  border-radius: 10px;
  
}



`
;

export default Register