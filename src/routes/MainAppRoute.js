import React from "react";
import { Redirect, Route, Switch } from "react-router";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import DashboardPage from "../pages/DashboardPage";

const MainAppRoute = () => {
	return (
		<Switch>
			<Route exact path="/">
				{localStorage.getItem("user_token") ? (
					<Redirect to="/dashboard" />
				) : (
					<Redirect to="/login" />
				)}
			</Route>
			<Route path="/login" component={LoginPage} />
			<Route path="/register" component={RegisterPage} />
			<Route path="/dashboard" component={DashboardPage} />
		</Switch>
	);
};

export default MainAppRoute;
