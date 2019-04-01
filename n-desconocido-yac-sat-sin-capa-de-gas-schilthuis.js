$(document).ready(function (){

	var contador = 0;
	var we = new Array();
	we[0] = 0;
	var wer = new Array();
	wer[0] = 0;
	var pe  = new Array();
	pe[0] = 0;
	var area = new Array();
	area[0] = 0;
	var arear = new Array();
	arear[0] = 0;
	var areaeo = new Array();
	areaeo[0] = 0;
	var areaeor = new Array();
	areaeor[0] = 0;
	var f = new Array();
	f[0] = 0;
	var feo = new Array();
	feo[0] = 0;
	var feor = new Array();
	feor[0] = 0;
	var x2a = new Array();
	x2a[0] = 0;
	var xya = new Array();
	xya[0] = 0;
	var x2b = new Array();
	x2b[0] = 0;
	var xyb = new Array();
	xyb[0] = 0;
	var t = new Array();
	t[0] = 0;
	var eo = new Array();
	eo[0] = 0;

	$('.generar').click( function (){
			
			var pi = $('#pi').val();	

			for (var i = 1; i <= contador; i++) {

					t[i] = $('#cuerpo-tabla').find("#t"+i+i).val();
					pe[i] = $('#cuerpo-tabla').find("#pe"+i+""+(i+1)).val();
					f[i] = $('#cuerpo-tabla').find("#f"+i+""+(i+2)).val();
					eo[i] = $('#cuerpo-tabla').find("#eo"+i+""+(i+3)).val();			

				 	feo[i] = f[i]/eo[i];
			      	x2a[i] = Math.pow(t[i],2);
			      	xya[i] = feo[i] * t[i];

			      	var sumxa = 0;
			      	var sumx2a = 0;
			      	var sumya = 0;
			      	var sumxya = 0;		

			}	

				for (var mc = 1; mc <= contador; mc++) {

							      		sumxa += Number(t[mc]);
							      		sumya += feo[mc];
							      		sumx2a += x2a[mc];
							      		sumxya += xya[mc];
				}	

				var numm1 = (contador * sumxya) - (sumxa * sumya);
				var denm1 = (contador * sumx2a) - Math.pow(sumxa, 2);

				var m1 = numm1 / denm1;

				if (m1 > 0 ) {

				for (var u = 1; u <= contador; u++) {

					if (u <= 1) {

				 	area[u] = ((pi - pe[(u)]) / 2) * t[u];

				 }	else {
			 	
				 	area[u] = (((pi - pe[(u-1)]) + (pi - pe[(u)])) / 2) * (t[u] - t[(u-1)]);

				 	}

				 	areaeo[u] = area[u] / eo[u];
				 	x2b[u] = Math.pow(areaeo[u], 2);
			      	xyb[u] = feo[u] * areaeo[u];

			      	var sumxb = 0;
			      	var sumx2b = 0;
			      	var sumyb = 0;
			      	var sumxyb = 0;

				 }	

				for (var mu = 1; mu <= contador; mu++) {

							      		sumxb += Number(areaeo[mu]);
							      		sumyb += feo[mu];
							      		sumx2b += x2b[mu];
							      		sumxyb += xyb[mu];
				}	

				var numm2 = (contador * sumxyb) - (sumxb * sumyb );
				var denm2 = (contador * sumx2b) - Math.pow(sumxb,2) ;

				var m2 = numm2 / denm2;

				var numb = (sumyb) - (m2 * sumxb);
				var denb = (contador);

				var b = numb / denb;	

				for (var mi = 1; mi <= contador; mi++) {

				we[mi] = m2 * area[mi];		

				var m2r = Number(m2).toLocaleString();
				var br = Number(b).toLocaleString(); 
				arear[mi] = Number(area[mi]).toLocaleString();
				areaeor[mi] = Number(areaeo[mi]).toLocaleString();
				feor[mi] = Number(feo[mi]).toLocaleString();
				wer[mi] = Number(we[mi]).toLocaleString();
								
				}}

				else{ 

				alert("No hay intrusión de agua"); }

				var result = ' <div class="row  resultados"><div class="col text-center"><h4><b>Resultados</b></h4></div></div><div class="row text-center"><div class="col-6"><br><b><i>N</i> petróleo original en sitio</b> <br>'+ br +' BN</div><div class="col-6"><br><b><i>C<sub>s</sub></i> constante de intrusión de agua de Schilthuis</b> <br>'+ m2r +' BY/lpca·día</div></div>';
				
				$('#resultados').html(result);

					var filasRes = "";
					 
						var thead= '<thead><tr><th scope="col">N°</th><th scope="col"> F/E<sub>o</sub> (BN)</th><th scope="col"> Área (lpca·día) </th><th scope="col"> Área/E<sub>o</sub> (lpca·día·BN/BY) </th><th scope="col">W<sub>e</sub> (BY)</th></tr></thead><tbody id="tbody"></tbody>'

					 $('.table-hover-resultados').html(thead);	


					 for (var o = 1; o <= contador; o++) 
					 {
					 	var filaRes = '<tr><th scope="row">'+ o + '</th><td>'+ feor[o]+ '</td><td>'+ arear[o]+'</td><td>'+ areaeor[o] + '</td><td>'+ wer[o] +'</td></tr>';

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
		 	var fila = '<tr><th scope="row">'+ i + '</th><td><input id="t'+i+""+i+'" class="form-control" name=""></td><td><input id="pe'+i+""+(i+1)+ '" class="form-control " name=""></td><td><input id="f'+i+""+(i+2)+ '" class="form-control " name=""></td><td><input  id="eo'+i+""+(i+3)+ '" class="form-control" name=""></td></tr>';

		 	var filas = filas.concat(fila);
	 	 }

      	  $('#cuerpo-tabla').html(filas);
    });

});