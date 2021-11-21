import { createSlice } from '@reduxjs/toolkit';
import products from '../../data/ProductData';

export const productsSlice = createSlice({
  name: 'products',
  initialState: products.slice(0, 3),
  reducers: {
    loadMore: (state) => products.slice(0, state.length + 3),
  },
});

export const { loadMore } = productsSlice.actions;

export const productsSliceReducer = productsSlice.reducer;
