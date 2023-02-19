import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { saveLocalAuth } from "../../utils/localStorage";

const initialState = {
  auth: [],
  status: "idle",
};

export const registerPerson = createAsyncThunk(
  "axios post element ",
  async ({ email, password, birth, name }) => {
    console.log(email, password, birth, name);
    await axios
      .post(`http://localhost:5000/safiabakery.uz/auth/register`, {
        email: email,
        password: password,
        birth: birth,
        name: name,
      })
      .then(function (response) {
        saveLocalAuth(response);
      });
  }
);

export const loginPerson = createAsyncThunk(
  "axios post element",
  async ({ email, password }) => {
    console.log(email, password);
    await axios
      .post(`http://localhost:5000/safiabakery.uz/auth/login`, {
        email: email,
        password: password,
      })
      .then(function (response) {
        saveLocalAuth(response);
      });
  }
);
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(registerPerson.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(registerPerson.fulfilled, (state, action) => {
        state.status = "success";
        state.auth = action.data;
        // saveLocalAuth(action);
        console.log(action);
        // console.log(state);
      })
      .addCase(registerPerson.rejected, (state, action) => {
        state.status = "rejected";
      })
      .addCase(loginPerson.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(loginPerson.fulfilled, (state, action) => {
        state.status = "success";
        state.auth = action.data;
        console.log(action);
      })
      .addCase(loginPerson.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
});

export const authState = (state) => state.auth.status;

export default authSlice;
