$(document).ready(function (){

	var contador = 0;
	var we = new Array();
	var wer = new Array();
	var t  = new Array();
	t[0]= 0;
	var td  = new Array();
	var tdr  = new Array();
	var numqtd  = new Array();
	var denqtd  = new Array();
	var qtd  = new Array();
	qtd[0] = 0 ;
	var qtdr  = new Array();
	qtdr[0] = 0 ;
	var const1 = 1.119;
	var const2 = 6.323;
	var const3 = 1.2838;
	var const4 = 1.19328;
	var const5 = 0.269872;
	var const6 = 0.00855294;
	var const7 = 1;
	var const8 = 0.616599;
	var const9 = 0.0413008;
	var const10 = 4.29881;
	var const11 = 2.02566;
	var pic = 3.14;
	var circulo = 360;
		
	$('.generar').click( function (){			

			var pi = $('#pi').val();
			var pe = $('#pe').val();
			var re = $('#re').val();
			var ra = $('#ra').val();
			var ha = $('#ha').val();		
			var muw = $('#muw').val();
			var ka = $('#ka').val();
			var fia = $('#fia').val();
			var cea = $('#cea').val();
			var theta = $('#theta').val();
			
			var b = const1 * Math.pow(re, 2) * ha * fia * cea * (theta / circulo);

			var tdc = (const2*ka)/(muw*fia*cea*(re*re));

			var dp = pi - pe;

			var ta = ra/re;

			if (ta <= 10) {

				 		tar = 'extensión finita';

				 	}

				 	else{

				 		tar = 'extensión infinita';

				 		}

			var br = Number(b).toLocaleString();
			var tdcr = Number(tdc).toLocaleString();
			var dpr = Number(dp).toLocaleString();
			var tarr = Number(ta).toLocaleString();

			for (var u = 1; u <= contador; u++) {

			t[u] = $('#cuerpo-tabla').find("#t"+u+u).val(); 	
				
			}

			for (var i = 1 ; i <= contador; i++) {							
				 		
					td[i] = tdc * t[i] ;

				}

				 
				 if (ta <= 10) {


				 	alert ('Acuífero finito, insertar MySQL');

				 	}

				 else{

				 	for (var i = 1 ; i <= contador; i++) {


				 	if (td[i] < 0.01) {

					qtd[i] = 2 * Math.pow(td[i] / pic, 0.5 );
					}
					if (td[i] >= 0.01 && td[i] <= 200 ) {

					numqtd[i] = (const3 * Math.sqrt(td[i]) + const4 * td[i] + const5 * Math.pow(td[i], 1.5) + const6 * Math.pow(td[i], 2) );
					denqtd[i] = const7 + const8 * Math.sqrt(td[i]) + const9 * td[i] ;

					qtd[i] =  numqtd[i] / denqtd[i] ;
					
					}

					if (td[i] > 200 ) {
					qtd[i] =  ( -const10 + const11 * td[i] ) / Math.log(td[i]);		

				 	}	

				 	we[i] = b * qtd[i] * dp;

				 	tdr[i] = Number(td[i]).toLocaleString();
				 	qtdr[i] = Number(qtd[i]).toLocaleString();
				 	wer[i] = Number(we[i]).toLocaleString();

				 }
				
					
			}

					var result = ' <div class="row  resultados"><div class="col text-center"><h4><b>Resultados</b></h4></div></div><div class="row text-center"><div class="col-6"><br><b><i>t<sub>D</sub></i> tiempo adimensional</b> <br>'+ tdcr +' adim</div><div class="col-6"><br><b><i>R<sub>a</sub>/R<sub>e</sub></i> relación radio del acuífero-radio del yacimiento</b> <br>'+ tarr +' adim</div><div class="col-6"><br><b>tamaño del acuífero</b> <br>'+ tar +'</div><div class="col-6"><br><b><i>&Delta;P</i> caída de presión instantánea</b> <br>'+ dpr +' lpca</div><div class="col-6"><br><b><i>B</i> constante de intrusión de agua</b> <br>'+ br +' BY/lpca</div></div>';
					
					$('#resultados').html(result);
							
					var filasRes = "";

					var thead= '<thead><tr><th scope="col">N°</th><th scope="col"> t<sub>D</sub> (adim)</th><th scope="col"> Qt<sub>D</sub> (adim)</th><th scope="col">W<sub>e</sub> (BY)</th></tr></thead><tbody id="tbody"></tbody>'

					 $('.table-hover-resultados').html(thead);	

					 for (var p = 1; p <= contador; p++) 
					 {
					 	var filaRes = '<tr><th scope="row">'+ p + '</th><td>'+ tdr[p] + '</td><td>'+ qtdr[p] + '</td><td>' + wer[p]; +'</td></tr>';

					 	var filasRes = filasRes.concat(filaRes);
				 	 }

			      	 $('#tbody').html(filasRes);
			
	});

	$(".generar-filas").change(function(){
       
		var numfil = $(".generar-filas").val();
		contador = numfil;

		 var filas = "";
		 for (var i = 1; i <= contador; i++) 
		 {
		 	var fila = '<tr><th scope="row">'+ i + '</th><td><input id="t'+i+""+i+ '" class="form-control " name=""></td>';
		 	var filas = filas.concat(fila);
	 	 }

      	  $('#cuerpo-tabla').html(filas);
    });
});