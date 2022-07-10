import { Container, Badge, List, ListItem, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
	return (
		<Layout title="Shotmaniacs">
			<Container>
				<Title>
					Shotmaniacs company website <Badge>2022</Badge>
				</Title>
				<P>
					This is a project I was working with a team on for company{" "}
					<Link href="https://www.instagram.com/shotmaniacs/?hl=en" isExternal>
						Shotmaniacs
					</Link>{" "}
					We made a website where company clients can book events and employees
					can register to attend the event.
				</P>
				<List ml={4} my={4}>
					<ListItem>
						<Meta>Website</Meta>
						<Link
							href="http://shotmaniacs3.paas.hosted-by-previder.com/Project/pages/index.html"
							isExternal
						>
							Shotmaniacs website
							<ExternalLinkIcon mx="2px" />
						</Link>
					</ListItem>
					<ListItem>
						<Meta>Browsers</Meta>
						<span>Chrome/Safari/Firefox/Opera</span>
					</ListItem>
					<ListItem>
						<Meta>Authors</Meta>
						<span>
							Povilas Kirna, Maxim Frano, Yasin Fahmy, Aastha Agrawal, Alexandar
							Antonov
						</span>
					</ListItem>
				</List>
				<WorkImage
					src="/images/works/shotmaniacsThumb.png"
					alt="Landing page of Shotmaniacs website"
				/>
				<WorkImage src="/images/works/shotmaniacsLogin.png" alt="Login page" />
				<WorkImage
					src="/images/works/shotmaniacsAdminPanel.png"
					alt="Admin panel of shotmaniacs website"
				/>
				<WorkImage
					src="/images/works/shotmaniacsMyBookings.png"
					alt="My bookings page"
				/>
			</Container>
		</Layout>
	);
};

export default Work;
