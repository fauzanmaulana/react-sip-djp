import { Button } from "@chakra-ui/button";
import {
	FormControl,
	FormLabel,
	FormHelperText,
} from "@chakra-ui/form-control";
import { Alert, AlertIcon, Input } from "@chakra-ui/react";
import { Box, VStack } from "@chakra-ui/layout";
import React, { useContext } from "react";
import { FiArrowLeft } from "react-icons/fi";
import HeadingDashboardComponent from "../../components/dashboard/HeadingDashboardComponent";
import { SalesContext } from "./SalesContext";

const ProductImport = () => {
	const { loading, importSales, errors } = useContext(SalesContext);

	return (
		<>
			{/* heading */}
			<HeadingDashboardComponent
				title="Import Sales"
				button={{
					title: "Back To Sales",
					icon: FiArrowLeft,
					url: "/dashboard/sales",
				}}
			/>

			{/* form */}
			<Box bg="white" borderRadius="lg" p="5">
				<Alert status="info" variant="left-accent" mb="10px">
					<AlertIcon />
					Pastikan id product yang ada di excel, sama adanya dengan yang di web
				</Alert>

				<form onSubmit={(e) => importSales(e)}>
					<VStack spacing="6">
						<FormControl id="import" isRequired>
							<FormLabel>File</FormLabel>
							<Input
								type="file"
								name="import"
								accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
							/>
							{errors.errors.hasOwnProperty("import") && (
								<FormHelperText color="red">
									{errors.errors.import[0]}
								</FormHelperText>
							)}
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

export default ProductImport;
