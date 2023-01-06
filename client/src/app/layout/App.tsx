import { Container, createTheme, ThemeProvider } from "@mui/material";
import react from "react";
import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";

function App() {
  let [darkMode, setDarkMode] = react.useState(false);
  const palettType = darkMode ? 'dark' : 'light';

  const theme = createTheme({
    palette: {
      mode: palettType
    }
  })


  return (
    <ThemeProvider theme={theme}>
      <Header darkTheme={darkMode} changeTheme={() => setDarkMode(!darkMode)} />
      <Container>
        <Catalog />
      </Container>
    </ThemeProvider>
  );
}

export default App;
