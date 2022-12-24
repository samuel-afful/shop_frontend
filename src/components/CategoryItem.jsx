import React from 'react';
import styled from 'styled-components'
import {mobile} from "../responsive"
import { Link } from "react-router-dom";
const Container = styled.div`
height:70vh;
width: 90%;
flex:1;
margin:5px;
position:relative;

`
const Image = styled.img`
    height:100%;
    width:100%;
    object-fit:cover;
`
const Title = styled.h1`
    color:teal;
    font-weight:bold;
    margin:5px;
  
`
const Button = styled.button`
    background-color:teal;
    border:none;
    padding:10px;
    font-weight:bold;
    border-radius:5px;
    cursor:pointer;
    color:white;
    
   
`
const TextContainer = styled.div`
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  position:absolute;
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content:center;
 
`
const CategoryItem = ({item}) => {
  return (
    
    <Container>
       <Link to={`/products/${item.cat}`}>
        <Image src={item.img} alt="image"/>
        <TextContainer>
        <Title>{item.name}</Title>
          <Button>BUY ME</Button>
        </TextContainer>
        </Link>
    </Container>
  );
}

export default CategoryItem;
  