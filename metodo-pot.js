$(document).ready(function (){

	$('input').keypress(function (ev) {

          var keycode = (ev.keyCode ? ev.keyCode : ev.which);
            if (keycode == '32' ||  keycode == '44') {
                return false;
         }});



	$('.generar').click( function (event){

			    var a = $('#tabla-formulario').find('input');
				console.log(a.length );
				 for (var i = 0; i < a.length; i++) {
					var b = a[i];
					var u = $(b).val();
					if (u == '') {
						var id = $(b).attr('id');
						$('#myModal').modal('show');
						$(".modal-body").html("Debe llenar todos los campos");
						$('#'+ id).css('border', 'solid 1px orange');
						falta = true;
					}else{
						var id = $(b).attr('id');
						$('#'+ id).css('border', 'solid 1px lightgreen');
						falta=false;
					}
				}

				if (falta){

				}else{

					var pic = 3.14159;
					var barril  = 5.615;
					var circulo = 360;
					
					var pi = $('#pi').val();
					var p = $('#p').val();
					var re = $('#re').val();	
					var ra = $('#ra').val();
					var cfa = $('#cfa').val();
					var cwa = $('#cwa').val();
					var fia = $('#fia').val();
					var ha = $('#ha').val();
					var theta = $('#theta').val();

					var wi =  ( (pic *( (ra*ra) - (re*re) )  * (ha*fia) )  / barril );

					var we = ( Number (cfa) + Number (cwa) ) * wi * (theta/circulo ) * (pi - p)  ;
						
					var wir = Number(wi).toLocaleString();
					var wer = Number(we).toLocaleString();

					var result = ' <div class="row  resultados"><div class="col text-center"><h4><b>Resultados</b></h4></div></div><div class="row text-center"><div class="col-6"><br> <b><i>W<sub>i</sub></i> volumen inicial de agua en el acuífero</b> <br> '+ wir +' BY </div> <div class="col-6"><br> <b><i>W<sub>e</sub></i> intrusión de agua</b> <br> '+ wer +' BY </div> </div> ';

					$('#resultados').html(result);
				}
		
			
      	});
	});