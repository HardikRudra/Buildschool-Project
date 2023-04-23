import React from 'react'
import { Card,Text,Box } from '@chakra-ui/react';




function Teamnames(props) {

  // function ChangeHeading(){
  //   return (
  //     <Box bg="blue.200" h="64px">
  //       <Text ml="20px" fontSize="25px" pt="7px" fontFamily="Lato" >{props.teamname}</Text>
  //     </Box>
  //   )
  // }
  
  function handleClick() {
    // get the button element
    const button = document.getElementById("myButton");
  
    // set the button background color to red
    button.style.backgroundColor = "red";
  }



  return (
    <div>
 <Card h="40px"  mx={1} bg="" onClick={handleClick} id='myButton'>
      <Text fontSize="20px" pt="10px" pl="10px" fontFamily=""  color="black" >Shaastra</Text>
    </Card>
    <Card h="40px"  mx={1} bg="" onClick={handleClick} id='myButton'>
      <Text fontSize="20px" pt="10px" pl="10px" fontFamily=""  color="black" >Shaastra</Text>
    </Card>
    </div>
   
  )
}

export default Teamnames;
