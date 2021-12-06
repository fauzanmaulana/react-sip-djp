import React from "react";
import { Redirect, Route, Switch } from "react-router";
import DashboardPage from "../pages/DashboardPage";
import AuthPage from "../pages/AuthPage";
import { serviceLocalStorage } from "../Helper";
import { AuthProvider } from "../modules/auth/AuthContext";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const MainAppRoute = () => {
	return (
		<AuthProvider>
			<Switch>
				<Route exact path="/">
					{serviceLocalStorage("user_token") ? (
						<Redirect to="/dashboard" />
					) : (
						<Redirect to="/auth/login" />
					)}
				</Route>
				<Route path="/login" component={LoginPage} />
				<Route path="/register" component={RegisterPage} />
				<Route path="/auth/:type" component={AuthPage} />
				<Route path="/dashboard" component={DashboardPage} />
			</Switch>
		</AuthProvider>
	);
};

export default MainAppRoute;
