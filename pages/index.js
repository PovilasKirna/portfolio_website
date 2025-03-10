import NextLink from "next/link";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import Layout from "../components/layouts/article";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { BioSection, BioYear } from "../components/bio";
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
} from "@chakra-ui/react";
import {
	IoLogoGithub,
	IoLogoInstagram,
	IoLogoLinkedin,
	IoLogoTwitter,
	IoMailOpenOutline,
	IoDocumentText,
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
						<p>
							Digital craftsman (creator / developer / designer)
						</p>
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
							height="100px"
							width="100px"
							objectFit="cover"
							display="inline-block"
							borderRadius="full"
							src="/images/povilasKirna.png"
							alt="Profile Image"
						/>
					</Box>
				</Box>
				<Section delay={0.1}>
					<Heading as="h3" variant="section-title">
						Work
					</Heading>
					<Paragraph>
						Povilas is a freelancer and a web developer curently
						living in Netherlands with a passion for building
						websites tools and general stuff he wants. He has a
						knack for all things coding scripts, making and
						designing websites all the way to solving real-life
						problems with code. When not online, he loves playing
						games, going to the gym or partying with his friends.
					</Paragraph>
					<Box align="center" my={4}>
						<NextLink href="/projects">
							<Button
								rightIcon={<ChevronRightIcon />}
								colorScheme={useColorModeValue(
									"purple",
									"orange"
								)}
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
						Attended International Baccalaureate with HL subjects
						Computer Science, Math, English Language.
					</BioSection>
					<BioSection>
						<BioYear>2021</BioYear>
						Worked as a freelance software engineer at Syntropy.
					</BioSection>
					<BioSection>
						<BioYear>2021</BioYear>
						Studies Business Information Technology in University of
						Twente.
					</BioSection>
					<BioSection>
						<BioYear>2022</BioYear>
						Started working at Note-Bridge as Co-Founder & CTO.
					</BioSection>
					<BioSection>
						<BioYear>2024</BioYear>
						Started working at Softwerk as a Full-Stack Web
						Developer.
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
				<Section delay={2.5}>
					<Heading as="h3" variant="section-title">
						Food for thought
					</Heading>
					<Paragraph>
						"Success is not the key to happiness. Happiness is the
						key to success. If you love what you are doing, you will
						be successful."
					</Paragraph>
				</Section>
				<Section delay={3.2}>
					<Heading as="h3" variant="section-title">
						What I&apos;m doing now
					</Heading>
					<Paragraph>
						Please don't hesitate to contact me if you have any
						questions or if you want to work on a project together.
						I'm always open to new opportunities and challenges. I'm
						currently reworking this website because of how terrible
						the code is. When I wrote this I was very fresh to web
						development and I didn't know much about it.
					</Paragraph>
				</Section>

				<Section delay={3.9}>
					<Heading as="h3" variant="section-title">
						Let&apos;s connect
					</Heading>
					<List>
						<ListItem>
							<Link
								href="https://docs.google.com/document/d/1WPOY7tfs_d62otf2MsYJTDa2n5BtwDsoukCX1Fl1EzA/edit?usp=sharing"
								target="_blank"
							>
								<Button
									variant="ghost"
									colorScheme={useColorModeValue(
										"purple",
										"orange"
									)}
									leftIcon={<IoDocumentText />}
								>
									My Resume
								</Button>
							</Link>
						</ListItem>

						<ListItem>
							<Link
								href="mailto:povilas.kirna@gmail.com"
								target="_blank"
							>
								<Button
									variant="ghost"
									colorScheme={useColorModeValue(
										"purple",
										"orange"
									)}
									leftIcon={<IoMailOpenOutline />}
								>
									povilas.kirna@gmail.com
								</Button>
							</Link>
						</ListItem>
						<ListItem>
							<Link
								href="https://github.com/PovilasKirna"
								target="_blank"
							>
								<Button
									variant="ghost"
									colorScheme={useColorModeValue(
										"purple",
										"orange"
									)}
									leftIcon={<IoLogoGithub />}
								>
									@PovilasKirna
								</Button>
							</Link>
						</ListItem>
						<ListItem>
							<Link
								href="https://twitter.com/KirnaPovilas"
								target="_blank"
							>
								<Button
									variant="ghost"
									colorScheme={useColorModeValue(
										"purple",
										"orange"
									)}
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
									colorScheme={useColorModeValue(
										"purple",
										"orange"
									)}
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
									colorScheme={useColorModeValue(
										"purple",
										"orange"
									)}
									leftIcon={<IoLogoLinkedin />}
								>
									@Povilas Kirna
								</Button>
							</Link>
						</ListItem>
					</List>
				</Section>
			</Container>
		</Layout>
	);
};

export default Page;
