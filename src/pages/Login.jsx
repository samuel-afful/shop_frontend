import React from 'react';
import styled from "styled-components";
import img2 from '../img/img1.png';
import {mobile} from '../responsive'


const Container = styled.div`
    width:100vw;
    height:100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(rgba(225,225,225,0.5),rgba(225,225,225,0.5)) ,url(${img2});
`
const Wrapper = styled.div`
    background-color: white;
    padding: 20px;
    width:25%;
    ${mobile({width:"90%",margin:"5px"})}
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    
`
const Input = styled.input`
    min-width: 90%;
    padding: 10px;
    margin:10px 0px;
    
`
const Forget = styled.a`
    color: gray;
    margin-top:10px;
    cursor: pointer;
    font-size: 13px;
`
const SignUp = styled.a`
    color: gray;
    margin-top: 10px;
    font-size: 13px;
    cursor: pointer;
`
const Button = styled.button`
    width: 40%;
    background-color: teal;
    color: white;
    border: none;
    padding: 15px;
    cursor: pointer;
`
const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder='username'/>
                <Input placeholder='password'/>
                <Button>LOGIN</Button>
                <Forget href="#">DO NOT REMMEMBER PASSWORD?</Forget>
                <SignUp href="#">CREATE A NEW ACCOUNT</SignUp>
            </Form>
           
        </Wrapper>
    </Container>
  );
}

export default Login;
