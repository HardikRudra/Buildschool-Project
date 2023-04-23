import { Box,Tabs,Tab,TabList,TabPanels,TabPanel,Button } from '@chakra-ui/react';
import { Container } from '@mui/system'
import {React, useState, useEffect} from 'react'
import styled from 'styled-components';
import {Link} from "react-router-dom";
import CoordBills from '../components/CoordBills';
import axios from 'axios';
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
import CoordBillprop from '../components/CoordBillprop';




function Chat({team}) {
  // const filterByStatus = (statusName) =>{
  //   bills.filter(item => item.status===statusName)
  const customStyle={
    bgColor:"blue.400",
  }
  // } 
  

  // useEffect(()=>{
  //   const fetchData = async() => {
  //     const res = await fetch(SERVER_URL + "")
  //   }

  // },[])

  // console.log(TEAM)


  const [bills, setBills] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000')
      .then(res => {
        const sortedData = res.data.sort((a, b) => 1);
        setBills(sortedData);
        // setBills(res.data);
      })
  }, []);
  console.log(bills);



  return (
    <Box>
      <Box h="630px" bg="">
   <Tabs >
  <TabList justifyContent={'space-around'}>

{/* {["Queued","Pending","Done"].map(item => (
  <Tab w="150px">{item}</Tab>

))} */}

    <Tab w="150px" fontSize="17px" fontFamily="">Queued</Tab>
    <Tab w="150px" fontSize="17px" fontFamily="">Pending</Tab>
    <Tab w="150px" fontSize="17px" fontFamily="">Done</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
    {bills.filter(bills => bills.status == "Queued" ).map(group => (
      <CoordBillprop key={group._id} billname= {group.billname} itemname = {group.itemname} amount = {group.amount} proof={group.proof} status={group.status} id={group._id} />
    ))
  }
  {bills.filter(bills => bills.status == "Rejected" ).map(group => (
      <CoordBillprop key={group._id} billname= {group.billname} itemname = {group.itemname} amount = {group.amount} proof={group.proof} status={group.status} id={group._id} />
    ))
  }
    </TabPanel>
    <TabPanel>
    {bills.filter(bills => bills.status == "Pending").map(group => (
      <CoordBillprop key={group._id} billname= {group.billname} itemname = {group.itemname} date={group.date} amount = {group.amount} proof={group.proof} status={group.status} id={group._id} />
    ))
  }
    {/* <CoordBills /> */}
    </TabPanel>
    <TabPanel>
    {bills.filter(bills => bills.status == "Paid").map(group => (
      <CoordBillprop key={group._id} billname= {group.billname} itemname = {group.itemname} amount = {group.amount} proof={group.proof} status={group.status} id={group._id} />
    ))
  }
    {/* <CoordBills /> */}
    </TabPanel>
  </TabPanels>
</Tabs>
  </Box>
  <Link to="/addbill"><Button  fontFamily="Lato" fontSize="17px" my={1} bgColor="#1363DF" _hover={customStyle} ml="67vw" textColor="white">Add Bill</Button></Link>
    </Box>
  
  );
}










export default Chat;
