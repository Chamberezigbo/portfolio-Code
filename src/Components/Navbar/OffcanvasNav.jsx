import data from "../data/media-data";

export default function OffcanvasNav() {
	return (
		<>
			<ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
				{/* <span className="text-success pe-3">
							<FontAwesomeIcon icon={faEnvelope} />
						</span>
						chamberezigbo@gmail.com */}
				{data.map((x) => {
					return (
						<li
							className="nav-item border-bottom border-secondary py-4"
							key={x.id}
						>
							<a
								className="nav-link active"
								aria-current="page"
								href="#"
							>
								<span className="text-success pe-3">
									{x.fontImage}
								</span>
								{x.username}
							</a>
						</li>
					);
				})}
			</ul>
		</>
	);
}
