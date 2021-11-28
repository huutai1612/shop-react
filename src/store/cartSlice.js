import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	cartItem: [],
	totalPrice: 0,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItemToCart(state, payload) {},
		removeItemFromCart(state, payload) {},
		resetCart(state) {
			state.cartItem = [];
			state.totalPrice = 0;
		},
	},
});

export const { addItemToCart, removeItemFromCart, resetCart } =
	cartSlice.actions;
export default cartSlice.reducer;
