const { createSlice } = require('@reduxjs/toolkit');

const offCanvasSlice = createSlice({
	name: 'offcanvas',
	initialState: {
		isShowNavigation: false,
		isShowCart: false,
	},
	reducers: {
		openNavigation(state) {
			state.isShowNavigation = true;
		},
		closeNavigation(state) {
			state.isShowNavigation = false;
		},
		openCart(state) {
			state.isShowCart = true;
		},
		closeCart(state) {
			state.isShowCart = false;
		},
	},
});

export const { openNavigation, closeNavigation, openCart, closeCart } =
	offCanvasSlice.actions;

export default offCanvasSlice.reducer;
