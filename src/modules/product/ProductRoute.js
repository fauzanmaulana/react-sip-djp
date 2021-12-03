import React from "react";
import { Route, Switch } from "react-router";
import Index from "./Index";
import Create from "./Create";

const ProductRoute = () => {
	return (
		<Switch>
			<Route exact path="/dashboard/product" component={Index} />
			<Route path="/dashboard/product/create" component={Create} />
		</Switch>
	);
};

export default ProductRoute;
