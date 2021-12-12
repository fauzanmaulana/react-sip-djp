import {
	Box,
	Flex,
	Heading,
	Spacer,
	Table,
	TableCaption,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
} from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { SalesContext } from "../sales/SalesContext";
import { dateFormat, rupiahFormat } from "../../Helper";
import TableSkeletonComponent from "../../components/dashboard/TableSkeletonComponent";

const DashboardIndex = () => {
	const {
		getChartSales,
		renderLineSalesChart,
		getSales,
		sales,
		setSales,
		loading,
	} = useContext(SalesContext);

	useEffect(() => {
		getChartSales();
		getSales().then(() =>
			setSales((current) =>
				current
					.sort((a, b) => new Date(a.created_at) - new Date(b.created_at))
					.slice(0, 5)
			)
		);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (loading) {
		return <TableSkeletonComponent />;
	} else {
		return (
			<Flex>
				<Box bg="white" width="48%" boxShadow={"md"} borderRadius="lg" p="5">
					<Heading fontSize="xl" mb="5">
						Sales Graph
					</Heading>

					{/* sales chart */}
					{renderLineSalesChart()}
				</Box>
				<Spacer />
				<Box bg="white" width="48%" boxShadow={"md"} borderRadius="lg" p="5">
					<Heading fontSize="xl" mb="5">
						Latest Transaction
					</Heading>
					<Table variant="simple">
						{sales.length < 1 && <TableCaption>Data Not Found</TableCaption>}
						<Thead>
							<Tr>
								<Th>Name</Th>
								<Th>Product</Th>
								<Th w="100px">Date</Th>
							</Tr>
						</Thead>
						<Tbody>
							{sales.map((sales) => (
								<Tr key={sales.id}>
									<Td>{sales.product.name}</Td>
									<Td>{rupiahFormat(sales.price)}</Td>
									<Td>{dateFormat(sales.created_at)}</Td>
								</Tr>
							))}
						</Tbody>
					</Table>
				</Box>
			</Flex>
		);
	}
};

export default DashboardIndex;
