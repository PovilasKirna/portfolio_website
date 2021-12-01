import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import Navbar from "../navbar.js";
import Footer from "../footer.js";

const Main = ({ children, router }) => {
	return (
		<Box as="main" pb={8}>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title> Povilas Kirna - Homepage</title>
				<link
					rel="icon"
					type="image/png"
					href="images/favicons/touch-icon-16x16.png"
				/>
				<link
					rel="icon"
					type="image/png"
					href="images/favicons/touch-icon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					href="images/favicons/touch-icon-48x48.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="60x60"
					href="images/favicons/apple-touch-icon-60x60.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="76x76"
					href="images/favicons/apple-touch-icon-76x76.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="120x120"
					href="images/favicons/apple-touch-icon-120x120.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="152x152"
					href="images/favicons/apple-touch-icon-152x152.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="images/favicons/apple-touch-icon-180x180.png"
				/>
				<link rel="manifest" href="/manifest.json" />
			</Head>
			<Navbar path={router.asPath} />

			<Container maxW="container.md" pt={14}>
				{children}
			</Container>
			<Footer />
		</Box>
	);
};

export default Main;
