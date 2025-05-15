import { BrowserRouter, Route, Routes } from "react-router-dom";
import Catalog from "./routes/ClientHome/Catalog";
import ProductDetails from "./routes/ProductDetails";
import ClientHome from "./routes/ClientHome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientHome />}>
          <Route index element={<Catalog></Catalog>}></Route>
          <Route path="catalog" element={<Catalog></Catalog>}></Route>
          <Route
            path="product-details/:productId"
            element={<ProductDetails></ProductDetails>}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
