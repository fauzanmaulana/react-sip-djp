import React from "react";
import { Redirect, Route, Switch } from "react-router";
import DashboardPage from "../pages/DashboardPage";
import { serviceLocalStorage } from "../Helper";
import { AuthProvider } from "../modules/auth/AuthContext";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import NotFoundPage from "../pages/NotFoundPage";

const MainAppRoute = () => {
	return (
		<AuthProvider>
			<Switch>
				<Route exact path="/">
					{serviceLocalStorage("user_token") ? (
						<Redirect to="/dashboard" />
					) : (
						<Redirect to="/login" />
					)}
				</Route>
				<Route path="/login" component={LoginPage} />
				<Route path="/register" component={RegisterPage} />
				<Route path="/dashboard" component={DashboardPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</AuthProvider>
	);
};

export default MainAppRoute;
