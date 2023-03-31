import React from 'react'
import { Form } from 'react-router-dom'
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
  import {Link} from "react-router-dom";

function Login1() {
  return (
    <Container>
    <Form>
    <FormControl isRequired my="40px">
    <Input type='text' placeholder='First name'/>
    </FormControl>
    </Form>
    </Container>
  )
}

export default Login1
