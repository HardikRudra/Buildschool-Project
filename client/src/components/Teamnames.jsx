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
  




  return (
    <Card h={57} my={1} mx={1} bg="blue.100">
      <Text fontSize="20px" pt="10px" pl="10px" fontFamily="Lato" >{props.teamname}</Text>
    </Card>
  )
}

export default Teamnames;
