import { createSlice } from '@reduxjs/toolkit';

interface ShoppingCartIcon {
  count: number;
}

const initialState: ShoppingCartIcon = {
  count: 0,
};

const shoppingCartIconSlice = createSlice({
  name: 'shoppingCartProductCount',
  initialState,
  reducers: {
    increaseCartProductCount: (state) => ({ count: state.count + 1 }),
  },
});

const { increaseCartProductCount } = shoppingCartIconSlice.actions;

const shoppingCartIconSliceReducer = shoppingCartIconSlice.reducer;

export { increaseCartProductCount, shoppingCartIconSliceReducer };
