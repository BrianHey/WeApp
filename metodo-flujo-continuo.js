$(document).ready(function (){

	var contador = 0;
	var we = new Array();
	we[0]= 0;
	var wer = new Array();
	wer[0]= 0;
	var t  = new Array();
	t[0]= 0;
	var pe  = new Array();
	pe[0]= 0;
	var area  = new Array();
	var arear  = new Array();
	var dp  = new Array();
	var numarea  = new Array();
	var const1 = 7.07;
		
	$('.generar').click( function (){			

			var pi = $('#pi').val();
			var re = $('#re').val();
			var ra = $('#ra').val();
			var ha = $('#ha').val();		
			var muw = $('#muw').val();
			var ka = $('#ka').val();

			var cs = ( ( const1 * ka * ha) / ( muw * Math.log(ra/re) ) );

			var csr = Number(cs).toLocaleString();						

			for (var i = 1; i <= contador; i++) {

				 	t[i] = $('#cuerpo-tabla').find("#t"+i+i).val();
					pe[i] = $('#cuerpo-tabla').find("#pe"+i+""+(i+1)).val();
					
				 	if (i <= 1) {
				 		dp[i] = (pi - pe[(i)]);
				 		numarea[i] = ( dp[i] * t[i] );
				 		area[i] = numarea[i] /2;
				 	}
				 	else{
				 		dp[i] = ((pi - pe[(i-1)]) + (pi - pe[(i)])) / 2;
				 		numarea[i] = t[(i)] - t[(i-1)] ;
				 		area[i] = dp[i] * numarea[i];
				 	}	

			 		we[i] =   ( area[i] * cs ) + we[(i-1)] ;

			 		arear[i] = Number(area[i]).toLocaleString();
			 		wer[i] = Number(we[i]).toLocaleString();
	
			}
				var result = ' <div class="row  resultados"><div class="col text-center"><h4><b>Resultados</b></h4></div></div><div class="row text-center"><div class="col"><br><b><i>C<sub>s</sub></i> constante de intrusión de agua de Schilthuis</b> <br>'+ csr +' BY/lpca·día</div>';

				$('#resultados').html(result);

				var filasRes = "";

				var thead= '<thead><tr><th scope="col">N°</th><th scope="col"> Área (lpca·día)</th><th scope="col">W<sub>e</sub> (BY)</th></tr></thead><tbody id="tbody"></tbody>'

				$('.table-hover-resultados').html(thead);

					for (var o = 1; o <= contador; o++) 
					 {
					 	var filaRes = '<tr><th scope="row">'+ o + '</th><td>'+ arear[o] + '</td><td>' + (wer[o]);+'</td></tr>';

					 	var filasRes = filasRes.concat(filaRes);
				 	 }

			      	  $('#tbody').html(filasRes);



			      	ejes=[{ year: '0', value: 0 }] ;

			       for (var y = 1; y < t.length; y++) {
			       		ejes.push( { year: ''+t[y]+'', value: dp[y] });
			       }

			       console.log(ejes);
			       $('#MorrisGrafica').html('');
			       GenerargraficaArea(ejes);
			       $('#Titulo-Grafica').html('<h1> y VS x : </h1>');


	});

	$(".generar-filas").change(function(){
       
		var numfil = $(".generar-filas").val();
		contador = numfil;

		 var filas = "";
		 for (var i = 1; i <= contador ; i++) 
		 {
		 	var fila = '<tr><th scope="row">'+ i + '</th><td><input id="t'+i+""+i+'" class="form-control" name=""></td><td><input id="pe'+i+""+(i+1)+ '" class="form-control " name=""></td>';

		 	var filas = filas.concat(fila);
	 	 }
	 	 
      	  $('#cuerpo-tabla').html(filas);
    });
});