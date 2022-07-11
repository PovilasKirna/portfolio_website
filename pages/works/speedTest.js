import { Container, Badge, List, ListItem, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
	return (
		<Layout title="SpeedTest">
			<Container>
				<Title>
					Typing speed game website <Badge>2022</Badge>
				</Title>
				<P>
					This is a React.JS project inspired by{" "}
					<Link href="https://monkeytype.com" isExternal>
						Monkeytype.com
					</Link>{" "}
					website. It is a typing speed game and it is still not finished.
				</P>
				<List ml={4} my={4}>
					<ListItem>
						<Meta>Website</Meta>
						<Link href="speedtest-website.vercel.app" isExternal>
							speedtest-website.vercel.app
							<ExternalLinkIcon mx="2px" />
						</Link>
					</ListItem>
					<ListItem>
						<Meta>Browsers</Meta>
						<span>Chrome/Safari/Firefox/Opera</span>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span> React.JS, Redux, Chartjs, TailwindCSS </span>
					</ListItem>
					<ListItem>
						<Meta>Source</Meta>
						<Link
							href="https://github.com/PovilasKirna/speedtest-website"
							isExternal
						>
							https://github.com/PovilasKirna/speedtest-website
							<ExternalLinkIcon mx="2px" />
						</Link>
					</ListItem>
				</List>
				<WorkImage
					src="/images/works/landingPageSpeedtest.png"
					alt="Landing page of SpeedTest website"
				/>
				<WorkImage
					src="/images/works/gameSpeedtest.png"
					alt="Game page of SpeedTest website"
				/>
				<WorkImage
					src="/images/works/endPageSpeedtest.png"
					alt="End/Score page of SpeedTest website"
				/>
			</Container>
		</Layout>
	);
};

export default Work;
