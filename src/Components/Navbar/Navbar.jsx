// ?> My navbar section //

import SocialLinks from "../data/SocialLinks";
import "./Navbar.css";
import Offcanvas from "./Offcanvas";

const Navbar = () => {
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-6">
					<nav className="navbar bg-white">
						<div className="container-fluid">
							<button
								className="navbar-toggler"
								type="button"
								data-bs-toggle="offcanvas"
								data-bs-target="#offcanvasNavbar"
								aria-controls="offcanvasNavbar"
							>
								<span className="navbar-toggler-icon"></span>
							</button>
							{/* <a className="navbar-brand" href="#">
							Get in touch
						</a> */}
							<Offcanvas />
						</div>
					</nav>
				</div>

				<div className="ms-auto col-6 d-flex d-md-none ">
					<SocialLinks />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
