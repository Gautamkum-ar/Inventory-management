import { useState } from "react";
import "../newitem/AddNew.css";
import { useEnventory } from "../../context/context";

export const Addnew = ({ setAddNew }) => {
  const { handleNewProduct } = useEnventory();

  const [userData, setUserData] = useState({
    name: "",
    department: "",
    description: "",
    price: 0,
    stock: 0,
    sku: "",
    supplier: "",
    delevered: "",
    imageUrl: "",
  });
  return (
    <div className="add__new__item">
      <h1>Add New Product</h1>
      <button className="close" onClick={() => setAddNew(false)}>
        Dismis
      </button>
      <label>
        Department{" "}
        <select
          onChange={(e) =>
            setUserData({ ...userData, department: e.target.value })
          }
        >
          <option value="">Select Department</option>
          <option value="Kitchen">Kitchen</option>
          <option value="Clothing">Clothing</option>
          <option value="Toys">Toys</option>
        </select>
      </label>
      <label>
        Name{" "}
        <input
          type="text"
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
      </label>
      <label>
        Description{" "}
        <input
          type="text"
          onChange={(e) =>
            setUserData({ ...userData, description: e.target.value })
          }
        />
      </label>
      <label>
        Price{" "}
        <input
          type="text"
          onChange={(e) => setUserData({ ...userData, price: e.target.value })}
        />
      </label>
      <label>
        Stock{" "}
        <input
          type="text"
          onChange={(e) => setUserData({ ...userData, stock: e.target.value })}
        />
      </label>
      <label>
        SKU{" "}
        <input
          type="text"
          onChange={(e) => setUserData({ ...userData, sku: e.target.value })}
        />
      </label>
      <label>
        Supplier{" "}
        <input
          type="text"
          onChange={(e) =>
            setUserData({ ...userData, supplier: e.target.value })
          }
        />
      </label>
      <label>
        Delevered{" "}
        <input
          type="text"
          onChange={(e) =>
            setUserData({ ...userData, delevered: e.target.value })
          }
        />
      </label>
      <label>
        Image URl{" "}
        <input
          type="text"
          onChange={(e) =>
            setUserData({ ...userData, imageUrl: e.target.value })
          }
        />
      </label>
      <button
        onClick={() => {
          handleNewProduct(userData);
          setAddNew(false);
        }}
      >
        Add Product
      </button>
    </div>
  );
};
