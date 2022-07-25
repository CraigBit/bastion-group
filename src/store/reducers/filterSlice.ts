import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INewProduct } from '../../models/INewProduct';

interface NewProductState {
  filteredArray: INewProduct[];
}

const initialState: NewProductState = {
  filteredArray: [],
};

export const filterSlice = createSlice({
  name: 'filteredArray',
  initialState,
  reducers: {
    arrayStandardFilter(state, action) {
      return {
        ...state,
        filteredArray: [...state.filteredArray].filter(
          (item) => item.standard !== action.payload
        ),
      };
    },
    arrayTypeFilter(state, action) {
      return {
        ...state,
        filteredArray: action.payload[0].filter(
          (item: INewProduct) => item.type === action.payload[1]
        ),
      };
    },
    arrayPriceFilter(state, action) {
      return {
        ...state,
        filteredArray: action.payload[0].filter(
          (item: INewProduct) =>
            action.payload[1][0] < +item.price &&
            action.payload[1][1] > +item.price
        ),
      };
    },
    arrayConcat(state, action) {
      return {
        ...state,
        filteredArray: [...state.filteredArray].concat(action.payload),
      };
    },
    resetFilters(state) {
      return initialState;
    },
  },
  extraReducers: {
    'newProduct/increment': (state, action: PayloadAction<number>) => {
      state.filteredArray.forEach((item: INewProduct) =>
        item.id === action.payload ? (item.quantity += 1) : item
      );
    },
    'newProduct/decrement': (state, action: PayloadAction<number>) => {
      state.filteredArray.forEach((item: INewProduct) => {
        if (item.quantity === 0) return;
        return item.id === action.payload ? (item.quantity -= 1) : item;
      });
    },
  },
});
export const {
  arrayStandardFilter,
  arrayConcat,
  arrayPriceFilter,
  resetFilters,
  arrayTypeFilter,
} = filterSlice.actions;

export default filterSlice.reducer;
