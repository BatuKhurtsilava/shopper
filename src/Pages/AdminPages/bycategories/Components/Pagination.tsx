import React from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { useSearchParams } from "react-router-dom";
import { PRODS_QUANTITY_PAGE } from "../../../../utils/constants";
import styles from "./styles.module.css";

export default function Pagination({
  count,
}: {
  count: number | null | undefined;
}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  const pageCount = Math.ceil(count! / PRODS_QUANTITY_PAGE);
  const from = (page! - 1) * PRODS_QUANTITY_PAGE + 1;
  const to = from + PRODS_QUANTITY_PAGE;
  const nextPage = () => {
    const next = page === pageCount ? page : page + 1;
    searchParams.set("page", next.toString());
    setSearchParams(searchParams);
  };
  const prevPage = () => {
    const prev = page === 1 ? 1 : page - 1;
    searchParams.set("page", prev.toString());
    setSearchParams(searchParams);
  };
  return (
    <div className={styles.PaginationContainer}>
      <p>{`Showing ${from} to  ${
        page === pageCount ? count : to
      } from ${count} results `}</p>
      <button onClick={prevPage}>
        <HiChevronLeft /> <span>Previous</span>
      </button>
      <button onClick={nextPage}>
        <span>Next</span> <HiChevronRight />
      </button>
      <div></div>
    </div>
  );
}
