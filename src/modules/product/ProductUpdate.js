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
import { CategoryContext } from "../category/CategoryContext";
import { ProductContext } from "./ProductContext";
import { Textarea } from "@chakra-ui/textarea";
import InputNumber from "../../components/dashboard/InputNumberComponent";

const ProductUpdate = () => {
	const { id } = useParams();

	const {
		showProduct,
		updateProduct,
		product,
		setProduct,
		loading,
		errors,
		setErrors,
	} = useContext(ProductContext);
	const { getCategories, categories } = useContext(CategoryContext);

	useEffect(() => {
		showProduct(id);
		getCategories();

		return () => {
			setProduct({
				category: {
					id: "",
					name: "",
				},
				name: "",
				description: "",
				price: "",
				sku: "",
				image: "",
				status: "",
			});

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
				title="Update Product"
				button={{
					title: "Back To Products",
					icon: FiArrowLeft,
					url: "/dashboard/product",
				}}
			/>

			{/* form */}
			<Box bg="white" borderRadius="lg" p="5">
				<form onSubmit={(e) => updateProduct(e, id)}>
					<VStack spacing="6">
						{/* category_id */}
						<FormControl id="category_id">
							<FormLabel>Category</FormLabel>
							<Select
								placeholder="Choose Category"
								value={product.category.id}
								name="category_id"
								style={{ opacity: "1" }}
								onChange={(e) =>
									setProduct((current) => ({
										id: current.id,
										category: {
											id: e.target.value,
											name: current.category.name,
										},
										name: current.name,
										description: current.description,
										price: current.price,
										sku: current.sku,
										image: current.image,
										status: current.status,
									}))
								}
							>
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
							<Input
								placeholder="name"
								name="name"
								defaultValue={product.name}
								style={{ opacity: "1" }}
							/>
							{errors.errors.hasOwnProperty("name") && (
								<FormHelperText color="red">
									{errors.errors.name[0]}
								</FormHelperText>
							)}
						</FormControl>

						<FormControl id="description">
							<FormLabel>Description</FormLabel>
							<Textarea
								placeholder="description"
								name="description"
								defaultValue={product.description}
								style={{ opacity: "1" }}
							/>
							{errors.errors.hasOwnProperty("description") && (
								<FormHelperText color="red">
									{errors.errors.description[0]}
								</FormHelperText>
							)}
						</FormControl>

						<FormControl id="price">
							<FormLabel>Price</FormLabel>
							<InputNumber
								styles={{ opacity: "1" }}
								name="price"
								value={product.price}
								onChange={(e) =>
									setProduct((current) => ({
										category: {
											id: current.category.id,
											name: current.category.name,
										},
										name: current.name,
										description: current.description,
										price: e.target,
										sku: current.sku,
										image: current.image,
										status: current.status,
									}))
								}
							/>
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
								defaultValue={product.sku}
								style={{ opacity: "1" }}
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
							<Select
								placeholder="Choose Status"
								name="status"
								value={product.status}
								style={{ opacity: "1" }}
								onChange={(e) =>
									setProduct((current) => ({
										id: current.id,
										category: {
											id: current.category.id,
											name: current.category.name,
										},
										name: current.name,
										description: current.description,
										price: current.price,
										sku: current.sku,
										image: current.image,
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

export default ProductUpdate;
