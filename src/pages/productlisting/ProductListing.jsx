import { Link } from "react-router-dom";
import { Layout } from "../../components/layout/Layout";
import { useEnventory } from "../../context/context";

import "../productlisting/ProductListing.css";
import { useState } from "react";
import { Addnew } from "../../components/newitem/AddNew";

const selectItems = ["Kitchen", "Clothing", "Toys"];

export const ProductListing = () => {
  const [addNew, setAddNew] = useState(false);
  const { inventData, handleDepartment, handleLowStock, handleSort } =
    useEnventory();
  return (
    <Layout
      children={
        <div className="product__listing">
          {addNew && <Addnew setAddNew={setAddNew} />}
          <div className="head">
            <h1>Product</h1>

            <select onChange={(e) => handleDepartment(e.target.value)}>
              <option value="All">All Department</option>
              {selectItems.map((elms) => (
                <option value={elms}>{elms}</option>
              ))}
            </select>

            <label>
              <input type="checkbox" onChange={(e) => handleLowStock(e)} />
              Low Stock Items
            </label>
            <div className="sort">
              <select onChange={(e) => handleSort(e.target.value)}>
                <option value="All">All</option>
                <option value="name">Name</option>
                <option value="price">Price</option>
                <option value="stock">Stock</option>
              </select>
            </div>
            <button onClick={() => setAddNew(true)}>New</button>
          </div>
          <div className="product__main">
            <table>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Supplier</th>
              </tr>
              {inventData.map((item) => {
                const {
                  id,
                  name,
                  imageUrl,
                  description,
                  supplier,
                  price,
                  stock,
                } = item;
                return (
                  <tr className="tr">
                    <td>
                      <img src={imageUrl} alt={name} />
                    </td>
                    <td>
                      <Link to={`/details/${id}`}>{name}</Link>
                    </td>
                    <td>{description}</td>
                    <td>{price}</td>
                    <td>{stock}</td>
                    <td>{supplier}</td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      }
    />
  );
};
