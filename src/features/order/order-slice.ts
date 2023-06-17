import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Order } from '../../types/order';
import data from '../../mocks/data.json';

interface OrdersState {
  ordersList: Order[];
  order: Order | null;
}

const initialState: OrdersState = {
  ordersList: data.orders,
  order: null,
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setOrder(state, action: PayloadAction<Order>) {
      // its ok to write it like this because immer makes it immutable  under the hood
      state.order = action.payload;
    },
    // clear order
  },
});

export const { setOrder } = ordersSlice.actions;
export default ordersSlice.reducer;
