import React, { useState } from "react";
import {
	Flex,
	Heading,
	Text,
	Stack,
	Box,
	FormControl,
	FormLabel,
	Input,
	Checkbox,
	Link,
	Button,
} from "@chakra-ui/react";
import { useHistory } from "react-router";

const LoginPage = () => {
	const history = useHistory();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const login = () => {
		console.log("email : ", email);
		console.log("password : ", password);

		// window.alert(`your login as ${email}`);

		history.push("/dashboard");
	};

	return (
		<Flex align={"center"} justify={"center"} bg={"gray.50"} minH={"100vh"}>
			<Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
				<Stack align={"center"}>
					<Heading>Sistem Informasi Penjualan</Heading>
					<Text fontSize={"lg"} color={"gray.600"}>
						Login Untuk melanjutkan
					</Text>
				</Stack>

				<Box bg={"white"} p={8} rounded={"lg"} boxShadow={"md"}>
					<Stack spacing={4}>
						<FormControl>
							<FormLabel>Email</FormLabel>
							<Input type="email" onChange={(e) => setEmail(e.target.value)} />
						</FormControl>
						<FormControl>
							<FormLabel>Password</FormLabel>
							<Input
								type="password"
								onChange={(e) => setPassword(e.target.value)}
							/>
						</FormControl>
						<Stack spacing={10}>
							<Flex justify={"space-between"}>
								<Checkbox>Remember me</Checkbox>
								<Link color={"blue.400"}>Forgot password?</Link>
							</Flex>
							<Button
								bg={"blue.400"}
								color={"white"}
								_hover={{
									bg: "blue.500",
								}}
								onClick={() => login()}
							>
								Sign in
							</Button>
						</Stack>
					</Stack>
				</Box>
			</Stack>
		</Flex>
	);
};

export default LoginPage;
