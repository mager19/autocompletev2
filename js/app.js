//variables
let input = document.querySelector("#title"),
	valueInput;

//listeners
input.addEventListener("keyup", () => {
	valueInput = input.value;

	if (valueInput.length > 2) {
		console.log("mas de 2 teclas pulsadas");
	}
});
