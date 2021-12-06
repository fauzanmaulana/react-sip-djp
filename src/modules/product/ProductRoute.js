import React from "react";
import { Route, Switch } from "react-router";
import Index from "./Index";
import Create from "./Create";
import Show from "./Show";
import Update from "./Update";
import { ProductProvider } from "./ProductContext";
import { CategoryProvider } from "../category/CategoryContext";

const ProductRoute = () => {
	return (
		<CategoryProvider>
			<ProductProvider>
				<Switch>
					<Route exact path="/dashboard/product" component={Index} />
					<Route exact path="/dashboard/product/:id" component={Show} />
					<Route path="/dashboard/product/create" component={Create} />
					<Route path="/dashboard/product/:id/update" component={Update} />
				</Switch>
			</ProductProvider>
		</CategoryProvider>
	);
};

export default ProductRoute;
