import { createSlice } from '@reduxjs/toolkit';
import { getAllAdverts, getFilter } from './thunks';

const initialState = {
  adverts: [],
  total: null,
};

export const advertsSlice = createSlice({
  name: 'adverts',
  initialState,
  extraReducers: builder => {
    builder.addCase(getAllAdverts.fulfilled, (state, { payload }) => {
      const newCars = payload.filter(
        car => !state.adverts.find(existingCar => existingCar.id === car.id)
      );
      state.adverts.push(...newCars);
      const advertsLength = state.adverts.length
      state.total = advertsLength;
    });
    builder.addCase(getFilter.fulfilled, (state, { payload }) => {
      state.total = 1;
      state.adverts = payload;
    });
  },
});

export const advertsReducer = advertsSlice.reducer;
