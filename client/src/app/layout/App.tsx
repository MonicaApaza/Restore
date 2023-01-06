import { Container, createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import react from "react";
import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";

function App() {
  let [darkMode, setDarkMode] = react.useState(false);
  const palettType = darkMode ? 'dark' : 'light';

  const theme = createTheme({
    palette: {
      mode: palettType,
      background: {
        default: palettType === 'light' ? '#eaeaea' : '#121212'
      }
    }
  })


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Header darkTheme={darkMode} changeTheme={() => setDarkMode(!darkMode)} />
        <Container>
          <Catalog />
        </Container>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
