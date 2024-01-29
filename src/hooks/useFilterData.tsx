import supabase from "../services/supabase";
import { useState } from "react";
import { useEffect, useCallback } from "react";

export default function useFilterData(category: string) {
  const [dataForFilter, setDataForFilter] = useState<null | {
    Brands: string[];
    Prices: (string | number)[];
    Stocks: (string | number)[];
    Sales: (string | number)[];
  }>({ Brands: [], Prices: [], Stocks: [], Sales: [] });

  function getUniqueValues<T>(data: { [key: string]: T }[], key: string): T[] {
    const arrayForKey = data.map((item) => item[key]);
    return Array.from(new Set(arrayForKey));
  }

  const getDataForFilter = useCallback(async () => {
    const { data: brands } = await supabase.from(category).select("Brand");
    const { data: prices } = await supabase.from(category).select("Price");
    const { data: stocks } = await supabase.from(category).select("Stock");
    const { data: sales } = await supabase.from(category).select("Sale");
    if (brands && prices && stocks && sales) {
      const uniqueBrands = getUniqueValues(brands, "Brand");
      const uniquePrices = getUniqueValues(prices, "Price");
      const uniqueStocks = getUniqueValues(stocks, "Stock");
      const uniqueSales = getUniqueValues(sales, "Sale");

      setDataForFilter((prev) => ({
        ...prev,
        Brands: ["All", ...uniqueBrands],
        Prices: ["All", ...uniquePrices],
        Stocks: ["All", ...uniqueStocks],
        Sales: ["All", ...uniqueSales],
      }));
    }
  }, [category]);

  useEffect(() => {
    getDataForFilter();
  }, [dataForFilter, getDataForFilter]);

  return { dataForFilter };
}
