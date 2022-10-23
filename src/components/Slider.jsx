import React from 'react';
import styled from 'styled-components'
import { ArrowLeftOutlined,ArrowRightOutlined } from '@mui/icons-material';
import img1 from '../img/img1.png'
import img2 from '../img/img2.png'
import { useState } from 'react';

const Container = styled.div`
    width:100%;
    height: 100vh;
    display:flex;
    position: relative;
    align-items:center;
    overflow:hidden;
`
const Arrow = styled.div`
    border-radius: 50%;
    background-color:#fff7f7;
    height:50px;
    width:50px;
    display:flex;
    justify-content:center;
    align-items:center;
    position: absolute;
    margin: auto;
    left: ${props=>props.direction === "left" && "10px"};
    right: ${props=>props.direction === "right" && "10px"};
    opacity:0.5;
    z-index:2;
`

const Wrapper = styled.div`
 height:100%;
 display:flex;
 transform: translateX( ${props=>props.slideIndex* -100}vw);
 transition: all 1.5s ease;
`
const Slide = styled.div`
display:flex;
margin:auto;
width:100vw;
height:100vh;
background-color: #${props=>props.bg};
align-items: center;
justify-content: center;
`
const ImgContainer = styled.div`
    height:100%;
    width:100%;
    flex:1;
`
const TxtContainer = styled.div`
    height:60%;
    flex:1;
    padding: 50px;
    
`
const Image = styled.img`
   height:85%;
`
const Desc = styled.p`
    font-size:20px;
    letter-spacing:3px;
    font-weight:500px;
    margin:50px 0px;
`
const Title = styled.h1`
font-weight:bold;
`
const Button = styled.button`
    padding:10px;
    background-color: transparent;
    font-size:20px;
    cursor:pointer;
`
const Slider = () => {
    const [slideIndex,setSlideIndex] = useState(0);
const handleClick =(direction)=>{
if(direction==="left"){
     setSlideIndex(slideIndex>0?slideIndex-1:2)
}else{
    setSlideIndex(slideIndex<2?slideIndex+1:0)
}
}
  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlined sx={{fontSize:30}}/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            <Slide bg="f3fafa">
                <ImgContainer>
                <Image src={img1} alt="caurosel"/>
                </ImgContainer>
                <TxtContainer>
                   <Title>WINTER SALES</Title>
                   <Desc>SHOP NOW TO ENJOY A DISCOUNT OFF</Desc>
                   <Button>SHOW ME</Button>
              </TxtContainer>
            </Slide>
            <Slide bg="fcf1ed">
                <ImgContainer>
                <Image src={img2} alt="caurosel"/>
                </ImgContainer>
                <TxtContainer>
                   <Title>POPULAR SALES</Title>
                   <Desc>SHOP NOW TO ENJOY A DISCOUNT OFF</Desc>
                   <Button>SHOW ME</Button>
              </TxtContainer>
            </Slide>
            <Slide bg="fbf0f4">
                <ImgContainer>
                <Image src={img1} alt="caurosel"/>
                </ImgContainer>
                <TxtContainer>
                   <Title>SUMMER SALES</Title>
                   <Desc>SHOP NOW TO ENJOY A DISCOUNT OFF</Desc>
                   <Button>SHOW ME</Button>
              </TxtContainer>
            </Slide> 
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <ArrowRightOutlined sx={{fontSize:30}}/>
        </Arrow>
    </Container>
  );
}

export default Slider;
