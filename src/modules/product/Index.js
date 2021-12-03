import { Button, ButtonGroup } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { Box } from "@chakra-ui/layout";
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/table";
import React, { useEffect } from "react";
import { FiEdit2, FiPlus, FiTrash2 } from "react-icons/fi";
import HeadingDashboard from "../../components/utils/HeadingDashboard";

const Index = () => {
	useEffect(() => {
		console.log("index product loaded");
		return () => {
			console.log("component product unmount");
		};
	});

	return (
		<>
			{/* header */}
			<HeadingDashboard
				title="Products"
				button={{
					title: "Product",
					icon: FiPlus,
					url: "/dashboard/product/create",
				}}
			/>

			{/* table */}
			<Box bg="white" borderRadius="lg" p="5">
				<Table variant="simple">
					<Thead>
						<Tr>
							<Th>Name</Th>
							<Th>Price</Th>
							<Th>SKU</Th>
							<Th>Image</Th>
							<Th w="100px">Action</Th>
						</Tr>
					</Thead>
					<Tbody>
						<Tr>
							<Td>Beras (1kg)</Td>
							<Td>200000</Td>
							<Td>asj781</Td>
							<Td>image</Td>
							<Td>
								<ButtonGroup variant="outline">
									<Button colorScheme="green" size="sm">
										<Icon as={FiEdit2} />
									</Button>
									<Button colorScheme="red" size="sm">
										<Icon as={FiTrash2} />
									</Button>
								</ButtonGroup>
							</Td>
						</Tr>
					</Tbody>
				</Table>
			</Box>
		</>
	);
};

export default Index;
