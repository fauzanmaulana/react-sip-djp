import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, VStack } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import React, { useContext, useEffect } from "react";
import { FiArrowLeft } from "react-icons/fi";
import HeadingDashboard from "../../components/utils/HeadingDashboard";
import { useParams } from "react-router";
import { CategoryContext } from "./CategoryContext";

const Show = () => {
	const { id } = useParams();

	const { category, showCategory } = useContext(CategoryContext);

	useEffect(() => {
		showCategory(id);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			{/* heading */}
			<HeadingDashboard
				title="Show Category"
				button={{
					title: "Back To Categories",
					icon: FiArrowLeft,
					url: "/dashboard/category",
				}}
			/>

			{/* form */}
			<Box bg="white" borderRadius="lg" p="5">
				<form>
					<VStack spacing="6">
						<FormControl id="name" isRequired>
							<FormLabel>Name</FormLabel>
							<Input
								isDisabled={true}
								placeholder="Name"
								name="name"
								value={category.name}
								style={{ opacity: "1" }}
								required
							/>
							{/* <FormHelperText>We'll never share your email.</FormHelperText> */}
						</FormControl>
						<FormControl id="status" isRequired>
							<FormLabel>Status</FormLabel>
							<Select
								placeholder="Choose Status"
								name="status"
								isDisabled={true}
								value={category.status}
								style={{ opacity: "1" }}
								required
							>
								<option value="active">Active</option>
								<option value="inactive">Inactive</option>
							</Select>
							{/* <FormHelperText>We'll never share your email.</FormHelperText> */}
						</FormControl>
					</VStack>
				</form>
			</Box>
		</>
	);
};

export default Show;
