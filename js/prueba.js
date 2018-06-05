$(window).ready(function(){
	$.get('external/texto.txt', function(data) {
	   $("p:last").html(data);
	}, 'text');
	
	/*
	$('#page2').click(function(){
		$('#pages').load('https://elcomercio.pe/');
	});
	*/
});