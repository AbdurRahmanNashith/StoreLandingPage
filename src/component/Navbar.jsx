import React from 'react'
import { styled } from 'styled-components'

const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px){
    width: 100%;
    
  }
`
const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center; 
gap: 830px;
padding: 10px 0px;
@media only screen and (max-width: 768px){
    width: 100%;
    gap: 10px;
    padding: 10px;  
  }

`
const Links = styled.div`
display: flex;
align-items: center;

@media only screen and (max-width: 768px){
    width: 90%;
    height: auto;
    
  }


`;
const Logo = styled.img`
height: 40px;

@media only screen and (max-width: 768px){
    display: none;

  }

`;
const Logos = styled.img`
height: 30px;
padding: 7px;

`;
const Lin = styled.div`
cursor: pointer;

@media only screen and (max-width: 768px){
    width: 90%;
  }
 `;
  

const List = styled.ul`
display: flex;
gap: 40px;
list-style: none;

@media only screen and (max-width: 768px){
    width: 90%;
    gap: 20px;
    font-size: 10px;
    
  }

`
const ListItems = styled.li`

`


const Navbar = () => {
    return (
        <Section>
            <Container>
                <Links>
                    <Logo src="./img/logo.gif/" />
                    <Logos src="./img/textlogo.png/" />
                </Links>
                <Lin>
                <List>
                    <ListItems>Home</ListItems>
                    <ListItems>Testimonials</ListItems>
                    <ListItems>Product</ListItems>
                    <ListItems>Contact</ListItems>
                </List>
                </Lin>
            </Container>
        </Section>
    )
}

export default Navbar
