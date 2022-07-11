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
					Spotify Dashboard <Badge>2021-2022</Badge>
				</Title>
				<P>
					A website which displays your currently playing song on Spotify and
					finds matching lyrics if you feel like karaoke night. This website
					also works as a web-player, after logging in you can search, play and
					like songs on the website.
				</P>
				<List ml={4} my={4}>
					<ListItem>
						<Meta>Browsers</Meta>
						<span>Chrome/Safari/Firefox/Opera/Edge</span>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span>
							Express.JS, React, TailwindCSS, Spotify Web API, Genius API
						</span>
					</ListItem>
					<ListItem>
						<Meta>Source</Meta>
						<Link
							href="https://github.com/PovilasKirna/spotify-dashboard"
							isExternal
						>
							{" "}
							https://github.com/PovilasKirna/spotify-dashboard{" "}
							<ExternalLinkIcon mx="2px" />
						</Link>
					</ListItem>
				</List>
				<WorkImage
					src="/images/works/login.png"
					alt="Spotify Dispay login example"
				/>
				<WorkImage
					src="/images/works/search.png"
					alt="Spotify Search example"
				/>
				<WorkImage
					src="/images/works/lyrics.png"
					alt="Spotify Lyrics example"
				/>
			</Container>
		</Layout>
	);
};

export default Work;
