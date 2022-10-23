import React from 'react';
import CategoryItem from './CategoryItem';
import styled from 'styled-components'
import {categories}  from '../data'
const Container = styled.div`
    display:flex;
    padding:20px;
`

const Categories = () => {
  return (
    <Container>
       { categories.map(item=>(
          <CategoryItem item={item}/>      
      )
       )
       
    }
      
    </Container>
  );
}

export default Categories;
