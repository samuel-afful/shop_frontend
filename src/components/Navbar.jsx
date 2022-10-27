import React from 'react';
import styled from 'styled-components';
import {mobile} from "../responsive";
import { Search,ShoppingCartOutlined } from '@mui/icons-material';
import  { Badge } from '@mui/material';
import { grey } from '@mui/material/colors';
const Container = styled.div`
    height: 60px;
   
`;

const Wrapper = styled.div`
    padding:10px 20px ;
    display:flex;
    justify-content:space-between;
    align-items:center;
`;

const Language = styled.span`
    font-size:15px;
    cursor:pointer;
    ${mobile({display:"none"})}
`;

const Left = styled.div`
    flex:1;
    display:flex;
    align-items:center;
`;

const Center = styled.div`
    flex: 1;
    text-align:center;
`;
const Right = styled.div`
    flex:1;
    display: flex;
    align-items:center;
    justify-content:flex-end;
    ${mobile({justifyContent:"flex-start"})}
`;

const SearchContainer = styled.div`
border: solid 0.5px lightgray;
border-radius:5px;
display:flex;
align-items:center;
margin-left: 10px;
${mobile({width:"80px",marginLeft:"0px"})}
`
const Input = styled.input`
    border:none;
    ${mobile({width:"55px"})}
`
const Logo = styled.h1`
    font-weight:bold;
    ${mobile({fontSize:"24px"})}
`
const MenuItem = styled.span`
font-size:15px;
cursor:pointer;
margin-left:25px;
${mobile({marginLeft:"auto",margin:"5px"})}
`
const Navbar = () => {
  return (   
      <Container>
            <Wrapper>              
            <Left>
            <Language>
                    ENG
            </Language>
            <SearchContainer>
                <Input/>
                <Search sx={{ fontSize: 25 ,color: grey[500] }} />
            </SearchContainer>
            </Left>
            <Center>
                <Logo>TUGA</Logo>
            </Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined color="action" />
                </Badge>
                </MenuItem>
            </Right>
            </Wrapper>
      </Container>
  );
}

export default Navbar;
