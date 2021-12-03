import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, VStack } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import { Textarea } from "@chakra-ui/textarea";
import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import HeadingDashboard from "../../components/utils/HeadingDashboard";
import InputNumber from "../../components/utils/InputNumber";

const Create = () => {
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
				<form>
					<VStack spacing="6">
						{/* name */}
						<FormControl id="name" isRequired>
							<FormLabel>Name</FormLabel>
							<Input placeholder="name" name="name" />
							{/* <FormHelperText>We'll never share your email.</FormHelperText> */}
						</FormControl>

						{/* description */}
						<FormControl id="description" isRequired>
							<FormLabel>Description</FormLabel>
							<Textarea placeholder="description" name="name" />
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
							<Input placeholder="SKU" name="sku" />
							{/* <FormHelperText>We'll never share your email.</FormHelperText> */}
						</FormControl>

						<FormControl id="image" isRequired>
							<FormLabel>Image</FormLabel>
							<Input placeholder="image" name="image" type="file" />
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

						<Button colorScheme="blue" type="submit" w="100%">
							Submit
						</Button>
					</VStack>
				</form>
			</Box>
		</>
	);
};

export default Create;
