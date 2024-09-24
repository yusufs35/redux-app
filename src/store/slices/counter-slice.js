import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
	name: "counter",
	initialState: {
		value: 0,
	},
	reducers: {
		up: (state) => {
			state.value++;
		},
		down: (state) => {
            if (state.value <= 0) return;
			state.value--;
		},
		reset: (state) => {
			state.value = 0;
		},
		set: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { up, down, reset, set } = counterSlice.actions;
export default counterSlice.reducer;
