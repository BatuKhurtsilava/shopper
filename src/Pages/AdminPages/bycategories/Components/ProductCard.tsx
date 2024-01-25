import React, { SetStateAction, useState, Dispatch } from "react";
import styles from "../styles.module.css";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useDelete } from "../../../../hooks/useDelete";
import CreateEditForm from "./CreateEditForm";

export interface IProduct {
  Product: string | "";
  Price: number;
  Warranty: string | "";
  Sale: number;
  Img1: string | "";
  Img2: string | "";
  Img3: string | "";
  Category: string | "";
  Id: string | "";
  Stock: number;
}

const ProductCard: React.FC<{
  product: IProduct;
}> = ({ product }) => {
  const { isDeleting, deleteProductMutation } = useDelete(
    product.Category,
    product.Id
  );
  const [formOpen, setFormOpen] = useState(false);
  return !formOpen ? (
    <div className={styles.ProductCard}>
      <img style={{ height: "40px", width: "40px" }} src={product.Img1} />
      <p style={{ height: "40px", overflow: "hidden" }}>
        Product: {product.Product}{" "}
      </p>
      <p>Price: {product.Price} </p>
      <p>Warranty: {product.Warranty} </p>
      <p>Sale: {product.Sale} </p>
      <button
        onClick={() =>
          deleteProductMutation({
            Category: product.Category,
            Id: product.Id,
          })
        }
      >
        <AiFillDelete />
      </button>
      <button
        onClick={() => {
          setFormOpen!((prev) => !prev);
        }}
        className={`${styles.editButton} ${
          formOpen ? styles.editButtonActive : ""
        }`}
      >
        <AiFillEdit />
      </button>
    </div>
  ) : (
    <div>
      <CreateEditForm
        formOpen={formOpen}
        setFormOpen={setFormOpen}
        product={product}
      />
    </div>
  );
};

export default ProductCard;
