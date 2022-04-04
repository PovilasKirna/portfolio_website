import { configureStore } from "@reduxjs/toolkit";
import notificationReducer from "./features/notificationSlice";

export const store = configureStore({
	reducer: {
		notification: notificationReducer,
	},
});
