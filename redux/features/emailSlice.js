import { createSlice } from "@reduxjs/toolkit";

export const emailSlice = createSlice({
	name: "email",
	initialState: {
		sent: false,
		time: "",
	},
	reducers: {
		send: (state, action) => {
			state.sent = true;
			state.time = action.payload.time;
		},
		timeout: (state) => {
			state.sent = false;
			state.time = "";
		},
	},
});

export const { send, timeout, time } = emailSlice.actions;

export default emailSlice.reducer;
