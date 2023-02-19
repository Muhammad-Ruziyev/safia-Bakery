import React, { useState } from "react";
import "./Register.scss";
import { useNavigate, Link } from "react-router-dom";
import { loginPerson, authState } from "../../Redux/Features/authSlice";
import { useDispatch, useSelector } from "react-redux";
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  console.log(login);
  const auth = useSelector(authState);
  console.log(auth);
  if (auth === "success") {
    navigate("/");
  }

  return (
    <div className="contact">
      <div className="center">
        <h1>Sign In</h1>
        <Link to="/register">
          <button className="register">Create new acc</button>
        </Link>
        <p>-or sign in with your email-</p>
        <input
          onChange={(e) => setLogin({ ...login, email: e.target.value })}
          type="email"
          placeholder="Email-addres:"
        ></input>
        <h3>
          {auth === "rejected" ? "Your email or password are incorrect ;)" : ""}
        </h3>
        <input
          onChange={(e) => setLogin({ ...login, password: e.target.value })}
          type="password"
          placeholder="password"
        />
        <button
          onClick={() => dispatch(loginPerson(login))}
          className="sign-btn"
        >
          Sign in
        </button>
      </div>
    </div>
  );
}

export default Login;
