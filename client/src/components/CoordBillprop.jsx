import { Button, Card, CardHeader, Flex, VStack } from '@chakra-ui/react'
import React from 'react'
import { useState, useEffect } from 'react'
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
    const [bills, setBills] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000')
      .then(res => {
        setBills(res.data);
      })
  }, []);





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
              
                   
              </ModalBody>
              
    
              <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={onClose}>
                  Approve
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