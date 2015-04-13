$(document).ready(function(){
	console.info('entrou');
	$('#calcularGrupo').on('submit',function(event){
		event.preventDefault();
		$.ajax({
			method: "POST",
			url: "./assets/php/process.php",
			data: $(this).serialize()
		}).done(function( data ) {
			$('#retorno').fadeIn(300);
		});
	});
});