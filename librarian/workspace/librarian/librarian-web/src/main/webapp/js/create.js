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

	$("#createButton").click(function(){
		$.ajax({
			url: 'author/insert',
			dataType: 'json',
			type: 'post',
			contentType: 'application/json',
			data: JSON.stringify({"name": $('[name=name]').val(), "nationality": $('select').val(), "birthDate": $('[name=year]').val() + '-' + $('[name=month]').val() + '-' + $('[name=day]').val()}),
			complete: function(response){
				if(response.status == 200){
					alert('Successful creation!');
					window.location.href = "./authorslist";
				}else{
					alert('Error!');
				}
			}
		});
	});
});