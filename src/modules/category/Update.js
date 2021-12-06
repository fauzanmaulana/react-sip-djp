import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, VStack } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import React, { useContext, useEffect } from "react";
import { FiArrowLeft } from "react-icons/fi";
import HeadingDashboard from "../../components/utils/HeadingDashboard";
import { useParams } from "react-router";
import { CategoryContext } from "./CategoryContext";

const Update = () => {
	const { id } = useParams();

	const { loading, category, setCategory, showCategory, updateCategory } =
		useContext(CategoryContext);

	useEffect(() => {
		showCategory(id);

		return () => {
			setCategory(() => ({
				name: "",
				status: "",
			}));
		};

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			{/* heading */}
			<HeadingDashboard
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
						<FormControl id="name" isRequired>
							<FormLabel>Name</FormLabel>
							<Input
								isDisabled={category.name == null}
								placeholder="Name"
								name="name"
								value={category.name === null ? "" : category.name}
								onChange={(e) =>
									setCategory((category) => ({
										name: e.target.value,
										status: category.status,
									}))
								}
								required
							/>
							{/* <FormHelperText>We'll never share your email.</FormHelperText> */}
						</FormControl>
						<FormControl id="status" isRequired>
							<FormLabel>Status</FormLabel>
							<Select
								placeholder="Choose Status"
								name="status"
								isDisabled={category.status === null}
								value={category.status === null ? "" : category.status}
								onChange={(e) =>
									setCategory((category) => ({
										name: category.name,
										status: e.target.value,
									}))
								}
								required
							>
								<option value="active">Active</option>
								<option value="inactive">Inactive</option>
							</Select>
							{/* <FormHelperText>We'll never share your email.</FormHelperText> */}
						</FormControl>
						<Button
							isDisabled={!category.name && !category.status}
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

export default Update;
