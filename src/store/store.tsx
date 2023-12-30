// import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "../modules/Autorization/redux/slice"
// import storage from 'redux-persist/lib/storage';
// import {
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
//   persistReducer,
// } from 'redux-persist';


// const authPersistConfig = {
//     key: 'auth',
//     storage,
//     whitelist: ['user', 'token', 'isLoggedIn']
//   }


// export const store = configureStore({
//     reducer: {
//       auth: persistReducer(authPersistConfig, authReducer),
//     },
//     middleware: getDefaultMiddleware =>
//       getDefaultMiddleware({
//         serializableCheck: {
//           ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//         },
//       }),
//       devTools: process.env.NODE_ENV === 'development',
//   });

//   export const persistor = persistStore(store);