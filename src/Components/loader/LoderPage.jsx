import React from "react";
import "./style.css";

const Loader = ({ imageUrl }) => (
	<div className="loader">
		<img src={imageUrl} alt="Loading" />
		<p>Loading...</p>
	</div>
);

export default Loader;
