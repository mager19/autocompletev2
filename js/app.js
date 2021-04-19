import * as ui from "./ui.js";

//variables
let input = document.querySelector("#title"),
	valueInput;

//listeners
input.addEventListener("keyup", () => {
	valueInput = input.value;

	if (valueInput.length > 2) {
		ui.showContainer(valueInput);
	} else {
		ui.cleanContainer();
	}
});
