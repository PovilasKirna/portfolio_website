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
					Van Gogh Museum Accesibility website <Badge>2023</Badge>
				</Title>
				<P>
					A website that helps users with various disabilities to
					navigate the Van Gogh Museum website. The website includes
					an AI chatbot that helps users navigate the website and
					provides information about the museum. The website also
					includes a camera scanner to scan QR Codes that allows users
					to get information about the artwork.
				</P>

				<List ml={4} my={4}>
					<ListItem>
						<Meta>Platform</Meta>
						<span>Mobile</span>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span>
							ReactJS, NextJS, ChatGPT AI, ShadCN, TailwindCSS,
							Camera API.
						</span>
					</ListItem>
					<ListItem>
						<Meta>Source</Meta>
						<Link
							href="https://hci-project-museum-webapp.vercel.app/"
							isExternal
						>
							https://hci-project-museum-webapp.vercel.app/
							<ExternalLinkIcon mx="2px" />
						</Link>
					</ListItem>
				</List>
				<WorkImage
					src="/images/works/hcilanding.png"
					alt="Van Gogh museum website Landing Page"
				/>
				<WorkImage
					src="/images/works/hciai.png"
					alt="Van Gogh museum website AI chatbot"
				/>
			</Container>
		</Layout>
	);
};

export default Work;
