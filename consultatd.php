<?php 

include 'conexion.php';

$tablaphp = $_POST['tabla'];
$tdphp = $_POST['td'];


// $tablaphp = 'cuatropuntocinco';
// $tdphp = 2.7;



$consulta2 = 'SELECT * FROM '. $tablaphp;

$data2 = mysql_query($consulta2) or die(mysql_error());
$LosTds = array();

while($row2 = mysql_fetch_array($data2))
{

	array_push($LosTds,(float)$row2[0]);

}



$CantidadDeTds = sizeof($LosTds);


$LosTdTotales = array();



for ($i=0; $i < $CantidadDeTds-1 ; $i++) { 
	

	if($LosTds[$i] <= $tdphp && $LosTds[$i+1] >= $tdphp){
		$xuno = $LosTds[$i+1];
		$xcero = $LosTds[$i];
		array_push($LosTdTotales,$xcero,$xuno);
		
	}

}

echo  json_encode($LosTdTotales);


// $consulta3 = 'SELECT * FROM '. $tablaBuscada;

// $data3 = mysql_query($consulta3) or die(mysql_error());
// $Lostds1 = array();

// while($row3 = mysql_fetch_array($data3))
// {

// 	array_push($Lostds1,(float)$row3[0]);

// }



// $tdphp1 = array();

// for ($i=0; $i < $CantidadDeTds-1 ; $i++) { 
	

// 	if($Lostds1[$i] <= $tdphp[1] && $Lostds1[$i+1] >= $tdphp[1]){
// 		$xuno = $Lostds1[$i+1];
// 		$xcero = $Lostds1[$i];
// 		array_push($LosTdTotales,$xcero,$xuno);
		
// 	}

// }





 ?>
