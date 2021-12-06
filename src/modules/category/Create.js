import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, VStack } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import React, { useContext } from "react";
import { FiArrowLeft } from "react-icons/fi";
import HeadingDashboard from "../../components/utils/HeadingDashboard";
import { CategoryContext } from "./CategoryContext";

const Create = () => {
	const { loading, createCategory } = useContext(CategoryContext);

	return (
		<>
			{/* heading */}
			<HeadingDashboard
				title="Create Category"
				button={{
					title: "Back To Categories",
					icon: FiArrowLeft,
					url: "/dashboard/category",
				}}
			/>

			{/* form */}
			<Box bg="white" borderRadius="lg" p="5">
				<form onSubmit={(e) => createCategory(e)}>
					<VStack spacing="6">
						<FormControl id="name" isRequired>
							<FormLabel>Name</FormLabel>
							<Input placeholder="Name" name="name" required />
							{/* <FormHelperText>We'll never share your email.</FormHelperText> */}
						</FormControl>
						<FormControl id="status" isRequired>
							<FormLabel>Status</FormLabel>
							<Select placeholder="Choose Status" name="status" required>
								<option value="active">Active</option>
								<option value="inactive">Inactive</option>
							</Select>
							{/* <FormHelperText>We'll never share your email.</FormHelperText> */}
						</FormControl>
						<Button
							colorScheme="blue"
							type="submit"
							w="100%"
							isLoading={loading}
						>
							Submit
						</Button>
					</VStack>
				</form>
			</Box>
		</>
	);
};

export default Create;
