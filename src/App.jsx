import { Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import CataloguePage from "./pages/CataloguePage/CataloguePage.jsx";
import IndividualCamperPage from "./pages/IndividualCamperPage/IndividualCamperPage.jsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";
import { Toaster } from "react-hot-toast";
import { toastConfig } from "./variables/toastConfig.js";

function App() {
	return (
		<>
			<Navigation />
			<Suspense fallback={<h2>Loading by suspense!</h2>}>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/catalog" element={<CataloguePage />} />
					<Route path="/catalog/:id" element={<IndividualCamperPage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</Suspense>
			<Toaster toastOptions={toastConfig} />
		</>
	);
}

export default App;
