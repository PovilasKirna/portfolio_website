import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layouts/main";
import theme from "../lib/theme";
import { AnimatePresence } from "framer-motion";
import { store } from "../redux/store";
import { Provider } from "react-redux";

const Website = ({ Component, pageProps, router }) => {
	return (
		<Provider store={store}>
			<ChakraProvider theme={theme}>
				<style jsx global>{`
					@import url("https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;700&display=swap");
					.grid-item-thumbnail {
						border-radius: 12px;
					}
					.grid-item-text {
						text-align: center;
					}
					.grecaptcha-badge {
						visibility: hidden;
					}
				`}</style>
				<Layout router={router}>
					<AnimatePresence exitBeforeEnter initial={true}>
						<Component {...pageProps} key={router.route} />
					</AnimatePresence>
				</Layout>
			</ChakraProvider>
		</Provider>
	);
};

export default Website;
