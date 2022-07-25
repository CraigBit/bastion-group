import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INewProduct } from '../../models/INewProduct';

interface NewProductState {
  newProduct: INewProduct[];
}

const initialState: NewProductState = {
  newProduct: [],
};

export const newProductSlice = createSlice({
  name: 'newProduct',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<INewProduct>) {
      state.newProduct.push({
        id: action.payload.id,
        number: action.payload.number,
        name: action.payload.name,
        type: action.payload.type,
        price: action.payload.price,
        standard: action.payload.standard,
        photo: action.payload.photo,
        quantity: action.payload.quantity,
        isActive: action.payload.isActive,
      });
    },
    increment(state, action: PayloadAction<number>) {
      state.newProduct.forEach((item) =>
        item.id === action.payload ? (item.quantity += 1) : item
      );
    },
    decrement(state, action: PayloadAction<number>) {
      state.newProduct.forEach((item) => {
        if (item.quantity === 0) return;
        return item.id === action.payload ? (item.quantity -= 1) : item;
      });
    },
    toggleClass(state, action) {
      state.newProduct.forEach((item) =>
        item.standard === action.payload
          ? (item.isActive = !item.isActive)
          : item
      );
    },
  },
});
export const { addProduct, increment, decrement, toggleClass } =
  newProductSlice.actions;

export default newProductSlice.reducer;
