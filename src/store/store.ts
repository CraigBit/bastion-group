import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cartItemSlice from './reducers/cartItemSlice';
import newProductSlice from './reducers/newProductSlice';
import productTypeSlice from './reducers/productTypeSlice';
import filterSlice from './reducers/filterSlice';

const rootReducer = combineReducers({
  productTypeSlice,
  newProductSlice,
  cartItemSlice,
  filterSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
