import React, { useContext, useEffect } from "react";
import {
	Box,
	useColorModeValue,
	Drawer,
	DrawerContent,
	useDisclosure,
} from "@chakra-ui/react";
import SidebarComponent from "../components/dashboard/SidebarComponent";
import NavbarComponent from "../components/dashboard/NavbarComponent";
import { Route, Switch, useHistory } from "react-router";
import DashboardPageRoute from "../routes/DashboardPageRoute";
import { serviceLocalStorage } from "../Helper";
import { AuthContext } from "../modules/auth/AuthContext";

const Dashboard = () => {
	const history = useHistory();
	const { isOpen, onOpen, onClose } = useDisclosure();

	const { getProfile } = useContext(AuthContext);

	if (!serviceLocalStorage("user_token")) {
		history.push("/login");
	}

	useEffect(() => {
		if (serviceLocalStorage("user_token")) {
			getProfile();
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
				<SidebarComponent
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
						<SidebarComponent onClose={onClose} />
					</DrawerContent>
				</Drawer>

				{/* mobilenav */}
				<NavbarComponent onOpen={onOpen} />

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
