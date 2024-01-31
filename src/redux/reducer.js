import { combineReducers } from '@reduxjs/toolkit';
import { appReducer } from './appState/slice';
// import { authReducer } from './auth/slice';
// import persistReducer from 'redux-persist/es/persistReducer';
// import storage from 'redux-persist/lib/storage';
// import { headerReducer } from './error/slice';
// import { exercisesReducer } from './exercises/slice';
// import { diaryReducer } from './diary/slice';
// import { statisticReducer } from './statistics/slice';
// import { diaryPageReducer } from './diaryPage/slice';

// const authPersistConfig = {
//   key: 'auth',
//   storage
// };

// const authPersistedReducer = persistReducer(authPersistConfig, authReducer);

export const reducer = combineReducers({
  appState: appReducer,
  // auth: authPersistedReducer,
  // header: headerReducer,
  // exercises: exercisesReducer,
  // diary: diaryReducer,
  // statistic: statisticReducer,
  // diaryPage: diaryPageReducer,
});
