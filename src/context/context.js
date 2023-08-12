import { useContext, useState } from "react";
import { createContext } from "react";
import { useSearchParams } from "react-router-dom";
import { inventoryData } from "../database/inventoryData";

const EnventoryContext = createContext();

export const ContextProvider = ({ children }) => {
  const [inventData, setInventoryData] = useState(inventoryData);

  const totalStock = inventData.reduce((acc, curr) => acc + curr.stock, 0);

  const totalDelivered = inventData.reduce(
    (acc, curr) => acc + curr.delivered,
    0
  );

  const lowStock = inventData.filter((stock) => stock.stock <= 10);

  const handleDepartment = (value) => {
    if (value === "All") {
      setInventoryData(inventoryData);
    } else {
      setInventoryData(
        inventoryData.filter((elms) => elms.department === value)
      );
    }
  };

  const handleLowStock = (e) => {
    if (e.target.checked) {
      setInventoryData(inventData.filter((elms) => elms.stock <= 10));
    } else {
      setInventoryData(inventoryData);
    }
  };

  //   const handleFilter=()=>{
  //     const data=[...inventoryData]

  //   }

  const handleSort = (value) => {
    let sorted = [];
    if (value === "All") {
      setInventoryData(inventoryData);
    } else if (value === "name") {
      sorted = [...inventData].sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
    } else if (value === "price") {
      sorted = [...inventData].sort((a, b) => a.price - b.price);
    } else if (value === "stock") {
      sorted = [...inventData].sort((a, b) => a.stock - b.stock);
    }
    setInventoryData(sorted);
  };

  const handleNewProduct = (data) => {
    setInventoryData([...inventoryData, { ...data, id: 1 }]);
  };
  return (
    <EnventoryContext.Provider
      value={{
        inventData,
        totalDelivered,
        totalStock,
        lowStock,
        handleDepartment,
        handleLowStock,
        handleSort,
        handleNewProduct,
      }}
    >
      {children}
    </EnventoryContext.Provider>
  );
};

export const useEnventory = () => useContext(EnventoryContext);
