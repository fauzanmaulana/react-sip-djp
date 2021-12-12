import React, { useContext, useEffect } from "react";
import HeadingDashboardComponent from "../../components/dashboard/HeadingDashboardComponent";
import {
	Box,
	Table,
	TableCaption,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
} from "@chakra-ui/react";
import { FiSave } from "react-icons/fi";
import { SalesContext } from "./SalesContext";
import { rupiahFormat, dateFormat } from "../../Helper";
import TableSkeletonComponent from "../../components/dashboard/TableSkeletonComponent";

const ProductIndex = () => {
	const { sales, getSales, loading } = useContext(SalesContext);

	useEffect(() => {
		getSales();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (loading) {
		return <TableSkeletonComponent />;
	} else {
		return (
			<>
				{/* header */}
				<HeadingDashboardComponent
					title="Sales"
					button={{
						title: "Import Excel",
						icon: FiSave,
						url: "/dashboard/sales/import",
					}}
				/>

				{/* table */}
				<Box bg="white" borderRadius="lg" p="5" overflowX="scroll">
					{/* </Flex> */}
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
					{/* </Stack> */}
				</Box>
			</>
		);
	}
};

export default ProductIndex;
