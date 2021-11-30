import { Heading, Container, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import thumbSpotifyDisplay from "../public/images/works/thumbSpotifyDisplay.png";

const Works = () => {
	return (
		<Container>
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
						id="spotifyDisplay"
						title="Spotify Display"
						thumbnail={thumbSpotifyDisplay}
					></WorkGridItem>
					A now playing Spotify display website
				</Section>
			</SimpleGrid>
		</Container>
	);
};

export default Works;
