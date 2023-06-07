import {
  createContext,
  useContext,
  useEffect,
  useState,
  useReducer,
} from "react";
import { initialState, dataReducer } from "../reducers/DataReducer";

const DataContext = createContext();

export function DataProvider({ children }) {
  const [dataState, dataDispatch] = useReducer(dataReducer, initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [isBtnLoading, setIsBtnLoading] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/categories");
      const { categories } = await response.json();

      if (response.status === 200) {
        dataDispatch({
          type: "SET_CATEGORIES",
          payload: categories,
        });
      }

      const productResponse = await fetch("/api/products");
      const { products } = await productResponse.json();

      if (productResponse.status === 200) {
        dataDispatch({
          type: "SET_PRODUCTS",
          payload: products,
        });
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, []);

  const applyFilters = (products) => {
    let filteredData = [...products];
    const searchValue = dataState.searchValue.trim().toLowerCase();
    const selectedCategory = dataState.selectedCategory;
    const sortMethod = dataState.sortMethod;
    const ratingValue = dataState.ratingValue;
    const priceRange = dataState.priceRange;

    if (searchValue.length > 0) {
      filteredData = filteredData.filter(({ productName }) =>
        productName.toLowerCase().includes(searchValue)
      );
    }

    if (priceRange) {
      filteredData = filteredData.filter(
        ({ price }) => price >= Number(priceRange)
      );
    }

    if (selectedCategory.length > 0) {
      const selectedCategory = dataState.selectedCategory;

      filteredData = filteredData.filter(({ gender }) =>
        selectedCategory.includes(gender)
      );
    }

    if (ratingValue) {
      filteredData = filteredData.filter(({ rating }) => rating >= ratingValue);
    }

    if (sortMethod) {
      sortMethod === "ascending"
        ? filteredData.sort((a, b) => a.price - b.price)
        : filteredData.sort((a, b) => b.price - a.price);
    }

    return filteredData;
  };

  const filteredProducts = applyFilters(dataState.products);

  return (
    <DataContext.Provider
      value={{
        products: dataState.products,
        categories: dataState.categories,
        user: dataState.user,
        addresses: dataState.addresses,
        searchValue: dataState.searchValue,
        price: dataState.priceRange,
        selectedCategory: dataState.selectedCategory,
        ratingValue: dataState.ratingValue,
        sortMethod: dataState.sortMethod,
        selectedAddress: dataState.selectedAddress,
        filteredProducts,
        dataDispatch,
        dataState,
        isLoading,
        setIsLoading,
        isBtnLoading,
        setIsBtnLoading,
        
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => useContext(DataContext);
