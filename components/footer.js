import { Box, Link } from "@chakra-ui/react";

const Footer = () => {
	return (
		<Box align="center" opacity={0.4} fontSize="sm">
			&copy; {new Date().getFullYear()} Povilas Kirna. All Rights Reserved.
			<br />
			This site is protected by reCAPTCHA and the Google {""}
			<Link href="https://policies.google.com/privacy">
				Privacy Policy
			</Link> and{" "}
			<Link href="https://policies.google.com/terms">Terms of Service</Link>{" "}
			apply.
		</Box>
	);
};

export default Footer;
