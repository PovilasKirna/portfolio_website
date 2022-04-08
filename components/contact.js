import {
	Box,
	Button,
	useColorModeValue,
	Input,
	InputGroup,
	Textarea,
	Stack,
	FormControl,
	FormLabel,
	FormErrorMessage,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { show } from "../redux/features/notificationSlice";
//import { send, timeout } from "../redux/features/emailSlice";
import { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

function ContactForm(props) {
	const dispatch = useDispatch();
	const recaptchaRef = useRef(null);

	function validateName(value) {
		let error;
		if (!/^[A-Za-z\s]+$/.test(value)) {
			error = "Name can only contain [A-Za-z ] characters";
		} else if (value.length < 3) {
			error = "Name must be at least 3 letters long";
		}
		if (!value) {
			error = null;
		}
		return error;
	}

	return (
		<Formik
			initialValues={{
				name: "",
				email: "",
				body: "",
			}}
			onSubmit={async (values, actions) => {
				const token = await recaptchaRef.current?.executeAsync();

				const response = await fetch("/api/auth", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						token,
					}),
				});
				recaptchaRef.current.reset();
				console.log("Verification done");

				if (response.ok) {
					setTimeout(async () => {
						const response = await fetch("/api/mail", {
							method: "post",
							body: JSON.stringify(values, null, 2),
							token,
						});
						const data = await response.json();
						if (data.status === "Ok") {
							dispatch(
								show({
									Title: "Success",
									Description: "Your message has been sent!",
								})
							);
						} else {
							dispatch(
								show({
									Title: "Uh Oh!",
									Description: "Something went wrong, please try again later.",
								})
							);
						}
						actions.setSubmitting(false);
						//const time = Date.now();
						//dispatch(send(time));
					}, 1000);
				} else {
					setTimeout(async () => {
						dispatch(
							show({
								Title: "Beep Boop",
								Description: "I know you're a robot!",
							})
						);
						actions.setSubmitting(false);
					}, 1000);
				}
			}}
		>
			{(props) => (
				<Form>
					<ReCAPTCHA
						ref={recaptchaRef}
						sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
						size="invisible"
					/>
					<Box
						bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
						padding={4}
						borderRadius={4}
					>
						<Stack spacing={5}>
							<InputGroup align="left" maxW="container.md">
								<Box display="block">
									<Field name="name" validate={validateName}>
										{({ field, form }) => (
											<FormControl
												isRequired
												isInvalid={form.errors.name && form.touched.name}
											>
												<FormLabel htmlFor="name">Your Name</FormLabel>
												<Input
													{...field}
													id="name"
													type="text"
													placeholder="Mr. Robot"
													focusBorderColor="blue.300"
													bg={useColorModeValue(
														"whiteAlpha.400",
														"whiteAlpha.100"
													)}
												/>
												<FormErrorMessage>{form.errors.name}</FormErrorMessage>
											</FormControl>
										)}
									</Field>
								</Box>
								<Box display="block" ml="auto">
									<Field name="email">
										{({ field, form }) => (
											<FormControl
												isRequired
												isInvalid={form.errors.email && form.touched.email}
											>
												<FormLabel htmlFor="email">Email Address</FormLabel>
												<InputGroup>
													<Input
														{...field}
														id="email"
														type="email"
														placeholder="example@example.com"
														focusBorderColor="blue.300"
														bg={useColorModeValue(
															"whiteAlpha.400",
															"whiteAlpha.100"
														)}
													/>

													<FormErrorMessage>
														{form.errors.email}
													</FormErrorMessage>
												</InputGroup>
											</FormControl>
										)}
									</Field>
								</Box>
							</InputGroup>
							<Field name="body">
								{({ field, form }) => (
									<FormControl
										isInvalid={form.errors.email && form.touched.email}
										isRequired
									>
										<Textarea
											{...field}
											id="body"
											type="text"
											placeholder="Don't be shy say something :)"
											focusBorderColor="blue.300"
											bg={useColorModeValue("whiteAlpha.400", "whiteAlpha.100")}
										/>
									</FormControl>
								)}
							</Field>
							<Box my={4} align="right">
								<Button
									rightIcon={<ChevronRightIcon />}
									colorScheme={useColorModeValue("purple", "orange")}
									isLoading={props.isSubmitting}
									//isDisabled={useSelector((state) => state.email.sent)}
									type="submit"
								>
									Send
								</Button>
							</Box>
						</Stack>
					</Box>
				</Form>
			)}
		</Formik>
	);
}
export default ContactForm;
