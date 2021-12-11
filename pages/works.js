import { Heading, Container, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import thumbSpotifyDisplay from "../public/images/works/thumbSpotifyDisplay.png"; //done
import thumbDiscordMusicBot from "../public/images/works/thumbDiscordMusicBot.jpg"; //done
import thumbEcaTwitterDashboard from "../public/images/works/thumbTwitterDashboard.png"; //done
import thumbSpaceInvaders from "../public/images/works/thumbSpaceInvaders.png";
import thumbSudoku from "../public/images/works/thumbSudoku.png";
import thumbIA from "../public/images/works/thumbIA.jpg";
import Head from "next/head";
import Layout from "../components/layouts/article";

const Works = () => {
	return (
		<Layout>
			<Container>
				<Head>
					<title> Povilas Kirna - Works</title>
				</Head>
				<Heading as="h3" fontSize={20} mb={4} variant="page-title">
					Works
				</Heading>

				<Divider my={6} />

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
					<Section delay={0.1}>
						<WorkGridItem
							id="IA"
							title="School trip document management system"
							thumbnail={thumbIA}
						></WorkGridItem>
					</Section>
				</SimpleGrid>

				<Heading as="h3" fontSize={20} mb={4} variant="page-title">
					Old Works
				</Heading>

				<Divider my={6} />

				<SimpleGrid columns={[1, 1, 2]} gap={6}>
					<Section delay={0.5}>
						<WorkGridItem
							id="discordMusicBot"
							title="Discord Music Bot"
							thumbnail={thumbDiscordMusicBot}
						></WorkGridItem>
					</Section>
					<Section delay={0.5}>
						<WorkGridItem
							id="spaceInvaders"
							title="Space Invaders"
							thumbnail={thumbSpaceInvaders}
						></WorkGridItem>
					</Section>
					<Section delay={0.5}>
						<WorkGridItem
							id="sudoku"
							title="Sudoku Game"
							thumbnail={thumbSudoku}
						></WorkGridItem>
					</Section>
				</SimpleGrid>
			</Container>
		</Layout>
	);
};

export default Works;
