import React from 'react'
import { Card,Text } from '@chakra-ui/react';
function Teamnames(props) {
  return (
    <Card h={57} my={1} mx={1} bg="blue.100">
      <Text fontSize="20px" pt="10px" pl="10px" fontFamily="Lato" >{props.teamname}</Text>
    </Card>
  )
}

export default Teamnames;
