import React, {useState, useEffect} from 'react'
import {Link,useNavigate} from "react-router-dom";
import styled from "styled-components";
import {ToastContainer,toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { loginRoute } from '../utils/APIRoutes';
function Login() {
    const navigate = useNavigate();
    const [values,setValues]=useState({
    
        username:"",
        password:"",
    });
    const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      };

      const handleValidation = () => {
        const { password,username} = values;
        if (password === "") {
          toast.error(
            "Password is required..",
            toastOptions
          );
          return false;
        } else if (username.length === "") {
          toast.error(
            "Username is required.",
            toastOptions
          );
          return false;
        } 
        return true;
      };
    
    
    const handleSubmit = async (event)=>{
        event.preventDefault();
        if(handleValidation()){
            const { username,password } = values;
      const { data } = await axios.post(loginRoute,{
     
        username,
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
    const handleChange = (event)=>{
        setValues({ ...values, [event.target.name]: event.target.value });

    };
  return (
    <div>
    <FormContainer>
    <form action="" onSubmit={(event) => handleSubmit(event)}>
          <div className="brand">
            <img src=""/>
            <h1>SAAHaS</h1>
          </div>
         
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => handleChange(e)}
          />
          
          
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
         
          <button type="submit">Login</button>
          <span>
            Don't have an account ? <Link to ="/register"> Register</Link>
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
    display:flex;
    flex-direction:column;
    gap:1rem;
    width:20%;
    
}
`
;

export default Login

