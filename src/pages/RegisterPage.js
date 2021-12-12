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
	FormHelperText,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../modules/auth/AuthContext";

const RegisterPage = () => {
	const { loading, errors, setErrors, postRegister } = useContext(AuthContext);

	useEffect(() => {
		return () => {
			setErrors({ message: "", errors: {} });
		};
	}, [setErrors]);

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
									{errors.errors.hasOwnProperty("name") && (
										<FormHelperText color="red">
											{errors.errors.name[0]}
										</FormHelperText>
									)}
								</FormControl>
								<FormControl>
									<FormLabel>Email</FormLabel>
									<Input type="email" name="email" required />
									{errors.errors.hasOwnProperty("email") && (
										<FormHelperText color="red">
											{errors.errors.email[0]}
										</FormHelperText>
									)}
								</FormControl>
								<FormControl>
									<FormLabel>Password</FormLabel>
									<Input type="password" name="password" required />
									{errors.errors.hasOwnProperty("password") && (
										<FormHelperText color="red">
											{errors.errors.password[0]}
										</FormHelperText>
									)}
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
									<NavLink to="/login" style={{ color: "blue" }}>
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
