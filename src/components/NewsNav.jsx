import {SearchOutlined } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components'
import NewsItem from './NewsItem';
import {popularProducts} from '../data'
import { useState,useEffect } from 'react';
import Axios from 'axios';

const PageContainer = styled.div`
    max-width: 100vw;
`
const Container = styled.div`
    max-width: 100vw;   
    display: flex;
    align-items: center;
    margin-top:5px;
    justify-content: center;
    padding: 0 25px 10px 25px;
`

const SearchContainer = styled.div`
    flex: 4;
    display: flex;
    align-items: center;
    border-bottom: solid 0.5px gray;
    border-radius: 5px;
`
const Logo = styled.div`
    flex:1;
`
const Input = styled.input`
    border: none;
    flex:9;
    &:focus{
        outline: none;
    }
`

const Icon = styled.div`
    cursor:pointer;
`

const ItemContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding:0px;
    justify-content: center;
   
 `



const NewsNav = () => {
   const apiKey = "fc51c6ffc2b7e8657f50d72e2d88abb0";
   const [news,setnews] = useState([])
   var newsitem = news.slice(0,20);
    console.log(newsitem)
    const [sort, setsort] = useState({newsitem});
    console.log(sort);

    const handleSearch = (name)=>{    
        const data = newsitem.filter(item=>item.name=== name);
        setsort(data);
        console.log(sort)
     }
   const [word, setword] = useState();
   console.log(word)

   useEffect(()=>(
    async function getUser() {
        try {
          const response = await Axios.get('https://saurav.tech/NewsAPI/everything/cnn.json');
          
          let data = response.data.articles;
          
          setnews(data);   
        } catch (error) {
          console.error(error);
        }
      
      }
   ),[])

  return (
    <PageContainer> 
          <Container>
        <Logo>
                Gh NEWS
        </Logo>
        <SearchContainer >
            
            <Input value={word} onInput={(e)=>setword(e.target.value)} onChange={()=>handleSearch(word)} ></Input>
            <Icon>
                <SearchOutlined onClick={()=>handleSearch(word)} />
            </Icon>
          
        </SearchContainer>
     
    </Container>
    <ItemContainer>
        {newsitem.map(item=>(
                  <NewsItem item={item}/>
        ))}
      
    </ItemContainer>
    </PageContainer>
    
  );
}

export default NewsNav;
