// open document function to start it all off
$(function()  {
// function to run every time a click happens - redirect to the appropriate DemDigits function referenced in line 7

var buttonCheck = false;

	$("#submit").click(function(){
	
				var firstInteger = $('#firstInteger').val();			
				var secondInteger = $('#secondInteger').val();
				// var buttonCheck = $('#additionButton').val();

				// console.log(buttonCheck);

				if($("additionButton").prop("checked", true))
					{
					var totalAdd = (eval(firstInteger) + eval(secondInteger));
					console.log(totalAdd);
					$('#historyOutput').prepend('<div>' + firstInteger + '+' + secondInteger + '=' + totalAdd + '</div>');
					}
				else{
					alert("null!");
				};
});

});
	  				
					// var subDemDigits = $('#subtractionButton');
					// var mulDemDigits = $('#multiplyButton');
					// var divDemDigits = $('#divideButton');

					

// // Addition only here!
					

// 						(function(){
// 							var addResult = ('Adding these nubers gives you ' (parseInt(firstInteger).val()) + (parseInt(secondInteger).val()));
// 						})
// // // variables to set the ID of each radio button to an object we can mess with

					

// // // function to trigger when the addition radio button is selected
// // 				function addition (addResult) {
// // 						
						
// // // Attempt to push the 
// 						
					
// // 	  		});