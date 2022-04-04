const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default (req, res) => {
	const body = JSON.parse(req.body);

	const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Body: ${body.body}\r\n
    `;

	const data = {
		to: "povilas.kirna@gmail.com",
		from: "contact@povilaskirna.com",
		subject: "New contact message!",
		text: message,
		html: message.replace(/\r\n/g, "<br>"),
	};

	(async () => {
		try {
			await mail.send(data);
			res.status(200).json({
				message: "Message sent successfully!",
				status: "Ok",
			});
		} catch (error) {
			console.error(error);

			if (error.response) {
				console.error(error.response.body);
			}
		}
	})();
};
