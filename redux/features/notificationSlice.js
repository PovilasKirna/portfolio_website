import { createSlice } from "@reduxjs/toolkit";

export const notificationSlice = createSlice({
	name: "notification",
	initialState: {
		showNotification: false,
		Title: "",
		Description: "",
	},
	reducers: {
		show: (state, action) => {
			state.showNotification = true;
			state.Title = action.payload.Title;
			state.Description = action.payload.Description;
		},
		hide: (state) => {
			state.showNotification = false;
		},
	},
});

export const { show, hide, title, description } = notificationSlice.actions;

export default notificationSlice.reducer;
