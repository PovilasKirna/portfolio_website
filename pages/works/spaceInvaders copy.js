import { Container, Badge, List, ListItem, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
	return (
		<Layout title="Space Invaders">
			<Container>
				<Title>
					Space Invaders <Badge>2016</Badge>
				</Title>
				<P>
					A python game which was one of the projects I did back in school. A
					clone of an original 1978 Space Invaders game.
				</P>
				<List ml={4} my={4}>
					<ListItem>
						<Meta>Platforms</Meta>
						<span>Windows/Mac/Linux</span>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span>Pygame</span>
					</ListItem>
				</List>
				<WorkImage
					src="/images/works/thumbSpaceInvaders.png"
					alt="Space Invaders example"
				/>
			</Container>
		</Layout>
	);
};
export default Work;
