<!DOCTYPE html>
<html>
<head>
	<title>WeApp</title>
	<link rel="stylesheet" href="bootstrap.min.css" >

<script src="jquery.js"></script>
<script src="bootstrap.min.js"></script>
<link rel="stylesheet" type="text/css" href="estilos.css">
<script type="text/javascript" src="metodo-pot2.js"></script>
<meta charset="utf-8">
</head>
<body>
<?php 

include 'menu.php';

?>
<div style=" width: 70%; float: right; position: relative; top: -100vh; right: 60px; ">

<br> <center><h2>Modelo POT</h2></center><br>

<div>

</div>

<div id="tabla-formulario">
	
	<center><h3>Datos del acuífero</h3></center><br>

	   <div class="form-row">

			<div class="col">
				<div class="row">
					<div  class="col-1 align-self-center"> <h5> Ra </h5> </div>
					<div class="col-9"><input id="ra" placeholder="radio interno" class="form-control" type="" name=""></div> <div  class="col-1 align-self-center "><span  id="unidades"><i>pies</i></span></div> 
				</div>
			</div>

			<div class="col">
				<div class="row">
					<div class="col-1 align-self-center" ><h5> Cfa </h5></div>
					<div class="col-9"><input maxlength="12" id="cfa" placeholder="compresibilidad de la formación" class="form-control" type="" name=""></div>
					<div  class="col-2 align-self-center "><span  id="unidades"><i>lpca<sup>-1</sup></i></span></div> 
				</div>
			</div>

	   </div>
		<br>

	   <div class="form-row">

			<div class="col">
				<div class="row">
					<div class="col-1 align-self-center"><h5>Cwa </h5></div>
					<div class="col-9"><input maxlength="12" id="cwa" placeholder="compresibilidad del agua" class="form-control" type="" name=""></div>
					<div  class="col-2 align-self-center "><span  id="unidades"><i>lpca<sup>-1</sup></i></span></div> 
				</div>
			</div>

			<div class="col">
				<div class="row">
					<div class="col-1 align-self-center"><h5>Fia </h5></div>
					<div class="col-9"><input id="fia" placeholder="porosidad de la formación" class="form-control" type="" name=""></div>
					<div  class="col-2 align-self-center "><span  id="unidades"><i>adim </i></span></div>	
		</div>
			</div>

	   </div>

	<br>	    	
	 
	   <div class="form-row">

			<div class="col">
				<div class="row">
					<div class="col-1 align-self-center"><h5>ha </h5></div>
					<div class="col-9"><input id="ha" placeholder="espesor de la formación" class="form-control" type="" name=""></div>
					<div  class="col-1 align-self-center "><span  id="unidades"><i>pies</i></span></div> 
				</div>
			</div>

			<div class="col">
				<div class="row">
					<div class="col-1 align-self-center"><h5>Theta </h5></div>
					<div class="col-9"><input id="theta" placeholder="ángulo de invasión" class="form-control" type="" name=""></div>
					<div  class="col-2 align-self-center "><span  id="unidades"><i>grados</i></span></div> 	

		</div>
			</div>

	   </div>

	<br>
	 
	<hr>
	<center><h3>Datos del yacimiento</h3></center><br>

	   <div class="form-row">
			<div class="col">
				<div class="row">
					<div class="col-1 align-self-center"> <h5>Pi </h5> </div>
					<div class="col-9"><input id="pi" placeholder="presión inicial" class="form-control" type="" name=""></div>
					<div  class="col-1 align-self-center "><span  id="unidades"><i>lpca</i></span></div> 
				</div>
			</div>
			<div class="col">
				<div class="row">
					<div class="col-1 align-self-center"><h5> P </h5></div>
					<div class="col-9"><input id="p" placeholder="presión actual" class="form-control" type="" name=""></div>
					<div  class="col-2 align-self-center "><span  id="unidades"><i>lpca </i></span></div>

				</div>
			</div>

	   </div>

	<br>
    	
	  <div class="form-row barra">

			<div class="col-6">
				<div class="row">
					<div class="col-1 align-self-center"><h5>Re</h5></div>
					<div class="col-9"><input id="re" placeholder="radio externo" class="form-control" type="" name=""></div>
					<div  class="col-2 align-self-center "><span  id="unidades"><i>pies</i></span></div> 
 				
				</div>
			</div>

	   </div>

	<br>

	<div id="division"></div>
	   <div class="form-row justify-content-center botoness">
				
				<div class="row justify-content-center butons">
					<div class="col"><button type="submit" class="btn generar">Enviar</button></div>
					<div class="col" ><button type="reset" class="btn">Borrar</button></div>
				</div>
	   </div>

</div>

	  <br>
	  <br>
	  <br>
	  <br>
	  <br>




<!-- Modal -->
<div id="myModal" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Modal Header</h4>
      </div>
      <div class="modal-body">
        <p>Some text in the modal.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>

</body>
</html>