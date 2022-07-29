import data from "../data/media-data";

export default function SocialLinks() {
	return (
		<>
			{data.map((a) => {
				return (
					<a href="#" className="text-dark ms-2 py-3" key={a.id}>
						{a.fontImage}
					</a>
				);
			})}
		</>
	);
}
