import React, { useContext } from "react";
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
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../modules/auth/AuthContext";

const RegisterPage = () => {
	const { loading, postRegister } = useContext(AuthContext);

	return (
		<Flex align={"center"} justify={"center"} bg={"gray.50"} minH={"100vh"}>
			<Stack spacing={6} mx={"auto"} maxW={"lg"} py={12} px={6}>
				<Stack align={"center"}>
					<Heading>Sistem Informasi Penjualan</Heading>
					<Text fontSize={"lg"} color={"gray.600"}>
						Register Untuk melanjutkan
					</Text>
				</Stack>

				<Box bg={"white"} p={8} rounded={"lg"} boxShadow={"md"}>
					<Stack spacing={4}>
						<form id="register-form" onSubmit={(e) => postRegister(e)}>
							<Stack spacing={5}>
								<FormControl>
									<FormLabel>Name</FormLabel>
									<Input type="text" name="name" required />
								</FormControl>
								<FormControl>
									<FormLabel>Email</FormLabel>
									<Input type="email" name="email" required />
								</FormControl>
								<FormControl>
									<FormLabel>Password</FormLabel>
									<Input type="password" name="passwprd" required />
								</FormControl>

								<Button
									isLoading={loading}
									bg={"blue.400"}
									color={"white"}
									_hover={{
										bg: "blue.500",
									}}
									type="submit"
									form="register-form"
								>
									Sign up
								</Button>
								<Flex justifyContent="space-between">
									<Text>Already Have an Account ?</Text>
									<NavLink to="/auth/login" style={{ color: "blue" }}>
										Login Now
									</NavLink>
								</Flex>
							</Stack>
						</form>
					</Stack>
				</Box>
			</Stack>
		</Flex>
	);
};

export default RegisterPage;
