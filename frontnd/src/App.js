import { Heading } from "@chakra-ui/react";
import "./App.css";
import AddProdcut from "./Components/AddProdcut";
import ProductList from "./Components/ProductList";

function App() {
  return (
    <div className="App">
      <Heading color="teal.600"> CRUD APPLICATION </Heading>
      <AddProdcut />
      <ProductList />
    </div>
  );
}

export default App;
