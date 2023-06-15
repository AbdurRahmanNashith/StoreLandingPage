import Products from "./component/Products"
import Testimonials from "./component/Testimonials"
import Hero from "./component/Hero"
import Contacts from "./component/Contacts"
import { styled } from "styled-components"



const Container = styled.div`
  height: 100vh;
scroll-snap-type: y mandatory;
scroll-behavior: smooth;
overflow-y: auto;
scrollbar-width: none;
color: white;
background: url("./img/bg.jpg");
background-size: auto;
&::-webkit-scrollbar{
  display: none;
}
`


function App() {

  return (
    <Container>
      <Hero/>
      <Testimonials/>
      <Products/>
      <Contacts/>
    </Container>
    
  );
}


export default App
