import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { Heading } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { hide } from "../redux/features/notificationSlice";

const NotificationContainerVariants = {
	hidden: {
		opacity: 0,
		x: "100vw",
	},
	visible: {
		x: "52vw",
		position: "fixed",
		zIndex: 100,
		opacity: 1,
		transition: {
			duration: 0.75,
			type: "spring",
		},
	},
};

export const Notification = ({ showNotification }) => {
	const dispatch = useDispatch();
	const { Title } = useSelector((state) => state.notification);
	const { Description } = useSelector((state) => state.notification);

	useEffect(() => {
		setTimeout(() => {
			dispatch(hide());
		}, 15000);
	});

	return (
		<AnimatePresence exitBeforeEnter>
			{showNotification && (
				<motion.div
					className="container"
					variants={NotificationContainerVariants}
					initial={"hidden"}
					animate={"visible"}
					exit={{ opacity: 0 }}
				>
					<motion.div
						className="notification"
						color={"orange.500"}
						style={{
							backgroundColor: useColorModeValue(
								"rgb(245, 240, 232)",
								"rgb(49, 49, 52)"
							),
							padding: "10px",
							margin: "10px",

							width: "15vw",
							height: "auto",

							display: "flex",
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "top",
							borderRadius: "5px",

							position: "absolute",
						}}
						whileHover={{
							scale: 1.05,
							boxShadow: "3px 3px 5px gray",
						}}
					>
						<Box className="notification-text">
							<Heading
								className="notification-title"
								as="h5"
								variant="notification-title"
							>
								{Title}
							</Heading>
							<p>{Description}</p>
						</Box>
						<CloseIcon
							padding="2px"
							color={useColorModeValue("rgb(26, 32, 44)", "rgb(237, 237, 238)")}
							onClick={() => {
								dispatch(hide());
							}}
						/>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};
