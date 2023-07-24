import { Container } from "react-bootstrap";
import Header from "./components/Header";
import { GlobalStyles } from "./components/styled/GlobalStyles";
import Nav from "./components/Nav";


const App = () => {
  return (

    <>
      <GlobalStyles/>
      <Container>
      <Nav/>
      <Header/>

      </Container>
      

    </>
  );
};

export default App;
