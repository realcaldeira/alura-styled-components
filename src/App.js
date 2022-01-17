import React from "react";

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { GlobalStyled } from './Components/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyled />
      <Cabecalho />
      <Container />
    </>
  );
}

export default App;
