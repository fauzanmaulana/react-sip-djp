import { Button } from "@chakra-ui/button";
import {
	FormControl,
	FormLabel,
	FormHelperText,
} from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, VStack } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import React, { useContext } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useEffect } from "react/cjs/react.development";
import HeadingDashboardComponent from "../../components/dashboard/HeadingDashboardComponent";
import { CategoryContext } from "./CategoryContext";

const CategoryCreate = () => {
	const { loading, createCategory, errors, setErrors } =
		useContext(CategoryContext);

	useEffect(() => {
		return () => {
			setErrors({ message: "", errors: {} });
		};
	}, [setErrors]);

	return (
		<>
			{/* heading */}
			<HeadingDashboardComponent
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
						<FormControl id="name">
							<FormLabel>Name</FormLabel>
							<Input placeholder="Name" name="name" />
							{errors.errors.hasOwnProperty("name") && (
								<FormHelperText color="red">
									{errors.errors.name[0]}
								</FormHelperText>
							)}
						</FormControl>
						<FormControl id="status">
							<FormLabel>Status</FormLabel>
							<Select placeholder="Choose Status" name="status">
								<option value="active">Active</option>
								<option value="inactive">Inactive</option>
							</Select>
							{errors.errors.hasOwnProperty("status") && (
								<FormHelperText color="red">
									{errors.errors.status[0]}
								</FormHelperText>
							)}
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

export default CategoryCreate;
