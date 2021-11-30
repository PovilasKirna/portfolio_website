import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layouts/main";
import theme from "../lib/theme";

const Website = ({ Component, pageProps, router }) => {
	return (
		<ChakraProvider theme={theme}>
			<style jsx global>{`
				@import url("https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;700&display=swap");
				.grid-item-thumbnail {
					border-radius: 12px;
				}
				.grid-item-text {
					text-align: center;
				}
			`}</style>
			<Layout router={router}>
				<Component {...pageProps} key={router.route} />
			</Layout>
		</ChakraProvider>
	);
};

export default Website;
