export default async (req, res) => {
	const token = req.body.token;
	const human = await validateHuman(token);
	if (!human) {
		return res.status(400).json({
			message: "Invalid human verification",
			status: "Error",
		});
	} else {
		return res.status(200).json({
			message: "Human verification passed",
			status: "Ok",
		});
	}
};

async function validateHuman(token) {
	const secret = process.env.RECAPTCHA_SECRET_KEY;
	const verifysite = "https://www.google.com/recaptcha/api/siteverify";

	const response = await fetch(verifysite, {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
		},
		body: `secret=${secret}&response=${token}`,
	});

	const data = await response.json();

	return data.success;
}
