import { Box, Grid, GridItem } from "@chakra-ui/layout";
import { StarIcon } from "@chakra-ui/icons";
import { useColorModeValue } from "@chakra-ui/color-mode";

const Skill = ({ name, skillLevel }) => {
	return (
		<Box w="100%" h="10" bg="blue.500" key={name}>
			{name}
		</Box>
	);
};

const SkillsPanel = ({ title, skillList }) => {
	return (
		<Box>
			<Grid
				templateRows={`repeat(${skillList.length}, 1fr)`}
				templateColumns="repeat(5, 1fr)"
				gap={2}
				align="center"
			>
				<GridItem colSpan={1} fontWeight="bold">
					{title}
				</GridItem>
				<GridItem colSpan={1}>Begginer</GridItem>
				<GridItem colSpan={1}>Competent</GridItem>
				<GridItem colSpan={1}>Proficient</GridItem>
				<GridItem colSpan={1}>Expert</GridItem>
				{skillList.map((skill) => {
					return (
						<>
							<GridItem colSpan={1} key={skill.name}>
								{skill.name}
							</GridItem>
							{Array(4)
								.fill("")
								.map((_, i) => (
									<GridItem key={skill.name + i}>
										{/* Fix errors with the keys */}
										<StarIcon
											key={i}
											color={
												i < skill.skillLevel
													? useColorModeValue("purple.500", "orange.200")
													: "whiteAlpha.900"
											}
										/>
									</GridItem>
								))}
						</>
					);
				})}
			</Grid>
		</Box>
	);
};

export default SkillsPanel;
