import { Button, DarkButton } from "./components/Buton.styled"
import Flex from "./components/Flex"
import Title from "./components/Title"

const App = () => {
  return (
    <>
      <Flex bg="#bebe">
        <Title renk="white" bgRenk="red">
          Styled Components
        </Title>
        <Button>Tikla</Button>
        <DarkButton>Send</DarkButton>
      </Flex>

      <Title renk = "purple">Flexbox</Title>
     
      <Title bgRenk = "green" renk= "white">Flexbox</Title>

      <Flex bg="tomato">
        <h1>PROPS</h1>
      </Flex>
    </>
  )
}

export default App
