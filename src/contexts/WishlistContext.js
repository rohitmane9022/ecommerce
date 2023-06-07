import { createContext, useContext, useReducer, useState } from "react";
import { initialState, wishlistReducer } from "../reducers/WishlistReducer";
import { toast } from "react-toastify";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlistState, wishlistDispatch] = useReducer(
    wishlistReducer,
    initialState
  );
  const [isWishlistLoading, setIsWishlistLoading] = useState(false);
  const token = localStorage.getItem("token");

  const callWishlistDispatch = (actionType, payload) => {
    wishlistDispatch({
      type: actionType,
      payload: payload,
    });
  };

  const handleAddToWishlist = async (actionType, product) => {
    try {
      const response = await fetch("/api/user/wishlist", {
        method: "POST",
        headers: { authorization: token },
        body: JSON.stringify({ product }),
      });

      const { wishlist } = await response.json();

      const payload = wishlist;

      toast.success(`${product.productName} Added To Wishlist`);
      callWishlistDispatch(actionType, payload);
    } catch (e) {
      console.error(e);
    } finally {
      setIsWishlistLoading(false);
    }
  };

  const handleRemoveFromWishlist = async (actionType, product) => {
    try {
      const response = await fetch(`/api/user/wishlist/${product._id}`, {
        method: "DELETE",
        headers: { authorization: token },
      });

      const { wishlist } = await response.json();

      const payload = wishlist;

      toast.warn(`${product.productName} Removed From Wishlist`);
      callWishlistDispatch(actionType, payload);
    } catch (e) {
      console.error(e);
    } finally {
      setIsWishlistLoading(false);
    }
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist: wishlistState.wishlist,
        wishlistDispatch,
        handleAddToWishlist,
        handleRemoveFromWishlist,
        isWishlistLoading,
        setIsWishlistLoading,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export const useWishlist = () => useContext(WishlistContext);
