import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	cartItem: [],
	totalPrice: 0,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItemToCart(state, action) {
			state.totalPrice += action.payload.price * action.payload.amount;

			const foundedItem = state.cartItem.find(
				(product) => product.id === action.payload.id,
			);

			if (foundedItem) {
				foundedItem.amount += action.payload.amount;
			} else {
				state.cartItem.push(action.payload);
			}
		},
		removeItemFromCart(state, action) {
			state.totalPrice -= action.payload.price;
			const foundedItem = state.cartItem.find(
				(product) => product.id === action.payload.id,
			);
			if (foundedItem.amount <= 1) {
				state.cartItem = state.cartItem.filter(
					(product) => product.id !== action.payload.id,
				);
			} else {
				foundedItem.amount--;
			}
		},
		resetCart(state) {
			state.cartItem = [];
			state.totalPrice = 0;
		},
	},
});

export const { addItemToCart, removeItemFromCart, resetCart } =
	cartSlice.actions;
export default cartSlice.reducer;
