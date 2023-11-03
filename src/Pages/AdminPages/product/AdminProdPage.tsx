import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthorizationContext } from "../../../AuthorizationContext";
import { useRequest } from "../../../hooks/useRequest";
import { responseType } from "../../../hooks/useRequest";
import AdminNavigation from "../../../Components/Navigation/AdminNavigation";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const AdminProdPage: React.FC = () => {
  const { _uuid } = useParams();
  const { loggedin } = useAuthorizationContext();
  const { sendRequest, response, fetchLoading } = useRequest(
    `/api/v1/products/${_uuid}`,
    "GET"
  );
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  const descriptionRef = useRef<HTMLTextAreaElement | null>(null);
  const discountPercentageRef = useRef<HTMLInputElement | null>(null);
  const priceRef = useRef<HTMLInputElement | null>(null);
  const stockRef = useRef<HTMLInputElement | null>(null);
  const API_KEY = "tkhyLoZW3FeAwnacIx7zbmTlvnPeg2vOarQ32hl0CLECnAYdUA";
  const [requestData, setRequestData] = useState();
  const [error, setError] = useState();
  const [images, setImages] = useState<string[] | []>([]);

  useEffect(() => {
    sendRequest();
  }, [_uuid]);

  useEffect(() => {
    if (images && response && "images" in response!) {
      response?.images.map((img, i) => {
        setImages((prev) => [...prev.slice(0, i), img, ...prev.slice(i + 1)]);
      });
    }
  }, [response]);

  const handleImageChange = (i: number, url: string) => {
    if (url)
      setImages((prev) => [...prev.slice(0, i), url, ...prev.slice(i + 1)]);
  };

  const applyEdit = async () => {
    if (response && "images" in response) {
      images.map((img, i) => {
        if (!img && response?.images)
          setImages((prev) => [
            ...prev.slice(0, i),
            response.images[i],
            ...prev.slice(i + 1),
          ]);
        console.log(img);
      });

      const requestData = {
        images: images,
        description: descriptionRef.current?.value,
        discountPercentage: discountPercentageRef.current?.value,
        price: priceRef.current?.value,
        stock: stockRef.current?.value,
      };
      fetch(`/api/v1/products/${_uuid}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application.json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify(requestData),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("failed to get response");
          }
          return res.json();
        })
        .then((res) => setRequestData(res))
        .catch((error) => setError(error));
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}
      {fetchLoading && <p>loading...</p>}
      {loggedin && response && "description" in response && (
        <div className={styles.MainContainer}>
          <div className={styles.InputContainer}>
            <p>Discount Percentage</p>
            <input
              ref={discountPercentageRef}
              type="number"
              defaultValue={response?.discountPercentage}
            />
            <p>Price</p>
            <input
              ref={priceRef}
              type="number"
              defaultValue={response?.price}
            />
            <p>Stock</p>
            <input
              ref={stockRef}
              type="number"
              defaultValue={response?.stock}
            />
            <p>Description</p>
            <textarea
              ref={descriptionRef}
              defaultValue={response?.description}
            />
          </div>
          {images.map((image, i) => (
            <div className={styles.ImageContainer}>
              {images[i] && (
                <div>
                  <svg
                    width="100"
                    height="100"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <image xlinkHref={images[i]} width="100" height="100" />
                  </svg>
                  <input
                    type="string"
                    onChange={(e) => handleImageChange(i, e.target.value)}
                    placeholder="insert new image link"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      <button onClick={applyEdit}>Apply changes</button>
      {response && "category" in response && (
        <Link
          className={styles.Link}
          to={`/admin/category/${response.category}`}
        >
          back
        </Link>
      )}
    </div>
  );
};

export default AdminProdPage;
