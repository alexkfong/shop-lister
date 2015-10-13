$(document).ready( function() {
	// Check to make sure JQuery is working
	console.log("Ready!")

	// Hide instructions if clicked
	$('#hideButton').click( function() {
		$('#instructionsSection').hide();
		$('#buttonReadInstructions').show();
	});

	// Reveal instructions if clicked
	$('#buttonReadInstructions').click( function() {
		$('#instructionsSection').show();
		$('#buttonReadInstructions').hide();
	});
});