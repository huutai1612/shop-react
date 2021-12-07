import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import tokenReducer from './tokenSlice';

const store = configureStore({
	reducer: {
		cart: cartReducer,
		token: tokenReducer,
	},
});

export default store;
