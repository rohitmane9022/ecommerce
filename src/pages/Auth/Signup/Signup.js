import { useEffect, useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { useData } from "../../../contexts/DataContext";
import "../Signup/Signup.css";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";

export function Signup() {
  const {
    authState: { email, password, firstName, lastName },
    authDispatch,
    signupValidation,
  } = useAuth();
  const [showPassword, setShowPassword] = useState(false);


  const location = useLocation();

  const handleSignup = () => {
    authDispatch({
      type: "SET_LOCATION",
      payload: location?.state?.from?.pathname,
    });
    signupValidation();
  };

  return (
    <div className="signup__card__container">
      <div className="signup__card">
        <h2>Signup</h2>

        <label>
          <p>First name</p>
          <input
            type="text"
            value={firstName}
            placeholder="First name"
            className="input"
            onChange={(e) =>
              authDispatch({ type: "SET_FIRSTNAME", payload: e.target.value })
            }
          />
        </label>

        <label>
          <p>Last name</p>
          <input
            type="text"
            value={lastName}
            placeholder="Last name"
            className="input"
            onChange={(e) =>
              authDispatch({ type: "SET_LASTNAME", payload: e.target.value })
            }
          />
        </label>

        <label>
          <p>Email address</p>
          <input
            type="email"
            value={email}
            placeholder="example@domain.com"
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
              placeholder="**************"
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

        <button onClick={handleSignup}>Create New Account</button>

        <Link to="/login">Already have an account ▶</Link>
      </div>
    </div>
  );
}
