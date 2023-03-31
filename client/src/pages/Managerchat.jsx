import { Button,List, ListItem, Container, Box} from '@chakra-ui/react'
import React from 'react'
import {Link, useParams} from "react-router-dom"

function Managerchat() {

  return (
    <Box ml="500px">
      <List my="150px">
        <ListItem my="50px"><Link to="/"><Button width="200px"> My Bills</Button></Link> </ListItem>
        <ListItem my="50px"> <Link to="/manager/approvebills"><Button width="200px"> Approve Bills</Button></Link></ListItem>
        <ListItem my="50px"> <Link to="/manager/paybills"><Button width="200px"> Pay Bills</Button></Link></ListItem>
      </List>
    </Box>
  )
}

export default Managerchat
