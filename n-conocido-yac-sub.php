<!DOCTYPE html>
<html>
<head>
	<title>WeApp</title>
	<link rel="stylesheet" href="bootstrap.min.css" >
<script src="jquery.js"></script>
<meta charset="utf-8">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
<link rel="stylesheet" type="text/css" href="estilos.css">
<script type="text/javascript" src="n-conocido-yac-sub.js"></script>
</head>
<body>
<?php 

include 'menu.php';

?>
<div style=" width: 90%; display: block; margin:auto; ">

<br> <center><h3 style="margin-left: 12.5%;"><b>POES conocido: yacimiento subsaturado</b></h3></center><br>

<div>

</div>

<div style="margin: auto; width: 100%; ">

<div id="tabla-formulario">
	
	<center><h4>Datos del yacimiento</h4></center><br>

	   <div class="form-row">

			<div class="col">
				<div class="row">
					<div  class="col-1 align-self-center"> <h5><i>P<sub>i</sub></i></h5> </div>
					<div class="col-9"><input id="pi" placeholder="presión inicial" class="form-control" type="" name=""></div> <div  class="col-1 align-self-center "><span  id="unidades"><i>lpca</i></span></div> 
				</div>
			</div>

			<div class="col">
				<div class="row">
					<div class="col-1 align-self-center" ><h5><i>P</i></h5></div>
					<div class="col-9"><input id="p" placeholder="presión actual" class="form-control" type="" name=""></div>
					<div  class="col-1 align-self-center "><span  id="unidades"><i>lpca</i></span></div> 
				</div>
			</div>

	   </div>
		<br>

	   <div class="form-row">

			<div class="col">
				<div class="row">
					<div class="col-1 align-self-center"><h5><i>N</i></h5></div>
					<div class="col-9"><input id="n" placeholder="petróleo original en sitio" class="form-control" type="" name=""></div>
					<div  class="col-1 align-self-center "><span  id="unidades"><i>BY</i></span></div> 
				</div>
			</div>

			<div class="col">
				<div class="row">
					<div class="col-1 align-self-center"><h5><i>N<sub>p</sub></i></h5></div>
					<div class="col-9"><input id="np" placeholder="petróleo producido" class="form-control" type="" name=""></div>
					<div  class="col-2 align-self-center "><span  id="unidades"><i>BN</i></span></div> 
				</div>
			</div>

	   </div>
	<br>
	
	   <div class="form-row">

			<div class="col">
				<div class="row">
					<div class="col-1 align-self-center"> <h5><i>B<sub>o</sub></i></h5> </div>
					<div class="col-9"><input id="bo" placeholder="factor volumétrico del petróleo" class="form-control" type="" name=""></div>
					<div  class="col-1 align-self-center "><span  id="unidades"><i>BY/BN</i></span></div> 
				</div>
			</div>

			<div class="col">
				<div class="row">
					<div class="col-1 align-self-center"><h5><i>B<sub>oi</sub></i></h5></div>
					<div class="col-9"><input id="boi" placeholder="factor volumétrico inicial del petróleo" class="form-control" type="" name=""></div>
					<div  class="col-2 align-self-center "><span  id="unidades"><i>BY/BN</i></span></div> 
				
				</div>
			</div>

	   </div>
		<br>

	   <div class="form-row">

			<div class="col">
				<div class="row">
					<div class="col-1 align-self-center"><h5><i>W<sub>p</sub></i></h5></div>
					<div class="col-9"><input id="wp" placeholder="agua producida" class="form-control" type="" name=""></div>
					<div  class="col-2 align-self-center "><span  id="unidades"><i>BN</i></span></div> 
				</div>
			</div>

			<div class="col">
				<div class="row">
					<div class="col-1 align-self-center"><h5><i>B<sub>w</sub></i></h5></div>
					<div class="col-9"><input id="bw" placeholder="factor volumétrico del agua" class="form-control" type="" name=""></div>
					<div  class="col-2 align-self-center "><span  id="unidades"><i>BY/BN</i></span></div> 
				
				</div>
			</div>

	   </div>

	<br>
	    	
	  <div class="form-row barra">

			<div class="col-6">
				<div class="row">
					<div class="col-1 align-self-center"><h5><i>C<sub>e</sub></i></h5></div>
					<div class="col-9"><input id="ce" maxlength="12" placeholder="compresibilidad efectiva" class="form-control" type="" name=""></div>
					<div  class="col-2 align-self-center "><span  id="unidades"><i>lpca<sup>-1</sup></i></span></div> 		

				</div>
			</div>

	   </div>
	<hr >
	
	   <div class="form-row justify-content-center botoness">
				
				<div class="row justify-content-center butons">
					<div class="col"><button class="btn generar">Enviar</button></div>
					<div class="col" ><button type="reset" class="btn">Borrar</button></div>
					<div class="col" ><button type="reset" class="btn" onclick="saveCanvas()">Imprimir</button></div>
					
	   </div>
	   </div>

	   <hr >
	<div id="resultados">

</div>

</body>
</html>