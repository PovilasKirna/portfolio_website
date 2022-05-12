import { Container, Badge, List, ListItem, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
	return (
		<Layout title="WeatherAPI">
			<Container>
				<Title>
					Weather API website <Badge>2022</Badge>
				</Title>
				<P>
					This is a a Next.JS project for simple API usage. You can search for
					weather conditions in a specific place, website shows a minimal clean
					weather display.
				</P>
				<List ml={4} my={4}>
					<ListItem>
						<Meta>Website</Meta>
						<Link href="https://weather-api-website.vercel.app">
							https://weather-api-website.vercel.app{" "}
							<ExternalLinkIcon mx="2px" />
						</Link>
					</ListItem>
					<ListItem>
						<Meta>Browsers</Meta>
						<span>Chrome/Safari/Firefox/Opera/Edge</span>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span>Next.JS, React, MaterialUI, OpenWeather API</span>
					</ListItem>
					<ListItem>
						<Meta>Source</Meta>
						<Link href="https://github.com/PovilasKirna/Weather_API_website">
							{" "}
							https://github.com/PovilasKirna/Weather_API_website{" "}
							<ExternalLinkIcon mx="2px" />
						</Link>
					</ListItem>
				</List>
				<WorkImage
					src="/images/works/exWeatherAPI.png"
					alt="Weather API website example"
				/>
			</Container>
		</Layout>
	);
};

export default Work;
