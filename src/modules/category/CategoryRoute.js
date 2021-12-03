import React from "react";
import { Route, Switch } from "react-router";
import Index from "./Index";
import Create from "./Create";
import { CategoryProvider } from "./CategoryContext";

export const CategoryRoute = () => {
	return (
		<CategoryProvider>
			<Switch>
				<Route exact path="/dashboard/category" component={Index} />
				<Route path="/dashboard/category/create" component={Create} />
			</Switch>
		</CategoryProvider>
	);
};
