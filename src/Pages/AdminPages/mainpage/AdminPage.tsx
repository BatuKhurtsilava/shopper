import React, { useEffect, useState } from "react";
import { useAuthorizationContext } from "../../../AuthorizationContext";
import { Link } from "react-router-dom";
import AdminNavigation from "../../../Components/Navigation/AdminNavigation";
import styles from "./styles.module.css"

const AdminPage: React.FC = () => {
  const API_KEY = "tkhyLoZW3FeAwnacIx7zbmTlvnPeg2vOarQ32hl0CLECnAYdUA";
  const categories = [
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
  ];
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState<boolean>();
  const [error, setError] = useState<boolean>();
  const [serverData, setServerData] = useState([]);
  const { loggedin } = useAuthorizationContext();

  const getProductsFromServer = async () => {
    setLoading(true);
    fetch("/api/v1/products", {
      method: "GET",
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
        console.log(data);
        setServerData(data);
      })

      .catch((err) => {
        console.error(err);
        setError(error);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getProductsFromServer();
  }, []);

  console.log(serverData);

  return (
    <div>
      {error && <p>{error}</p>}
      {loading && <p>{loading}</p>}
      {loggedin && (
        <div className={styles.Container}>
          {categories.map((category) => (
            <div>
              <Link className={styles.Link} to={`/admin/category/${category}`}>
                {category}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminPage;

//   const getProducts = async () => {
//     try {
//       fetch('https://dummyjson.com/products/categories')
// .then(res => res.json())
// .then(data => setData(data))

//     } catch (error) {
//       console.log(error)
//     }
//   }

// const postProductsToServer = async () => {

//   fetch('/api/v1/products', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${API_KEY}`,
//     },
//     body: JSON.stringify(data),
//   })
//     .then((res) => {
//       if (!res.ok) throw new Error('failed to create response');
//       console.log(res);
//       return res.json();
//     })
//     .catch((err) => console.log(err));

// }

// useEffect (() => {
//  getProducts();

// }, [])

// useEffect (() => {
//   if(data.length > 0){
//     postProductsToServer();
//    }
// }, [data])
