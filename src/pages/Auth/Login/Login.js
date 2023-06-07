import { useEffect, useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { useData } from "../../../contexts/DataContext";
import "../Login/Login.css";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";

export function Login() {
  const {
    authState: { email, password },
    authDispatch,
    loginValidation,
  } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const location = useLocation();

  const handleLogin = () => {
    authDispatch({
      type: "SET_LOCATION",
      payload: location?.state?.from?.pathname,
    });
    loginValidation();
  };

  const handleGuestLogin = () => {
    authDispatch({ type: "SET_EMAIL", payload: "rohitmane8356@gmail.com" });
    authDispatch({ type: "SET_PASSWORD", payload: "rohitmane" });
  };

  return (
    <div className="login__card__container">
      <div className="login__card">
        <h2>Login</h2>

        <label>
          <p>Email address</p>
          <input
            type="email"
            value={email}
            placeholder="xyz@gmail.com"
            className="input"
            onChange={(e) =>
              authDispatch({ type: "SET_EMAIL", payload: e.target.value })
            }
          />
        </label>

        <label>
          <p>Password</p>
          <div className="input__container">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              placeholder="********"
              className="input"
              onChange={(e) =>
                authDispatch({ type: "SET_PASSWORD", payload: e.target.value })
              }
            />
            {showPassword ? (
              <Icon
                className="show__pswd__icon"
                icon="mdi:eye"
                color="#333"
                height={20}
                onClick={() => setShowPassword((prev) => !prev)}
              />
            ) : (
              <Icon
                className="show__pswd__icon"
                icon="mdi:eye-off"
                color="#333"
                height={20}
                onClick={() => setShowPassword((prev) => !prev)}
              />
            )}
          </div>
        </label>

        <button onClick={handleLogin}>Login</button>

        <p onClick={handleGuestLogin}>Set Test Credentials</p>

        <Link to="/signup">Create New Account ▶</Link>
      </div>
    </div>
  );
}
