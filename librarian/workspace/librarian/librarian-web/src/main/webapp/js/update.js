$("document").ready(function(){
	$("#services").click(function(){
		$("#serviceSelection").stop().fadeToggle(2000);
	});
	
	$('[type=number], [type=text]').blur(function(){
		if($(this).val() == ""){
			$(this).css('border', '2pt solid red');
		}else{
			$(this).css('border', '2pt solid LimeGreen');
		}
	});
	
	$("#updateButton").click(function(){
		$.ajax({
			url: 'author/update',
			dataType: 'json',
			type: 'post',
			contentType: 'application/json',
			data: JSON.stringify({"authorID": $('[name=id]').val(), "name": $('[name=name]').val(), "nationality": $('select').val(), "birthDate": $('[name=year]').val() + '-' + $('[name=month]').val() + '-' + $('[name=day]').val()}),
			complete: function(response){
				if(response.status == 200){
					alert('Successful update!');
					window.location.href = "./authorslist";
				}else{
					alert('Error!');
				}
			}
		});
	});
});