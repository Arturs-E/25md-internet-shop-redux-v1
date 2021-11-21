import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ShoppingCartInterface {
  productName: string;
  quantity: number;
  pricePerUnit: number;
  imgUrl: string;
}

const initialState: ShoppingCartInterface[] = [];

const shoppingCartSlice = createSlice({
  name: 'shoppingCartItems',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ShoppingCartInterface>) => {
      if (state.some((product) => product.productName === action.payload.productName)) {
        return (
          state.map((item) => {
            if (item.productName === action.payload.productName) {
              return { ...item, quantity: item.quantity + 1 };
            }
            return item;
          })
        );
      }
      return [...state, action.payload];
    },
    decreaseQuantity: (state, action: PayloadAction<string>) => (
      state.map((item) => {
        if (item.productName === action.payload && item.quantity > 0) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
    ),
    increaseQuantity: (state, action: PayloadAction<string>) => (
      state.map((item) => {
        if (item.productName === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      })
    ),
    removeItem: (state, action: PayloadAction<string>) => (
      state.filter((item) => item.productName !== action.payload)
    ),
  },
});

const {
  addToCart, decreaseQuantity, increaseQuantity, removeItem,
} = shoppingCartSlice.actions;

const shoppingCartSliceReducer = shoppingCartSlice.reducer;

export {
  addToCart, decreaseQuantity, increaseQuantity, removeItem, shoppingCartSliceReducer,
};
export type { ShoppingCartInterface };
