import React from 'react';
import { styled } from 'styled-components';

const Section = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 830px;
  padding: 10px 0px;
`;

const Linkss = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 40px;
`;

const Logos = styled.img`
  height: 30px;
  padding: 7px;
`;

const Lin = styled.div`
  cursor: pointer;
`;

const List = styled.ul`
  display: flex;
  gap: 40px;
  list-style: none;
`;

const ListItems = styled.li``;

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  element.scrollIntoView({ behavior: 'smooth' });
};

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Linkss>
          <Logo src="./img/logo.gif/" />
          <Logos src="./img/textlogo.png/" />
        </Linkss>
        <Lin>
          <List>
            <ListItems onClick={() => scrollToSection('Hero')}>Home</ListItems>
            <ListItems onClick={() => scrollToSection('Testimonials')}>
              Testimonials
            </ListItems>
            <ListItems onClick={() => scrollToSection('Products')}>Products</ListItems>
            <ListItems onClick={() => scrollToSection('Contacts')}>Contact</ListItems>
          </List>
        </Lin>
      </Container>
    </Section>
  );
};

export default Navbar;
