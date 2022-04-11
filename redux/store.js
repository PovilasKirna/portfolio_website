import { configureStore } from "@reduxjs/toolkit";
import notificationReducer from "./features/notificationSlice";
import emailReducer from "./features/emailSlice";
import youtubeReducer from "./features/youtubeSlice";

export const store = configureStore({
	reducer: {
		notification: notificationReducer,
		email: emailReducer,
		youtube: youtubeReducer,
	},
});
