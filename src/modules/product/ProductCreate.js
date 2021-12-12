import { Button } from "@chakra-ui/button";
import {
	FormControl,
	FormLabel,
	FormHelperText,
} from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, VStack } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import { Textarea } from "@chakra-ui/textarea";
import React, { useContext } from "react";
import { useEffect } from "react";
import { FiArrowLeft } from "react-icons/fi";
import HeadingDashboardComponent from "../../components/dashboard/HeadingDashboardComponent";
import InputNumber from "../../components/dashboard/InputNumberComponent";
import { CategoryContext } from "../category/CategoryContext";
import { ProductContext } from "./ProductContext";
import { generateSKU } from "../../Helper";

const ProductCreate = () => {
	const { loading, createProduct, errors, setErrors } =
		useContext(ProductContext);
	const { getCategories, categories } = useContext(CategoryContext);

	useEffect(() => {
		getCategories();

		setErrors({
			message: "",
			errors: {},
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			{/* heading */}
			<HeadingDashboardComponent
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
						<FormControl id="category_id">
							<FormLabel>Category</FormLabel>
							<Select placeholder="Choose Category" name="category_id">
								{categories.map((category) => (
									<option value={category.id} key={category.id}>
										{category.name}
									</option>
								))}
							</Select>
							{errors.errors.hasOwnProperty("category_id") && (
								<FormHelperText color="red">
									{errors.errors.category_id[0]}
								</FormHelperText>
							)}
						</FormControl>

						{/* name */}
						<FormControl id="name">
							<FormLabel>Name</FormLabel>
							<Input placeholder="name" name="name" />
							{errors.errors.hasOwnProperty("name") && (
								<FormHelperText color="red">
									{errors.errors.name[0]}
								</FormHelperText>
							)}
						</FormControl>

						{/* description */}
						<FormControl id="description">
							<FormLabel>Description</FormLabel>
							<Textarea placeholder="description" name="description" />
							{errors.errors.hasOwnProperty("description") && (
								<FormHelperText color="red">
									{errors.errors.description[0]}
								</FormHelperText>
							)}
						</FormControl>

						{/* description */}
						<FormControl id="price">
							<FormLabel>Price</FormLabel>
							<InputNumber name="price" />
							{errors.errors.hasOwnProperty("price") && (
								<FormHelperText color="red">
									{errors.errors.price[0]}
								</FormHelperText>
							)}
						</FormControl>

						<FormControl id="sku">
							<FormLabel>SKU</FormLabel>
							<Input
								placeholder="SKU"
								name="sku"
								defaultValue={generateSKU()}
							/>
							{errors.errors.hasOwnProperty("sku") && (
								<FormHelperText color="red">
									{errors.errors.sku[0]}
								</FormHelperText>
							)}
						</FormControl>

						<FormControl id="image">
							<FormLabel>Image</FormLabel>
							<Input
								placeholder="image"
								name="image"
								type="file"
								accept="image/*"
							/>
							{errors.errors.hasOwnProperty("image") && (
								<FormHelperText color="red">
									{errors.errors.image[0]}
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

export default ProductCreate;
