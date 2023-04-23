import React from 'react'
import {Outlet, useParams} from "react-router-dom";
import Sidebar from '../components/Sidebar';
import Teamheading from '../components/Teamheading';
import { GridItem,Grid,color} from '@chakra-ui/react';
function RootLayout() {
  return (
    <Grid templateColumns="repeat(6,1fr)" bg="gray.50">
    <GridItem as="aside"
     colSpan={{base:6,lg:2,xl:1}}
     bg="#ECF9FF"
     minHeight={{lg:'100vh'}}
     fontFamily="Arial"
     >
    <Sidebar />
    </GridItem>
    
    <GridItem
    as="main"
        colSpan={{ base: 6, lg: 4, xl: 5 }} 
        fontFamily="Arial"
>
    <Teamheading  />
      <Outlet />
    </GridItem>
   
    </Grid>
    
  
  )
}

export default RootLayout
