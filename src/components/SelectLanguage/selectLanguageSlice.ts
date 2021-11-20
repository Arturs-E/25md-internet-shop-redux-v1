import { createSlice } from '@reduxjs/toolkit';

interface SelectLanguage {
  value: string;
}

const initialState: SelectLanguage = {
  value: 'en',
};

export const selectLanguageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    changeLanguage: (state) => (state.value === 'en' ? { value: 'lv' } : { value: 'en' }),
  },
});

export const { changeLanguage } = selectLanguageSlice.actions;

export const selectLanguageSliceReducer = selectLanguageSlice.reducer;
