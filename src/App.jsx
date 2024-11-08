import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";

const H1 = styled.h1`
  font-size: 30px;

  font-weight: 600;
`;

const StyledApp = styled.main`
  background-color: orangered;
  padding: 20pxS;
`;

export default function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>The Wild Oasis </H1>
        <Button>Check In </Button>
        <Button>Check Out</Button>
        <Input type="number" placeholder="Number of Guests"></Input>
        <Input type="number" placeholder="Number of Guests"></Input>
      </StyledApp>
    </>
  );
}
