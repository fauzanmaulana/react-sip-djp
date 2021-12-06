import { Button, ButtonGroup } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { Badge, Box } from "@chakra-ui/layout";
import {
	Table,
	TableCaption,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
} from "@chakra-ui/table";
import React, { useContext, useEffect } from "react";
import { FiEdit2, FiEye, FiPlus, FiTrash2 } from "react-icons/fi";
import { useHistory } from "react-router";
import HeadingDashboard from "../../components/utils/HeadingDashboard";
import TableSkeleton from "../../components/utils/TableSkeleton";
import { CategoryContext } from "./CategoryContext";

const Index = () => {
	const history = useHistory();

	const { loading, categories, deleteCategory, getCategories } =
		useContext(CategoryContext);

	useEffect(() => {
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
					title="Categories"
					button={{
						title: "Add Category",
						icon: FiPlus,
						url: "/dashboard/category/create",
					}}
				/>

				{/* table */}
				<Box bg="white" borderRadius="lg" p="5" boxShadow="lg">
					<Table variant="simple">
						{categories.length < 1 && (
							<TableCaption>Data Not Found</TableCaption>
						)}
						<Thead>
							<Tr>
								<Th>Name</Th>
								<Th>Status</Th>
								<Th w="100px">Action</Th>
							</Tr>
						</Thead>
						<Tbody>
							{categories.map((category, idx) => (
								<Tr key={idx}>
									<Td>{category.name}</Td>
									<Td>
										<Badge
											borderRadius="lg"
											paddingEnd="2"
											paddingStart="2"
											colorScheme={
												category.status === "active" ? "green" : "red"
											}
										>
											{category.status}
										</Badge>
									</Td>
									<Td>
										<ButtonGroup variant="outline">
											<Button
												colorScheme="blue"
												size="sm"
												onClick={() => {
													history.push(`/dashboard/category/${category.id}`);
												}}
											>
												<Icon as={FiEye} />
											</Button>
											<Button
												colorScheme="green"
												size="sm"
												onClick={() => {
													history.push(
														`/dashboard/category/${category.id}/update`
													);
												}}
											>
												<Icon as={FiEdit2} />
											</Button>
											<Button
												colorScheme="red"
												size="sm"
												onClick={() => deleteCategory(category.id)}
											>
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
