//?> main section holding every thing //

import SocialLinks from "../data/SocialLinks";
import bg from "../../img/Chamber Ezigbo1 (1).png";
import ProjectPage from "./ProjectPage";
import About from "./About";
import LandingPage from "./LandingPage";
import "./MainPage.css";

export default function MainPage({ onClickHandler, pageStatus }) {
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
				<div className="ProjectSec">
					<h2 className="fst-italic my-5">Latest Project</h2>
				</div>
				<div className="row">
					<ProjectPage />
				</div>
			</div>
		</div>
	);
}
