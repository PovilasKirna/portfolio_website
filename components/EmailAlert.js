import {
	Alert,
	AlertIcon,
	AlertTitle,
	AlertDescription,
	CloseButton,
	Box,
} from "@chakra-ui/react";

const EmailAlert = (props) => {
	return (
		<Alert status="success" display={props.display}>
			<AlertIcon />
			<Box flex="1">
				<AlertTitle>Success!</AlertTitle>
				<AlertDescription display="block">
					Email sent - hold tight!
				</AlertDescription>
			</Box>
			<CloseButton position="absolute" right="8px" top="8px" />
		</Alert>
	);
};
export default EmailAlert;
