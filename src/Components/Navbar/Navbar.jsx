// ?> My navbar section //

import SocialLinks from "../data/SocialLinks";
import "./Navbar.css";
import logo from "../../img/Chamber Ezigbo2.png";
import Offcanvas from "./Offcanvas";

const Navbar = () => {
	return (
		<div className="container pt-3">
			<div>
				<nav className="navbar bg-white d-flex">
					<div className="">
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="offcanvas"
							data-bs-target="#offcanvasNavbar"
							aria-controls="offcanvasNavbar"
						>
							<span className="navbar-toggler-icon"></span>
						</button>
						<Offcanvas />
					</div>
					<div className="ms-auto">
						<img
							src={logo}
							className="rounded "
							width={100}
							alt="..."
						/>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
