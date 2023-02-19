import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  singleData: null,
  news: [],
  all: [],
  status: "idle",
};

export const getProduct = createAsyncThunk(
  "axios get products",
  async (category) => {
    const response = await axios.get(
      `http://localhost:5000/safiabakery.uz/products/category/${category}`
    );
    return response;
  }
);
export const getAllProducts = createAsyncThunk(
  "axios all products",
  async () => {
    const response = await axios.get(
      `http://localhost:5000/safiabakery.uz/products`
    );
    return response;
  }
);

export const createaProduct = createAsyncThunk(
  "axios create product",
  async (item) => {
    const response = await axios.post(
      `http://localhost:5000/safiabakery.uz/products`,
      item
    );
    return response;
  }
);
export const deleteProducts = createAsyncThunk(
  "delete products",
  async (id) => {
    const response = await axios.delete(
      `http://localhost:5000/safiabakery.uz/products/${id}`
    );
    return response;
  }
);

export const updateProduct = createAsyncThunk(
  "update products",
  async (item) => {
    const response = await axios.put(
      `http://localhost:5000/safiabakery.uz/products/${item._id}`,
      item
    );
    return response;
  }
);

export const getSingleProduct = createAsyncThunk(
  "axios get elements",
  async (id) => {
    const response = await axios.get(
      `http://localhost:5000/safiabakery.uz/products/${id}`
    );
    return response;
  }
);

export const getNews = createAsyncThunk("axios get news", async () => {
  const response = await axios.get(`http://localhost:5000/safiabakery.uz/news`);
  return response;
});

const productSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    getProduct: {},
    // getProductByCat: (state, action) => {
    //   state.data.filter((cat) => {
    //     return cat === action.payload;
    //   });
    // },
  },
  extraReducers(builder) {
    builder
      .addCase(getProduct.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload.data.data;
        console.log(action.payload);
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.status = "rejected";
      })
      .addCase(getSingleProduct.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(getSingleProduct.fulfilled, (state, action) => {
        state.status = "success";
        state.singleData = action.payload.data.data;
      })
      .addCase(getSingleProduct.rejected, (state, action) => {
        state.status = "rejected";
      })
      .addCase(getNews.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(getNews.fulfilled, (state, action) => {
        state.status = "success";
        state.news = action.payload.data.data;
      })
      .addCase(getNews.rejected, (state, action) => {
        state.status = "rejected";
      })
      .addCase(getAllProducts.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.status = "success";
        state.all = action.payload.data.data;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.status = "rejected";
      })
      .addCase(deleteProducts.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(deleteProducts.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(deleteProducts.rejected, (state, action) => {
        state.status = "rejected";
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(createaProduct.fulfilled, (state, action) => {
        state.status = "success";
      });
  },
});

export default productSlice;

// export const selectGetById = (state, id) => {
//   return state.find((data) => data.id == id);
// };

export const getAllData = (state) => state.product.data;
export const getSingleData = (state) => state.product.singleData;
export const getAllNews = (state) => state.product.news;
export const getanlyProducts = (state) => state.product.all;
