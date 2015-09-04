// open document function to start it all off
$(function()  {

// function to run every time a click happens - redirect to the appropriate DemDigits function referenced in line 7


	$("#submit").click(function(){
	
				var firstInteger = $('#firstInteger').val();			
				var secondInteger = $('#secondInteger').val();
				
				if('#additionButton'.checked=true)
					{
					var totalAdd = (eval(firstInteger) + eval(secondInteger));
					console.log(totalAdd);
					$('#historyOutput').append(firstInteger + '+' + secondInteger + '=' + totalAdd +"\n");
					}
				else{
					null;
				};
});

});
	  		// 		var addDemDigits = $('#additionButton');
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