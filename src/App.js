import { Route, Routes } from "react-router-dom";

import Formik from "./components/formik-ex/Formik";
import Home from "./page/Home";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />

			<Route path="/formik" element={<Formik />} />
		</Routes>
	);
}

export default App;
