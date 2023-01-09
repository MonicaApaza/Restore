import { Container, createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import react from "react";
import { Route } from "react-router-dom";
import AboutPage from "../../features/about/AboutPage";
import Catalog from "../../features/catalog/Catalog";
import ProductDetails from "../../features/catalog/ProductDetails";
import ContactPage from "../../features/contact/ContactPage";
import HomePage from "../../features/home/HomePage";
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
          <Route exact path='/' component={HomePage} />
          <Route exact path='/catalog' component={Catalog} />
          <Route exact path='/catalog/:id' component={ProductDetails} />
          <Route exact path='/about' component={AboutPage} />
          <Route exact path='/contact' component={ContactPage} />
        </Container>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
