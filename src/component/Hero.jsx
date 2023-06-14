import React from 'react'
import { styled } from 'styled-components'
import Navbar from './Navbar'


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
 
  
  @media only screen and (max-width: 768px){
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px){
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

const Left = styled.div`
flex: 3;
display: flex;
flex-direction: column;
justify-content: center;
gap: 20px;

@media only screen and (max-width: 768px){
    flex: 1;
    align-items: center;
  }
`;
const Title = styled.h1`
font-size: 74px;

@media only screen and (max-width: 768px){
    text-align: center;
    font-size: 50px;
  }
`;

const Desc = styled.p`
display: flex;
align-items: center;
gap: 10px;
font-size: 24px;
color: lightgrey;

@media only screen and (max-width: 768px){
    padding: 10px;
    text-align: center;
    font-size: 20px;
  }
 `;

const Right = styled.div`
flex: 3;
position: relative;

@media only screen and (max-width: 768px){
    flex: 1;
    width: 100%;
  }
`;
const Img = styled.img`
height: 450px;
height: 600px;
object-fit: contain;
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
margin: auto;
animation: animate 2s infinite ease alternate;

@media only screen and (max-width: 768px){
    width: 300px;
    height: 300px;
  }

@keyframes animate {
  to{
    transform: translateY(20px);
  }
}

`;

const Hero = () => {
  return (
    <Section>
      <Navbar/>
      <Container>
        <Left>
          <Title>Step into Style and Comfort!</Title>
          <Desc>Unparalleled Quality: Elevating Your Shoe Experience</Desc>
        </Left>
        <Right>
          <Img src="./img/pg.png"/>
        </Right>
      </Container>
    </Section>
  )
}

export default Hero
