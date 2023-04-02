import { Box,Tabs,Tab,TabList,TabPanels,TabPanel,Button } from '@chakra-ui/react';
import { Container } from '@mui/system'
import React from 'react'
import styled from 'styled-components';
import {Link} from "react-router-dom";
import CoordBills from '../components/CoordBills';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react'




function Chat({team}) {
  // const filterByStatus = (statusName) =>{
  //   bills.filter(item => item.status===statusName)
  // } 
  

  // useEffect(()=>{
  //   const fetchData = async() => {
  //     const res = await fetch(SERVER_URL + "")
  //   }

  // },[])

  // console.log(TEAM)
  return (
    <Box>
      <Box h="630px" bg="white">
   <Tabs >
  <TabList justifyContent={'space-around'}>

{/* {["Queued","Pending","Done"].map(item => (
  <Tab w="150px">{item}</Tab>

))} */}

    <Tab w="150px" fontSize="17px" fontFamily="Lato">Queued</Tab>
    <Tab w="150px" fontSize="17px" fontFamily="Lato">Pending</Tab>
    <Tab w="150px" fontSize="17px" fontFamily="Lato">Done</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
     <CoordBills />
    </TabPanel>
    <TabPanel>
    <CoordBills />
    </TabPanel>
    <TabPanel>
    <CoordBills />
    </TabPanel>
  </TabPanels>
</Tabs>
  </Box>
  <Link to="/addbill"><Button  fontFamily="Lato" fontSize="17px" my={1} colorScheme="blue"   ml="67vw">Add Bill</Button></Link>
    </Box>
  
  );
}










export default Chat;
