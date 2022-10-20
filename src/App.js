import { Route, Routes } from "react-router-dom";
import { formInput } from "./common/formInput";
import { appUseSelector } from "./common/Hooks";
import { productInput } from "./common/productInput";
import Navbar from "./Componets/Navbar/Navbar";
import Sidebar from "./Componets/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import New from "./pages/new/New";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import ProductList from "./pages/product-list/ProductList";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Singleuser from "./pages/SingleUser/Singleuser";
import UserList from "./pages/UserList/UserList";
import { getDarkMode } from "./redux/rootreducer";
import "react-confirm-alert/src/react-confirm-alert.css";
function App() {
  const dark = appUseSelector(getDarkMode);
  return (
    <div className={dark ? "App dark" : "App"}>
      <Sidebar />
      <div className="router">
        <Navbar />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />}></Route>
            <Route path="users">
              <Route index element={<UserList />} />
              <Route
                path="new-user"
                element={
                  <New input={formInput} title="Add New Use" type="user" />
                }
              />
              <Route path=":userID" element={<Singleuser />} />
            </Route>
            <Route path="products">
              <Route index element={<ProductList />} />
              <Route
                path="new-product"
                element={
                  <New
                    input={productInput}
                    title="Add New Product"
                    type="product"
                  />
                }
              />
              <Route path=":productID" element={<SingleProduct />} />
            </Route>
            <Route path="delivery">
              <Route index element={null} />
            </Route>
          </Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
