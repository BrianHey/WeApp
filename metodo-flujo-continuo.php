<!DOCTYPE html>
<html>
<head>
	<title>WeApp</title>
	<link rel="stylesheet" href="bootstrap.min.css" >
<script src="jquery.js"></script>
<meta charset="utf-8">
 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
<link rel="stylesheet" type="text/css" href="estilos.css">
<script type="text/javascript" src="metodo-flujo-continuo.js"></script>
<style type="text/css">
	.goog-te-gadget-simple img{
		display:  none;
	}
</style>

<script type="text/javascript" src="graficasOffline1.js"></script>
<script type="text/javascript" src="graficasOffline2.js"></script>

 <script type="text/javascript" src="morris.js"></script>
<link rel="stylesheet" type="text/css" href="morris.css">

</head>
<body>

<?php 

include 'menu.php';

?>
<div style=" width: 70%; display: block; margin:auto; ">

<br><center><h3 style="margin-left: 15%;"><b>Flujo continuo (Schilthuis)</b></h3></center><br>

<div>

</div>

<div  style=" width: 90%;  margin-left: 20%" id="tabla-formulario">	
		
			<center><h4>Datos del acuífero</h4></center><br>

			   <div class="form-row">

					<div class="col">
						<div class="row">
							<div class="col-1 align-self-center"> <h5><i>R<sub>a</sub></i></h5> </div>
							<div class="col-9"><input id="ra" placeholder="radio interno" class="form-control" type="" name=""></div>
							<div  class="col-1 align-self-center "><span  id="unidades"><i>pies</i></span></div> 
						</div>
					</div>

					<div class="col">
						<div class="row">
							<div class="col-1 align-self-center"><h5><i>h<sub>a</sub></i></h5></div>
							<div class="col-9"><input id="ha" placeholder="espesor de la formación" class="form-control" type="" name=""></div>
							<div  class="col-2 align-self-center "><span  id="unidades"><i>pies </i></span></div> 
						
						</div>
					</div>

			   </div>
				<br>

			   <div class="form-row">

					<div class="col">
						<div class="row">
							<div class="col-1 align-self-center"><h5><i>k<sub>a</sub></i></h5></div>
							<div class="col-9"><input id="ka" placeholder="permeabilidad de la formación" class="form-control" type="" name=""></div>
							<div  class="col-2 align-self-center "><span  id="unidades"><i>Darcy</i></span></div> 
						</div>
					</div>

					<div class="col">
						<div class="row">
							<div class="col-1 align-self-center"><h5><i>&mu;<sub>w</sub></i></h5></div>
							<div class="col-9"><input id="muw" placeholder="viscocidad del agua" class="form-control" type="" name=""></div>
							<div  class="col-2 align-self-center "><span  id="unidades"><i>cP</i></span></div> 					
							</div>
					</div>
			   </div>		
					<br>		

			<div id="division"></div>	
			
			<center><h4>Datos del yacimiento</h4></center><br>

			   <div class="form-row">

					<div class="col-6">
						<div class="row">
							<div  class="col-1 align-self-center"> <h5><i>P<sub>i</sub></i></h5> </div>
							<div class="col-9"><input id="pi" placeholder="presión inicial" class="form-control" type="" name=""></div> <div  class="col-1 align-self-center "><span  id="unidades"><i>lpca</i></span></div> 
						</div>
					</div>

					<div class="col-6">
						<div class="row">
							<div  class="col-1 align-self-center"> <h5><i>N°</i> </h5> </div>
							<div class="col-9"><input placeholder="número de filas" class="form-control generar-filas" type="" name=""></div> 
						</div>
					</div>

			   </div>

			   <br>

			   <div class="form-row">

					<div class="col-6">
						<div class="row">
							<div  class="col-1 align-self-center"> <h5><i>R<sub>e</sub></i></h5> </div>
							<div class="col-9"><input id="re" placeholder="radio externo" class="form-control" type="" name=""></div> <div  class="col-1 align-self-center "><span  id="unidades"><i>pies</i></span></div> 
						</div>
					</div>

			   </div>			   

			   <br>
	
		<div class="row">
			
			<div class="col">
		
				<table class="table table-hover">
				  <thead>
				    <tr>
				      <th scope="col">N°</th>
				      <th scope="col">t (días)</th>
				      <th scope="col">P (lpca)</th>
				    </tr>
				  </thead>
				  <tbody id="cuerpo-tabla">				  
				   
				  </tbody>
				</table>

			</div>

		</div>

		<hr>

	<div class="form-row justify-content-center botoness">
				
				<div class="row justify-content-center butons">
					<div class="col"><button class="btn generar">Enviar</button></div>
					<div class="col" ><button type="reset" class="btn">Borrar</button></div>
					<div class="col" ><button type="reset" class="btn" onclick="saveCanvas()">Imprimir</button></div>
				</div>
	</div>

	<hr>
	<div>
	<div id="resultados"></div><br>
	
		<table class="table table-hover-resultados">

		</table>

	</div>

	<div class="container" style="background: white;">
		<div class="row">
			<div class="col-12">
				<div id="Titulo-Grafica"></div>
				<div id="MorrisGrafica"></div>
			</div>
		</div>
	</div>


</div>

></script> 
<script type="text/javascript" src="lineas.js"></script>
</body>
</html>		