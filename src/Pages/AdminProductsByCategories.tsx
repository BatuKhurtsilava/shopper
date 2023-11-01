import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAuthorizationContext } from "../AuthorizationContext";
import { useRequest } from "../hooks/useRequest";
import { UseRequestResult } from "../hooks/useRequest";
import { dataType } from "../hooks/useRequest";
import { useNavigate } from "react-router-dom";

const AdminProductsByCategories: React.FC = () => {
  const [products, setProducts] = useState<dataType[] | null>(null);
  const API_KEY = "tkhyLoZW3FeAwnacIx7zbmTlvnPeg2vOarQ32hl0CLECnAYdUA";
  const { loggedin } = useAuthorizationContext();
  const { category } = useParams();
  const navigate = useNavigate();
  const { sendRequest, error, response, fetchLoading }: UseRequestResult =
    useRequest("/api/v1/products", "GET");

  const handleDelete = async (id: string) => {
    fetch(`/api/v1/products/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to get response");
        }
        return res.json();
      })
      .then((data) => {
        window.location.reload();
      })

      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    sendRequest();
  }, []);

  useEffect(() => {
    if (response && "items" in response) {
      const filteredProducts = response.items.filter(
        (item) => item.category === category
      );
      setProducts(filteredProducts.length > 0 ? filteredProducts : null);
    }
  }, [response, category]);

  return (
    <div>
      {error && <p>{error}</p>}
      {fetchLoading && <p>{fetchLoading}</p>}
      {loggedin &&
        products &&
        products.length > 0 &&
        products?.map((prod, i) => (
          <div key={i}>
            <p>{prod.brand}</p>
            <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
              <image xlinkHref={prod.images[0]} width="100" height="100" />
            </svg>
            <Link to={`/admin/product/${prod._uuid}`}>edit product info</Link>
            <button onClick={() => handleDelete(prod._uuid)}>
              Delete Product
            </button>
          </div>
        ))}
      <button onClick={() => navigate(-1)}>back</button>
    </div>
  );
};

export default AdminProductsByCategories;
