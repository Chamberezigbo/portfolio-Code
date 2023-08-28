// ?> Project section where i maped with project array //

import data from "../data/blog";
export default function ProjectPage() {
	return (
		<>
			{data.map((a) => (
				<div className="col-lg-6" key={a.url}>
					<div className="card mb-3">
						<img
							src={process.env.PUBLIC_URL + a.img}
							className="card-img-top"
							alt={a.Name}
							width="100"
							height="300"
						/>
						<div className="card-body">
							<h5 className="card-title">{a.Name}</h5>
							<p className="card-text">{a.Description}</p>
							<p className="card-text">
								<small className="text-muted">{a.Stack}</small>
							</p>
							<a
								href={a.url}
								className="btn custom-btn"
								target="_bank"
							>
								Visit
							</a>
						</div>
					</div>
				</div>
			))}
		</>
	);
}
