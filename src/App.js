import { BrowserRouter } from "react-router-dom";
import MainAppRoute from "./routes/MainAppRoute";

function App() {
	return (
		<BrowserRouter>
			<MainAppRoute />
		</BrowserRouter>
	);
}

export default App;
