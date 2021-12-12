import React from "react";
import { Route, Switch } from "react-router";
import CategoryIndex from "./CategoryIndex";
import CategoryShow from "./CategoryShow";
import CategoryCreate from "./CategoryCreate";
import CategoryUpdate from "./CategoryUpdate";
import { CategoryProvider } from "./CategoryContext";

const CategoryRoute = () => {
	return (
		<CategoryProvider>
			<Switch>
				<Route exact path="/dashboard/category" component={CategoryIndex} />
				<Route path="/dashboard/category/create" component={CategoryCreate} />
				<Route exact path="/dashboard/category/:id" component={CategoryShow} />
				<Route
					path="/dashboard/category/:id/update"
					component={CategoryUpdate}
				/>
			</Switch>
		</CategoryProvider>
	);
};

export default CategoryRoute;
