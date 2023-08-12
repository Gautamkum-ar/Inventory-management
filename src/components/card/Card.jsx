import { useNavigate } from "react-router";
import "../card/Card.css";
import { useEnventory } from "../../context/context";
export const Card = ({ count, name }) => {
  return (
    <div className="card">
      <h3>{count}</h3>
      <h3>{name}</h3>
    </div>
  );
};
export const DepartCard = ({ name }) => {
  const navigate = useNavigate();
  const { handleDepartment } = useEnventory();
  return (
    <div
      className="depart__card"
      onClick={() => {
        handleDepartment(name);
        navigate("/products");
      }}
    >
      <h3>{name}</h3>
    </div>
  );
};
