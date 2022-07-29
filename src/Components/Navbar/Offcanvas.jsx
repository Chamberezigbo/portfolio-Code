import { UilSearch } from "@iconscout/react-unicons";
import OffcanvasNav from "./OffcanvasNav";

export default function Offcanvas() {
	return (
		<>
			<div
				className="offcanvas offcanvas-start"
				tabIndex="-1"
				id="offcanvasNavbar"
				aria-labelledby="offcanvasNavbarLabel"
			>
				<div className="offcanvas-header">
					<form className="d-flex" role="search">
						<div className="input-group ">
							<div className="form-floating">
								<input
									className="form-control form-control-sm"
									type="search"
									placeholder="Search"
									aria-label="Search"
									id="floatingInputGroup1"
								/>
								<label htmlFor="floatingInputGroup1">
									Search
								</label>
							</div>
							<span className="input-group-text">
								<UilSearch />
							</span>
						</div>
						{/* <button
							className="btn btn-outline-success"
							type="submit"
						>
							Search
						</button> */}
					</form>
					<button
						type="button"
						className="btn-close"
						data-bs-dismiss="offcanvas"
						aria-label="Close"
					></button>
				</div>
				<div className="offcanvas-body">
					<h4
						className="offcanvas-title border-bottom border-2 border-success w-50 "
						id="offcanvasNavbarLabel"
					>
						Get in touch
					</h4>
					<p className="fw-lighter offcanvas-text my-5">
						Reach out and let's start a conversation!
					</p>
					{/* list of media */}
					<OffcanvasNav />
				</div>
			</div>
		</>
	);
}
