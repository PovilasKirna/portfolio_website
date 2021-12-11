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
					School trip DMS <Badge>2020-2021</Badge>
				</Title>
				<P>
					A system used by school staff to exchange information and documents
					about upcoming school trips faster. More information in github
					repository.
				</P>

				<List ml={4} my={4}>
					<ListItem>
						<Meta>Browsers</Meta>
						<span>Chrome/Safari/Firefox/Opera/Edge</span>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span>Flask, MySQL</span>
					</ListItem>
					<ListItem>
						<Meta>Source</Meta>
						<Link href="https://github.com/PovilasKirna/IA">
							{" "}
							https://github.com/PovilasKirna/IA
							<ExternalLinkIcon mx="2px" />
						</Link>
					</ListItem>
				</List>
				<WorkImage src="/images/works/exIA.jpg" alt="IA example" />
			</Container>
		</Layout>
	);
};

export default Work;
