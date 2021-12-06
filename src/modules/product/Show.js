import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, VStack } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import React, { useContext, useEffect } from "react";
import { FiArrowLeft } from "react-icons/fi";
import HeadingDashboard from "../../components/utils/HeadingDashboard";
import { useParams } from "react-router";
import { ProductContext } from "./ProductContext";
import { Textarea } from "@chakra-ui/textarea";
import InputNumber from "../../components/utils/InputNumber";
import { generateSKU } from "../../Helper";
import { Image } from "@chakra-ui/image";
import { noImageAvailable } from "../../Utils";
import { CategoryContext } from "../category/CategoryContext";

const Show = () => {
	const { id } = useParams();

	const { showProduct, product } = useContext(ProductContext);
	const { getCategories, categories } = useContext(CategoryContext);

	useEffect(() => {
		showProduct(id);
		getCategories();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			{/* heading */}
			<HeadingDashboard
				title="Show Product"
				button={{
					title: "Back To Products",
					icon: FiArrowLeft,
					url: "/dashboard/product",
				}}
			/>

			{/* form */}
			<Box bg="white" borderRadius="lg" p="5">
				<form>
					<VStack spacing="6">
						{/* category_id */}
						<FormControl id="category_id">
							<FormLabel>Category</FormLabel>
							<Select
								placeholder="Choose Category"
								value={product.category.id}
								name="category_id"
								style={{ opacity: "1" }}
								isDisabled={true}
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
						<FormControl id="name">
							<FormLabel>Name</FormLabel>
							<Input
								placeholder="name"
								name="name"
								defaultValue={product.name}
								style={{ opacity: "1" }}
								isDisabled={true}
							/>
							{/* <FormHelperText>We'll never share your email.</FormHelperText> */}
						</FormControl>

						{/* description */}
						<FormControl id="description">
							<FormLabel>Description</FormLabel>
							<Textarea
								placeholder="description"
								name="description"
								defaultValue={product.description}
								style={{ opacity: "1" }}
								isDisabled={true}
							/>
							{/* <FormHelperText>We'll never share your email.</FormHelperText> */}
						</FormControl>

						{/* description */}
						<FormControl id="price">
							<FormLabel>Price</FormLabel>
							<InputNumber
								styles={{ opacity: "1" }}
								name="price"
								value={product.price}
								isDisabled={true}
							/>
							{/* <FormHelperText>We'll never share your email.</FormHelperText> */}
						</FormControl>

						<FormControl id="sku">
							<FormLabel>SKU</FormLabel>
							<Input
								placeholder="SKU"
								name="sku"
								defaultValue={generateSKU()}
								style={{ opacity: "1" }}
								isDisabled={true}
							/>
							{/* <FormHelperText>We'll never share your email.</FormHelperText> */}
						</FormControl>

						<FormControl id="image">
							<FormLabel>Image</FormLabel>
							<Image
								src={product.image || noImageAvailable}
								alt="product image"
								maxWidth={100}
							/>
							{/* <FormHelperText>We'll never share your email.</FormHelperText> */}
						</FormControl>

						<FormControl id="status">
							<FormLabel>Status</FormLabel>
							<Select
								placeholder="Choose Status"
								name="status"
								value={product.status}
								style={{ opacity: "1" }}
								isDisabled={true}
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
