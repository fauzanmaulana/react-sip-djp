import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, VStack } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import { Textarea } from "@chakra-ui/textarea";
import React, { useContext } from "react";
import { useEffect } from "react";
import { FiArrowLeft } from "react-icons/fi";
import HeadingDashboard from "../../components/utils/HeadingDashboard";
import InputNumber from "../../components/utils/InputNumber";
import { CategoryContext } from "../category/CategoryContext";
import { ProductContext } from "./ProductContext";
import { generateSKU } from "../../Helper";

const Create = () => {
	const { loading, createProduct } = useContext(ProductContext);
	const { getCategories, categories } = useContext(CategoryContext);

	useEffect(() => {
		getCategories();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			{/* heading */}
			<HeadingDashboard
				title="Create Product"
				button={{
					title: "Back To Products",
					icon: FiArrowLeft,
					url: "/dashboard/product",
				}}
			/>

			{/* form */}
			<Box bg="white" borderRadius="lg" p="5">
				<form onSubmit={(e) => createProduct(e)}>
					<VStack spacing="6">
						{/* category_id */}
						<FormControl id="category_id" isRequired>
							<FormLabel>Category</FormLabel>
							<Select placeholder="Choose Category" name="category_id">
								{categories.map((category) => (
									<option value={category.id} key={category.id}>
										{category.name}
									</option>
								))}
							</Select>
							{/* <FormHelperText>We'll never share your email.</FormHelperText> */}
						</FormControl>

						{/* name */}
						<FormControl id="name" isRequired>
							<FormLabel>Name</FormLabel>
							<Input placeholder="name" name="name" />
							{/* <FormHelperText>We'll never share your email.</FormHelperText> */}
						</FormControl>

						{/* description */}
						<FormControl id="description" isRequired>
							<FormLabel>Description</FormLabel>
							<Textarea placeholder="description" name="description" />
							{/* <FormHelperText>We'll never share your email.</FormHelperText> */}
						</FormControl>

						{/* description */}
						<FormControl id="price" isRequired>
							<FormLabel>Price</FormLabel>
							<InputNumber name="price" />
							{/* <FormHelperText>We'll never share your email.</FormHelperText> */}
						</FormControl>

						<FormControl id="sku" isRequired>
							<FormLabel>SKU</FormLabel>
							<Input
								placeholder="SKU"
								name="sku"
								defaultValue={generateSKU()}
							/>
							{/* <FormHelperText>We'll never share your email.</FormHelperText> */}
						</FormControl>

						<FormControl id="image">
							<FormLabel>Image</FormLabel>
							<Input
								placeholder="image"
								name="image"
								type="file"
								accept="image/*"
							/>
							{/* <FormHelperText>We'll never share your email.</FormHelperText> */}
						</FormControl>

						<FormControl id="status" isRequired>
							<FormLabel>Status</FormLabel>
							<Select placeholder="Choose Status" name="status">
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
