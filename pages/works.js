import { Heading, Container, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import thumbSpotifyDisplay from "../public/images/works/thumbSpotifyDisplay.png"; //done
import thumbDiscordMusicBot from "../public/images/works/thumbDiscordMusicBot.jpg"; //done
import thumbEcaTwitterDashboard from "../public/images/works/thumbTwitterDashboard.png"; //done
import thumbPHPLibrary from "../public/images/works/thumbPHPLibrary.png";
import thumbSpaceInvaders from "../public/images/works/thumbSpaceInvaders.png";
import thumbSudoku from "../public/images/works/thumbSudoku.png";
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
						A now playing Spotify display website
					</Section>
					<Section delay={0.1}>
						<WorkGridItem
							id="ecaTwitterDashboard"
							title="CrimeBook - Twitter Dashboard"
							thumbnail={thumbEcaTwitterDashboard}
						></WorkGridItem>
						A livetime twitter dashboard which displays P2000 code tweet
						locations on a map.
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
						Discord bot which plays music from YouTube
					</Section>
					<Section delay={0.5}>
						<WorkGridItem
							id="PHPLibrary"
							title="PHP Library"
							thumbnail={thumbPHPLibrary}
						></WorkGridItem>
						An implementation of a Library system
					</Section>
					<Section delay={0.5}>
						<WorkGridItem
							id="spaceInvaders"
							title="Space Invaders"
							thumbnail={thumbSpaceInvaders}
						></WorkGridItem>
						Space Invaders game
					</Section>
					<Section delay={0.5}>
						<WorkGridItem
							id="sudoku"
							title="Sudoku Game"
							thumbnail={thumbSudoku}
						></WorkGridItem>
						Sudoku game
					</Section>
				</SimpleGrid>
			</Container>
		</Layout>
	);
};

export default Works;
