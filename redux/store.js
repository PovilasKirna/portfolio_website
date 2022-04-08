import { configureStore } from "@reduxjs/toolkit";
import notificationReducer from "./features/notificationSlice";
import emailReducer from "./features/emailSlice";

export const store = configureStore({
	reducer: {
		notification: notificationReducer,
		email: emailReducer,
	},
});
