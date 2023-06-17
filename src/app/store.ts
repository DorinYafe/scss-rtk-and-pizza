import { configureStore } from '@reduxjs/toolkit';
import ordersReducer from '../features/order/order-slice';

export const store = configureStore({
  reducer: {
    orders: ordersReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
