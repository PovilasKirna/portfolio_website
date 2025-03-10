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
					Note-Bridge Startup <Badge>2022-2024</Badge>
				</Title>
				<P>
					Note-Bridge is a startup that aims to bridge the gap between
					musicians and regular students. I am a Co-Founder and CTO of
					the startup. I am responsible for the development of the
					website and the backend. The website is a platform where
					musicians can offer their services to students who need help
					with their music studies. The website has been released to
					the public and maintained for a year. However, due to
					unforeseen circumstances, the startup has been put on hold.
					I guess first pancake is always burnt. But I learned a lot
					from this experience and would love to talk more about it.
				</P>

				<List ml={4} my={4}>
					<ListItem>
						<Meta>Browsers</Meta>
						<span>Chrome/Safari/Firefox/Opera/Edge</span>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span>
							ReactJS, NextJS, PostgreSQL, Supabase, ShadCN,
							TailwindCSS, Various Analytics Tools, etc. Let's
							talk about it together, I'd love to share more about
							it!
						</span>
					</ListItem>
					<ListItem>
						<Meta>Source</Meta>
						<Link href="https://note-bridge.com" isExternal>
							https://note-bridge.com
							<ExternalLinkIcon mx="2px" />
						</Link>
					</ListItem>
				</List>
				<WorkImage
					src="/images/works/notebridgelanding.png"
					alt="Note-Bridge Landing Page"
				/>
				<WorkImage
					src="/images/works/notebridgeprofile.png"
					alt="Note-Bridge Profile Page"
				/>
				<WorkImage
					src="/images/works/notebridgemap.png"
					alt="Note-Bridge Map Page"
				/>
			</Container>
		</Layout>
	);
};

export default Work;
