import { Heading, Container, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import thumbSpotifyDisplay from "../public/images/works/thumbSpotifyDisplay.png"; //done
import thumbNoteBridge from "../public/images/works/notebridgelanding.png"; //done
import thumbAer from "../public/images/works/aeraddchem.png";
import thumbEcaTwitterDashboard from "../public/images/works/thumbTwitterDashboard.png"; //done
import thumbIA from "../public/images/works/thumbIA.jpg";
import thumbHCI from "../public/images/works/hcilanding.png";
import Head from "next/head";
import Layout from "../components/layouts/article";
import thumbWeatherAPI from "../public/images/works/thumbWeatherAPI.png";
import startPageSpeedTest from "../public/images/works/thumbSpeedtest.png";
import shotmaniacsThumb from "../public/images/works/shotmaniacsThumb.png";
// import thumbDiscordMusicBot from "../public/images/works/thumbDiscordMusicBot.jpg"; //done
// import thumbSpaceInvaders from "../public/images/works/thumbSpaceInvaders.png";
// import thumbSudoku from "../public/images/works/thumbSudoku.png";

const Works = () => {
	return (
		<Layout>
			<Container>
				<Head>
					<title> Povilas Kirna - Projects</title>
				</Head>
				<Heading as="h3" fontSize={20} mb={4} variant="page-title">
					Projects
				</Heading>

				<Divider my={6} />

				<SimpleGrid columns={[1, 1, 2]} gap={6}>
					<Section delay={0.1}>
						<WorkGridItem
							id="notebridge"
							title="Note-Bridge Startup"
							thumbnail={thumbNoteBridge}
						/>
					</Section>
					<Section delay={0.1}>
						<WorkGridItem
							id="aeronamicchemicals"
							title="Aeronamic Chemical Manager"
							thumbnail={thumbAer}
						/>
					</Section>
					<Section delay={0.8}>
						<WorkGridItem
							id="hciproject"
							title="Van Gogh Museum Accesibility website"
							thumbnail={thumbHCI}
						></WorkGridItem>
					</Section>
					<Section delay={0.8}>
						<WorkGridItem
							id="spotifyDisplay"
							title="Spotify Display"
							thumbnail={thumbSpotifyDisplay}
						></WorkGridItem>
					</Section>
					<Section delay={1.5}>
						<WorkGridItem
							id="ecaTwitterDashboard"
							title="CrimeBook - Twitter Dashboard"
							thumbnail={thumbEcaTwitterDashboard}
						></WorkGridItem>
					</Section>
					<Section delay={1.5}>
						<WorkGridItem
							id="IA"
							title="School trip document management system"
							thumbnail={thumbIA}
						></WorkGridItem>
					</Section>
					<Section delay={2.2}>
						<WorkGridItem
							id="weatherAPI"
							title="Weather API website"
							thumbnail={thumbWeatherAPI}
						></WorkGridItem>
					</Section>
					<Section delay={2.2}>
						<WorkGridItem
							id="speedTest"
							title="Typing speed game website"
							thumbnail={startPageSpeedTest}
						></WorkGridItem>
					</Section>
					<Section delay={2.9}>
						<WorkGridItem
							id="shotmaniacs"
							title="Shotmaniacs company website"
							thumbnail={shotmaniacsThumb}
						></WorkGridItem>
					</Section>
				</SimpleGrid>
			</Container>
		</Layout>
	);
};

export default Works;
