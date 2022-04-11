import { createSlice } from "@reduxjs/toolkit";

export const youtubeSlice = createSlice({
	name: "youtube",
	initialState: {
		videos: [],
		loading: true,
	},
	reducers: {
		add: (state, action) => {
			state.videos = action.payload.videos;
			state.loading = action.payload.loading;
		},
	},
});

export const { add, videos, loading } = youtubeSlice.actions;

export default youtubeSlice.reducer;
