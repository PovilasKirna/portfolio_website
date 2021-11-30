import Link from "next/link";
import Image from "next/image";
import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.span`
	display: inline-flex;
	align-items: center;
	height: 20px;
	margin-bottom: 10px;
	img {
		transition: 200ms ease;
	}
	&:hover img {
		transform: rotate(-5deg);
	}
`;

const Logo = () => {
	const logo = `/images/povilas${useColorModeValue("", "-dark")}.png`;

	return (
		<Link href="/">
			<a>
				<LogoBox>
					<Image src={logo} width={98} height={30} alt="logo" />
				</LogoBox>
			</a>
		</Link>
	);
};

export default Logo;
