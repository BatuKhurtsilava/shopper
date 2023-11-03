import React, { useEffect, useRef, useState } from "react";
import { useAuthorizationContext } from "../../../AuthorizationContext";
import { useRequest } from "../../../hooks/useRequest";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
const AdminAddProduct: React.FC = () => {
  const { loggedin } = useAuthorizationContext();
  const navigate = useNavigate();
  const brandRef = useRef<HTMLInputElement | null>(null);
  const descriptionRef = useRef<HTMLTextAreaElement | null>(null);
  const discountPercentageRef = useRef<HTMLInputElement | null>(null);
  const priceRef = useRef<HTMLInputElement | null>(null);
  const stockRef = useRef<HTMLInputElement | null>(null);
  const categoryRef = useRef<HTMLInputElement | null>(null);
  const [images, setImages] = useState<string[]>([]);
  const [requestData, setRequestData] = useState();
  const [error, setError] = useState();
  const [message, setMessage] = useState<string>();
  const API_KEY = "tkhyLoZW3FeAwnacIx7zbmTlvnPeg2vOarQ32hl0CLECnAYdUA";
  const addProduct = async () => {
    const bodyObject = {
      images: images,
      category: categoryRef.current?.value,
      brand: brandRef.current?.value,
      description: descriptionRef.current?.value,
      discountPercentage: discountPercentageRef.current?.value,
      price: priceRef.current?.value,
      stock: stockRef.current?.value,
    };

    fetch(`/api/v1/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application.json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify([bodyObject]),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("failed to put response");
        }
        return res.json();
      })
      .then((res) => {
        setRequestData(res);
        setMessage("Product succesfully added");
      })
      .catch((error) => {
        setError(error);
        setMessage(error);
      })
      .finally(() => console.log(requestData));
  };

  const uploadImageLinks = (i: number, url: string) => {
    setImages((prev) => [
      ...(prev || []).slice(0, i),
      url,
      ...(prev || []).slice(i + 1),
    ]);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMessage("");
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [requestData]);

  return (
    <div className={styles.Container}>
      <input ref={brandRef} placeholder="Brand" type="string" required />
      <input ref={categoryRef} placeholder="Category" type="string" required />
      <textarea
        ref={descriptionRef}
        rows={4}
        cols={50}
        placeholder="Description"
      />
      <input
        ref={discountPercentageRef}
        placeholder="Discount Percentage"
        type="number"
        required
      />
      <input ref={priceRef} placeholder="Price" type="number" required />
      <input ref={stockRef} placeholder="Stock" type="number" required />
      <input
        placeholder="Image Link"
        type="string"
        onChange={(e) => uploadImageLinks(1, e.target.value)}
        required
      />
      <input
        placeholder="Image Link"
        type="string"
        onChange={(e) => uploadImageLinks(2, e.target.value)}
        required
      />
      <input
        placeholder="Image Link"
        type="string"
        onChange={(e) => uploadImageLinks(3, e.target.value)}
        required
      />
      <div className={styles.buttonDiv}>
      <button onClick={() => addProduct()}>Add new product</button>
      <button onClick={() => navigate(-1)}>back</button>
      </div>
      <p>{message}</p>
    </div>
  );
};

export default AdminAddProduct;
