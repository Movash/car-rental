import { createSlice } from '@reduxjs/toolkit';
import { getAllAdverts, getFilter, getTotalAdverts } from './thunks';

const initialState = {
  adverts: [],
  total: null,
  page: 1,
};

export const advertsSlice = createSlice({
  name: 'adverts',
  initialState,
  reducers: {
    setPage: (state, { payload }) => {
      state.page = payload;
    },
    clearAdverts: state => {
      state.adverts = [];
    },
  },
  extraReducers: builder => {
    builder.addCase(getAllAdverts.fulfilled, (state, { payload }) => {
      const newCars = payload.filter(
        car => !state.adverts.find(existingCar => existingCar.id === car.id)
      );
      state.adverts.push(...newCars);
    });
    builder.addCase(getFilter.fulfilled, (state, { payload }) => {
      state.adverts = payload;
    });
    builder.addCase(getTotalAdverts.fulfilled, (state, { payload }) => {
      state.total = payload;
    });
  },
});

export const advertsReducer = advertsSlice.reducer;
