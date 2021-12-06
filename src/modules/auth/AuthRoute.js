import React from "react";
import { Route, Switch } from "react-router";
import Login from "./Login";
import Register from "./Register";

const AuthRoute = () => {
	return (
		<Switch>
			<Route path="/auth/login" component={Login} />
			<Route path="/auth/register" component={Register} />
		</Switch>
	);
};

export default AuthRoute;
