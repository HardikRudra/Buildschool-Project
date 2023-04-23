import React, {useState, useEffect} from 'react'
import {Link,useNavigate} from "react-router-dom";
import styled from "styled-components";
import {ToastContainer,toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { registerRoute } from '../utils/APIRoutes';
import logo from "../assets/Logoblack.png";
import pic2 from "../assets/backgroundlogin.png"
import { Container } from '@chakra-ui/react';
import Profilepic from '../assets/Profilepic.png';
import { Button } from '@material-ui/core';
function Profile() {
  return (
    <div>
       <div style={{ 
      backgroundImage: `url("${pic2}")`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      height: '100vh', // set the height of the container
      width: '100%', // set the width of the container
      
}}>
    <Container style={{
      
      boxShadow: '2px 2px 5px #000000',
      width: "500px",
      height: "500px",
      margin: "auto",
      borderRadius: "20px", 
      position: "relative",
     top: "75px",
     backdropFilter:"blur(8px)",
     backgroundColor: "#F6F1F1",
     
    }}>
     <img src={Profilepic} alt="Profile" display="flex"  style={{
              width: "200px",
             marginLeft: "130px",
              
            }} />


    <div  >
    <span style={{marginLeft: "50px"}}>
    Name
    </span>
    <span style={{marginLeft: "100px", fontWeight: "500"}}>
    : Shaik Mahammad Sameer
    </span> 
   
    </div>

 <div  >
    <span style={{marginLeft: "50px"}}>
    Username
    </span>
    <span style={{marginLeft: "71px", fontWeight: "500"}}>
    : Sameer
    </span>

   
    </div>

    <div  >
    <span style={{marginLeft: "50px"}}>
    UPI ID
    </span>

    <span style={{marginLeft: "98px", fontWeight: "500"}}>
   : xxxx@upi
    </span> 
   
    </div>

    <div  >
    <span style={{marginLeft: "50px"}}>
    Password
    </span>
    <span style={{marginLeft: "76px", fontWeight: "500"}}>
   : xxxxxxxx
    </span> 
  
    </div>
    

    <button style={{marginLeft: "180px", marginTop: "50px",fontWeight: "500", width: "100px",
       backgroundColor:"#6DA9E4",
            color: "black",
            height: "30px",
            border: '2px solid black',
            borderRadius: "5px"}}>
      Edit Profile
    </button>
    </Container>
    </div>
    </div>
  )
}

export default Profile