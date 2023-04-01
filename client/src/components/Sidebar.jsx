import {Container, Box, Heading, Text, Flex, Button, Spacer, HStack, GridItem,List,ListItem,ListIcon,Card,Grid} from '@chakra-ui/react';
import React from 'react'
import data1 from "../data1"
import Teamnames from './Teamnames';

function createTeamNames(group){
  return(
      <Teamnames
          key={group.id}
          teamname={group.teamname}

      />
  );
}





function Sidebar() {
  return (
    <Box>
        <Heading h="60px" fontFamily="Lato" ml="10px" pt="7px" fontWeight="semibold">My Teams</Heading>
        {data1.map(createTeamNames)}

      

    </Box>
  )
}

export default Sidebar
