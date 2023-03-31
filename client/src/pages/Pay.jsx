
import React from 'react'
import ManagerBills from '../components/ManagerBills';
import { Box,Tabs,Tab,TabList,TabPanels,TabPanel,Button } from '@chakra-ui/react';
function Pay() {
  return (
    <Box>
      <Box h="630px" bg="red.100">
   <Tabs >
  <TabList justifyContent={'space-around'}>
    <Tab w="150px">Pending</Tab>
    <Tab w="150px">Done</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
     <ManagerBills />
    </TabPanel>
    <TabPanel>
    <ManagerBills />
    </TabPanel>
    <TabPanel>
    <ManagerBills />
    </TabPanel>
  </TabPanels>
</Tabs>
  </Box>
    </Box>
  )
}

export default Pay
