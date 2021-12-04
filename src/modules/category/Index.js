import { Button, ButtonGroup } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { Box } from "@chakra-ui/layout";
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/table";
import React, { useEffect, useState } from "react";
import { FiEdit2, FiPlus, FiTrash2 } from "react-icons/fi";
import HeadingDashboard from "../../components/utils/HeadingDashboard";
import TableSkeleton from "../../components/utils/TableSkeleton";

const Index = () => {
	// const value = useContext(CategoryContext);

	const [categories, setCategories] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getCategories().finally(() => setLoading(false));
	}, []);

	const getCategories = async () => {
		setLoading(true);
		try {
			const response = await fetch(
				"https://jsonplaceholder.typicode.com/posts"
			);
			const result = await response.json();
			setCategories(result);
		} catch (error) {
			console.error(error);
		}
	};

	if (loading) {
		return <TableSkeleton />;
	} else {
		return (
			<>
				{/* header */}
				<HeadingDashboard
					title="Categories"
					button={{
						title: "Category",
						icon: FiPlus,
						url: "/dashboard/category/create",
					}}
				/>

				{/* table */}
				<Box bg="white" borderRadius="lg" p="5" boxShadow="lg">
					<Table variant="simple">
						<Thead>
							<Tr>
								<Th>Name</Th>
								<Th>Status</Th>
								<Th w="100px">Action</Th>
							</Tr>
						</Thead>
						<Tbody>
							{categories.map((category, idx) => (
								<Tr>
									<Td>{category.title}</Td>
									<Td>{category.body}</Td>
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
							))}
						</Tbody>
					</Table>
				</Box>
			</>
		);
	}
};

export default Index;
