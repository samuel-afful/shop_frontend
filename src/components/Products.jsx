import React, { useEffect ,useState} from 'react';
import styled from 'styled-components';
import { popularProducts } from '../data';
import Product from './Product';
import Axios from 'axios'

const Container = styled.div`
    display:flex;
    flex-wrap:wrap;
`

const Products = ({cat,filters,sort}) => {
  console.log(cat,filters,sort)
  const [products,setProduct] = useState([])
  const [filteredProduct,setFilteredProduct] = useState([])

  useEffect(()=>{
    const getProducts = async()=>{
      try{
        const response = await Axios.get(cat?`http://localhost:5000/api/product?category=${cat}`:'http://localhost:5000/api/product');
        console.log(response)
      setProduct(response.data)
      }catch(err){
        console.log(err)
      }
    }   
    getProducts()
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

  // useEffect(()=>{
  //   if(sort==="newest"){
  //     setFilteredProduct((prev)=>(
  //       [...prev].sort((a,b)=>(a.createdAt-b.createdAt))
  //     ))
  //   }
  //   else if(sort="")
  // })
  console.log(filteredProduct)
  return (
    <Container>
        {
            filteredProduct.map(product=>(
               <Product product={product} key={product.id}/>
            ))
        }
    </Container>
  );
}

export default Products;
