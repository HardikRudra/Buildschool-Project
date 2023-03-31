import { Button, Card, CardHeader, Flex, VStack } from '@chakra-ui/react'
import React from 'react'
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
  

// function Billprop(props) {
//   return (
//  <Card my={2}>
   
//    <CardHeader>{props.billname}</CardHeader>

//  </Card>
   
//   )
// }









function ManagerBillprop(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    if(window.location.href.indexOf("/manager/approvebills")!==-1){
    
    return (
      <>
         <Card onClick={onOpen} my={2}>
   
   <CardHeader>{props.billname}</CardHeader>

 </Card>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Bill Name</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
           
               <div>Item Name : </div> 
                <div>Amount : XXXX</div> 
               <div> Proof :</div> 
            
                 
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost'>Approve</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
    }
    else if(window.location.href.indexOf("/manager/paybills")!==-1){
        
    return (
      <>
         <Card onClick={onOpen} my={2}>
   
   <CardHeader>{props.billname}</CardHeader>

 </Card>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Bill Name</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
           
               <div>Item Name : </div> 
                <div>Amount : XXXX</div> 
               <div> Proof :</div> 
            <div>UPI ID:</div>
                 
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost'>Pay</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
    }
  }
  
  export default ManagerBillprop