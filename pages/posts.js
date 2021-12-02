import NextLink from "next/link";
import { useColorModeValue } from "@chakra-ui/color-mode";
import {
	Heading,
	SimpleGrid,
	Container,
	Divider,
	Button,
	Tab,
	Tabs,
	TabList,
	TabPanels,
	TabPanel,
	Box,
	Text,
} from "@chakra-ui/react";
import Section from "../components/section";
import Head from "next/head";
import Layout from "../components/layouts/article";
import { WorkGridItem } from "../components/grid-item";
import thumbSpotifyDisplay from "../public/images/works/thumbSpotifyDisplay.png"; //done
import thumbEcaTwitterDashboard from "../public/images/works/thumbTwitterDashboard.png"; //done

const Posts = () => {
	return (
		<Layout>
			<Container>
				<Head>
					<title> Povilas Kirna - Posts</title>
				</Head>
				<Heading as="h3" fontSize={20} mb={4} variant="page-title">
					Posts
				</Heading>
				<Section delay={0.1}>
					<Tabs isFitted variant="unstyled">
						<TabList mb="1em">
							<Tab
								style={{ borderRadius: 10 }}
								_selected={{
									color: `${useColorModeValue("whiteAlpha.900", "gray200")}`,
									bg: `${useColorModeValue("purple.500", "orange.200")}`,
									borderRadius: 10,
									marginRight: 6,
								}}
								_hover={{
									color: `${useColorModeValue("whiteAlpha.900", "gray200")}`,
									bg: `${useColorModeValue("purple.500", "orange.200")}`,
									borderRadius: 10,
								}}
							>
								Youtube
							</Tab>
							<Tab
								style={{ borderRadius: 10 }}
								_selected={{
									color: `${useColorModeValue("whiteAlpha.900", "gray200")}`,
									bg: `${useColorModeValue("purple.500", "orange.200")}`,
									borderRadius: 10,
									marginLeft: 6,
								}}
								_hover={{
									color: `${useColorModeValue("whiteAlpha.900", "gray200")}`,
									bg: `${useColorModeValue("purple.500", "orange.200")}`,
									borderRadius: 10,
								}}
							>
								Blog Post
							</Tab>
						</TabList>
						<TabPanels>
							<TabPanel>
								<SimpleGrid columns={[1, 1, 2]} gap={6}>
									<Section delay={0.1}>
										<WorkGridItem
											id="spotifyDisplay"
											title="Spotify Display"
											thumbnail={thumbSpotifyDisplay}
										></WorkGridItem>
									</Section>
									<Section delay={0.1}>
										<WorkGridItem
											id="ecaTwitterDashboard"
											title="CrimeBook - Twitter Dashboard"
											thumbnail={thumbEcaTwitterDashboard}
										></WorkGridItem>
									</Section>
								</SimpleGrid>
							</TabPanel>
							<TabPanel>
								<Section delay={0.1}>
									<Text>
										The page you&apos;re looking for does not exist or you
										cannot access it.
									</Text>
									<Divider my={6} />
									<Box my={6} align="center">
										<NextLink href="/">
											<Button
												colorScheme={useColorModeValue("purple", "orange")}
											>
												Return to Homepage
											</Button>
										</NextLink>
									</Box>
								</Section>
							</TabPanel>
						</TabPanels>
					</Tabs>
				</Section>
			</Container>
		</Layout>
	);
};

export default Posts;
