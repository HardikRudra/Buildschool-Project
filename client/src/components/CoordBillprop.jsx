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









function CoordBillprop(props) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate=useNavigate();
  









  console.log(pid)
async function updateStatustoPending(id){

      const res = await axios({
        method: 'put',
        url: 'http://localhost:5000/api/manager/approvebills/'+ id,
        data: {
            
            newStatus: 'Pending'
        }
    });
      
}





async function updateStatustoRejected(id){
  

      const res = await axios({
        method: 'put',
        url: 'http://localhost:5000/api/manager/approvebills/'+ id,
        data: {
            
            newStatus: 'Rejected'
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





async function updateStatustoPaid(id){
      const res = await axios({
        method: 'put',
        url: 'http://localhost:5000/api/manager/paybills/'+ id,
        data: {
            
            newStatus: 'Paid'
        }
    });
      
}

const customStyle={
  //bgColor:"blue.100",
  boxShadow : "1px 0px 5px #656566",
 
}








    if(window.location.href.indexOf("/manager/approvebills")!==-1){
      return (
        <>
           <Card bg="" onClick={onOpen} my="2px" _hover={customStyle} >
     
           <CardHeader fontFamily="" fontSize="18px">
     <div>
  <div style={{ float: "left" }}>{props.billname}</div>
  <div  style={{ float: "left",
                position: 'absolute',
                left: "300px",
                 marginRight: "2px",
          }}>
          Rs. 
          {props.amount}
  </div>
  <div style={{ clear: "both" }}></div>
</div>
    </CardHeader>
  
   </Card>
    
          <Modal isOpen={isOpen} onClose={onClose} size="3xl" >
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
         <Card  onClick={onOpen} my="2px"  _hover={customStyle}>
   
         <CardHeader fontFamily="" fontSize="18px">
     <div>
  <div style={{ float: "left" }}>{props.billname}</div>
  <div  style={{ float: "left",
                position: 'absolute',
                left: "300px",
                 marginRight: "2px",
          }}>
          Rs. 
          {props.amount}
  </div>
  <div  style={{ float: "left",
                position: 'absolute',
                left: "1000px",
                 marginRight: "2px",
          }}>
          {props.date}
  </div>
  <div style={{ clear: "both" }}></div>
</div>
    </CardHeader>
   {/* <CardFooter fontFamily="Lato" pr="2px"> {props.date}  </CardFooter> */}

 </Card>
  
        <Modal isOpen={isOpen} onClose={onClose} size="3xl" >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{props.billname}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
           
               <div>Item Name : {props.itemname} </div> 
                <div>Amount : {props.amount}</div> 
                <div>Proof: <Image cloudName="dtpp08tmi" publicId={props.proof} /> </div>
                <div>Upi ID: XYZ@upi</div>
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


  else if(props.status==="Rejected"){
    return (
      <>
         <Card  onClick={onOpen}  my="2px" _hover={{ boxShadow: "1px 0px 5px red", }}>
   
         <CardHeader fontFamily="" fontSize="18px" color="red">
     <div>
  <div style={{ float: "left" }}>{props.billname}</div>
  <div  style={{ float: "left",
                position: 'absolute',
                left: "300px",
                 marginRight: "2px",
          }}>
          Rs. 
          {props.amount}
  </div>
  <div style={{ clear: "both" }}></div>
</div>
    </CardHeader>

 </Card>
  
        <Modal isOpen={isOpen} onClose={onClose} size="3xl" >
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
           <Card bg="" onClick={onOpen} my="2px" _hover={customStyle}>
     
     <CardHeader fontFamily="" fontSize="18px">
     <div >
  <div style={{ float: "left" }}>{props.billname}</div>
  <div  style={{ float: "left",
                position: 'absolute',
                left: "300px",
                 marginRight: "2px",
          }}>
          Rs. 
          {props.amount}
  </div>
  <div  style={{ float: "left",
                position: 'absolute',
                left: "1000px",
                 marginRight: "2px",
          }}>
          {props.date}
  </div>
  <div style={{ clear: "both" }}></div>
  
</div>
    </CardHeader>
  
   </Card>
    
          <Modal isOpen={isOpen} onClose={onClose} size="3xl" >
            <ModalOverlay />
            <ModalContent style={{height: "650px", }}>
              <ModalHeader>{props.billname}</ModalHeader>
              <ModalCloseButton />
              <ModalBody >
             
                 <div>Item Name : {props.itemname} </div> 
                  <div>Amount :  {props.amount}</div> 
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