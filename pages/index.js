import NextLink from "next/link";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import Layout from "../components/layouts/article";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { BioSection, BioYear } from "../components/bio";
import Contact from "../components/contact";
import Head from "next/head";

import {
	Container,
	Box,
	Heading,
	Image,
	useColorModeValue,
	Link,
	Button,
	List,
	ListItem,
	Divider,
} from "@chakra-ui/react";
import {
	IoLogoDiscord,
	IoLogoGithub,
	IoLogoInstagram,
	IoLogoLinkedin,
	IoLogoTwitter,
} from "react-icons/io5";

const Page = () => {
	return (
		<Layout>
			<Container>
				<Head>
					<title> Povilas Kirna - Homepage</title>
				</Head>
				<Box display={{ md: "flex" }}>
					<Box flexGrow={1}>
						<Heading as="h2" variant="page-title">
							Povilas Kirna
						</Heading>
						<p>Digital craftsman (creator / developer / designer)</p>
					</Box>
					<Box
						flexShrink={0}
						mt={{ bae: 4, md: 0 }}
						ml={{ md: 6 }}
						align="center"
					>
						<Image
							borderColor="whiteAlpha.800"
							borderWidth={2}
							borderStyle="solid"
							maxWidth="100px"
							display="inline-block"
							borderRadius="full"
							src="/images/povilasKirna.jpg"
							alt="Profile Image"
						/>
					</Box>
				</Box>
				<Section delay={0.1}>
					<Heading as="h3" variant="section-title">
						Work
					</Heading>
					<Paragraph>
						Povilas is a freelancer and a developer curently living in Germany
						with a passion for building websites tools and general stuff he
						wants. He has a knack for all things coding scripts, making and
						designing websites all the way to solving real-life problems with
						code. When not online, he loves playing games, going to the gym or
						partying with his friends.
					</Paragraph>
					<Box align="center" my={4}>
						<NextLink href="/works">
							<Button
								rightIcon={<ChevronRightIcon />}
								colorScheme={useColorModeValue("purple", "orange")}
							>
								My Portfolio
							</Button>
						</NextLink>
					</Box>
				</Section>
				<Section delay={0.9}>
					<Heading as="h3" variant="section-title">
						Bio
					</Heading>
					<BioSection>
						<BioYear>2002</BioYear>
						Born in Kaunas, Lithuania.
					</BioSection>
					<BioSection>
						<BioYear>2019</BioYear>
						Attended International Baccalaureate with HL subjects Computer
						Science, Math, English Language.
					</BioSection>
					<BioSection>
						<BioYear>2021</BioYear>
						Worked as a freelance software engineer at Syntropy.
					</BioSection>
					<BioSection>
						<BioYear>2021 to present</BioYear>
						Studies Technical Computer Science in University of Twente.
					</BioSection>
				</Section>
				<Section delay={1.7}>
					<Heading as="h3" variant="section-title">
						I ♥
					</Heading>
					I Love Video Games,{" "}
					<Link
						href="https://www.youtube.com/channel/UChTGJ-7Sf-Xb4GXnYE7XhIg"
						target="_blank"
					>
						Creating Content
					</Link>
					, Music, Going To The Gym, Cars.
				</Section>
				{/* <Section delay={2.5} fontSize="sm">
					<Heading as="h3" variant="section-title">
						My skills
					</Heading>
					<SkillsPanel
						title="Languages"
						skillList={[
							{ name: "Python", skillLevel: 4 },
							{ name: "C++", skillLevel: 3 },
							{ name: "JavaScript", skillLevel: 2 },
							{ name: "Java", skillLevel: 2 },
						]}
					/>
					<Divider my={6} />
					<SkillsPanel
						title="Frameworks"
						skillList={[
							{ name: "React", skillLevel: 2 },
							{ name: "Next.JS", skillLevel: 2 },
							{ name: "Flask", skillLevel: 4 },
						]}
					/>
					<Divider my={6} />
					<Paragraph>
						If you want to know more about my skills check out{" "}
						<Link href="/works">My portfolio</Link> and don't hesitate to
						contact me.
					</Paragraph>
				</Section> */}

				<Section delay={2.5}>
					<Heading as="h3" variant="section-title">
						Let&apos;s connect
					</Heading>
					<List>
						<ListItem>
							<Link href="https://github.com/PovilasKirna" target="_blank">
								<Button
									variant="ghost"
									colorScheme={useColorModeValue("purple", "orange")}
									leftIcon={<IoLogoGithub />}
								>
									@PovilasKirna
								</Button>
							</Link>
						</ListItem>
						<ListItem>
							<Link href="https://twitter.com/KirnaPovilas" target="_blank">
								<Button
									variant="ghost"
									colorScheme={useColorModeValue("purple", "orange")}
									leftIcon={<IoLogoTwitter />}
								>
									@KirnaPovilas
								</Button>
							</Link>
						</ListItem>
						<ListItem>
							<Link
								href="https://www.instagram.com/kirnapovilas/"
								target="_blank"
							>
								<Button
									variant="ghost"
									colorScheme={useColorModeValue("purple", "orange")}
									leftIcon={<IoLogoInstagram />}
								>
									@KirnaPovilas
								</Button>
							</Link>
						</ListItem>
						<ListItem>
							<Link
								href="https://www.linkedin.com/in/KirnaPovilas"
								target="_blank"
							>
								<Button
									variant="ghost"
									colorScheme={useColorModeValue("purple", "orange")}
									leftIcon={<IoLogoLinkedin />}
								>
									@Povilas Kirna
								</Button>
							</Link>
						</ListItem>
						<ListItem>
							<Link href="/" target="_blank">
								<Button
									variant="ghost"
									colorScheme={useColorModeValue("purple", "orange")}
									leftIcon={<IoLogoDiscord />}
								>
									Discord (Under Development)
								</Button>
							</Link>
						</ListItem>
					</List>
				</Section>
				<Section delay={3.3}>
					<Heading as="h3" variant="section-title">
						Contact me
					</Heading>
					<Contact />
				</Section>
			</Container>
		</Layout>
	);
};

export default Page;
