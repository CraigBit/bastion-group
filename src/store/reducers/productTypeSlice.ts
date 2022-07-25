import { IProductType } from '../../models/IProductType';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProductTypeState {
  productTypes: IProductType[];
}

const initialState: ProductTypeState = {
  productTypes: [],
};

export const productTypeSlice = createSlice({
  name: 'productType',
  initialState,
  reducers: {
    addType(state, action: PayloadAction<IProductType>) {
      state.productTypes.push({
        id: action.payload.id,
        number: action.payload.number,
        name: action.payload.name,
      });
    },
  },
});

export const { addType } = productTypeSlice.actions;

export default productTypeSlice.reducer;
