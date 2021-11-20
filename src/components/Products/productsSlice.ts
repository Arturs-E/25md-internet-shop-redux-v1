import { createSlice } from '@reduxjs/toolkit';
import products from '../../data/ProductData';

export const productsSlice = createSlice({
  name: 'products',
  initialState: products,
  reducers: {
    loadMore: (state) => state,
  },
});

export const { loadMore } = productsSlice.actions;

export const productsSliceReducer = productsSlice.reducer;
