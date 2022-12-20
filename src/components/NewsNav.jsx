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
   
   const [news,setnews] = useState([])
   const [filter, setfilter] = useState(true);
   var newsitem = news.slice(0,20);
    const [sort, setsort] = useState();
    console.log(news)
    const handleSearch = (name)=>{ 
        const data = newsitem.filter(item=>item.title.toLowerCase().includes(name));
        setsort(data);
        setfilter(false); 
    }  
     
    
    


   const [word, setword] = useState('');
   
   

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
            
            <Input value={word} onInput={(e)=>setword(e.target.value.toLowerCase())}  onChange={(e)=>e.target.value.trim().length<=0 && setfilter(true)} ></Input>
            <Icon>
                <SearchOutlined onClick={()=>handleSearch(word)} />
            </Icon>
          
        </SearchContainer>
     
    </Container>
    <ItemContainer>
        {  filter?newsitem.map(item=>(
                  <NewsItem item={item}/>)):sort.map(item=>(
                  <NewsItem item={item}/>
        ))
        }
            
    </ItemContainer>
    </PageContainer>
    
  );
}

export default NewsNav;
