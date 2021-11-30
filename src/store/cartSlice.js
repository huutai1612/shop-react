import { createSlice } from '@reduxjs/toolkit';

const DUMMY_ITEM = [
	{
		id: 'i1',
		title: 'I1',
		price: 200000,
		img: 'https://technext.github.io/shopmax/images/model_7.png',
		amount: 1,
	},
	{
		id: 'i2',
		title: 'I2',
		price: 200000,
		img: 'https://technext.github.io/shopmax/images/model_5.png',
		amount: 1,
	},
];

const initialState = {
	cartItem: DUMMY_ITEM,
	totalPrice: 400000,
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
