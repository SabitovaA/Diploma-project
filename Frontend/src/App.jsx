import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import Home from "./pages/homePage/Home";
import ProductPage from "./pages/productPage/ProductPage";
import CategoriesPage from "./pages/categoriesPage/CategoriesPage";
import AllProductsPage from "./pages/allProductsPage/AllProductsPage";
import AllSalesPage from "./pages/allSalesPage/AllSalesPage";
import FavoritePage from "./pages/favoritePage/FavoritePage";
import CartPage from "./pages/cartPage/CartPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="productPage" element={<ProductPage />} />
        <Route path="categories" element={<CategoriesPage />} />
        <Route path="allProducts" element={<AllProductsPage />} />
        <Route path="allSales" element={<AllSalesPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="favorite" element={<FavoritePage />} />
      </Route>
    </Routes>
  );
}

export default App;
