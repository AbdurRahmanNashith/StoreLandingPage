import React, { useState } from 'react'
import { styled } from 'styled-components'
import Belts from './Belts';
import Formals from './Formals';
import Casuals from './Casuals';
import Slings from './Slings';
import Lbags from './Lbags';
import Womens from './Womens';
import Boot from './Boot'

const data=[
  "Formal",
  "Casual",
  "Boots",
  "Womens",
  "Slings",
  "Bags",
  "Belts",
]


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  color: black;
  font-size: 14px;
  font-weight: 300;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px){
    width: 100%;
    flex-direction: column;
  }

  
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px){
    padding: 20px;
    justify-content: center;
  }

`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;


`;

const ListItem = styled.li`
  font-size: 60px;
  font-weight: bold;
  color: transparent;
  -webkit-text-stroke: 1px white;
  cursor: pointer;
  position: relative;

  @media only screen and (max-width: 768px){
    font-size: 24px;
    color: white;
    -webkit-text-stroke: 0px;
  }



  &::after {
    content: "${(props)=>props.text}";
    position: absolute;
    top: 0;
    left: 0;
    width: 0px;
    color: white;
    overflow: hidden;
    white-space: nowrap;

    
  }


  &:hover{
    &::after{
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to{
          width: 100%;

        }
      }
    }
  }
`;


const Right = styled.div`
  flex: 1;
`;


const Products = () => {
  const[products, setproducts] = useState("Formals")
  return (
    <Section id="Products">
      <Container>
        <Left>
          <List>
            {data.map(item=>(
              <ListItem key={item} text={item} onClick={()=>setproducts(item)}>{item}</ListItem>
            ))}
            
          </List>
        </Left>
        <Right>
          {products == "Formal" ? (<Formals/>) : products == "Womens" ? (<Womens/>) : products == "Boots" ? (<Boot/>) : products == "Bags" ? (<Lbags/>) :products == "Slings" ? (<Slings/>) : products == "Belts" ? (<Belts/>) :  <Casuals/>}
        </Right>
      </Container>
    </Section>
  )
}

export default Products
