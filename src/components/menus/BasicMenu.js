import Icon from "@chakra-ui/icon";
import { Flex } from "@chakra-ui/layout";
import React from "react";
import { Link } from "react-router-dom";

const BasicMenu = ({ title, icon, route }) => {
	return (
		<Link to={route} style={{ textDecoration: "none" }}>
			<Flex
				align="center"
				borderRadius="lg"
				cursor="pointer"
				p="4"
				mx="3"
				_hover={{
					bg: "cyan.400",
					color: "white",
				}}
			>
				<Icon
					mr="4"
					fontSize="16"
					_groupHover={{
						color: "white",
					}}
					as={icon}
				/>
				{title}
			</Flex>
		</Link>
	);
};

export default BasicMenu;
