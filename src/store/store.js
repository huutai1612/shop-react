import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import tokenReducer from './tokenSlice';
import offCanvasReducer from './offCanvasSlice';

const store = configureStore({
	reducer: {
		cart: cartReducer,
		token: tokenReducer,
		offCanvas: offCanvasReducer,
	},
});

export default store;
