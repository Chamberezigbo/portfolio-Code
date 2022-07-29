import SocialLinks from "../data/SocialLinks";
import bg from "../../img/bg-main-potr.png";
import ProjectPage from "./ProjectPage";
import About from "./About";
import "./MainPage.css";

export default function MainPage() {
	return (
		<div className="container-fluid mt-5">
			<div className="container">
				<div className="row border-bottom border-success border-4">
					<div className="col-lg-6">
						<h6>Algorithm without humanity is digital barbarism</h6>
					</div>
					<div className="ms-auto col-2 d-none d-sm-none d-lg-block">
						<SocialLinks />
						{/* add other links  */}
					</div>
				</div>
			</div>

			<div className="container my-5  border-bottom border-secondary">
				<About img={bg} />
			</div>

			<div className="container mt-5">
				<div className="ProjectSec">
					<h2 className="fst-italic my-5">Latest Project</h2>
				</div>
				<div className="row">
					<ProjectPage img={bg} />
				</div>
			</div>
		</div>
	);
}
