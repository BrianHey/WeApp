<!DOCTYPE html>
<html>
<head>
	<title>WeApp</title>
	<link rel="stylesheet" href="bootstrap.min.css" >
<script src="jquery.js"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
<link rel="stylesheet" type="text/css" href="estilos.css">
<script type="text/javascript" src="metodo-pot.js"></script>
<meta charset="utf-8">

</head>
<body>
<?php 

include 'menu.php';

?>
<div style=" width: 70%;  ">

<br> <center><h3 style="margin-left: 35%;"><b>Modelo Pot</b></h3></center><br>

<div>

</div>

<div style=" width: 100%;  margin-left: 15%;">

<div  style=" width: 90%; " id="tabla-formulario">
	
	<center><h4>Datos del acuífero</h4></center><br>

	   <div class="form-row">

			<div class="col">
				<div class="row">
					<div  class="col-1 align-self-center"> <h5><i>R<sub>a</sub></i></h5> </div>
					<div class="col-9"><input id="ra" placeholder="radio interno" class="form-control" type="" name=""></div> <div  class="col-1 align-self-center "><span  id="unidades"><i>pies</i></span></div> 
				</div>
			</div>

			<div class="col">
				<div class="row">
					<div class="col-1 align-self-center" ><h5><i>Cf<sub>a</sub></i></h5></div>
					<div class="col-9"><input id="cfa" placeholder="compresibilidad de la formación" class="form-control" type="" name=""></div>
					<div  class="col-2 align-self-center "><span  id="unidades"><i>lpca<sup>-1</sup></i></span></div> 
				</div>
			</div>

	   </div>
		<br>

	   <div class="form-row">

			<div class="col">
				<div class="row">
					<div class="col-1 align-self-center"><h5><i>Cw<sub>a</sub></i></h5></div>
					<div class="col-9"><input id="cwa" placeholder="compresibilidad del agua" class="form-control" type="" name=""></div>
					<div  class="col-2 align-self-center "><span  id="unidades"><i>lpca<sup>-1</sup></i></span></div> 
				</div>
			</div>

			<div class="col">
				<div class="row">
					<div class="col-1 align-self-center"><h5><i>&Phi;<sub>a</sub></i></h5></div>
					<div class="col-9"><input id="fia" placeholder="porosidad de la formación" class="form-control" type="" name=""></div>
					<div  class="col-2 align-self-center "><span  id="unidades"><i>adim </i></span></div>	
		</div>
			</div>

	   </div>

	<br>	    	
	 
	   <div class="form-row">

			<div class="col">
				<div class="row">
					<div class="col-1 align-self-center"><h5><i>h<sub>a</sub></i></h5></div>
					<div class="col-9"><input id="ha" placeholder="espesor de la formación" class="form-control" type="" name=""></div>
					<div  class="col-1 align-self-center "><span  id="unidades"><i>pies</i></span></div> 
				</div>
			</div>

			<div class="col">
				<div class="row">
					<div class="col-1 align-self-center"><h5><i>&theta;</i></h5></div>
					<div class="col-9"><input id="theta" placeholder="ángulo de invasión" class="form-control" type="" name=""></div>
					<div  class="col-2 align-self-center "><span  id="unidades"><i>grados</i></span></div> 	

		</div>
			</div>

	   </div>

	<br>
	 
	<center><h4>Datos del yacimiento</h4></center><br>

	   <div class="form-row">
			<div class="col">
				<div class="row">
					<div class="col-1 align-self-center"> <h5><i>P<sub>i</sub></i></h5></div>
					<div class="col-9"><input id="pi" placeholder="presión inicial" class="form-control" type="" name=""></div>
					<div  class="col-1 align-self-center "><span  id="unidades"><i>lpca</i></span></div> 
				</div>
			</div>
			<div class="col">
				<div class="row">
					<div class="col-1 align-self-center"><h5><i>P</i></h5></div>
					<div class="col-9"><input id="p" placeholder="presión actual" class="form-control" type="" name=""></div>
					<div  class="col-2 align-self-center "><span  id="unidades"><i>lpca </i></span></div>

				</div>
			</div>

	   </div>

	<br>
    	
	  <div class="form-row barra">

			<div class="col-6">
				<div class="row">
					<div class="col-1 align-self-center"><h5><i>R<sub>e</sub></i></h5></div>
					<div class="col-9"><input id="re" placeholder="radio externo" class="form-control" type="" name=""></div>
					<div  class="col-2 align-self-center "><span  id="unidades"><i>pies</i></span></div> 
 				
				</div>
			</div>

	   </div>

	<hr>
	   <div class="form-row justify-content-center botoness">
				
				<div class="row justify-content-center butons">
					<div class="col"><button class="btn generar">Enviar</button></div>
					<div class="col" ><button type="reset" class="btn">Borrar</button></div>
					<div class="col" ><button type="reset" class="btn" onclick="saveCanvas()">Imprimir</button>
				</div>
	   </div>

</div>

<hr>
	<div id="resultados">

</div>

</body>
</html>