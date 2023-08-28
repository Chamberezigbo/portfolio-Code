// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import MainPage from "./Components/mainPage/MainPage";
import Loader from "./Components/loader/LoderPage"; // Import your Loader component
import bg from "./img/Chamber Ezigbo3.png";

function App() {
	const [knowMe, setKnowMe] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	// Simulate loading time with useEffect
	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 5000); // Simulate loading for 2 seconds
	}, []);

	const ToggleAbout = () => {
		if (knowMe) {
			setKnowMe(!knowMe);
		} else {
			setKnowMe(!knowMe);
		}
	};

	return (
		<div className="app">
			{isLoading ? (
				<Loader imageUrl={bg} />
			) : (
				/* Wrap the following elements in a parent container */
				<div>
					<Navbar />
					<MainPage
						onClickHandler={ToggleAbout}
						pageStatus={knowMe}
					/>
				</div>
			)}
		</div>
	);
}

export default App;
