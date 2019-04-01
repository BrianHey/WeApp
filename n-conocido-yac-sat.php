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
<script type="text/javascript" src="n-conocido-yac-sat.js"></script>
</head>
<body>
<?php 

include 'menu.php';

?>		
<div style=" width: 90%; display: block; margin:auto; ">

<br> <center><h3 style="margin-left: 12.5%;"><b>POES conocido: yacimiento saturado</b></h3></center><br>

<div>

</div>

<div style="margin: auto; width: 100%; ">

<div id="tabla-formulario">
	
	<center><h4>Datos del yacimiento</h4></center><br>

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
					<div class="col-1 align-self-center"><h5><i>B<sub>g</sub></i></h5></div>
					<div class="col-9"><input id="bg" placeholder="factor volumétrico del gas" class="form-control" type="" name=""></div>
					<div  class="col-2 align-self-center "><span  id="unidades"><i>BY/PCN</i></span></div> 

				</div>
			</div>

			<div class="col-6">
				<div class="row">
					<div class="col-1 align-self-center"><h5><i>B<sub>gi</sub></i></h5></div>
					<div class="col-9"><input id="bgi" placeholder="factor volumétrico inicial del gas" class="form-control" type="" name=""></div>
					<div  class="col-2 align-self-center "><span  id="unidades"><i>BY/PCN</i></span></div> 
				
				</div>
			</div>

	   </div>

	<br>
	    	
	  <div class="form-row barra">

			<div class="col-6">
				<div class="row">
					<div class="col-1 align-self-center"><h5><i>R<sub>s</sub></i></h5></div>
					<div class="col-9"><input id="rs" placeholder="relación gas disuelto-petróleo" class="form-control" type="" name=""></div>
					<div  class="col-2 align-self-center "><span  id="unidades"><i>PCN/BN</i></span></div> 

				</div>
			</div>

			<div class="col-6">
				<div class="row">
					<div class="col-1 align-self-center"><h5><i>R<sub>si</sub></i></h5></div>
					<div class="col-9"><input id="rsi" placeholder="relación inicial gas disuelto-petróleo" class="form-control" type="" name=""></div>
					<div  class="col-2 align-self-center "><span  id="unidades"><i>PCN/BN</i></span></div>
			
				</div>
			</div>

	   </div>
	<br>	

	 <div class="form-row barra">

			<div class="col-6">
				<div class="row">
					<div class="col-1 align-self-center"><h5><i>R<sub>p</sub></i></h5></div>
					<div class="col-9"><input id="rp" placeholder="relación gas-petróleo acumulado" class="form-control" type="" name=""></div>
					<div  class="col-2 align-self-center "><span  id="unidades"><i>PCN/BN</i></span></div> 

				</div>
			</div>

			<div class="col-6">
				<div class="row">
					<div class="col-1 align-self-center"><h5><i>m</i></h5></div>
					<div class="col-9"><input id="m" placeholder="tamaño de la capa de gas" class="form-control" type="" name=""></div>
					<div  class="col-2 align-self-center "><span  id="unidades"><i>adim</i></span></div>
			
				</div>
			</div>

	   </div>
	<br>	
	<hr >

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

</div>
</div>

</body>
</html>