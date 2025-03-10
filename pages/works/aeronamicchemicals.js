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
					Aeronamic Chemical Manager <Badge>2024-Present</Badge>
				</Title>
				<P>
					Aeronamic Chemical Manager is a web application that helps
					the client to manage their chemical inventory. The
					application is built with VueJS and ArasInnovator. The
					application is a platform where the client can manage their
					chemical inventory, create chemical reports, and manage
					their chemical storage. The application is currently in
					development and will be internally deployed in 2025. I am
					responsible for the development of the website and the
					backend and maintaining and updating the application as the
					client needs.
				</P>

				<List ml={4} my={4}>
					<ListItem>
						<Meta>Browsers</Meta>
						<span>Chrome/Safari/Firefox/Opera/Edge</span>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span>
							VueJS, ArasInnovator, TanstackQuery, TailwindCSS,
							ShadCN.
						</span>
					</ListItem>
					<ListItem>
						<Meta>Source</Meta>
						<span>Private repository. Client NDA.</span>
					</ListItem>
				</List>
				<WorkImage
					src="/images/works/aeraddchem.png"
					alt="Aeronamic Chemical Manager Add Chemical Page"
				/>
				<WorkImage
					src="/images/works/aerchemicals.png"
					alt="Aeronamic Chemical Manager Chemicals Page"
				/>
				<WorkImage
					src="/images/works/aerdoc.png"
					alt="Aeronamic Chemical Manager Document Page"
				/>
			</Container>
		</Layout>
	);
};

export default Work;
