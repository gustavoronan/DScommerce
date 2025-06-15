import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Catalog from "./routes/ClientHome/Catalog";
import ProductDetails from "./routes/ProductDetails";
import ClientHome from "./routes/ClientHome";
import Cart from "./routes/ClientHome/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientHome />}>
          <Route index element={<Catalog></Catalog>}></Route>
          <Route path="catalog" element={<Catalog></Catalog>}></Route>
          <Route path="cart" element={<Cart></Cart>}></Route>
          <Route
            path="product-details/:productId"
            element={<ProductDetails></ProductDetails>}
          ></Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
