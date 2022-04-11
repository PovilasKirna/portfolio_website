export default async (req, res) => {
	const YOUTUBE_RECENT_VIDEOS_URL =
		"https://www.googleapis.com/youtube/v3/playlistItems";
	const playlistId = "UUhTGJ-7Sf-Xb4GXnYE7XhIg";

	try {
		const response = await fetch(
			`${YOUTUBE_RECENT_VIDEOS_URL}?part=snippet&playlistId=${playlistId}&maxResults=10&key=${process.env.YOUTUBE_API_KEY}`
		);
		const data = await response.json();
		res.status(200).json({
			message: "Videos retrieved successfully!",
			status: "Ok",
			data: data,
		});
		return data;
	} catch (error) {
		res.status(500).json({
			message: "Internal error",
			status: "Error",
		});
	}
};
