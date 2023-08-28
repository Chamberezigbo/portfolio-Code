//?> main section holding every thing //
import React, { useState } from "react";
import SocialLinks from "../data/SocialLinks";
import bg from "../../img/Chamber Ezigbo1 (1).png";
import ProjectPage from "./ProjectPage";
import About from "./About";
import LandingPage from "./LandingPage";
import BlogPage from "./BlogPage";
import "./MainPage.css";

export default function MainPage({ onClickHandler, pageStatus }) {
	const [displayComponent, setDisplayComponent] = useState(<ProjectPage />); // Set Project component as initial state

	const showProjectComponent = () => {
		setDisplayComponent(<ProjectPage />);
	};

	const showBlogComponent = () => {
		setDisplayComponent(<BlogPage />);
	};

	return (
		<div className="container-fluid mt-5">
			<div className="container">
				<div className="row border-custom">
					<div className="col-lg-6">
						<h6>Algorithm without humanity is digital barbarism</h6>
					</div>
					<div className="ms-auto col-2 d-none d-sm-none d-lg-block">
						<SocialLinks />
						{/* add other links  */}
					</div>
				</div>
			</div>

			<div className="container mt-5">
				{pageStatus ? (
					<About img={bg} onClickHandler={onClickHandler} />
				) : (
					<LandingPage img={bg} onClickHandler={onClickHandler} />
				)}
			</div>

			<div className="container mt-5 border-top border-secondary">
				<div className="d-flex justify-content-center mt-5">
					<div
						className="btn-group"
						role="group"
						aria-label="Basic example"
					>
						<button
							type="button"
							class="btn custom-btn"
							onClick={showProjectComponent}
						>
							Projects
						</button>
						<button
							type="button"
							class="btn custom-btn"
							onClick={showBlogComponent}
						>
							Blogs
						</button>
					</div>
				</div>
				<div className="ProjectSec">
					<h2 className="fst-italic my-5">Latest Project || Blog</h2>
				</div>
				<div className="row">{displayComponent}</div>
			</div>
		</div>
	);
}
