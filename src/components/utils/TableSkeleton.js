import { Flex, Stack } from "@chakra-ui/layout";
import { Skeleton } from "@chakra-ui/skeleton";
import React from "react";

const TableSkeleton = () => {
	return (
		<Stack spacing="10">
			<Flex justify="space-between" mb="6">
				<Skeleton height="30px" width="160px" />
				<Skeleton height="30px" width="160px" />
			</Flex>
			<Skeleton height="30px" />
			<Skeleton height="30px" />
			<Skeleton height="30px" />
			<Skeleton height="30px" />
			<Skeleton height="30px" />
			<Skeleton height="30px" />
		</Stack>
	);
};

export default TableSkeleton;
