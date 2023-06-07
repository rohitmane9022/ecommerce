export const initialState = {
  user: {},
  products: [],
  categories: [],
  searchValue: "",
  sortMethod: "",
  ratingValue: "",
  priceRange: "",
  selectedCategory: [],
  addresses: [],
  selectedAddress: null,
};

export const dataReducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
    case "SET_CATEGORIES":
      return { ...state, categories: action.payload };
    case "SET_USER_DATA":
      return { ...state, user: action.payload };
    case "SEARCH_VALUE":
      return { ...state, searchValue: action.payload };
    case "PRICE_RANGE":
      return { ...state, priceRange: action.payload };
    case "CATEGORIES": {
      let newCategory = [...state.selectedCategory];
      const selectedCategory = action.payload;

      const categoryFound = newCategory.find(
        (category) => category === selectedCategory
      );

      if (!categoryFound) {
        newCategory.push(selectedCategory);
      } else {
        newCategory = newCategory.filter(
          (category) => category !== selectedCategory
        );
      }

      return { ...state, selectedCategory: newCategory };
    }
    case "SET_SINGLE_CATEGORY": {
      const selectedCategory = action.payload;
      const newCategory = [selectedCategory];

      return { ...state, selectedCategory: newCategory };
    }
    case "RATING":
      return { ...state, ratingValue: action.payload };
    case "SORT_BY_PRICE":
      return { ...state, sortMethod: action.payload };
    case "CLEAR_FILTERS":
      return {
        ...state,
        searchValue: "",
        sortMethod: "",
        selectedCategory: [],
        ratingValue: "",
        priceRange: "",
      };
    case "SET_DEFAULT_ADDRESS":
      return { ...state, addresses: [action.payload] };
    case "ADD_ADDRESS":
      return { ...state, addresses: [...state.addresses, action.payload] };
    case "DELETE_ADDRESS": {
      const deletedAddress = action.payload;

      const newAddresses = state.addresses.filter(
        ({ id }) => id !== deletedAddress.id
      );

      return { ...state, addresses: newAddresses };
    }
    case "UPDATE_ADDRESS": {
      const updatedAddress = action.payload;

      const newAddresses = state.addresses.map((address) => {
        if (address.id === updatedAddress.id) {
          address = { ...updatedAddress };
        }
        return address;
      });

      return { ...state, addresses: newAddresses };
    }
    case "SET_SELECTED_ADDRESS":
      return { ...state, selectedAddress: action.payload };
    default:
      return { ...state };
  }
};
