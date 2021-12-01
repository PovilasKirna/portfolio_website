import { Container, Badge, List, ListItem, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
	return (
		<Layout title="Spotify Display">
			<Container>
				<Title>
					Spotify Display <Badge>2021</Badge>
				</Title>
				<P>A website which display your currently playing song on Spotify.</P>
				<List ml={4} my={4}>
					<ListItem>
						<Meta>Website</Meta>
						<Link href="https://spotify-display.povilaskirna.com">
							https://spotify-display.povilaskirna.com{" "}
							<ExternalLinkIcon mx="2px" />
						</Link>
					</ListItem>
					<ListItem>
						<Meta>Browsers</Meta>
						<span>Chrome/Safari/Firefox/Opera/Edge</span>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span>Next.JS, React, TailwindCSS, Spotify Web API</span>
					</ListItem>
					<ListItem>
						<Meta>Source</Meta>
						<Link href="https://github.com/PovilasKirna/spotify-display">
							{" "}
							https://github.com/PovilasKirna/spotify-display{" "}
							<ExternalLinkIcon mx="2px" />
						</Link>
					</ListItem>
				</List>
				<WorkImage
					src="/images/works/exSpotifyDisplay.png"
					alt="Spotify Dispay example"
				/>
				<WorkImage
					src="/images/works/thumbSpotifyDisplay.png"
					alt="Spotify Dispay login example"
				/>
			</Container>
		</Layout>
	);
};

export default Work;
