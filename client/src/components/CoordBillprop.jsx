import { Button, Card, CardHeader, Flex, VStack,FormControl, Input,Box } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom';
import { useState, useEffect,useRef } from 'react'
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
  import ImageComponent from './ImageComponent'
  import axios from 'axios'

  

// function Billprop(props) {
//   return (
//  <Card my={2}>
   
//    <CardHeader>{props.billname}</CardHeader>

//  </Card>
   
//   )
// }





  
  










function CoordBillprop(props) {
    const { isOpen, onOpen, onClose } = useDisclosure();
  //   const [bills, setBills] = useState([]);

  // useEffect(() => {
  //   axios.get('http://localhost:5000')
  //     .then(res => {
  //       setBills(res.data);
  //     })
  // }, []);


async function updateStatustoPending(id){
  // axios.put('http://localhost:5000/manager/approvebills/'+ id, {
  //   body
  // })
      // .then(res => {
      //    (res.data);
      // })

      const res = await axios({
        method: 'put',
        url: 'http://localhost:5000/api/manager/approvebills/'+ id,
        data: {
            
            newStatus: 'pending'
        }
    });
    
  




      
}
// var date = window.location.href.indexOf("/manager/approvebills").
const myRef = useRef(null);
var date = myRef.current;

const handleRefresh = () => {
  window.location.reload();
};
async function updateDate(id){
  const res = await axios({
    method: 'post',
    url: 'http://localhost:5000/api/manager/approvebills/'+ id,
    data: {
      newDate:{date},
    }
  });
}


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
                 <div> Proof : {props.proof}</div> 
                 <div> Status : {props.status}</div> 
                 {/* <div> Date : {props.date}</div> */}
                 
              
                   
              </ModalBody>
              
    
              <ModalFooter>
              <FormControl>
              <Box>Estimated Date:</Box>
              <Input ref={myRef} id="date" mb="6px" type='date'></Input>
              <Button colorScheme='blue'  mr={3} onClick={()=>{
                  updateStatustoPending(props.id); 
                  handleRefresh();
                  updateDate(props.id);

                  }}>
                  Approve
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
               <div> Proof : {props.proof}</div> 
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





    else{
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
                 <div> Proof : {props.proof}</div> 
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