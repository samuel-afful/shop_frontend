import React from 'react';
import styled from "styled-components";
import {mobile} from '../responsive';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
const Container = styled.div`
    width:100%;
    
`
const ProdText =styled.h1`
    margin-left:10px;
    
`;
const FilterContainer =  styled.div`
    display: flex;
    justify-content: space-between;
    margin:10px;
    ${mobile({alignItems: "center"})}
`
const FilterText =styled.p`
    padding-top:13px;
    font-weight:600;
`;
const SortText =styled.p`
    font-weight:600;
    margin:10px;
`
const FilterProduct =styled.span`
    flex:1;
    display: flex;
    ${mobile({flexDirection:"column"})}
`
const SortProduct =styled.span`
    flex:1;
    justify-content: end;
    display:flex;
   
    ${mobile({flexDirection:"column",alignItems:"center",paddingBottom:"30px"})}
`
const SelectFilter = styled.select`
    // width:10%;
    // height: 25px;
    margin:10px;
    // padding:5px;
    // margin-bottom: 20px;
    ${mobile({width:"40%"})}
`
const OptionFilter = styled.option`

`
const SelectSort = styled.select`
   
    height: 25px;
    // justify-content: end;
    // display:flex;
    // align-items: center;
    padding: 30px

   ${mobile({width:"40%"})}
`
const OptionSort = styled.option`
    margin: 10px
`
const Filter = () => {
    const [filter,setFilter] = useState({})
    const [sort ,setSort] = useState('newest')
    const location  = useLocation();
    const cat = location.pathname.split('/')[2]
    console.log(cat)
    
    const handleChange=(e)=>{      
            const value = e.target.value;
            setFilter(
               { ...filter,
                [e.target.name]:value}
        )        
    }
    console.log(filter)
  return (
   
   <Container>
        <ProdText>Dresses</ProdText>
        <FilterContainer>
        <FilterProduct>
            <FilterText>Filter Products:</FilterText>
            <SelectFilter name="color" onChange={handleChange}>
                <OptionFilter disabled selected> Color </OptionFilter>
                <OptionFilter>  Red  </OptionFilter>
                <OptionFilter>Yellow</OptionFilter>
                <OptionFilter>Blue</OptionFilter>
                <OptionFilter>Green</OptionFilter>
            </SelectFilter>
            <SelectFilter  name="size" onChange={handleChange} >
            <OptionFilter disabled selected>Size</OptionFilter>
            <OptionFilter>XS</OptionFilter>
            <OptionFilter>S</OptionFilter>
            <OptionFilter>M</OptionFilter>
            <OptionFilter>L</OptionFilter>
            <OptionFilter>XL</OptionFilter>
            </SelectFilter>
        </FilterProduct>
        <SortProduct>
            <SortText>Sort Products:</SortText>
            <SelectSort onChange={(e)=>setSort(e.target.value)}>
            <OptionSort selected>Newest</OptionSort>
                <OptionSort>Price(asc)</OptionSort>
                <OptionSort>Price(desc)</OptionSort>
                <OptionSort>Black</OptionSort>
            </SelectSort>
        </SortProduct>
        </FilterContainer>
   </Container>
  );
}

export default Filter;
