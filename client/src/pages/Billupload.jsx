import React, {useState, useEffect} from 'react'
import { Form,Link,useNavigate } from 'react-router-dom'
import axios from "axios";
import { addbillRoute } from '../utils/APIRoutes';



import {
    Box, 
    FormControl, 
    FormLabel, 
    FormHelperText, 
    Input, 
    Textarea, 
    Button, 
    Checkbox,
    Container,
  } from '@chakra-ui/react'  
  

function Billupload() {


  const navigate = useNavigate();

  const [values,setValues]=useState({
    billname:"",
    itemanme:"",
    amount:"",
    proof:"",
  });




  const handleValidation = () => {
    const { billname,itemname,amount,proof } = values;
    return true;
  };



  


  const handleSubmit = async (event)=>{
    event.preventDefault();
    if(handleValidation()){
        console.log("in validation", addbillRoute)
        const { billname,itemname,amount,proof} = values;
  const { data } = await axios.post(addbillRoute,{
    billname,
    itemname,
    amount,
    proof
  });
  if(data.status===true)
  {
    localStorage.setItem("bill", JSON.stringify(data.bill));
  }
  navigate("/");
    }
};
const handleChange = (event)=>{
  setValues({ ...values, [event.target.name]: event.target.value });

};






  return (
    <Container  pb="40px" px="50px" mt="50px" borderRadius="25px" border="1px solid black">
    <Form action='' method='post' onSubmit={(event) => handleSubmit(event)}>
    <FormControl isRequired my="40px">
          <FormLabel >Bill Name:</FormLabel>
          <Input type="text" name="billname" placeholder='Enter Bill Name' onChange={(e) => handleChange(e)}/>
          
        </FormControl>

        <FormControl isRequired mb="40px">
          <FormLabel>Item name:</FormLabel>
          <Input type="text" name="itemname" placeholder='Enter Item Name' onChange={(e) => handleChange(e)}/>
          
        </FormControl>

        <FormControl isRequired mb="40px">
          <FormLabel>Amount:</FormLabel>
          <Input type="text" name="amount" placeholder='Enter Amount' onChange={(e) => handleChange(e)}/>
          
        </FormControl>

        <FormControl isRequired mb="40px">
          <FormLabel>Proof:</FormLabel>
          <Input border="0px" type="file" name="proof" onChange={(e) => handleChange(e)} />
          
        </FormControl>
        <Button type='submit'>Submit</Button>

    </Form>
    </Container>
  )
}

export default Billupload
