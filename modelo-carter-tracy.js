$(document).ready(function (){

	var contador = 0;
	var we = new Array();
	we[0]= 0;
	var wer = new Array();
	wer[0]= 0;
	var td  = new Array();
	td[0]= 0;
	var tdr  = new Array();
	tdr[0]= 0;
	var pd = new Array();
	pd[0]= 0;
	var pdr  = new Array();
	pdr[0]= 0;
	var pdprima = new Array();
	pdprima[0] = 0;
	var pdprimar = new Array();
	pdprimar[0] = 0;
	var pe  = new Array();
	var t  = new Array();
	var e = new Array();
	var f = new Array();
	var const1 = 1.119;
	var const2 = 0.006328;
	var const3 = 0.5;
	var const4 = 0.80907;
	var const5 = 370.529;
	var const6 = 137.582;
	var const7 = 5.69549;
	var const8 = 328.834;
	var const9 = 265.488;
	var const10 = 45.2157;
	var const11 = 716.441;
	var const12 = 46.7984;
	var const13 = 270.038;
	var const14 = 71.0098;
	var const15 = 1296.86;
	var const16 = 1204.73;
	var const17 = 618.618;
	var const18 = 538.072;
	var const19 = 142.41;
	var circulo = 360;

	$('.generar').click( function (){
			
			var pi = $('#pi').val();
			var ra = $('#ra').val();
			var cfa = $('#cfa').val();
			var fia = $('#fia').val();
			var ha = $('#ha').val();
			var ka = $('#ka').val();
			var theta = $('#theta').val();
			var muw = $('#muw').val();

			var tdc = (const2 * ka) / (muw * fia * cfa * (ra * ra));
			var b = const1 * fia * cfa * (ra * ra) * ha * (theta / circulo);

			for (var i = 1; i <= contador; i++) {

				 	t[i] = $('#cuerpo-tabla').find("#t"+i+i).val();
				 	pe[i] = $('#cuerpo-tabla').find("#pe"+i+""+(i+1)).val();

				 	td[i] = tdc * t[i] ;
				 			 		
				 	if (td[i] >= 100) {

				 		pd[i] = const3 * (Math.log(td[i]) + const4);
				 		pdprima[i] = 1 / ( 2 * td[i]);
				 	}
				 	else{

				 		pd[i] = (const5 * Math.sqrt(td[i]) + const6 * td[i] + const7 * (Math.pow(td[i],1.5))) / (const8 + const9 * Math.sqrt(td[i]) + const10 * td[i] + Math.pow(td[i],1.5));
				 		e[i] = const11 + const12 * Math.pow(td[i], 0.5) + const13 * td[i] + const14 * Math.pow(td[i], 1.5);
						f[i] = const15 * Math.pow(td[i], 0.5) + const16 * td[i] + const17 * Math.pow(td[i], 1.5) + const18 * Math.pow(td[i],2) + const19 * Math.pow(td[i], 2.5);
						pdprima[i] = e[i] / f[i];

				 	}	

				 	var dp = pi - pe[i];			
				 	var num = (b * dp) - (we[(i-1)] * pdprima[i]);
				 	var den = pd[i] - td[(i-1)] * pdprima[i]  ;

			 		we[i] = we[(i-1)] + (td[(i)] - td[(i-1)]) * (num / den);

			 		var br = Number(b).toLocaleString();
					var tdcr = Number(tdc).toLocaleString();
					pdprimar[i] = Number(pdprima[i]).toLocaleString();
					tdr[i] = Number(td[i]).toLocaleString();					
					pdr[i] = Number(pd[i]).toLocaleString();
					wer[i] = Number(we[i]).toLocaleString();

					}

					var result = ' <div class="row  resultados"><div class="col text-center"><h4><b>Resultados</b></h4></div></div><div class="row text-center"><div class="col-6"><br><b><i>t<sub>D</sub></i> tiempo adimensional</b> <br> '+ tdcr +' adim</div><div class="col-6"><br><b><i>B</i> constante de intrusión de agua</b> <br>'+ br +' BY/lpca</div> </div>';
					
					$('#resultados').html(result);

					var filasRes = "";
					 
					 var thead= '<thead><tr><th scope="col">N°</th><th scope="col"> t<sub>D</sub> (adim)</th><th scope="col">P<sub>D</sub> (adim)</th><th scope="col">P`<sub>D</sub> (adim)</th><th scope="col">W<sub>e</sub> (BY)</th></tr></thead><tbody id="tbody"></tbody>'

					 $('.table-hover-resultados').html(thead);	
				 	
					 for (var o = 1; o <= contador; o++) 

					 {
					 	var filaRes = '<tr><th scope="row">'+ o + '</th><td>'+ (tdr[o]) + '</td><td>'+ (pdr[o]) +'</td><td>'+ (pdprimar[o]) +'</td><td>'+ (wer[o]);+'</td></tr>';

					 	var filasRes = filasRes.concat(filaRes);
				 	 }

			      	  $('#tbody').html(filasRes);
			});


	$(".generar-filas").change(function(){      

		var numfil = $(".generar-filas").val();
		contador = numfil;

		 var filas = "";
		 for (var i = 1; i <= numfil; i++) 
		 {
		 	var fila = '<tr><th scope="row">'+ i + '</th><td><input id="t'+i+""+i+'" class="form-control" name=""></td><td><input id="pe'+i+""+(i+1)+ '" class="form-control " name=""></td>';
		 	var filas = filas.concat(fila);
	 	 }

      	  $('#cuerpo-tabla').html(filas);
    });
});