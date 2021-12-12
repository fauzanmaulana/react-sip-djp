import { Button } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { Flex, Heading } from "@chakra-ui/layout";
import React from "react";
import { useHistory } from "react-router";

const HeadingDashboardComponent = ({ title, button }) => {
	const history = useHistory();

	return (
		<Flex justifyContent="space-between" alignItems="center" mb="7">
			<Heading as="h2" size="lg">
				{title}
			</Heading>

			{button && (
				<Button
					colorScheme="blue"
					size="sm"
					leftIcon={<Icon as={button.icon} />}
					onClick={() => history.push(button.url)}
				>
					{button.title}
				</Button>
			)}
		</Flex>
	);
};

export default HeadingDashboardComponent;
