import React from 'react';
import styled from 'styled-components';
import {Send} from '@mui/icons-material'
import { mobile } from '../responsive';

const Container = styled.div`
    height: 50vh;
    width:100vw;
    background-color:#fcf1ed;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  
`

const Title = styled.h1`
        margin-bottom: 20px;
        font-size:30px;
`
const Message = styled.p`
margin-bottom: 20px;
font-size:30px;
font-weight:100px;
text-align: center;
${mobile({fontSize:"20px"})}
`
const InputContainer = styled.div`
    display: flex;
    height: 5vh;
    width: 30vw;
    background-color:white;
    border: solid 0.5px lightgray;
    ${mobile({justifyContent:"center",width:"80%"})}
`
const Input = styled.input`
    flex:8;
    border: none;
    padding-left:10px;

`
const Button = styled.button`
    background-color:teal;
    color:white;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    border: none;
    flex:1;
`
const NewsLetter = () => {
  return (
   <Container>
    
     <Title>Newsletter</Title>
     <Message>Get timely Updates from Your Favorites Products</Message>
     <InputContainer>
     <Input placeholder="Your email"/>
     <Button>
     <Send/>
     </Button>
     </InputContainer>
           
   </Container>
  );
}

export default NewsLetter;
