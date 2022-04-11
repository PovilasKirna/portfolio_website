import NextLink from "next/link";
import { useEffect } from "react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
	Heading,
	SimpleGrid,
	Container,
	Divider,
	Button,
	LinkBox,
	LinkOverlay,
	Skeleton,
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
import { useDispatch, useSelector } from "react-redux";
import { show } from "../redux/features/notificationSlice";
import { add } from "../redux/features/youtubeSlice";

const Posts = () => {
	const dispatch = useDispatch();

	async function fetchRecentVideos() {
		const response = await fetch("/api/youtube");
		if (response.ok) {
			const data = await response.json();
			dispatch(add({ videos: data.data, loading: false }));
			return data;
		} else {
			dispatch(
				show({
					Title: "Uh Oh!",
					Description: "Something went wrong, please try again later.",
				})
			);
		}
	}

	async function fetchRecentBlogPosts() {}

	//fetch recent videos/posts after entering the page
	useEffect(() => {
		fetchRecentVideos().catch(console.error);
		fetchRecentBlogPosts().catch(console.error);
	}, []);
	const videos = useSelector((state) => state.youtube.videos);
	const isLoaded = useSelector((state) => state.youtube.loading);

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
							{/* Youtube */}
							<TabPanel>
								<SimpleGrid columns={[1, 1, 2]} gap={6} autoRows={true}>
									{videos.items &&
										videos.items.map((video) => {
											const { id, snippet } = video;
											const { title, thumbnails = {} } = snippet;
											const { medium = {} } = thumbnails;
											const url = `https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`;
											return (
												<Section delay={0.1} key={id}>
													<Skeleton h={200} isLoaded={!isLoaded}>
														<Box w="100%" textAlign="center">
															<LinkBox cursor="pointer">
																<img
																	width="111%"
																	src={medium.url}
																	alt={title}
																></img>
																<LinkOverlay href={url} target="_blank">
																	<Text mt={2} noOfLines={3}>
																		{title}
																	</Text>
																</LinkOverlay>
															</LinkBox>
														</Box>
													</Skeleton>
												</Section>
											);
										})}
								</SimpleGrid>
								{videos.items && (
									<Box align="center" my={4}>
										<NextLink
											href={`https://www.youtube.com/channel/${videos.items[0].snippet.channelId}`}
										>
											<Button
												rightIcon={<ChevronRightIcon />}
												colorScheme={useColorModeValue("purple", "orange")}
											>
												More videos
											</Button>
										</NextLink>
									</Box>
								)}
							</TabPanel>
							{/* Blog */}
							<TabPanel>
								<SimpleGrid columns={[1, 1, 2]} gap={6}>
									<Section delay={0.1}>
										<Skeleton h={200}></Skeleton>
									</Section>
									<Section delay={0.1}>
										<Skeleton h={200}></Skeleton>
									</Section>
								</SimpleGrid>
							</TabPanel>
						</TabPanels>
					</Tabs>
				</Section>
			</Container>
		</Layout>
	);
};

export default Posts;
