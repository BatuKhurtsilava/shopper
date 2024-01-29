import React from "react";
import { useGetData } from "../../../hooks/useGetData";
import styles from "./styles.module.css";
import ProductCard from "./Components/ProductCard";
import Pagination from "./Components/Pagination";
import useFilterData from "../../../hooks/useFilterData";
import Filter from "./Components/Filter";
import Spinner from "./Components/Spinner";

const ProductPage: React.FC<{ category: string }> = ({ category }) => {
  const { isLoading, products, count } = useGetData(category);
  const { dataForFilter } = useFilterData(category);

  if (isLoading) console.log("wow");
  return isLoading ? (
    <Spinner />
  ) : (
    <div>
      <div style={{ display: "flex", flexDirection: "row", marginTop: "20px" }}>
        <Filter category="Brand" options={dataForFilter?.Brands} />
        <Filter
          category="Price"
          options={[
            "All",
            "0-1000",
            "1000-2000",
            "2000-3000",
            "3000-5000",
            "5000-10000",
            "10000-20000",
          ]}
        />
        <Filter
          category="Stock"
          options={["All", "0-50", "50-100", "100-200"]}
        />
        <Filter
          category="Sale"
          options={["All", "Without Discount", "With Discount"]}
        />
      </div>
      <div className={styles.CategoryComponent}>
        {products?.map((product: any) => (
          <ProductCard key={product.Id} product={product} />
        ))}
      </div>
      <Pagination count={count} />
    </div>
  );
};

export default ProductPage;
