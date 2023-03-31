import React from 'react'
import { Card } from '@chakra-ui/react';
function Teamnames(props) {
  return (
    <Card h={57} my={1} mx={1}>
      <span>{props.teamname}</span>
    </Card>
  )
}

export default Teamnames;
