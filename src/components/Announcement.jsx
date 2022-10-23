import React from 'react';
import styled from 'styled-components'; 

const Container = styled.div`
    height:30px;
    background-color: teal;
    color: white;
    text-align: center;
    display:flex;
    justify-content:center;
    align-items: center;
    font-size:14;
    font-weight: bold;
`

const Announcement = () => {
  return (
    <Container>
        Discount Of 25% off Most Purchases Between  November and December
    </Container>
  );
}

export default Announcement;
