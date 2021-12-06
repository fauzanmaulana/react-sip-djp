import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, VStack } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import React, { useContext, useEffect, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import HeadingDashboard from "../../components/utils/HeadingDashboard";
import { useParams } from "react-router";
import { CategoryContext } from "../category/CategoryContext";
import { ProductContext } from "./ProductContext";
import { Textarea } from "@chakra-ui/textarea";
import InputNumber from "../../components/utils/InputNumber";
import { generateSKU } from "../../Helper";

const Update = () => {
	const { id } = useParams();

	const { showProduct, updateProduct, product, setProduct, loading } =
		useContext(ProductContext);
	const { getCategories, categories } = useContext(CategoryContext);

	useEffect(() => {
		showProduct(id);
		getCategories();

		return () => {
			setProduct(() => ({
				id: "",
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
			}));
		};

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			{/* heading */}
			<HeadingDashboard
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
						<FormControl id="category_id" isRequired>
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
							{/* <FormHelperText>We'll never share your email.</FormHelperText> */}
						</FormControl>

						{/* name */}
						<FormControl id="name" isRequired>
							<FormLabel>Name</FormLabel>
							<Input
								placeholder="name"
								name="name"
								defaultValue={product.name}
								style={{ opacity: "1" }}
							/>
							{/* <FormHelperText>We'll never share your email.</FormHelperText> */}
						</FormControl>

						{/* description */}
						<FormControl id="description" isRequired>
							<FormLabel>Description</FormLabel>
							<Textarea
								placeholder="description"
								name="description"
								defaultValue={product.description}
								style={{ opacity: "1" }}
							/>
							{/* <FormHelperText>We'll never share your email.</FormHelperText> */}
						</FormControl>

						{/* description */}
						<FormControl id="price" isRequired>
							<FormLabel>Price</FormLabel>
							<InputNumber
								styles={{ opacity: "1" }}
								name="price"
								value={product.price}
							/>
							{/* <FormHelperText>We'll never share your email.</FormHelperText> */}
						</FormControl>

						<FormControl id="sku" isRequired>
							<FormLabel>SKU</FormLabel>
							<Input
								placeholder="SKU"
								name="sku"
								defaultValue={product.sku}
								style={{ opacity: "1" }}
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

export default Update;
