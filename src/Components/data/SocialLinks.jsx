import data from "../data/media-data";

export default function SocialLinks() {
	return (
		<>
			{data.map((a) => {
				return (
					<a
						href={a.url}
						target="_blank"
						className="text-dark ms-2 py-3"
						key={a.id}
						rel="noreferrer"
					>
						{a.fontImage}
					</a>
				);
			})}
		</>
	);
}
