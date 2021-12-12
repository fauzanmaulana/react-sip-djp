import React from "react";
import { Route, Switch } from "react-router";
import SalesIndex from "./SalesIndex";
import SalesImport from "./SalesImport";
import { SalesProvider } from "./SalesContext";

const ProductRoute = () => {
	return (
		<SalesProvider>
			<Switch>
				<Route exact path="/dashboard/sales" component={SalesIndex} />
				<Route path="/dashboard/sales/import" component={SalesImport} />
			</Switch>
		</SalesProvider>
	);
};

export default ProductRoute;
