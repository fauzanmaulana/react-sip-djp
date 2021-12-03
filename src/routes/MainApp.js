import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

const MainApp = () => {
	return (
		<Switch>
			<Route exact path="/">
				<Redirect to="/login" />
			</Route>
			<Route path="/login" component={Login} />
			<Route path="/dashboard" component={Dashboard} />
		</Switch>
	);
};

export default MainApp;
