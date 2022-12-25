import React, { useEffect } from 'react';
import styled from "styled-components";
import img1 from "../img/img1.png";
import { mobile } from '../responsive';
import {Add,Remove} from "@mui/icons-material"
import { useLocation } from 'react-router-dom';
import Axios from 'axios';
import { useState } from 'react';

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
    ${mobile({flexDirection:"column"})}
`
const ImageContainer = styled.div`
   flex:1;
    background-color: #f3fafa;
    height:70vh;

    ${mobile({width:"100%"})}
`
const Image = styled.img`
width: 100%;
height: 60vh;
object-fit: cover;
background-color: #f3fafa;
${mobile({height:"75%",width:"100%"})}
`
const InfoContainer = styled.div`
    flex:1;
    padding-left: 50px;
    ${mobile({paddingTop:"10px",width:"100%",paddingLeft:"0px"})}
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
     ${mobile({justifyContent:"space-between"})}
`
const QtyBtn = styled.button`
    border-radius:5px;
    border: solid 1px gray;
    height: 30px;
    margin: 10px;
    width: 25px;
`
const CartButton = styled.button`
    border: solid 2px teal;
    margin-left: 120px;
    height:35px;
    cursor: pointer;
    
    ${mobile({fontSize:"10px",width: "100%",height:"50px"})}
`
const ProductDetail = () => {
    const location = useLocation();
    const [product,setProduct] = useState({})
    const [qty,setQty] = useState(1)
    const [color,setColor] = useState("")
    const [size,setSize] = useState("")
    const id = location.pathname.split('/')[2]
    console.log(color)
    console.log(size)
    const handleQtySub =async()=>{
       
           qty>1 && setQty(qty-1)
        
    }
    const handleQtyAdd =async()=>{
        
            setQty(qty+1)
        }
    const handleCart = async ()=>{
        
    }
    useEffect(()=>{
        try{
            const getProduct = async()=>{
                const response = await Axios.get('http://localhost:5000/api/product/find/'+id)
                console.log(response)
                
                setProduct(response.data)
            }
            getProduct()
        }catch(err){
            console.log(err)
        }
        
        
    },[id])
    
  return (
    <Container>
        <Wrapper>
        <ImageContainer>
            <Image src={product.img}/>
        </ImageContainer>
        <InfoContainer>
            <Title>{product.title}</Title>
            <Desc>
                {product.desc}
            </Desc>
            <PriceContainer>
            <Currency>$</Currency>
            <Price>{product.price}</Price>
            </PriceContainer>
            <ColorContainer>
                <TextColor>Colors:</TextColor>
                
                {product.color?.map((c)=>(
                    <Color bg={c} key={c} onClick={()=>setColor(c)}/>
                ))}            
                <SizeContainer>
                    <SizeText>Size:</SizeText>
                    <Size onChange={(e)=>setSize(e.target.value)}>
                    {product.size?.map((s)=>(
                     <SizeOption >{s.toUpperCase()}</SizeOption>
                ))}                      
                    </Size>
                </SizeContainer>
            </ColorContainer>
            <Quantity>
               <Remove onClick={handleQtySub}/>
                <QtyBtn >{qty}</QtyBtn>
                <Add onClick={handleQtyAdd}/>     
                <CartButton onClick={handleCart}>ADD TO CART</CartButton>        
            </Quantity>
        </InfoContainer>
        </Wrapper>
    </Container>
  );
}

export default ProductDetail;
