import { Container, Badge, List, ListItem, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
	return (
		<Layout title="Discord Music Bot">
			<Container>
				<Title>
					Discord Music Bot <Badge>2021</Badge>
				</Title>
				<P>
					A bot which downloads music tracks from YouTube and streams it to the
					discord voice channel.
				</P>
				<List ml={4} my={4}>
					<ListItem>
						<Meta colorScheme="red">Non-functional</Meta>
						<span>Due to YouTube's policy this bot is prohibited</span>
					</ListItem>
					<ListItem>
						<Meta>Platforms</Meta>
						<span>Windows/Mac/Linux</span>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span>Discord.py</span>
					</ListItem>
					<ListItem>
						<Meta>Source</Meta>
						<Link href="https://github.com/PovilasKirna/music_bot" isExternal>
							{" "}
							https://github.com/PovilasKirna/music_bot{" "}
							<ExternalLinkIcon mx="2px" />
						</Link>
					</ListItem>
				</List>

				<WorkImage
					src="/images/works/thumbDiscordMusicBot_1.png"
					alt="Discord Music bot example"
				/>
			</Container>
		</Layout>
	);
};

export default Work;
