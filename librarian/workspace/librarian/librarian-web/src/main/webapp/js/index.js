$("document").ready(function(){
	$("#services").click(function(){
		$("#serviceSelection").stop().fadeToggle(2000);
	});

	$("#home").click(function(){
		$("#serviceSelection").stop().fadeOut(2000);
	});
});