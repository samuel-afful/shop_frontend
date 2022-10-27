import React from 'react';
import styled from 'styled-components';
import { SearchOutlined,FavoriteBorderOutlined, ShoppingCartOutlined } from '@mui/icons-material';

const Info = styled.div`
    opacity: 0;
    left:0;    
    position:absolute;
    width:100%;
    height:100%;
    top: 0;
    display:flex;
    align-items:center;
    justify-content:center;
    z-index:3;
    transition: all 0.8s ease;
    &:hover{
      background-color:rgba(0,0,0,0.2);
    }
   
`

const Container = styled.div`
    flex:1;
    margin:5px;
    width:280px;
    height:300px;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#f5fbfd;
    position: relative;
    &:hover ${Info}{
      opacity:1;
    }
`
const Image = styled.img`
    height:70%;
    z-index:2;
`

const Circle = styled.div`
    background-color: white;
    width:200px;
    height: 200px;
    position: absolute;
    border-radius: 50%;
    
`
const Icon = styled.div`
    
    background-color:white;
    width:40px;
    height:40px;
    margin:10px;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content: center;
    transition: all 0.5s ease;
    &:hover{
      background-color: #e9f5f5;
      transform: scale(1.1);
    }
`
const Product = ({product}) => {
  return (
   <Container>
        <Circle/>
        <Image src={product.img} />
        <Info>
           <Icon>
            <SearchOutlined/>        
           </Icon>
           <Icon>       
            <ShoppingCartOutlined/>
           </Icon>
           <Icon>         
           <FavoriteBorderOutlined/>
           </Icon>
        </Info>
   </Container>
  );
}

export default Product;
