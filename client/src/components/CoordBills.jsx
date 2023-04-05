import {React,useState,useEffect} from 'react'
import axios from 'axios'
import CoordBillprop from './CoordBillprop'
import {Box, Heading} from '@chakra-ui/react'











function createCoordBills(group) {
  return (
    <div>
        <CoordBillprop  key={group._id} billname= {group.billname} itemname = {group.itemname} amount = {group.amount} proof=<img src={`data:image/jpeg;base64,${group.proof}`} /> status={group.status}
        ></CoordBillprop>
    </div>
  )
}
function CoordBills(){

  const [bills, setBills] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000')
      .then(res => {
        setBills(res.data);
      })
  }, []);






  return (
    <Box>
        {bills.map(createCoordBills)}

      

    </Box>
  )
}

export default CoordBills