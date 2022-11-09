
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const Container = styled.div`
    border-radius:20px;
    width:260px;
    height: 300px;
    position: relative;
    margin:5px;
    border: solid 0.2px grey;
    padding: 5px 0 0 50px;
`
const Image = styled.img`
    width:80%;
    height: 80%;
`
const InfoContainer = styled.div`
    width: 100%;
    height: 50%;
    position: absolute;
    top: 50%;
    left: 0;
    border-radius:20px;
    background-color   : #094747c7; ;
    font-weight: bold;
    color:  #d6d4d4;
    padding-top: 10px;
`

 const NewsItem = ({item}) => {
    
  return (
    <a href ={item.url}>
    <Container>
        <Image src={item.urlToImage}/> 
        <InfoContainer>  
           {item.title}
        </InfoContainer>         
    </Container>
    </a>
  )
}

export default NewsItem;