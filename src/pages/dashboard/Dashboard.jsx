import { Card } from "../../components/card/Card";
import { Layout } from "../../components/layout/Layout";
import { useEnventory } from "../../context/context";

import "../dashboard/Dashboard.css";

export const DashBoard = () => {
  const { inventData, totalDelivered, totalStock, lowStock } = useEnventory();
  return (
    <Layout
      children={
        <div className="dashboard">
          <div className="dashboard__main">
            <Card count={totalStock} name={"Total Stock"} />
            <Card count={totalDelivered} name={"Total Delevered"} />
            <Card count={lowStock.length} name={"Low Stock"} />
          </div>
        </div>
      }
    />
  );
};
