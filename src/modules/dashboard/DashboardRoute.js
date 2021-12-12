import { Route, Switch } from "react-router";
import NotFoundPage from "../../pages/NotFoundPage";
import { SalesProvider } from "../sales/SalesContext";
import DashboardIndex from "./DashboardIndex";

const DashboardRoute = () => {
	return (
		<SalesProvider>
			<Switch>
				<Route exact path="/dashboard" component={DashboardIndex} />
				<Route component={NotFoundPage} />
			</Switch>
		</SalesProvider>
	);
};

export default DashboardRoute;
