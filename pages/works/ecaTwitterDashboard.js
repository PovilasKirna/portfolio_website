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
					ECA Twitter Dashboard - CrimeBook <Badge>2021</Badge>
				</Title>
				<P>
					A live time dashboard that maps tweets containing P2000 code on the
					map. Users can see the heatmap of criminally active locations and
					choose not to go there.
				</P>
				<List ml={4} my={4}>
					<ListItem>
						<Meta>Authors</Meta>
						<span>
							Povilas Kirna, Eren Kodal, Remus Suciu, Kieran Allan, Bjorn
							Roubos, Peter Simeonov
						</span>
					</ListItem>
					<ListItem>
						<Meta>Browsers</Meta>
						<span>Chrome/Safari/Firefox/Opera/Edge</span>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span>ECA library, Google Maps JS API, Google Charts</span>
					</ListItem>
					<ListItem>
						<Meta>Source</Meta>
						<Link
							href="https://github.com/PovilasKirna/Twitter-dashboard-ECA"
							isExternal
						>
							{" "}
							https://github.com/PovilasKirna/Twitter-dashboard-ECA{" "}
							<ExternalLinkIcon mx="2px" />
						</Link>
					</ListItem>
				</List>
				<WorkImage
					src="/images/works/exEcaTwitterDashboard.png"
					alt="Eca twitter dashboard example"
				/>
				<WorkImage
					src="/images/works/thumbEcaTwitterDashboard.png"
					alt="Eca twitter dashboard example"
				/>
			</Container>
		</Layout>
	);
};

export default Work;
