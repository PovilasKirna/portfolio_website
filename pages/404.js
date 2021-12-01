import NextLink from "next/link";
import { useColorModeValue } from "@chakra-ui/color-mode";
import {
	Heading,
	Box,
	Text,
	Container,
	Divider,
	Button,
} from "@chakra-ui/react";
import Section from "../components/section";
import Head from "next/head";

const NotFound = () => {
	return (
		<Container>
			<Head>
				<title> 404 - Not Found</title>
			</Head>
			<Heading as="h1">Not Found</Heading>
			<Section delay={0.1}>
				<Text>
					The page you&apos;re looking for does not exist or you cannot access
					it.
				</Text>
				<Divider my={6} />
				<Box my={6} align="center">
					<NextLink href="/">
						<Button colorScheme={useColorModeValue("purple", "orange")}>
							Return to Homepage
						</Button>
					</NextLink>
				</Box>
			</Section>
		</Container>
	);
};

export default NotFound;
