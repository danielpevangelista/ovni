$(document).ready(function(){
	$('#retorno').fadeOut(100);

	$('#calcularGrupo').on('submit',function(event){
		event.preventDefault();
		$('#retorno').fadeOut(100);
		$('#verify').html('Verificando OVNI...');
		$('#verify').prop( "disabled", true );
		$.ajax({
			method : 'POST',
			url : './assets/php/process.php',
			dataType : 'JSON',
			data: $(this).serialize()
		}).done(function( data ) {
			$('#retorno').fadeIn(300);
			$('#verify').html('Verificar se o grupo será levado');
			$('#verify').prop( "disabled", false );
			processData(data);
			console.info(data);
		});
	});

	var processData = function(data) {
		$('#resultCometa').html('');
		$('#resultCometaValue').html('');
		$('#resultCometaCalc').html('');
		$('#resultCometaMod').html('');

		$('#resultGrupo').html('');
		$('#resultGrupoValue').html('');
		$('#resultGrupoCalc').html('');
		$('#resultGrupoMod').html('');

		for ( var i = 0; i < data['cometa']['letters'].length; i++ ) {
			$('#resultCometa').append('<td>' + data['cometa']['letters'][i] + '</td>');
			$('#resultCometaValue').append('<td>' + data['cometa']['lettersValue'][i] + '</td>');
		}
		$('#resultCometaCalc').html(data['cometa']['value']);
		$('#resultCometaMod').html(data['cometa']['mod']);

		for ( var i = 0; i < data['grupo']['letters'].length; i++ ) {
			$('#resultGrupo').append('<td>' + data['grupo']['letters'][i] + '</td>');
			$('#resultGrupoValue').append('<td>' + data['grupo']['lettersValue'][i] + '</td>');
		}
		$('#resultGrupoCalc').append(data['grupo']['value']);
		$('#resultGrupoMod').html(data['grupo']['mod']);

		$('#isEquals').removeClass('btn-warning');
		$('#isEquals').html('UFA!! O OVNI não vai pegar seu grupo.');
		if ( data['cometa']['mod'] === data['grupo']['mod'] ) {
			$('#isEquals').addClass('btn-warning');
			$('#isEquals').html('Seu grupo VAI ser pego!!! Corram!!!');
		}
	};

});