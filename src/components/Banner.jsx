import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    max-width: 100vw;
    background-color: teal;
    text-align: center;
    padding:10px;
    color: #d6d4d4;
`

 const Banner = () => {
  return (
   <Container>
        Your Credible News Source, Reliable And Politically Neutral
   </Container>
  )
}

export default Banner;