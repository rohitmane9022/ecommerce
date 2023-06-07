import {
  createContext,
  useContext,
  useState,
  useReducer,
  useEffect,
} from "react";
import { authInitialState, authReducer } from "../reducers/AuthReducer";
import { useData } from "./DataContext";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useCart } from "./CartContext";
import { useWishlist } from "./WishlistContext";

const AuthContext = createContext();
let method = "";

const defaultAddress = {
  id: 1,
  name: "Rohit Mane",
  houseNo: "Tardeo Tulsiwadi New Approach Road Room no 38",
  city: "Mumbai",
  state: "Maharashtra",
  country: "India",
  zip: "400034",
  phoneNo: "8356869325",
};

export function AuthProvider({ children }) {
  const [authState, authDispatch] = useReducer(authReducer, authInitialState);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const { dataDispatch, setIsLoading } = useData();
  const { cartDispatch } = useCart();
  const { wishlistDispatch } = useWishlist();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");

  useEffect(() => {
    if (token) {
      setLoggedIn(true);
      dataDispatch({ type: "SET_USER_DATA", payload: JSON.parse(user) });
      dataDispatch({ type: "SET_DEFAULT_ADDRESS", payload: defaultAddress });
      dataDispatch({ type: "SET_SELECTED_ADDRESS", payload: defaultAddress });
    }
  }, []);

  useEffect(() => {
    if (userDetails) {
      method === "login" ? performLogin() : performSignup();
      setIsLoading(true);
    }
  }, [userDetails]);

  const requestOptions = {
    method: "POST",
    body: JSON.stringify(userDetails),
  };

  const performLogin = async () => {
    try {
      const response = await fetch("/api/auth/login", requestOptions);

      const data = await response.json();

      if (response.status === 200) {
        toast.success("Login Successful");
        setLoggedIn(true);
        localStorage.setItem("token", data.encodedToken);
        localStorage.setItem("user", JSON.stringify(data.foundUser));
        dataDispatch({ type: "SET_USER_DATA", payload: data.foundUser });
        cartDispatch({ type: "SET_CART", payload: data.foundUser.cart });
        wishlistDispatch({
          type: "SET_WISHLIST",
          payload: data.foundUser.wishlist,
        });
        dataDispatch({ type: "SET_DEFAULT_ADDRESS", payload: defaultAddress });
        dataDispatch({ type: "SET_SELECTED_ADDRESS", payload: defaultAddress });
        navigate(authState.location);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const performSignup = async () => {
    try {
      const response = await fetch("/api/auth/signup", requestOptions);

      const data = await response.json();

      if (response.status === 201) {
        toast.success("Signup Successful");
        setLoggedIn(true);
        localStorage.setItem("token", data.encodedToken);
        localStorage.setItem("user", JSON.stringify(data.createdUser));
        dataDispatch({ type: "SET_USER_DATA", payload: data.createdUser });
        navigate(authState.location);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const loginValidation = () => {
    if (
      authState.email.trim().length <= 0 &&
      authState.password.trim().length <= 0
    ) {
      return toast.error("Email & Password cannot be empty");
    } else if (authState.email.trim().length <= 0) {
      return toast.error("Email cannot be empty");
    } else if (authState.password.trim().length <= 0) {
      return toast.error("Password cannot be empty");
    }

    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;

    if (!regex.test(authState.email)) {
      return toast.error("Invalid email, please enter a valid email address");
    }

    method = "login";
    setUserDetails({ email: authState.email, password: authState.password });
  };

  const signupValidation = () => {
    if (
      authState.email.trim().length <= 0 ||
      authState.password.trim().length <= 0 ||
      authState.firstName.trim().length <= 0 ||
      authState.lastName.trim().length <= 0
    ) {
      return toast.error("Email & Password cannot be empty");
    }

    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;

    if (!regex.test(authState.email)) {
      return toast.error("Invalid email, please enter a valid email address");
    }

    method = "signup";
    setUserDetails({
      email: authState.email,
      password: authState.password,
      firstName: authState.firstName,
      lastName: authState.lastName,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        authDispatch,
        setUserDetails,
        loggedIn,
        setLoggedIn,
        loginValidation,
        signupValidation,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
