import React from 'react';
import CategoryItem from './CategoryItem';
import styled from 'styled-components'
import {categories}  from '../data'
import {mobile} from '../responsive'

const Container = styled.div`
    display:flex;
    padding:20px;
    ${mobile({flexDirection:"column",justifyContent:"center"})}
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
