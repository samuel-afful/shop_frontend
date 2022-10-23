import React from 'react';
import styled from "styled-components";
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
`
const FilterText =styled.p`
    padding-top:13px;
    font-weight:600;
`;
const SortText =styled.p`
    font-weight:600;
`
const FilterProduct =styled.span`
    flex:1;
    display: flex;
`
const SortProduct =styled.span`
    flex:1;
    justify-content: end;
    display:flex;
    align-items: center;
    
`
const SelectFilter = styled.select`
    width:10%;
    height: 25px;
    margin:10px;
    padding:5px;
   
`
const OptionFilter = styled.option`

`
const SelectSort = styled.select`
    width:15%;
    height: 25px;
    margin:10px;
    padding:5px;
   
`
const OptionSort = styled.option`

`
const Filter = () => {
  return (
   <Container>
        <ProdText>Dresses</ProdText>
        <FilterContainer>
        <FilterProduct>
            <FilterText>Filter Products:</FilterText>
            <SelectFilter >
                <OptionFilter disabled selected> Color </OptionFilter>
                <OptionFilter>  Red  </OptionFilter>
                <OptionFilter>Yellow</OptionFilter>
                <OptionFilter>Blue</OptionFilter>
                <OptionFilter>Green</OptionFilter>
            </SelectFilter>
            <SelectFilter >
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
            <SelectSort>
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
