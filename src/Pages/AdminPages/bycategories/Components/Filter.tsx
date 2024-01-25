import React from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./styles.module.css";

interface FilterProps {
  category: string;
  options: string[] | number[] | undefined;
}

function Filter({ category, options }: FilterProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get(category) || undefined;

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    searchParams.set(category, e.target.value);
    setSearchParams(searchParams);
  };
  return (
    <div className={styles.FilterDiv}>
      <p>Filter by {category}</p>
      <select value={sortBy} onChange={handleSelectChange}>
        <option value={undefined} disabled>
          Select an option
        </option>
        {options?.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
