import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Toster from "./components/Toster";
import EditorPage from "./pages/EditorPage";
import HomePage from "./pages/HomePage";



const App = () => {
	useEffect(() => {
		document.title = "Shared text editor";
	}, []);

	return (
		<BrowserRouter>
			<Toster />
			<Routes>
				<Route path="/" element={<HomePage />}></Route>
				<Route path="/editor/:roomId" element={<EditorPage />}></Route>
				<Route path="*" element={<HomePage />}></Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
