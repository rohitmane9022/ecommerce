export const initialState = {
  cart: [],
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "SET_CART":
      return { ...state, cart: action.payload };
    case "ADD_TO_CART": {
      const newCart = [...action.payload];

      return { ...state, cart: newCart };
    }
    case "REMOVE_FROM_CART": {
      let newCart = [...action.payload];

      return { ...state, cart: newCart };
    }
    case "INCREASE_ITEM": {
      let newCart = [...action.payload];

      return { ...state, cart: newCart };
    }
    case "DECREASE_ITEM": {
      let newCart = [...action.payload];

      return { ...state, cart: newCart };
    }
    case "CLEAR_CART":
      return { ...state, cart: action.payload };

    default:
      return { ...state };
  }
};
