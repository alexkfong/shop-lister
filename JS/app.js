$(document).ready( function() {
	// Check to make sure JQuery is working
	console.log("Ready!")

	var itemsOnList = 1;
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
				$('#addListItem').after("<p class=\"spaceAbove10 centerText hidden\">Please type in the name of the item</p>");
				$('#addListItem').next('p').fadeToggle("fast","linear");
			}
			//otherwise flash the error message for UI
			else
			{
				$('#addListItem').next('p').fadeToggle("fast","linear");
				$('#addListItem').next('p').fadeToggle("fast","linear");
			}
		}
		// item is valid, now add to list
		else {
			itemsOnList++; //increment itemsOnList
			
			//Append to shoppingList, with custom ID based on itemsOnList
			$('.shoppingList').append("<div id=\"listedItem" + itemsOnList + "\" class=\"listItem grid12 spaceAbove20 hidden\"><input class=\"grid10 centerText\" type=\"text\" id=\"editListItem" + itemsOnList + "\" value=\"" + itemToAdd + "\" /><ul class=\"listItemInterface displayInlineBlock floatRight\"><li class=\"roundedRectangle\"><i class=\"fa fa-check-square\"></i></li><li class=\"roundedRectangle\"><i class=\"fa fa-trash-o\"></i></li></ul></div>");
			$('#listedItem' + itemsOnList).fadeToggle("fast", "linear");

			//delete text from input field
			$('#addListItem').filter(':input').val("");

			if( $('#addListItem').next('p').length ) {
				$('#addListItem').next('p').fadeToggle("fast","linear");
				$('#addListItem').next('p').remove();
			}
			
		}
	});
});