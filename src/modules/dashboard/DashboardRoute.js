import { Route, Switch } from "react-router";
import Index from "./Index";

const DashboardRoute = () => {
	return (
		<Switch>
			<Route path="/dashboard" component={Index} />
		</Switch>
	);
};

export default DashboardRoute;
