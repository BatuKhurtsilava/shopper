import supabase from "../services/supabase";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { PRODS_QUANTITY_PAGE } from "../utils/constants";
import { useQueryClient } from "@tanstack/react-query";

interface FilterObject {
  filterByPrice: string | null;
  filterByStock: string | null;
  filterByBrand: string | null;
  filterBySale: string | null;
}

async function getCategoryData(
  category: string,
  filterParamObject?: FilterObject,
  page?: number | null
) {
  const priceRange = filterParamObject?.filterByPrice?.split("-");
  const stockRange = filterParamObject?.filterByStock?.split("-");

  let query: any = supabase.from(category).select("*", { count: "exact" });

  if (
    filterParamObject!.filterByBrand !== null &&
    filterParamObject!.filterByBrand !== "All"
  )
    query = query.eq("Brand", filterParamObject!.filterByBrand);
  if (
    filterParamObject!.filterByPrice !== null &&
    filterParamObject!.filterByPrice !== "All"
  )
    query = query.gte("Price", priceRange![0]).lte("Price", priceRange![1]);
  if (
    filterParamObject!.filterByStock !== null &&
    filterParamObject!.filterByStock !== "All"
  )
    query = query.gte("Stock", stockRange![0]).lte("Stock", stockRange![1]);
  if (filterParamObject!.filterBySale === "Without Discount")
    query = query.is("Sale", null);
  if (filterParamObject!.filterBySale === "With Discount")
    query = query.neq("Sale", null);
  if (page) {
    const from = (page! - 1) * PRODS_QUANTITY_PAGE;
    const to = from + PRODS_QUANTITY_PAGE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;
  if (error) {
    console.log(error);
    throw new Error(`Could not load ${category}  data`);
  }

  console.log(data);

  return { data, count };
}

export const useGetData = (category: string) => {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  const filterParamObject = {
    filterByBrand: searchParams.get("Brand"),
    filterByPrice: searchParams.get("Price"),
    filterBySale: searchParams.get("Sale"),
    filterByStock: searchParams.get("Stock"),
  };

  const {
    isLoading,
    data: { data: products, count } = {},
    error,
  } = useQuery({
    queryKey: [
      category,
      page,
      filterParamObject.filterByBrand,
      filterParamObject.filterByPrice,
      filterParamObject.filterBySale,
      filterParamObject.filterByStock,
    ],
    queryFn: () => getCategoryData(category, filterParamObject, page),
  });

  const pageCount = Math.ceil(count! / PRODS_QUANTITY_PAGE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: [
        category,
        page,
        filterParamObject.filterByBrand,
        filterParamObject.filterByPrice,
        filterParamObject.filterBySale,
        filterParamObject.filterByStock,
      ],
      queryFn: () => getCategoryData(category, filterParamObject, page + 1),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: [
        category,
        page,
        filterParamObject.filterByBrand,
        filterParamObject.filterByPrice,
        filterParamObject.filterBySale,
        filterParamObject.filterByStock,
      ],
      queryFn: () => getCategoryData(category, filterParamObject, page - 1),
    });
  return { isLoading, products, count, error };
};
