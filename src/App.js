import Navbar from "./component/navbar/Navbar";
import Sidebar from "./component/sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import InputForm from "./component/shared/inputForm/InputForm";
import { addProductData } from "./Data/dataTableSource";
import "./App.scss";
import AddUser from "./pages/addUser/AddUser";
import TableList from "./component/table/TableList";
import AllUser from "./pages/Alluser/AllUser";
import AddProduct from "./pages/addProduct/AddProduct";
import ProductStock from "./pages/productStock/ProductStock";
import Purchase from "./pages/purchase/Purchase";

function App() {
  return (
    <Router>
      <div>
        <Navbar></Navbar>
        <div className="home">
          <Sidebar></Sidebar>
          <div className="container">
            {/* <Dashboard></Dashboard> */}
            {/* <InputForm data={addProductData} /> */}
            {/* <TableList></TableList> */}
            <Routes>
              <Route path="/user">
                <Route path="/user/register" element={<AddUser />} />
                <Route path="/user/all" element={<AllUser />} />
              </Route>
              <Route path="/product">
                <Route path="/product/add" element={<AddProduct />} />
                <Route path="/product/stock" element={<ProductStock />} />
                <Route path="/product/purchase" element={<AllUser />} />
                <Route path="/product/detail" element={<AllUser />} />
              </Route>
              <Route path="/purchase">
                <Route path="/purchase" element={<Purchase />} />
              </Route>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
