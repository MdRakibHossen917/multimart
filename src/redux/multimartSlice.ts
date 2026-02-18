import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../../type";

interface InitialState {
  cart: ProductType[];
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
    addToCart: (state, action: PayloadAction<ProductType>) => {
      // console.log(action?.payload)
      const existingProduct = state?.cart?.find(
        (item) => item?.id === action?.payload?.id
         
      );

      if (existingProduct) {
        existingProduct.quantity! += 1;
      } else {
        state?.cart?.push({
          ...action?.payload,
          quantity: 1,
        });
      }

     

      

    },
     increaseQuantity:(state, action)=>{
        const existingProduct = state?.cart?.find(
          (item) => item?.id === action?.payload
        );

        if(existingProduct){
          existingProduct.quantity! += 1;
        }
      },
       DecreaseQuantity:(state, action)=>{
        const existingProduct = state?.cart?.find(
          (item) => item?.id === action?.payload
        );

        if(existingProduct){
          existingProduct.quantity! -= 1;
        }
      }
  },
});

export const { addToCart, increaseQuantity, DecreaseQuantity } = multimartSlice.actions;
export default multimartSlice.reducer;
