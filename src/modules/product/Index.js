import { Button, ButtonGroup } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { Box, Stack } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import {
	Table,
	TableCaption,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
	Select,
	Input,
} from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { FiEdit2, FiEye, FiPlus, FiTrash2 } from "react-icons/fi";
import { useHistory } from "react-router";
import HeadingDashboard from "../../components/utils/HeadingDashboard";
import TableSkeleton from "../../components/utils/TableSkeleton";
import { rupiahFormat } from "../../Helper";
import { noImageAvailable } from "../../Utils";
import { CategoryContext } from "../category/CategoryContext";
import { ProductContext } from "./ProductContext";

const Index = () => {
	const history = useHistory();

	const { loading, products, getProducts } = useContext(ProductContext);
	const { getCategories, categories } = useContext(CategoryContext);

	useEffect(() => {
		getProducts();
		getCategories();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (loading) {
		return <TableSkeleton />;
	} else {
		return (
			<>
				{/* header */}
				<HeadingDashboard
					title="Products"
					button={{
						title: "Add Product",
						icon: FiPlus,
						url: "/dashboard/product/create",
					}}
				/>

				{/* table */}
				<Box bg="white" borderRadius="lg" p="5" overflowX="scroll">
					<Stack direction={["column", "row"]} mb={8}>
						<Select placeholder="Choose Category" name="category_id">
							{categories.map((category) => (
								<option value={category.id} key={category.id}>
									{category.name}
								</option>
							))}
						</Select>

						<Input type="text" placeholder="Search" />
					</Stack>
					{/* </Flex> */}
					<Table variant="simple">
						{products.length < 1 && <TableCaption>Data Not Found</TableCaption>}
						<Thead>
							<Tr>
								<Th>Name</Th>
								<Th>Category</Th>
								<Th>Price</Th>
								<Th>SKU</Th>
								<Th>Image</Th>
								<Th w="100px">Action</Th>
							</Tr>
						</Thead>
						<Tbody>
							{products.map((product) => (
								<Tr key={product.id}>
									<Td>{product.name}</Td>
									<Td>{product.category.name}</Td>
									<Td>{rupiahFormat(product.price)}</Td>
									<Td>{product.sku}</Td>
									<Td>
										{
											<Image
												src={product.image || noImageAvailable}
												alt="product image"
												maxWidth={100}
											/>
										}
									</Td>
									<Td>
										<ButtonGroup variant="outline">
											<Button
												colorScheme="blue"
												size="sm"
												onClick={() => {
													history.push(`/dashboard/product/${product.id}`);
												}}
											>
												<Icon as={FiEye} />
											</Button>
											<Button
												colorScheme="green"
												size="sm"
												onClick={() => {
													history.push(
														`/dashboard/product/${product.id}/update`
													);
												}}
											>
												<Icon as={FiEdit2} />
											</Button>
											<Button colorScheme="red" size="sm">
												<Icon as={FiTrash2} />
											</Button>
										</ButtonGroup>
									</Td>
								</Tr>
							))}
						</Tbody>
					</Table>
					{/* </Stack> */}
				</Box>
			</>
		);
	}
};

export default Index;
