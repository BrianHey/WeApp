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
<script type="text/javascript" src="metodo-flujo-continuo-modificado3.js"></script>
</head>
<body>
<?php 

include 'menu.php';

?>
<div style=" width: 70%;">

<br> <center><h3 style="margin-left: 35%;"><b>Flujo continuo-modificado (Hurst): C<sub>s</sub> conocidos</b></h3></center><br>

<div>

</div>

<div style=" width: 90%;  margin-left: 40%"   id="tabla-formulario">	
	
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
							<div  class="col-1 align-self-center"> <h5><i>N°</i></h5> </div>
							<div class="col-9"><input placeholder="número de filas" class="form-control generar-filas" type="" name=""></div> 
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
				      <th scope="col">C<sub>s</sub> (BY/lpca·día)</th>
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
	<div id="resultados"></div><br>
	
		<table class="table table-hover-resultados">

		</table>

	</div>
</div>
</body>
</html>


