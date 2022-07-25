import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INewProduct } from '../../models/INewProduct';

interface CartItemsState {
  cartItem: INewProduct[];
}

const initialState: CartItemsState = {
  cartItem: [],
};

export const cartItemSlice = createSlice({
  name: 'cartItems',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<INewProduct>) {
      if (state.cartItem.find((item) => item.id === action.payload.id)) {
        alert('Товар уже добавлен в корзину!');
      } else {
        state.cartItem.push(action.payload);
      }
    },
    deleteCartItem(state, action: PayloadAction<number>) {
      return {
        ...state,
        cartItem: [...state.cartItem].filter(
          (item) => item.id !== action.payload
        ),
      };
    },
    resetCart(state) {
      return initialState;
    },
  },
  extraReducers: {
    'newProduct/increment': (state, action: PayloadAction<number>) => {
      state.cartItem.forEach((item) =>
        item.id === action.payload ? (item.quantity += 1) : item
      );
    },
    'newProduct/decrement': (state, action: PayloadAction<number>) => {
      state.cartItem.forEach((item) => {
        if (item.quantity === 0) return;
        return item.id === action.payload ? (item.quantity -= 1) : item;
      });
    },
  },
});

export const { addToCart, deleteCartItem, resetCart } = cartItemSlice.actions;

export default cartItemSlice.reducer;
