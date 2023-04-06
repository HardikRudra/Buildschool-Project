import React, {useState, useEffect} from 'react'
import {Link,useNavigate} from "react-router-dom";
import styled from "styled-components";
import {ToastContainer,toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { loginRoute } from '../utils/APIRoutes';
import logo from "../assets/Logo.png";

function changeColor(e) {
  e.target.style.backgroundColor ="#159895";
}

function restoreColor(e){
  e.target.style.backgroundColor = "#769FCD";
}

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
  // useEffect(() => {
  //   if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
  //     navigate("/login");
  //   }
  // }, []);

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
    <div>
    <FormContainer style={{
      transform: 'translateY(55%)',
      boxShadow: '2px 2px 5px #000000',
      width: "60%",
      margin: "auto",
      borderRadius: "20px",
      backgroundColor: "#B9DFEA"
    }}>
    <form action="" onSubmit={(event) => handleSubmit(event)}>
          <div className="brand">
          <img src={logo} alt="Logo" style={{
              width: "40%"
            }} />
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
         
          <button type="submit" onMouseOver={changeColor} onMouseLeave={restoreColor} style={{
            backgroundColor:"#769FCD",
            color: "white",
            width: "20%",
            margin: "auto",
            paddingTop: "8px",
            paddingBottom:"8px",
            borderRadius: "12px",}}>Login</button>
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
  
}`
;