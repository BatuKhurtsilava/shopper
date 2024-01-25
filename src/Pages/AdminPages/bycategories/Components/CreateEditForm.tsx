import React, { Dispatch, SetStateAction, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useCreate } from "../../../../hooks/useCreate";
import { useEdit } from "../../../../hooks/useEdit";
import { IProduct } from "./ProductCard";
import styles from "./styles.module.css";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export const CreateEditForm: React.FC<{
  product?: IProduct;
  formOpen?: boolean;
  setFormOpen?: Dispatch<SetStateAction<boolean>>;
}> = ({
  product = {
    Category: "",
    Id: "",
    Product: "",
    Price: 0,
    Sale: 0,
    Stock: 0,
    Img1: "",
    Img2: "",
    Img3: "",
    Warranty: "",
  },
  setFormOpen,
  formOpen,
}) => {
  const { isEditing, createEditProductMutation: editProduct } = useEdit(
    product!.Category
  );
  const { isCreating, createEditProductMutation } = useCreate();
  const isWorking = isCreating || isEditing;
  const editId = product!.Id;
  const editValues = { ...product! };
  const isEditSession = Boolean(editId);
  const navigate = useNavigate();
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: editValues,
  });

  const { errors } = formState;

  const onSubmit = (data: IProduct) => {
    if (isEditSession)
      editProduct(
        { newProduct: data, Category: data.Category, Id: editId },
        {
          onSuccess: (data) => {
            reset();
            setFormOpen!((prev) => !prev);
          },
        }
      );
    else
      createEditProductMutation(
        { newProduct: data, Category: data.Category },
        {
          onSuccess: (data) => {
            reset();
          },
        }
      );

    // setBlured!((prev) => !prev);
  };

  const handleCloseForm = () => {
    if (!isEditSession) {
      navigate("/admin");
    } else {
      setFormOpen!((prev) => !prev);
    }
    // setBlured!((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const formElement = document.querySelector(`.${styles.centeredForm}`);
      if (formElement && !formElement.contains(event.target as Node)) {
        handleCloseForm();
      }
    };

    if (formOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [formOpen]);

  console.log(errors);

  return (
    <div className={styles.overlay}>
      <form className={styles.centeredForm} onSubmit={handleSubmit(onSubmit)}>
        <button onClick={handleCloseForm} className={styles.closeButton}>
          <IoCloseSharp />
        </button>
        <div>
          <label>Category:</label>
          <input
            type="text"
            disabled={isWorking}
            defaultValue={product?.Category}
            {...register("Category", {
              required: "This field is required",
              validate: (value) =>
                [
                  "Laptops",
                  "Tabs",
                  "Mobiles",
                  "Watches",
                  "SmartWatches",
                  "TVs",
                ].includes(value) || "Choose from existing categories",
            })}
          />
          <p className={styles.errorMessage}>{errors?.Category?.message}</p>
        </div>
        <div>
          <label>Id:</label>
          <input
            type="text"
            disabled={isWorking}
            defaultValue={product?.Product}
            {...register("Id", {
              required: "This field is required",
              minLength: {
                value: 5,
                message: "Minimum length is 5 characters",
              },
            })}
          />
        </div>
        <p className={styles.errorMessage}>{errors?.Id?.message}</p>
        <div>
          <label>Name:</label>
          <input
            type="text"
            disabled={isWorking}
            defaultValue={product?.Product}
            {...register("Product", {
              required: "This field is required",
              minLength: {
                value: 20,
                message: "Minimum length is 20 characters",
              },
            })}
          />
          <p className={styles.errorMessage}>{errors?.Product?.message}</p>
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            disabled={isWorking}
            defaultValue={product?.Price}
            {...register("Price", {
              required: "This field is required",
              validate: (value) =>
                value > 0 || "Price should be positive number",
            })}
          />
        </div>
        <div>
          <label>Sale:</label>
          <input
            type="number"
            disabled={isWorking}
            defaultValue={product?.Sale}
            {...register("Sale", {
              required: "This field is required",
              validate: (value) =>
                value <= getValues().Price || "Sale should be less than price",
            })}
          />
          <p className={styles.errorMessage}> {errors?.Sale?.message} </p>
        </div>
        <div>
          <label>Stock:</label>
          <input
            type="number"
            disabled={isWorking}
            defaultValue={product?.Stock}
            {...register("Stock", { required: "This field is required" })}
          />
          <p className={styles.errorMessage}> {errors?.Stock?.message} </p>
        </div>
        <div>
          <label>Warranty</label>
          <input
            type="string"
            disabled={isWorking}
            defaultValue={product?.Warranty}
            {...register("Warranty", { required: "This field is required" })}
          />
          <p className={styles.errorMessage}> {errors?.Warranty?.message} </p>
        </div>
        <div>
          <label>Image1 Link:</label>
          <input
            type="string"
            disabled={isWorking}
            defaultValue={product?.Img1}
            {...register("Img1", { required: "This field is required" })}
          />
          <p className={styles.errorMessage}> {errors?.Img1?.message} </p>
        </div>
        <div>
          <label>Image2 Link:</label>
          <input
            type="string"
            disabled={isWorking}
            defaultValue={product?.Img2}
            {...register("Img2", { required: "This field is required" })}
          />
          <p className={styles.errorMessage}> {errors?.Img2?.message} </p>
        </div>
        <div>
          <label>Image3 Link:</label>
          <input
            type="string"
            disabled={isWorking}
            defaultValue={product?.Img3}
            {...register("Img3", { required: "This field is required" })}
          />
          <p className={styles.errorMessage}> {errors?.Img3?.message} </p>
        </div>
        <button onClick={handleCloseForm}>Cancel</button>
        <button type="submit" disabled={isWorking}>
          {isEditSession ? "Edit product" : "Create new product"}
        </button>
      </form>
    </div>
  );
};

export default CreateEditForm;
