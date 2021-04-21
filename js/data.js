function getData() {
	let data = fetch("https://jsonplaceholder.typicode.com/posts")
		.then((response) => response.json())
		.then((json) => {
			return json;
		});

	return data;
}

export { getData };
