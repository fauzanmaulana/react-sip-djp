import React from "react";
import { useParams } from "react-router";
import { CategoryRoute } from "../modules/category/CategoryRoute";
import DashboardRoute from "../modules/dashboard/DashboardRoute";
import ProductRoute from "../modules/product/ProductRoute";

const DashboardPage = () => {
	const params = useParams().data;

	switch (params) {
		case "product":
			return <ProductRoute />;

		case "category":
			return <CategoryRoute />;

		default:
			return <DashboardRoute />;
	}
};

export default DashboardPage;
