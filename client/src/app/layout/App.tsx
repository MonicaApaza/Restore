import { Container, createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";

function App() {
  const [darkMode, setDarkMode]= useState(false);
  const palettType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette:{
      mode: palettType
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container>
        <Catalog/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
