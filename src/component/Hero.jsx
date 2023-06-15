import React from 'react';
import styled, { keyframes } from 'styled-components';
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei';
import { Canvas } from '@react-three/fiber'
import Navbar from './Navbar';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
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

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
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

  @media only screen and (max-width: 768px) {
    padding: 10px;
    text-align: center;
    font-size: 20px;
  }
`;

const Right = styled.div`
  flex: 3;
  position: relative;

  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const Img = styled.img`
  height: 90%;
  width: 80%; /* Update the width to match the aspect ratio of the image */
  object-fit: contain;
  position: absolute;
  top: -20px;
  bottom: 0;
  left: 20px;
  /* transform: translateX(-50%); */
  margin: auto;
  animation: animate 5s infinite ease alternate;
  overflow: hidden;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @keyframes animate {
    to{
      transform: translateY(10px);
    }
  }

  /* @keyframes animate {
    0% {
      transform: translateX(100%);
    }
    20% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(-200px) rotate(360deg);
    }
  } */
`;


const Hero = () => {
  return (
    <Section id="Hero">
      <Navbar />
      <Container>
        <Left>
          <Title>Step into Style and Comfort!</Title>
          <Desc>Unparalleled Quality: Elevating Your Shoe Experience</Desc>
        </Left>
        <Right>
        <Canvas>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={1}/>
            <directionalLight position={[3,2,1]}/>
            <Sphere args={[1,100,200]} scale={2.4}>
            <MeshDistortMaterial color="#8d8b8e" attach="material" distort={0.5} speed={2}/>
            </Sphere>
          </Canvas>
          <Img src="./img/pg.png" alt="Product Image" />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;

