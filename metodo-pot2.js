$(document).ready(function (){

var falta = false;
	$('.generar').click( function (){


		var a = $('#tabla-formulario').find('input');
		console.log(a.length );
		 for (var i = 0; i < a.length; i++) {
			var b = a[i];
			var u = $(b).val();
			if (u == '') {
				var id = $(b).attr('id');
				$('#myModal').modal('show');
				$(".modal-body").html("Debe llenar el campo: " + id);
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
			
			var Result = ' <div class="row  resultados"><div class="col text-center"><h2> Resultados </h2> </div></div><div class="row text-center"><div class="col-6"><br> <b>Wi, volumen inicial de agua en el acuíero:</b> <br> '+ Math.trunc(wi)+' BY </div> <div class="col-6"><br> <b>We, intrusión de agua:</b> <br> '+ Math.trunc(we) +' BY </div> </div> ';

			$('#division').append(Result);

			$('.butons').css('display', 'none');
		}
	});

});