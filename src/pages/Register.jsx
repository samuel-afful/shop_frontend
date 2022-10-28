import React from 'react';
import styled from "styled-components";
import img2 from '../img/img1.png';
import {mobile} from '../responsive'
import img1 from "../img/vecteezy_work-from-home-lifestyle-top-view_2133124.jpg"




const Container = styled.div`
width: 100vw;
height: 100vh;
object-fit: contain;
background:linear-gradient(rgba(225,225,225,0.5),rgba(225,225,225,0.5)),
            url(${img2}) ;
  
  background-color: white;
  display : flex;
  align-items: center;
  justify-content: center
`;
const Wrapper = styled.div`
    width: 40%;
    background-color: white;
    padding:20px;
    ${mobile({width:"100%",margin:"5px"})}
`;
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0 0;
    padding: 10px;
    
`;
const Agreement = styled.span`
    margin: 10px 0 ;
    font-size: 12px;
`;
const Button = styled.button`
    background-color: teal;
    width: 40%;
    cursor: pointer;
    padding: 15px 20px;
    border: none;
    color: white;
`;
const Register = () => {
  return (
   <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="first name"/>
                <Input placeholder="last name"/>
                <Input placeholder="username"/>
                <Input placeholder="email"/>
                <Input placeholder="password"/>
                <Input placeholder="confirm password"/>
                <Agreement>
                    By creating an account, I consent to the processing of my personal
                     data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button>CREATE</Button>
            </Form>
        </Wrapper>
   </Container>
  );
}

export default Register;
