import movies from "./movies.js";

export default function filter(valueInput) {
	const filtered = movies.filter((movie) => {
		return movie.title.toLowerCase().includes(valueInput.toLowerCase());
	});

	if (filtered.length > 0) {
		return filtered;
	} else {
		return [{ title: "Sorry no results" }];
	}
}
