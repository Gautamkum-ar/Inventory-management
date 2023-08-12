import { Route, Routes } from "react-router";
import "./App.css";
import { DashBoard } from "./pages/dashboard/Dashboard";
import { Departments } from "./pages/department/Department";
import { ProductListing } from "./pages/productlisting/ProductListing";
import { Details } from "./pages/details/Details";

function App() {
  return (
    <div className="App">
      <nav>
        <h1 className="logo">Inventory Management App</h1>
      </nav>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/details/:productId" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
