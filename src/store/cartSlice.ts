import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartState, Product } from "../utils/types";

const initialState: CartState = {
  items: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Cart>) {
      const newProduct = action.payload;
      const existingProduct = state.items.find(
        (item) => item.productName === newProduct.productName
      );

      if (existingProduct) {
        existingProduct.productCount += 1; // Увеличиваем количество, если товар уже есть в корзине
      } else {
        state.items.push({ ...newProduct, productCount: 1 }); // Добавляем новый товар в корзину
      }

      state.totalAmount += newProduct.productPrice; // Обновляем общую стоимость
    },

    removeFromCart(state, action: PayloadAction<Product>) {
      state.items = state.items.filter((item) => {

        if (item.productId === action.payload.productId) {
          console.log(item.productCount);
          
          state.totalAmount = Math.max(
            0,
            state.totalAmount - item.productPrice * item.productCount
          );
          return false;
        }
        return true;

      });
    },

    increaseProduct(state, action: PayloadAction<Product>) {
      const product = state.items.find(
        (item) => item.productId === action.payload.productId,
      );

      if (product) {
        state.totalAmount += product.productPrice;
        product.productCount += 1;
      }
    },

    decreaseProduct(state, action: PayloadAction<Product>) {
      const product = state.items.find(
        (item) => item.productId === action.payload.productId,
      );

      if (product) {
        state.totalAmount -= product.productPrice;
        product.productCount -= 1;

        if (product.productCount === 0) {
          state.items = state.items.filter(
            (item) => item.productId != action.payload.productId,
          );
        }
      }
    },
    clearState(state) {
      state.items = [];
      state.totalAmount = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseProduct,
  decreaseProduct,
  clearState,
} = cartSlice.actions;
export default cartSlice.reducer;
