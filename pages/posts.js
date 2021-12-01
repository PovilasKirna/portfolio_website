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

const Posts = () => {
	return (
		<Container>
			<head>
				<title> Povilas Kirna - Posts</title>
			</head>
			<Heading as="h3" fontSize={20} mb={4} variant="page-title">
				Posts
			</Heading>
			<Section delay={0.1}>
				<Text>The page you&apos;re looking is under development.</Text>
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

export default Posts;
