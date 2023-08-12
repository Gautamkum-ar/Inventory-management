import { Card, DepartCard } from "../../components/card/Card";
import { Layout } from "../../components/layout/Layout";

import "../department/Department.css";

export const Departments = () => {
  const department = [
    {
      id: 1,
      name: "Kitchen",
      route: "/kitchen",
    },
    {
      id: 2,
      name: "Clothing",
      route: "/clothings",
    },
    {
      id: 3,
      name: "Toys",
      route: "/toys",
    },
  ];
  return (
    <Layout
      children={
        <div className="departments">
          <div className="department__main">
            {department.map((dep) => (
              <DepartCard key={dep.id} name={dep.name} />
            ))}
          </div>
        </div>
      }
    />
  );
};
