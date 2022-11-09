import React from 'react';
import styled from 'styled-components';
import {popularProducts} from '../data'
import NewsItem from './NewsItem';
import { useState,useEffect } from 'react';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding:0px;
    justify-content: center;
    
`
const NewsListing = () => {

    const [sort, setsort] = useState(popularProducts);

    const handleSearch = (id)=>{    
        const data = popularProducts.filter(item=>item.id === id);
        setsort(data);
        console.log(sort)
     }

  return (
    <Container>
        {sort.map(item=>(
                  <NewsItem item={item}/>
        ))}
      
    </Container>
  );
}

export default NewsListing;

