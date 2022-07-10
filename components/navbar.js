import Logo from "./logo";
import NextLink from "next/link";
import {
	Container,
	Box,
	Link,
	Stack,
	Heading,
	Flex,
	Menu,
	MenuItem,
	MenuList,
	MenuButton,
	IconButton,
	useColorModeValue,
	Button,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { IoLogoGithub } from "react-icons/io5";
import { SiBuymeacoffee } from "react-icons/si";
import ThemeToggleButton from "./theme-toggle-button";

const LinkItem = ({ href, path, children }) => {
	const active = path === href;
	const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");
	return (
		<NextLink href={href} passHref>
			<Link
				p={2}
				display="inline-flex"
				alignItems="center"
				style={{ gap: 4 }}
				pl={2}
				bg={active ? useColorModeValue("purple.500", "orange.200") : undefined}
				borderRadius={6}
				color={
					active
						? useColorModeValue("whiteAlpha.900", "gray200")
						: inactiveColor
				}
				_hover={{
					bg: `${useColorModeValue("purple.500", "orange.200")}`,
					color: `${useColorModeValue("whiteAlpha.900", "gray200")}`,
				}}
			>
				{children}
			</Link>
		</NextLink>
	);
};

const Navbar = (props) => {
	const { path } = props;
	return (
		<Box
			position="fixed"
			as="nav"
			w="100%"
			bg={useColorModeValue("#ffffff40", "#20202380")}
			css={{ backdropFilter: "blur(8px)" }}
			zIndex={1}
			{...props}
		>
			<Container
				display="flex"
				p={2}
				maxW="container.md"
				wrap="wrap"
				align="center"
				justify="space-between"
			>
				<Flex align="center" mr={5}>
					<Logo />
				</Flex>
				<Stack
					direction={{ base: "column", md: "row" }}
					display={{ base: "none", md: "flex" }}
					width={{ base: "full", md: "auto" }}
					alignItems="center"
					flexGrow={1}
					mt={{ base: 4, md: 0 }}
				>
					<LinkItem href="/projects" path={path}>
						Projects
					</LinkItem>
					<LinkItem href="/posts" path={path}>
						Posts
					</LinkItem>
					{/* <LinkItem
						target="_blank"
						href="https://www.buymeacoffee.com/KirnaPovilas"
					>
						<SiBuymeacoffee />
						Buy me a coffee
					</LinkItem>
					<LinkItem
						target="_blank"
						href="https://github.com/PovilasKirna/portfolio_website"
					>
						<IoLogoGithub />
						Source
					</LinkItem> */}
				</Stack>

				<Box flex={1} align="right">
					<ThemeToggleButton />
					<Box ml={2} display={{ base: "inline-block", md: "none" }}>
						<Menu>
							<MenuButton
								as={IconButton}
								icon={<HamburgerIcon />}
								variant="outline"
								aria-label="Options"
							/>
							<MenuList>
								<NextLink href="/" passHref>
									<MenuItem as={Link}>About</MenuItem>
								</NextLink>
								<NextLink href="/works" passHref>
									<MenuItem as={Link}>Works</MenuItem>
								</NextLink>
								<NextLink href="/posts" passHref>
									<MenuItem as={Link}>Posts</MenuItem>
								</NextLink>
								{/* <MenuItem
									as={Link}
									href="https://www.buymeacoffee.com/KirnaPovilas"
								>
									Buy me a coffee
								</MenuItem>
								<MenuItem
									as={Link}
									href="https://github.com/PovilasKirna/portfolio_website"
								>
									View Source
								</MenuItem> */}
							</MenuList>
						</Menu>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default Navbar;
