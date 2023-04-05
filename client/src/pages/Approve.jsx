import { Box } from '@chakra-ui/react';
import {React,useState,useEffect} from 'react'
import ManagerBills from '../components/ManagerBills';
import CoordBills from '../components/CoordBills';
import CoordBillprop from '../components/CoordBillprop';
import axios from 'axios';
function Approve() {

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

export default Approve
