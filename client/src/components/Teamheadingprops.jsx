import React from 'react'
import {Container, Box, Heading, Text, Flex, Button, Spacer, HStack, GridItem,List,ListItem,ListIcon,Card,Grid} from '@chakra-ui/react';
import Teamnames from './Teamnames';



function Teamheading() {
  // get route check if its /saarang or /shaastra.
  
  
  return (
    <Box bg="blue.200" h="64px">
        <Text ml="20px" fontSize="25px" pt="7px" fontFamily="Lato" >{Saarang}</Text>
      </Box>
  )
}

export default Teamheading