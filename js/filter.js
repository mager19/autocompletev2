import movies from "./movies.js";
import { getData } from "./data.js";

export default async function filter(valueInput) {
	let data = await getData();

	const filtered = data.filter((movie) => {
		return movie.title.toLowerCase().includes(valueInput.toLowerCase());
	});

	if (filtered.length > 0) {
		return filtered;
	} else {
		return [{ title: "Sorry no results", code: "no-results" }];
	}
}
