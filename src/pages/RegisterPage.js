import React from "react";
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

const RegisterPage = () => {
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
							<Input type="email" />
						</FormControl>
						<FormControl>
							<FormLabel>Password</FormLabel>
							<Input type="password" />
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

export default RegisterPage;
