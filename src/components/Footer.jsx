import styled from "styled-components";
import {Room, Phone, Facebook,Twitter,Pinterest,Instagram, MailOutlined} from "@mui/icons-material";
const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content:center;
    align-items:center;
`
const LinkContainer = styled.div`
    flex:1
`;

const SocialContainer = styled.div`
    flex:1
`;

const ContactContainer = styled.div`
    flex:1;
    margin-bottom:10px;
    padding-bottom:10px;
`;

const Logo = styled.div`
margin:15px;
font-weight:bold;
`;
const Desc = styled.p`
  margin:15px;
`;
const SocialIcon = styled.div`
    display:flex;
    
`;
const Icon = styled.div`
    border-radius: 50%;
    background-color: #${props=>props.bg};
    color: white;
    display:flex;
    justify-content:center;
    align-items:center;
    height:40px;
    width:40px;
    padding: 5px;
    margin:5px;
`
const LinkTitle = styled.h1`
    font-size:20px;
    padding-left:40px;
    padding-bottom: 20px;
`
const ListItem = styled.ul`
    display: flex;
    list-style:none;
    flex-wrap: wrap;
`
const Item =styled.li`
    width:50%;
    margin-bottom:10px;
`
const Contact = styled.h1`
font-size:20px;



`
const ContactListing = styled.div`
    display:flex;
    align-items: center;
    padding-top:20px;
`
const IconDesc = styled.p`

`
const Footer = ()=>{
return (
    <Container>
        <SocialContainer>
            <Logo>TUGA</Logo>
            <Desc>
            Note that the development build is not optimized.
            To create a production build, use npm run build.
            Note that the development build is not optimized.
            To create a production build, use npm run build.
            </Desc>
            <SocialIcon>
                <Icon bg="3b5999">
                     <Facebook/>
                </Icon>
                <Icon bg="e4405f">
                     <Instagram/>
                </Icon>
                <Icon bg="55acee">
                     <Twitter/>
                </Icon>
                <Icon bg="e60023">
                     <Pinterest/>
                </Icon>
            </SocialIcon>
        </SocialContainer>
        <LinkContainer>
            <LinkTitle>
            Useful Links
            </LinkTitle>
            <ListItem>
                <Item>Home</Item>
                <Item>Man Fashion</Item>
                <Item>Accesories</Item>
                <Item>Order Tracking</Item>
                <Item>Cart</Item>
                <Item>Woman Fashion</Item>
                <Item>My Account</Item>
                <Item>WishList</Item>
                <Item>Terms</Item>        
            </ListItem>             
        </LinkContainer>
        <ContactContainer>
           <Contact>
            Contact
           </Contact>
           <ContactListing>
            <Room sx={{marginRight:"10px"}}/>
            <IconDesc>
                B623/3 Cantoment , Accra 98313
            </IconDesc>
           </ContactListing>
           <ContactListing>
            <Phone sx={{marginRight:"10px"}}/>
            <IconDesc>
                B623/3 Cantoment , Accra 98313
            </IconDesc>
           </ContactListing>
           <ContactListing>
            <MailOutlined sx={{marginRight:"10px"}}/>
            <IconDesc>
                B623/3 Cantoment , Accra 98313
            </IconDesc>
           </ContactListing>
        </ContactContainer>
    </Container>
);
}

export default Footer;