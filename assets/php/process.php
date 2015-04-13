<?php
	$compare = array(
		'cometa' => str_split( strtolower( htmlentities( $_POST['cometa'] ) ) ),
		'grupo' => str_split( strtolower( htmlentities( $_POST['grupo'] ) ) )
	);

	function compare( $lettersArray ){
		
		$resultHtml = array();
		$resultValue = 1;

		foreach ($lettersArray as $letter) {
			$letterValue = ( ord($letter) - 96 );

			array_push($resultHtml, $letterValue);
			$resultValue *= $letterValue;
		}

		$resultArray = array(
			'letters'  => $lettersArray,
			'lettersValue'  => $resultHtml,
			'value' => $resultValue,
			'mod'   => $resultValue % 45
		);

		return $resultArray;
	};

	$return = array(
		'cometa' => compare($compare['cometa']),
		'grupo'  => compare($compare['grupo']),
		'isEquals' => $isEquals
	);

	echo json_encode($return);
?>