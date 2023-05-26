import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: "kim구라",
});

let stock = createSlice({
  name: "stock",
  initialState: [10, 20, 11],
});

let cartProducts = createSlice({
  name: "cartProducts",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
});

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    cartProducts: cartProducts.reducer,
  },
});
