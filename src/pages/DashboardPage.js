import React from "react";
import {
	Box,
	useColorModeValue,
	Drawer,
	DrawerContent,
	useDisclosure,
} from "@chakra-ui/react";
import Sidebar from "../components/utils/Sidebar";
import MobileNav from "../components/utils/MobileNav";
import { Route, Switch, useHistory } from "react-router";
import DashboardPageRoute from "../routes/DashboardPageRoute";

const Dashboard = () => {
	const userToken = localStorage.getItem("user_token");

	const { isOpen, onOpen, onClose } = useDisclosure();
	const history = useHistory();

	if (!userToken) {
		history.push("/login");
	}

	return (
		<>
			<Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
				<Sidebar
					onClose={() => onClose}
					display={{ base: "none", md: "block" }}
				/>

				<Drawer
					autoFocus={false}
					isOpen={isOpen}
					placement="left"
					onClose={onClose}
					returnFocusOnClose={false}
					onOverlayClick={onClose}
					size="full"
				>
					<DrawerContent>
						<Sidebar onClose={onClose} />
					</DrawerContent>
				</Drawer>

				{/* mobilenav */}
				<MobileNav onOpen={onOpen} />

				<Box ml={{ base: 0, md: 60 }} p="7">
					{/* routes */}
					<Switch>
						<Route path="/dashboard/:data" component={DashboardPageRoute} />
						<Route component={DashboardPageRoute} />
					</Switch>
				</Box>
			</Box>
		</>
	);
};

export default Dashboard;
