import Announcement from "../components/Announcement"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import React from 'react';
import styled from  "styled-components"
import img from "../img/img2.png"
import {Remove,Add} from "@mui/icons-material"

const Container = styled.div`
    
`
const Wrapper = styled.div`
    padding: 20px;
`
const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;   
    cursor: pointer; 
    border: ${props=>props.type==="fill" && "none"};
    background-color: ${props=>props.type === "fill"?"black":"transparent"};
     color: ${props=>props.type === "fill"?"white":"black"};
`
const TopTexts = styled.div`
   
`
const TopText = styled.span`
    margin: 0px 10px;
    text-decoration: underline;
    cursor: pointer;
` 
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`
const Info = styled.div`
    flex:3;
`
const Summary = styled.div`
    border: solid 1px;
    border-radius: 5px;
    flex:1;
    border-color: #eee;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Product = styled.div`
    padding: 10px;
    display:flex; 
    justify-content: space-between;
`
const Image = styled.img`
    width: 200px;
    
`
const ProductDetail = styled.div`
    display: flex;
    flex:3;
`
const PriceDetail = styled.div`
    padding-top: 20px;
    flex:1;
`
const ProductColor = styled.div`
    border-radius: 50%;
    width: 20px;
    height: 20px;
    background-color: ${props=>props.color};
`
const ProductId = styled.span``
const ProductName = styled.span``
const ProductSize = styled.span``
const Detail = styled.div`
    padding:20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around ;
`
const PriceAmountContainer = styled.div`
   display: flex;
   align-items: center;
`
const Amount = styled.div`
   font-size: 20px;
   margin: 5px;
   
`
const ProductPrice = styled.div`
font-size: 24px;
margin: 5px;
font-weight: 50;
`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
 
`
const Hr = styled.hr`
    background-color: #eee;
    height: 1px;
    border: none;
`
const SummaryTitle= styled.span`
    padding-bottom: 30px;
    font-size: 25px;
    
`
const SummaryText = styled.div`
  

`
const SummaryPrice = styled.div`

`
const SummaryDetail = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
    font-weight:${props=>props.type==="total"&&"700"};
    font-size:${props=>props.type==="total"&&"24px"};
`
const CheckoutButton = styled.button`
    background-color: black;
    color: white;
    padding: 10px;
    cursor: pointer;
    border-radius: 3px;
`
const Cart = () => {
  return (
   <Container>
        <Announcement/>
        <Navbar/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your WishList(0)</TopText>
                </TopTexts>
                <TopButton type="fill">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src={img}/>
                            <Detail>
                                <ProductName><b>Product:</b>Shirt On Jeans</ProductName>
                                <ProductId><b>ID:</b> 6473466876434</ProductId>
                                <ProductColor color="black"/>
                                <ProductSize><b>Size:</b>37.5</ProductSize>
                            </Detail>
                        </ProductDetail>
                        <PriceDetail>
                            <PriceAmountContainer>
                                <Remove/>
                                <Amount>2</Amount>
                                <Add/>
                            </PriceAmountContainer>
                            <ProductPrice>$ 20</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr/>
                    <Product>
                        <ProductDetail>
                            <Image src={img}/>
                            <Detail>
                                <ProductName><b>Product:</b>Shirt On Jeans</ProductName>
                                <ProductId><b>ID:</b> 6473466876434</ProductId>
                                <ProductColor color="black"/>
                                <ProductSize><b>Size:</b>37.5</ProductSize>
                            </Detail>
                        </ProductDetail>
                        <PriceDetail>
                            <PriceAmountContainer>
                                <Remove/>
                                <Amount>2</Amount>
                                <Add/>
                            </PriceAmountContainer>
                            <ProductPrice>$ 20</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr/>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                   <SummaryDetail>
                   <SummaryText>Subtotal</SummaryText>
                    <SummaryPrice>$80</SummaryPrice>
                   </SummaryDetail>
                   <SummaryDetail>
                   <SummaryText>Estimated Shipping</SummaryText>
                    <SummaryPrice>$5.90</SummaryPrice>
                   </SummaryDetail>
                   <SummaryDetail>
                   <SummaryText>Shopping Discount</SummaryText>
                    <SummaryPrice>$-10</SummaryPrice>
                   </SummaryDetail>
                   <SummaryDetail type="total">
                   <SummaryText >Total</SummaryText>
                    <SummaryPrice>$75</SummaryPrice>
                   </SummaryDetail>
                   <CheckoutButton>CHECKOUT NOW</CheckoutButton>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
   </Container>
  );
}

export default Cart;
