import React from "react";
import { Route, Switch } from "react-router";
import Index from "./Index";
import Show from "./Show";
import Create from "./Create";
import Update from "./Update";
import { CategoryProvider } from "./CategoryContext";

const CategoryRoute = () => {
	return (
		<CategoryProvider>
			<Switch>
				<Route exact path="/dashboard/category" component={Index} />
				<Route path="/dashboard/category/create" component={Create} />
				<Route exact path="/dashboard/category/:id" component={Show} />
				<Route path="/dashboard/category/:id/update" component={Update} />
			</Switch>
		</CategoryProvider>
	);
};

export default CategoryRoute;
