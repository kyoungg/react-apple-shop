import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: { firstName: "kim", lastName: "구라" },
  reducers: {
    changeKimTrue(state) {
      state.lastName = "진실";
    },
  },
});

export let { changeKimTrue } = user.actions;

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

  reducers: {
    UP(current, productId) {
      const target = current.find((e) => e.id === productId);
      return target.count + 1;
    },
    DOWN(current, productId) {
      const target = current.find((e) => e.id === productId);
      return target.count - 1;
    },
  },
});

export let { UP, DOWN } = cartProducts.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    cartProducts: cartProducts.reducer,
  },
});
