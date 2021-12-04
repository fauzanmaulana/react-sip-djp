import React from "react";
import { Redirect, Route, Switch } from "react-router";
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";

const MainAppRoute = () => {
	return (
		<Switch>
			<Route exact path="/">
				<Redirect to="/login" />
			</Route>
			<Route path="/login" component={LoginPage} />
			<Route path="/dashboard" component={DashboardPage} />
		</Switch>
	);
};

export default MainAppRoute;
