// open document function to start it all off
$(function()  {
// function to run every time a click happens - redirect to the appropriate DemDigits function referenced in line 7

var buttonCheck = false;

	$("#submit").click(function(){
	
				var firstInteger = $('#firstInteger').val();			
				var secondInteger = $('#secondInteger').val();
				// var buttonCheck = $('#additionButton').val();

				// console.log(buttonCheck);

				if($("#additionButton").prop("checked"))
					{
					var totalAdd = (eval(firstInteger) + eval(secondInteger));
					var totalSubtract = (eval(firstInteger) - eval(secondInteger));
					var totalMultiply = (eval(firstInteger) * eval(secondInteger));
					var totalDivide = (eval(firstInteger) / eval(secondInteger));

					$('#historyOutput').prepend('<div>' + firstInteger + '+' + secondInteger + '=' + totalAdd + '</div>');
					}
				if($("#subtractionButton").prop("checked"))
					{
					var totalSubtract = (eval(firstInteger) - eval(secondInteger));
					$('#historyOutput').prepend('<div>' + firstInteger + '-' + secondInteger + '=' + totalSubtract + '</div>');
					}
				if($("#multiplyButton").prop("checked"))
					{
					var totalMultiply = (eval(firstInteger) * eval(secondInteger));
					$('#historyOutput').prepend('<div>' + firstInteger + '*' + secondInteger + '=' + totalMultiply + '</div>');
					}
				if($("#divideButton").prop("checked"))
					{
					var totalDivide = (eval(firstInteger) / eval(secondInteger));
					$('#historyOutput').prepend('<div>' + firstInteger + '/' + secondInteger + '=' + totalDivide + '</div>');
					}
				

				if($("#divideButton" || "#multiplyButton" || "#additionBdutton" || "subtractionButton").prop("checked", false))

				{
					alert("null!");
				};
});

});
	  				