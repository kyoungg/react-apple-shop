import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice";

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
    correctionProduct(state, action) {
      const targetindex = state.findIndex((e) => e.id == action.payload.id);
      console.log(targetindex);
      state[targetindex].count += Number(action.payload.count);
    },
    addProduct(state, action) {
      console.log(action.payload.id);
      const targetIndex = state.findIndex((e) => e.id == action.payload.id);
      console.log(targetIndex);
      targetIndex !== -1
        ? (state[targetIndex].count =
            state[targetIndex].count + action.payload.count)
        : state.push(action.payload);
    },
  },
});

export let { correctionProduct, addProduct } = cartProducts.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    cartProducts: cartProducts.reducer,
  },
});
