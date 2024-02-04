import { combineReducers } from '@reduxjs/toolkit';
import { appReducer } from './appState/slice';
import { advertsReducer } from './adverts/slice';

export const reducer = combineReducers({
  appState: appReducer,
  adverts: advertsReducer
});
