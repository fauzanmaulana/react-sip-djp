import React from "react";
import { useParams } from "react-router";
import CategoryRoute from "../modules/category/CategoryRoute";
import DashboardRoute from "../modules/dashboard/DashboardRoute";
import SalesRoute from "../modules/sales/SalesRoute";
import ProductRoute from "../modules/product/ProductRoute";

const DashboardPageRoute = () => {
	const params = useParams().data;

	switch (params) {
		case "product":
			return <ProductRoute />;

		case "category":
			return <CategoryRoute />;

		case "sales":
			return <SalesRoute />;

		default:
			return <DashboardRoute />;
	}
};

export default DashboardPageRoute;
