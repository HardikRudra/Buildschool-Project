import {Container, Box, Heading, Text, Flex, Button, Spacer, HStack, GridItem,List,ListItem,ListIcon,Card,Grid} from '@chakra-ui/react';
import React from 'react'
import data1 from "../data1"
import Teamnames from './Teamnames';
import { useState } from 'react';
import Myteams from '../assets/Myteams.png';
import Logout from '../assets/Logout.png'
import Profile from '../assets/Profile.png'
import {Link} from "react-router-dom";
function handleClick1() {
  // get the button element
  const button = document.querySelector(".myButton1");

  // set the button background color to red
  button.style.backgroundColor = "#D8D9CF";
}
function handleClick2() {
  // get the button element
  const button = document.querySelector(".myButton2");

  // set the button background color to red
  button.style.backgroundColor = "#D8D9CF";
}
function handleClick3() {
  // get the button element
  const button = document.querySelector(".myButton3");

  // set the button background color to red
  button.style.backgroundColor = "#D8D9CF";
}
function handleClick4() {
  // get the button element
  const button = document.querySelector(".myButton4");
  
  // set the button background color to red
  button.style.backgroundColor = "#D8D9CF";
}


const customStyle={
  //bgColor:"blue.100",
  bg: "#EAEAEA",
       
}



function Sidebar() {
  
  return (
    <Box>
     <span style={{ display: 'inline-block' }}>
     <Heading h="60px" fontFamily="" ml="10px" fontWeight="semibold" textColor="black"  >My Teams</Heading>
     </span>
     <span style={{ display: 'inline-block', }}>
     <img src={Myteams} alt="TeamLogo" display="flex"  style={{
              width: "30px",
              marginLeft : "10px",
              marginTop: "5px",
            }} />
     </span>
        
       
        <div>
 <Card h="50px" _hover={customStyle} style={{borderRadius: "20px" , boxShadow: "1px 0px 5px white",}} mx="3px" my="2px" bg="" onClick={handleClick1} className='myButton1'  >
      <Text fontSize="20px" pt="10px" pl="10px" fontFamily=""  color="black" >Shaastra</Text>
    </Card>
    <Card h="50px" _hover={customStyle} style={{borderRadius: "20px", boxShadow: "1px 0px 5px white",}}  mx="3px" my="2px" bg="" onClick={handleClick2} className='myButton2'>
      <Text fontSize="20px" pt="10px" pl="10px" fontFamily=""  color="black" >Saarang</Text>
    </Card>
    <Card h="50px" _hover={customStyle} style={{borderRadius: "20px", boxShadow: "1px 0px 5px white",}}  mx="3px" my="2px" bg="" onClick={handleClick3} className='myButton3'>
      <Text fontSize="20px" pt="10px" pl="10px" fontFamily=""  color="black" >CFI</Text>
    </Card>
    <Card h="50px" _hover={customStyle} style={{borderRadius: "20px", boxShadow: "1px 0px 5px white",}}  mx="3px" my="2px" bg="" onClick={handleClick4} className='myButton4'>
      <Text fontSize="20px" pt="10px" pl="10px" fontFamily=""  color="black" >E-cell</Text>
    </Card>
    </div>
      
      <div >
      <span style={{ display: 'inline-block', marginTop: "200px", marginLeft: "15px"}}>
     <img src={Profile} alt="Profile" display="flex"  style={{
              width: "20px",
            
              
            }} />

     </span>
    <span style={{ display: 'inline-block', marginTop: "350px",fontSize: "17px", marginLeft: "5px" }}>
    <Link to="/profile"><div  fontFamily="Sans-Serif" fontSize="17px"  bgColor="" _hover={customStyle}  textColor="white">Profile</div></Link>
    </span>
      </div>
   


    
     <span style={{ display: 'inline-block',marginLeft: "13px" }}>
     <img src={Logout} alt="Logout" display="flex"  style={{
              width: "25px",
             
              
            }} />

     </span>
    <span style={{ display: 'inline-block', marginBottom : "20px", fontSize: "17px" }}>
    <Link to="/login"><div  fontFamily="Sans-Serif" fontSize="17px"  bgColor="" _hover={customStyle}  textColor="white">Logout</div></Link>
    </span>
    </Box>
  )
}

export default Sidebar;
