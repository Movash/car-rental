import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAdverts, fetchFilterAdverts } from 'api/adverts.api';

export const getAllAdverts = createAsyncThunk(
  'adverts/fetchAll',
  async (data, thunkAPI) => {
    try {
      const res = await fetchAdverts(data);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getFilter = createAsyncThunk(
  'adverts/fetchFilter',
  async (data, thunkAPI) => {
    try {
      const res = await fetchFilterAdverts(data);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);