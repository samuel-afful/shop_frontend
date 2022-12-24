import React, { useEffect } from 'react';
import styled from 'styled-components';
import { popularProducts } from '../data';
import Product from './Product';
import Axios from 'axios'
import { useState } from 'react';
const Container = styled.div`
    display:flex;
    flex-wrap:wrap;
`

const Products = ({cat,filters,sort}) => {
  console.log(cat,filters,sort)
  const [products,setProduct] = useState([])
  const [filteredProduct,setFilteredProduct] = useState([])
  useEffect(()=>{
    const getProducts=()=>{
      try{
        const response = Axios.get(cat ?`http://localhost:5000/api/product?category=${cat}`:
        'http://localhost:5000/api/product');
        console.log(response)
      }catch(err){
        console.log(err)
      }
    }   
     setProduct(response.data)
  },[cat])

  useEffect(()=>{
      cat && setFilteredProduct(
        products.filter((item)=>
        Object.entries(filters).every(([key,value])=>
        item[key].includes(value)
        )
        )
      );
  },[products,cat,filters])
  return (
    <Container>
        {
            popularProducts.map(product=>(
               <Product product={product} key={product.id}/>
            ))
        }
    </Container>
  );
}

export default Products;
