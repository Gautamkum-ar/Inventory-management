import { useParams } from "react-router";
import { Layout } from "../../components/layout/Layout";
import "../details/Details.css";
import { useEnventory } from "../../context/context";

export const Details = () => {
  const { productId } = useParams();

  const { inventData } = useEnventory();

  const filterProduct = inventData.find(
    (elms) => elms.id.toString() === productId.toString()
  );

  return (
    <Layout
      children={
        <div className="details">
          <h1>{filterProduct?.name}</h1>
          <img src={filterProduct?.imageUrl} alt="" />
          <p>
            <b>Price:</b> Rs.{filterProduct?.price}
          </p>
          <p>
            <b>Stock:</b> {filterProduct?.stock}
          </p>
          <p>
            <b>Supplier:</b> {filterProduct?.supplier}
          </p>
          <p>
            <b>Department: </b>
            {filterProduct?.department}
          </p>
          <p>
            <b>SKU:</b> {filterProduct?.sku}
          </p>
          <p>
            <b>Delevered:</b> {filterProduct?.delevered}
          </p>
          <p>
            <b>Description:</b> {filterProduct?.description}
          </p>
        </div>
      }
    />
  );
};
