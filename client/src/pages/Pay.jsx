import { Box } from '@chakra-ui/react';
import {React,useState,useEffect} from 'react'
import ManagerBills from '../components/ManagerBills';
import CoordBills from '../components/CoordBills';
import CoordBillprop from '../components/CoordBillprop';
import axios from 'axios';
function Pay() {

  const [bills, setBills] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000')
      .then(res => {
        setBills(res.data);
      })
  }, []);
  console.log(bills);


  return (
    <Box >
      {bills.filter(bills => bills.status == "pending").map(group => (
      <CoordBillprop key={group._id} billname= {group.billname} itemname = {group.itemname} amount = {group.amount} proof=<img src={`data:image/jpeg;base64,${group.proof}`} /> status={group.status} id={group._id}/>
    ))
  }
    </Box>
  )
}

export default Pay





















// import React from 'react'
// import ManagerBills from '../components/ManagerBills';
// import { Box,Tabs,Tab,TabList,TabPanels,TabPanel,Button } from '@chakra-ui/react';
// function Pay() {
//   return (
//     <Box>
//       <Box h="630px">
//    <Tabs >
//   <TabList justifyContent={'space-around'}>
//     <Tab w="150px">Pending</Tab>
//     <Tab w="150px">Done</Tab>
//   </TabList>

//   <TabPanels>
//     <TabPanel>
//      <ManagerBills />
//     </TabPanel>
//     <TabPanel>
//     <ManagerBills />
//     </TabPanel>
//     <TabPanel>
//     <ManagerBills />
//     </TabPanel>
//   </TabPanels>
// </Tabs>
//   </Box>
//     </Box>
//   )
// }

// export default Pay
