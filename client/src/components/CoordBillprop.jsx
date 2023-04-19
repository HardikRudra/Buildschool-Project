import { Button, Card, CardHeader, Flex, VStack,FormControl, Input,Box, CardFooter, GridItem } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom';
import { useState, useEffect,useRef } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Grid,
  } from '@chakra-ui/react';
  import { Image } from 'cloudinary-react';

  import axios from 'axios';
  import { updatebilldateRoute } from '../utils/APIRoutes';
 
  // import { Image } from 'cloudinary-react';

import {pid} from '../pages/Billupload'
import { useNavigate } from 'react-router-dom';


  const fid = "https://res.cloudinary.com/dtpp08tmi/image/upload/v1681465983/" + pid + ".png";
  console.log(fid);
  

// function Billprop(props) {
//   return (
//  <Card my={2}>
   
//    <CardHeader>{props.billname}</CardHeader>

//  </Card>
   
//   )
// }











function CoordBillprop(props) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate=useNavigate();
  //   const [bills, setBills] = useState([]);

  // useEffect(() => {
  //   axios.get('http://localhost:5000')
  //     .then(res => {
  //       setBills(res.data);
  //     })
  // }, []);

  









  console.log(pid)
async function updateStatustoPending(id){

      const res = await axios({
        method: 'put',
        url: 'http://localhost:5000/api/manager/approvebills/'+ id,
        data: {
            
            newStatus: 'pending'
        }
    });
      
}





async function updateStatustoRejected(id){
  

      const res = await axios({
        method: 'put',
        url: 'http://localhost:5000/api/manager/approvebills/'+ id,
        data: {
            
            newStatus: 'rejected'
        }
    });
      
}


















// var date = window.location.href.indexOf("/manager/approvebills");
const myRef = useRef(null);


const handleRefresh = () => {
  window.location.reload();
};
async function updateDate(id,p2){
  const res = await axios({
    method: 'patch',
    url: 'http://localhost:5000/api/manager/approvebills/'+ id,
    data: {
      newDate:p2
    }
    
  });
  console.log(p2);
}



// const updateDate = async (pid) => {
//   const { billname,itemname,amount,proof,date} = values;
//   const newProof = pid;

//   try {
//     const response = await fetch(`http://localhost:5000/api/updatebill`, {
//       method: 'PATCH',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ proof: newProof , billname })
//     });
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// };

async function updateStatustoPaid(id){
  // axios.put('http://localhost:5000/manager/approvebills/'+ id, {
  //   body
  // })
      // .then(res => {
      //    (res.data);
      // })

      const res = await axios({
        method: 'put',
        url: 'http://localhost:5000/api/manager/paybills/'+ id,
        data: {
            
            newStatus: 'paid'
        }
    });
      
}










    if(window.location.href.indexOf("/manager/approvebills")!==-1){
      return (
        <>
           <Card bg="#D6E6F2" onClick={onOpen} my={2}>
     
     <CardHeader fontFamily="Lato" fontSize="18px">{props.billname}</CardHeader>
  
   </Card>
    
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>{props.billname}</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
             
                 <div>Item Name : {props.itemname} </div> 
                  <div>Amount : {props.amount}</div> 
                  <div>Proof: <Image cloudName="dtpp08tmi" publicId={props.proof} /> </div>
                 <div> Status : {props.status}</div> 
                 <Box>Estimated Date:</Box>
                 <Input id="date" mb="6px" type='date'></Input>
                 
                 
              
                   
              </ModalBody>
              
    
              <ModalFooter>
              <FormControl>
              
               
              <Button colorScheme='blue'  mr={3} onClick={()=>{
                  updateStatustoPending(props.id); 
                  handleRefresh();
                  updateDate(props.id,document.getElementById("date").value);
                  }}>
                  Approve
                </Button>
                
                <Button colorScheme='blue'  mr={3}    onClick={()=>{
                  updateStatustoRejected(props.id); 
                  handleRefresh();
                  }} >
                  Reject
                </Button>
              </FormControl>
              


      
              
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )
  }
  else if(window.location.href.indexOf("/manager/paybills")!==-1){
    return (
      <>
         <Card bg="#D6E6F2" onClick={onOpen} my={2}>
   
   <CardHeader fontFamily="Lato" fontSize="18px">

   {/* <GridItem>
   {props.billname}
   </GridItem>

    <GridItem>
    {props.date}
    </GridItem> */}
    <Grid templateColumns="repeat(2, 5fr)" gap="600px">
      <Box  w="400px"> {props.billname}</Box>
      <Box  mr="20px"> {props.date} </Box>
    </Grid>
  
   </CardHeader>
   {/* <CardFooter fontFamily="Lato" pr="2px"> {props.date}  </CardFooter> */}

 </Card>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{props.billname}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
           
               <div>Item Name : {props.itemname} </div> 
                <div>Amount : {props.amount}</div> 
                <div>Proof: <Image cloudName="dtpp08tmi" publicId={props.proof} /> </div>
               <div> Status : {props.status}</div> 
            
                 
            </ModalBody>
            
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={()=>{
                updateStatustoPaid(props.id);
                handleRefresh();
              }}>
                Done
              </Button>
            
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }


  else if(props.status==="rejected"){
    return (
      <>
         <Card bg="red.400" onClick={onOpen} my={2}>
   
   <CardHeader fontFamily="Lato" fontSize="18px">{props.billname}</CardHeader>

 </Card>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{props.billname}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
           
               <div>Item Name : {props.itemname} </div> 
                <div>Amount : {props.amount}</div> 
                <div>Proof: <Image cloudName="dtpp08tmi" publicId={props.proof} /> </div>
               <div> Status : {props.status}</div> 
                
            
                 
            </ModalBody>
            
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
            
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }


    else {
      return (
        <>
           <Card bg="#D6E6F2" onClick={onOpen} my={2}>
     
     <CardHeader fontFamily="Lato" fontSize="18px">{props.billname}</CardHeader>
  
   </Card>
    
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>{props.billname}</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
             
                 <div>Item Name : {props.itemname} </div> 
                  <div>Amount : {props.amount}</div> 
                  <div>Proof: <Image cloudName="dtpp08tmi" publicId={props.proof} /> </div>
                 <div> Status : {props.status}</div> 
              
              
                   
              </ModalBody>
              
    
              <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={onClose}>
                  Close
                </Button>
              
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )
    }
    
    
  }
  
  export default CoordBillprop