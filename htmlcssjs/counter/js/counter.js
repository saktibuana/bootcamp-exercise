theNumberPlaceHolder = document.getElementById("number_placeholder");

theButton = document.getElementById("counter_button");
theButton.addEventListener("click", () => {

	//get the current value, ensuring its an integer.
	currentNumber = parseInt(theNumberPlaceHolder.innerHTML);
	console.log(currentNumber);
	// add current value by 1(one)
	currentNumber += 1;
	//write to the placeholder
	theNumberPlaceHolder.innerHTML = currentNumber;
	if (currentNumber % 5 == 0) {
		//do something every multiple of 5
		console.log("passed multiple of 5 do, something");
		theNumberPlaceHolder.classList.toggle("bounce");
	}else{
		//ensure nothing happend
		theNumberPlaceHolder.classList.remove("bounce");
	}
});
