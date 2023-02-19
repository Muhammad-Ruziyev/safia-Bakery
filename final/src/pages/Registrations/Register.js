import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerPerson, authState } from "../../Redux/Features/authSlice";
import { useDispatch, useSelector } from "react-redux";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [register, setRegister] = useState({
    name: "",
    email: "",
    birth: "",
    password: "",
  });
  const auth = useSelector(authState);
  console.log(auth);
  if (auth === "success") {
    navigate("/");
  }
  return (
    <div className="contact">
      <div className="center">
        <h1>Register</h1>
        <button className="register">Sign In</button>
        <p>-or sign in with your email-</p>
        <input
          onChange={(e) => setRegister({ ...register, email: e.target.value })}
          type="email"
          placeholder="Email-adres:"
        ></input>
        <input
          onChange={(e) =>
            setRegister({ ...register, password: e.target.value })
          }
          type="password"
          placeholder="password"
        />
        <input
          onChange={(e) => setRegister({ ...register, name: e.target.value })}
          type="text"
          placeholder="name"
        />
        <input
          onChange={(e) => setRegister({ ...register, birth: e.target.value })}
          type="text"
          placeholder="birth of data"
        />
        <button
          onClick={() => dispatch(registerPerson(register))}
          className="sign-btn"
        >
          Sign in
        </button>
      </div>
    </div>
  );
}

export default Register;
