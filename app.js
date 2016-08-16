$(document).ready(function() {

	for(i=1; i<=100; i++) {
		
		if ((i%15) == 0) {

			$("#main--container").append("<div class='cell cell-fizz-buzz'>Fizz Buzz</div>");	// Checking if the number is divisible by 3 and 5

		} else if ((i%3) == 0) { 

			$("#main--container").append("<div class='cell cell-fizz'>Fizz</div>"); 			// Checking if the number is divisible by 3

		} else if ((i%5) == 0) {

			$("#main--container").append("<div class='cell cell-buzz'>Buzz</div>");				// Checking if the number is divisible by 5

		} else {

			$("#main--container").append(("<div class='cell cell-number'>"+ i +"</div> ")); 	// Else printing the number 

		}

		if ((i%10) == 0) {$("#main--container").append('<br>')}									// Breaking the row for every 10 elements

	}

	// Showing an alert message if a cell with Fizz Buzz is clicked
	$(".cell-fizz-buzz").click(function() {
	  	alert( "FizzBuzz!" );
	});

});