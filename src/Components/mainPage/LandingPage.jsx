import React from "react";

export default function LandingPage() {
	return (
		<>
			<div className="row">
				<div className="col-5">
					<h1 className="text-break fw-bolder fst-italic">
						Hi, I’m Chamberlain, Your Next Software Engineer
					</h1>
					<div className="my-4">
						<p className="fw-lighter">
							Ready to have some sense of humanity
						</p>
					</div>
					<button type="button" className="btn btn-outline-success">
						Meet Me
					</button>
				</div>
				<div className="col-7">
					<img
						src={bg}
						className="img-thumbnail"
						alt={bg}
						width="97%"
					/>
				</div>
			</div>
		</>
	);
}
