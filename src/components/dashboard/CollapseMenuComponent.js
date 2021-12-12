import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
} from "@chakra-ui/accordion";
import Icon from "@chakra-ui/icon";
import { Box, Flex } from "@chakra-ui/layout";
import React from "react";
import { Link } from "react-router-dom";

const CollapseMenuComponent = ({ title, icon, menus }) => {
	return (
		<Accordion allowToggle>
			<AccordionItem border={0} p="3">
				<h2>
					<AccordionButton
						p="4"
						borderRadius="lg"
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
						<Box flex="1" textAlign="left">
							{title}
						</Box>
						<AccordionIcon />
					</AccordionButton>
				</h2>
				<AccordionPanel pb={4}>
					{menus.map((menu, idx) => (
						<Link to={menu.route} style={{ textDecoration: "none" }} key={idx}>
							<Flex
								align="center"
								borderRadius="lg"
								cursor="pointer"
								p="4"
								pr="0"
								_hover={{
									bg: "cyan.300",
									color: "white",
								}}
							>
								<Icon
									mr="4"
									fontSize="16"
									_groupHover={{
										color: "white",
									}}
									as={menu.icon}
								/>
								{menu.title}
							</Flex>
						</Link>
					))}
				</AccordionPanel>
			</AccordionItem>
		</Accordion>
	);
};

export default CollapseMenuComponent;
