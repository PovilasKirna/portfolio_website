import { Container, Badge, List, ListItem, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
	return (
		<Layout title="Space Invaders">
			<Container>
				<Title>
					Sudoku <Badge>2020</Badge>
				</Title>
				<P>
					Python game which I created as a final project in my C++ OOP course.
				</P>
				<List ml={4} my={4}>
					<ListItem>
						<Meta>Platforms</Meta>
						<span>Windows/Mac/Linux</span>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span>Pygame, MySQL</span>
					</ListItem>
					<ListItem>
						<Meta>Source</Meta>
						<Link
							href="https://github.com/PovilasKirna/PythonOOP-Web-Final"
							isExternal
						>
							https://github.com/PovilasKirna/PythonOOP-Web-Final
							<ExternalLinkIcon mx="2px" />
						</Link>
					</ListItem>
				</List>
				<WorkImage src="/images/works/thumbSudoku.png" alt="Sudoku example" />
			</Container>
		</Layout>
	);
};
export default Work;
