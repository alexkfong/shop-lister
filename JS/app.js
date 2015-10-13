$(document).ready( function() {
	// Check to make sure JQuery is working
	console.log("Ready!")

	var itemsOnList = 0;
	var itemsPurchased = 0;

	// Hide instructions if clicked
	$('#hideButton').click( function() {
		$('#instructionsSection').fadeToggle("fast","linear", function() {
			$('#buttonReadInstructions').fadeToggle("slow","linear");
		});
	});

	// Reveal instructions if clicked
	$('#buttonReadInstructions').click( function() {
		$('#buttonReadInstructions').fadeToggle("fast","linear", function() {
			$('#instructionsSection').fadeToggle("slow","linear");
		});
	});

	// Add an item to the list
	$('#interfaceAddButton').click( function(){
		
		// Get the string in the input field
		var itemToAdd = $('#addListItem').filter(':input').val();
		
		// Check if itemToAdd is valid.
		if( !itemToAdd )
		{

			//if error message not displayed, display it
			if( !$('#addListItem').next('p').length ) {
				console.log("Fire error message just once.")
				$('#addListItem').after("<p class=\"spaceAbove10 centerText hidden\">Please type in the name of the item</p>");
				$('#addListItem').next('p').fadeToggle("fast","linear");
			}
			//flash the error message for UI
			else
			{
				$('#addListItem').next('p').fadeToggle("fast","linear");
				$('#addListItem').next('p').fadeToggle("fast","linear");
			}
		}
		// item is valid, now add to list
		else {
			console.log("The item you want to add is" + itemToAdd);
			$('#addListItem').filter(':input').val("");
			itemsOnList++; //increment itemsOnList
		}
	});
});