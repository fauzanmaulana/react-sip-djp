import { useToast } from "@chakra-ui/react";
import React, { createContext } from "react";
import { Line } from "react-chartjs-2";
import { useState } from "react/cjs/react.development";
import Api from "../../Api";
import { CreateToast } from "../../Helper";
import { serviceLocalStorage } from "../../Helper";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";

// intialize chart js
ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

const SalesContext = createContext();

const SalesProvider = ({ children }) => {
	// all sales state
	const [sales, setSales] = useState([]);

	// state chart data sales
	const [salesChart, setSalesChart] = useState({});

	// loading state
	const [loading, setLoading] = useState(false);

	// error state
	const [errors, setErrors] = useState({
		message: "",
		errors: {},
	});

	const toast = useToast();

	const getSales = async () => {
		setLoading(true);

		try {
			const result = await Api.getSales(serviceLocalStorage("user_token"));

			if (result.success) {
				setSales(result.data);
			}
		} catch (error) {
			console.error(error);
		}
		setLoading(false);
	};

	const getChartSales = async () => {
		setLoading(true);

		try {
			const result = await Api.getChartSales(serviceLocalStorage("user_token"));

			if (result.success) {
				setSalesChart(result.data);
			}
		} catch (error) {
			console.error(error);
		}
		setLoading(false);
	};

	const importSales = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);

		setLoading(true);
		try {
			const result = await Api.importSales(
				serviceLocalStorage("user_token"),
				formData
			);

			if (result.success) {
				e.target.reset();
				CreateToast(toast, "success", result.message);
			} else {
				CreateToast(toast, "success", result.message);
				setErrors(result);
			}
		} catch (error) {
			console.log(error);
		}

		setLoading(false);
	};

	const renderLineSalesChart = () => {
		return (
			<Line
				options={{
					responsive: true,
					plugins: {
						legend: {
							position: "top",
						},
						title: {
							display: true,
							text: "Sales Graph",
						},
					},
				}}
				data={{
					labels: salesChart.months,
					datasets: [
						{
							label: "Overall Sales",
							data: salesChart.totals,
						},
					],
					borderColor: "rgb(255, 99, 132)",
					backgroundColor: "rgba(255, 99, 132, 0.5)",
				}}
			/>
		);
	};

	return (
		<SalesContext.Provider
			value={{
				loading,
				sales,
				salesChart,
				setSales,
				errors,
				setErrors,
				getSales,
				getChartSales,
				importSales,
				renderLineSalesChart,
			}}
		>
			{children}
		</SalesContext.Provider>
	);
};

export { SalesContext, SalesProvider };
