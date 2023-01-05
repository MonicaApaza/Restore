import { Container } from "@mui/material";
import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";

function App() {

  return (
    <>
      <Header />
      <Container>
        <Catalog/>
      </Container>
    </>
  );
}

export default App;
