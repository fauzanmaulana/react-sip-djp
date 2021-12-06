import React, { useContext, useEffect } from "react";
import {
	Flex,
	Heading,
	Text,
	Stack,
	Box,
	FormControl,
	FormLabel,
	Input,
	Button,
	useToast,
} from "@chakra-ui/react";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import CreateToast from "../../components/utils/CreateToast";
import { AuthContext } from "./AuthContext";

const Login = () => {
	const history = useHistory();
	const toast = useToast();

	const { loading, postLogin } = useContext(AuthContext);

	useEffect(() => {
		if (history.location.state && history.location.state.logoutMessage) {
			CreateToast(toast, "success", history.location.state.logoutMessage);
			history.replace();
		}
	});

	return (
		<Flex align={"center"} justify={"center"} bg={"gray.50"} minH={"100vh"}>
			<Stack spacing={6} mx={"auto"} maxW={"lg"} py={12} px={6}>
				<Stack align={"center"}>
					<Heading>Sistem Informasi Penjualan</Heading>
					<Text fontSize={"lg"} color={"gray.600"}>
						Login Untuk melanjutkan
					</Text>
				</Stack>

				<Box bg={"white"} p={8} rounded={"lg"} boxShadow={"md"}>
					<form id="login-form" onSubmit={(e) => postLogin(e)}>
						<Stack spacing={5}>
							<FormControl>
								<FormLabel>Email</FormLabel>
								<Input type="email" name="email" required />
							</FormControl>
							<FormControl>
								<FormLabel>Password</FormLabel>
								<Input type="password" name="password" required />
							</FormControl>
							<Button
								isLoading={loading}
								bg={"blue.400"}
								color={"white"}
								_hover={{
									bg: "blue.500",
								}}
								type="submit"
								form="login-form"
							>
								Sign in
							</Button>
							<Flex justifyContent="space-between">
								<Text>Don't Have an Account ?</Text>
								<NavLink to="/auth/register" style={{ color: "blue" }}>
									Register Now
								</NavLink>
							</Flex>
						</Stack>
					</form>
				</Box>
			</Stack>
		</Flex>
	);
};

export default Login;
