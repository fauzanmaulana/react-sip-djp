import { CloseButton } from "@chakra-ui/close-button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Flex, Text } from "@chakra-ui/layout";
import React from "react";
import { FiHome, FiMenu, FiSettings } from "react-icons/fi";
import BasicMenu from "../menus/BasicMenu";
import CollapseMenu from "../menus/CollapseMenu";

const Sidebar = ({ onClose, ...rest }) => {
	return (
		<Box
			transition="3s ease"
			bg={useColorModeValue("white", "gray.900")}
			borderRight="1px"
			borderRightColor={useColorModeValue("gray.200", "gray.700")}
			w={{ base: "full", md: 60 }}
			pos="fixed"
			h="full"
			{...rest}
		>
			<Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
				<Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
					Logo
				</Text>
				<CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
			</Flex>

			<BasicMenu title="Dashboard" icon={FiHome} route="/dashboard" />

			<CollapseMenu
				title="Data"
				icon={FiSettings}
				menus={[
					{
						title: "Category",
						icon: FiMenu,
						route: "/dashboard/category",
					},
					{
						title: "Product",
						icon: FiMenu,
						route: "/dashboard/product",
					},
				]}
			/>
		</Box>
	);
};

export default Sidebar;
