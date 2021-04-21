import filter from "./filter.js";

let container = document.querySelector("#inputContainer"),
	showComplete = document.querySelector(".complete"),
	input = document.querySelector("#title");

async function showContainer(valueInput) {
	//clean past results
	showComplete.classList.remove("d-none");
	container.appendChild(showComplete);

	const filtered = await filter(valueInput);

	showPredictions(filtered, valueInput);
}

function cleanContainer() {
	showComplete.classList.add("d-none");
}

function showPredictions(filtered, valueInput) {
	showComplete.innerHTML = "";

	filtered.forEach((element) => {
		let item = document.createElement("div");
		item.classList.add("item--filtered");
		item.textContent = `${element.title}`;

		const regex = new RegExp(valueInput, "i");

		item.innerHTML = item.textContent.replace(
			regex,
			`<span class="highlight">${valueInput}</span>`
		);

		item.addEventListener("click", (e) => {
			if (element.code != "no-results") {
				input.value = e.target.textContent;
			} else {
				input.value = "";
			}
		});

		showComplete.appendChild(item);
	});
}

export { showContainer, cleanContainer };
