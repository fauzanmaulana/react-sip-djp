import React from "react";
import { Route, Switch } from "react-router";
import ProductIndex from "./ProductIndex";
import ProductCreate from "./ProductCreate";
import ProductShow from "./ProductShow";
import ProductUpdate from "./ProductUpdate";
import { ProductProvider } from "./ProductContext";
import { CategoryProvider } from "../category/CategoryContext";

const ProductRoute = () => {
	return (
		<CategoryProvider>
			<ProductProvider>
				<Switch>
					<Route exact path="/dashboard/product" component={ProductIndex} />
					<Route path="/dashboard/product/create" component={ProductCreate} />
					<Route exact path="/dashboard/product/:id" component={ProductShow} />
					<Route
						path="/dashboard/product/:id/update"
						component={ProductUpdate}
					/>
				</Switch>
			</ProductProvider>
		</CategoryProvider>
	);
};

export default ProductRoute;
