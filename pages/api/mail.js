const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default (req, res) => {
	const body = JSON.parse(req.body);

	const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Body: ${body.message}\r\n
    `;

	const data = {
		to: "povilas.kirna@gmail.com",
		from: "contact@povilaskirna.com",
		subject: "New web form message!",
		text: message,
		html: message.replace(/\r\n/g, "<br>"),
	};

	mail
		.send(data)
		.then(() => {
			console.log("Email sent");
		})
		.catch((error) => {
			console.error(error);
		});

	res.status(200).json({ status: "Ok" });
};
