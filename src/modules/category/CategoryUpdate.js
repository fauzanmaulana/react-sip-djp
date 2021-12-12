import { Button } from "@chakra-ui/button";
import {
	FormControl,
	FormLabel,
	FormHelperText,
} from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, VStack } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import React, { useContext, useEffect } from "react";
import { FiArrowLeft } from "react-icons/fi";
import HeadingDashboardComponent from "../../components/dashboard/HeadingDashboardComponent";
import { useParams } from "react-router";
import { CategoryContext } from "./CategoryContext";

const CategoryUpdate = () => {
	const { id } = useParams();

	const {
		loading,
		category,
		setCategory,
		showCategory,
		updateCategory,
		errors,
		setErrors,
	} = useContext(CategoryContext);

	useEffect(() => {
		showCategory(id);

		return () => {
			setCategory(() => ({
				name: "",
				status: "",
			}));

			setErrors({
				message: "",
				errors: {},
			});
		};

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			{/* heading */}
			<HeadingDashboardComponent
				title="Update Category"
				button={{
					title: "Back To Categories",
					icon: FiArrowLeft,
					url: "/dashboard/category",
				}}
			/>

			{/* form */}
			<Box bg="white" borderRadius="lg" p="5">
				<form onSubmit={(e) => updateCategory(e, id)}>
					<VStack spacing="6">
						<FormControl id="name">
							<FormLabel>Name</FormLabel>
							<Input
								isDisabled={category.name == null}
								placeholder="Name"
								name="name"
								value={category.name}
								onChange={(e) =>
									setCategory((category) => ({
										name: e.target.value,
										status: category.status,
									}))
								}
							/>
							{errors.errors.hasOwnProperty("name") && (
								<FormHelperText color="red">
									{errors.errors.name[0]}
								</FormHelperText>
							)}
						</FormControl>
						<FormControl id="status">
							<FormLabel>Status</FormLabel>
							<Select
								placeholder="Choose Status"
								name="status"
								isDisabled={category.status === null}
								value={category.status}
								onChange={(e) =>
									setCategory((category) => ({
										name: category.name,
										status: e.target.value,
									}))
								}
							>
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
							isDisabled={loading}
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

export default CategoryUpdate;
