import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchFilterAdverts, fetchTotalAdverts } from 'api/adverts.api';

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

export const getTotalAdverts = createAsyncThunk(
  'adverts/fetchTotal',
  async (data, thunkAPI) => {
    try {
      const res = await fetchTotalAdverts(data);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);