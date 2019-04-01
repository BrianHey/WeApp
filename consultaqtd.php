<?php 

include 'conexion.php';

$tablaphp = $_POST['tabla'];
$tdphp1 = $_POST['tduno'];
$tdphp2 = $_POST['tddos'];
// $tablaphp = 4.5;
// $tdphp1 = 4.5;
// $tdphp2 = 5;



$consulta2 = 'SELECT * FROM '. $tablaphp;

$data2 = mysql_query($consulta2) or die(mysql_error());

$qtd = array();

while($row2 = mysql_fetch_array($data2))
{

	array_push($qtd,(float)$row2[1]);

}

// echo json_encode($qtd);

$cuantos = sizeof($qtd);

// echo $cuantos;


$consulta3 = "SELECT * FROM $tablaphp WHERE td= $tdphp1 ";

$data3 = mysql_query($consulta3) or die(mysql_error());

$qtd = array();

while($row3 = mysql_fetch_array($data3))
{

	array_push($qtd,(float)$row3[1]);



}

$consulta4 = "SELECT * FROM $tablaphp WHERE td= $tdphp2 ";

$data4 = mysql_query($consulta4) or die(mysql_error());

while($row4 = mysql_fetch_array($data4))
{

	array_push($qtd,(float)$row4[1]);

	

}


echo json_encode($qtd);


// $qtdphp1 = array();

// for ($i=0; $i < $cuantos-1 ; $i++) { 
	

// 	if($qtd[$i] <= $qtdphp && $qtd[$i+1] >= $qtdphp){
// 		$yuno = $qtd[$i+1];
// 		$ycero = $qtd[$i];
// 		array_push($qtdphp1,$ycero,$yuno);
		
// 	}

// 	// array_push($tdphp,$qtd[$i]);

// }

// echo $qtd[0]. " " . $qtd[1];


// echo json_encode($qtdphp1);







// $consulta2 = 'SELECT * FROM '.$tablaphp;

// $data2 = mysql_query($consulta2);
// $arrayName = array();
// while($row2 = mysql_fetch_array($data))
// {

// 	array_push($arrayName,(float)$row[0]);

// }

// echo json_encode($arrayName);

// $datos =  array(data);

// $row = mysql_fetch_array($data);

// echo  'si puej '. json_encode($row);

 ?>
