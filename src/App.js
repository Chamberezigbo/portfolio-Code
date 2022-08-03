// import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import MainPage from "./Components/mainPage/MainPage";

function App() {
	const [knowMe, setKnowMe] = useState(false);

	const ToggleAbout = () => {
		if (knowMe) {
			setKnowMe(!knowMe);
		} else {
			setKnowMe(!knowMe);
		}
	};

	return (
		<div className="App">
			<Navbar />
			<MainPage onClickHandler={ToggleAbout} pageStatus={knowMe} />
		</div>
	);
}

export default App;
