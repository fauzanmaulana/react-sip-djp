import { Center, Heading, Img, Stack } from "@chakra-ui/react";
import React from "react";
import { pageNotFoundIcon } from "../Utils";

const NotFoundPage = () => {
	return (
		<Center bg="#EDF2F7" h="100vh" color="white">
			<Stack align="center" direction="column" spacing="5">
				<Heading color="#434A53">Page Not Found</Heading>
				<Img src={pageNotFoundIcon} width="200px" />
			</Stack>
		</Center>
	);
};

export default NotFoundPage;
