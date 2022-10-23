import React from 'react';
import styled from "styled-components";
import img1 from "../img/img1.png";
import {Add,Remove} from "@mui/icons-material"

const Container = styled.div`
width:100%;
height: 100vh;
`
const Wrapper = styled.div`
    width: 70%;
    height: 100%;
    display : flex;
    justify-content: center;
    padding:15px;
`
const ImageContainer = styled.div`
    flex: 4;
    height: 90%;
    background-color: #f3fafa;
`
const Image = styled.img`

`
const InfoContainer = styled.div`
    flex: 2;
    padding-left: 30px;
    width: 100%;
`
const Title = styled.p`
    font-size: 25px;
    margin-bottom: 20px;
`
const Desc = styled.p`
    margin-bottom: 20px;
    height: 80px;
    width: 100%;
`
const Price = styled.span`
        color: gray;
        font-size:25px;
`
const PriceContainer = styled.div`

`
const Currency = styled.span`
    margin-right: 5px;
    color: gray;
    font-size:25px;
`
const ColorContainer = styled.div`
    height: 60px;
    display:flex;
    align-items: center;
    margin-bottom: 15px;
`
const Color = styled.div`
    border-radius: 50%;
    height:30px;
    width:30px;
    background-color: ${props=>props.bg};
    margin-right: 10px;
`
const TextColor = styled.p`
    margin-right: 10px;

`
const Size = styled.select`

`
const SizeOption = styled.option`

`
const SizeContainer = styled.div`
    display: flex;
    margin-left: 20px;
`
const SizeText = styled.p`
margin-right: 10px;
`
const Quantity = styled.div`
     display: flex;
     align-items: center;
`
const QtyBtn = styled.button`
    border-radius:5px;
    border: solid 1px gray;
    height: 30px;
    margin: auto;
    width: 25px;
`
const CartButton = styled.button`
    border: solid 2px teal;
    margin-left: 120px;
    height:35px;
    cursor: pointer;
    width: 
`
const ProductDetail = () => {
  return (
    <Container>
        <Wrapper>
        <ImageContainer>
            <Image src={img1}/>
        </ImageContainer>
        <InfoContainer>
            <Title>Jeans On Top</Title>
            <Desc>
                Shirts And Shorts Shirts And Shorts Shirts And Shorts 
                Shirts And Shorts Shirts And Shorts Shirts And ShortsShirts And Shorts
            </Desc>
            <PriceContainer>
            <Currency>$</Currency>
            <Price>20</Price>
            </PriceContainer>
            <ColorContainer>
                <TextColor>Colors:</TextColor>
                <Color bg="black"></Color>
                <Color bg="blue"></Color>
                <Color bg="gray"></Color>
                <SizeContainer>
                    <SizeText>Size:</SizeText>
                    <Size>
                        <SizeOption>XS</SizeOption>
                        <SizeOption>S</SizeOption>
                        <SizeOption>M</SizeOption>
                        <SizeOption>L</SizeOption>
                        <SizeOption>XL</SizeOption>
                    </Size>
                </SizeContainer>
            </ColorContainer>
            <Quantity>
               <Remove/>
                <QtyBtn>1</QtyBtn>
                <Add/>     
                <CartButton>ADD TO CART</CartButton>        
            </Quantity>
        </InfoContainer>
        </Wrapper>
    </Container>
  );
}

export default ProductDetail;
