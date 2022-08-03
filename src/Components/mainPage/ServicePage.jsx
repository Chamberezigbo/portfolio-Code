import {
	UilDiamond,
	UilRocket,
	UilSignalAlt3,
	UilImageResizeLandscape,
} from "@iconscout/react-unicons";
export default function ServicePage() {
	return (
		<div>
			<div className="mb-5">
				<h2 className="fst-italic border-bottom border-success w-25 border-3">
					Services
				</h2>
				<div className="row mt-5">
					<div className="col-lg-6">
						<div className="row">
							<div className="col-lg-2 mb-2">
								<UilDiamond
									className="text-success"
									size="60"
								/>
							</div>

							<div className="col-lg-6 mt-2">
								<h3>Web App Development</h3>
								<h6 className="fw-lighter">
									Front-end and back-end web development and
									design,
									<br /> from wireframes and UI/UX design, to
									Full Stack Web <br /> Applications
								</h6>
							</div>
						</div>
					</div>

					<div className="col-lg-6">
						<div className="row">
							<div className="col-lg-2 mb-2 mt-3">
								<UilRocket className="text-success" size="60" />
							</div>

							<div className="col-lg-6 mt-2">
								<h3>UI/UX Design</h3>
								<h6 className="text-wrap">
									Human-centered approach to all design
									decisions so that
									<br /> products feel custom built for the
									target audience and is <br />{" "}
									easy-to-navigate
								</h6>
							</div>
						</div>
					</div>
				</div>

				<div className="row mt-3">
					<div className="col-lg-6">
						<div className="row">
							<div className="col-lg-2 mb-2">
								<UilSignalAlt3
									className="text-success"
									size="60"
								/>
							</div>

							<div className="col-lg-6 mt-2">
								<h3>Business Strategy</h3>
								<h6 className="fw-lighter">
									Marketing & advertsing strategy that
									utilizes online and <br /> offline based
									technologies to promote your services and
									<br />
									grow your brand
								</h6>
							</div>
						</div>
					</div>

					<div className="col-lg-6">
						<div className="row">
							<div className="col-lg-2 mb-2 mt-3">
								<UilImageResizeLandscape
									className="text-success"
									size="60"
								/>
							</div>

							<div className="col-lg-6 mt-2">
								<h3>Responsive Design</h3>
								<h6 className="text-wrap">
									Built to look and perform beautifully on all
									types of <br /> devices, with a page
									structure that is logical and helps <br />
									users (and search engines) browse
									efficiently
								</h6>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
