import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../../type";

interface CartProduct extends ProductType {
  quantity: number;
}

interface InitialState {
  cart: CartProduct[];
  favorite: ProductType[];
  userInfo: any;
}

const initialState: InitialState = {
  cart: [],
  favorite: [],
  userInfo: null,
};

export const multimartSlice = createSlice({
  name: "multimart",
  initialState,
  reducers: {
    //  Add To Cart
    addToCart: (state, action: PayloadAction<ProductType>) => {
      const existingProduct = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },

    //  Increase Quantity
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const product = state.cart.find(
        (item) => item.id === action.payload
      );

      if (product) {
        product.quantity += 1;
      }
    },

    //  Decrease Quantity (safe version)
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const product = state.cart.find(
        (item) => item.id === action.payload
      );

      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
    },

    //  Remove From Cart
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter(
        (item) => item.id !== action.payload
      );
    },

    //  Reset Cart
    resetCart: (state) => {
      state.cart = [];
    },

    //  Add / Remove Favorite (Toggle)
    addToFavorite: (state, action: PayloadAction<ProductType>) => {
      const existingProduct = state.favorite.find(
        (item) => item.id === action.payload.id
      );

      if (existingProduct) {
        state.favorite = state.favorite.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.favorite.push(action.payload);
      }
    },

    //  Reset Favorite
    resetFavorite: (state) => {
      state.favorite = [];
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  resetCart,
  addToFavorite,
  resetFavorite,
} = multimartSlice.actions;

export default multimartSlice.reducer;
