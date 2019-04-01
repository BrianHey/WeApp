$(document).ready(function (){

	var contador = 0;
	var ultimovalor= new Array();
	ultimovalor[0] = 0;
	var ultimovalorr= new Array();
	ultimovalorr[0] = 0;
	var we = new Array();
	we[0]= 0;
	var wer = new Array();
	wer[0]= 0;
	var wed = new Array();
	var wer = new Array();
	wer[0]= 0;
	var t  = new Array();
	t[0]= 0;
	var pe  = new Array();
	pe[0]= 0;
	var td  = new Array();
	td[0]= 0;
	var tdr  = new Array();
	tdr[0]= 0;
	var numqtd  = new Array();
	numqtd[0]= 0;
	var denqtd  = new Array();
	denqtd[0]= 0;
	var dp  = new Array();
	dp[0]= 0;
	var dpr  = new Array();
	dpr[0]= 0;
	var qtd  = new Array();
	qtd[0]= 0;
	var qtdr  = new Array();
	qtdr[0]= 0;
	var eo = new Array();
	eo[0] = 0;
	var wedeo = new Array();
	wedeo[0] = 0;
	var wedeor = new Array();
	wedeor[0] = 0;
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
		
	$('.generar').click( function (){			

			var pi = $('#pi').val();
			var re = $('#re').val();
			var ra = $('#ra').val();		
			var muw = $('#muw').val();
			var ka = $('#ka').val();
			var fia = $('#fia').val();
			var cea = $('#cea').val();
	
			var tdc = (const2*ka)/(muw*fia*cea*(re*re));

			var ta = ra/re;

			if (ta <= 10) {

				 		tar = 'extensión finita';
				 	
				}else{

				 		tar = 'extensión infinita';
	}

			var tdcr = Number(tdc).toLocaleString();
			var tarr = Number(ta).toLocaleString();

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

					for (var u =1 ;  u <= contador; u++) {				 

				 	if (u <= 2) {

				 		dp[u] = (pi - pe[(u)])/2;

				 	}

				 	else{

				 		dp[u] = (pe[(u-2)] - pe[(u)] ) / 2;			 		
				 	}	


				 	td[u] = tdc * t[u] ;

				 	}

				 
				 if (ta <= 10) {


				 	alert ('acuífero finito, insertar MySQL');

				 	}

				 else{

				 	for (var mu = 1 ; mu <= contador; mu++) {

				 	if (td[mu] < 0.01) {

					qtd[mu] = 2 * Math.pow(td[u] / pic, 0.5 );

					}

					if (td[mu] >= 0.01 && td[mu] <= 200 ) {

					numqtd[mu] = (const3 * Math.sqrt(td[mu]) + const4 * td[mu] + const5 * Math.pow(td[mu], 1.5) + const6 * Math.pow(td[mu], 2) );
					denqtd[mu] = const7 + const8 * Math.sqrt(td[mu]) + const9 * td[mu] ;

					qtd[mu] =  numqtd[mu] / denqtd[mu] ;
					
					}

					if (td[mu] > 200 ) {
					qtd[mu] =  ( -const10 + const11 * td[mu] ) / Math.log(td[mu]);

					}}
					
					for (var n = 1; n <= contador ; n++) {
						wed[n] = new Array();
							wed[n][0]= 0;
					for (var k = 1; k <= n; k++) {
						wed[n][k] = ( dp[k] * ((qtd[n-[k-1]]))) + wed[n][k-1];
						ultimovalor[n] = wed[n][k];

						wedeo[n] = ultimovalor[n] / eo[n];

				 		x2b[n] = Math.pow(wedeo[n], 2);
			      		xyb[n] = feo[n] * wedeo[n];

			      		var sumxb = 0;
			      		var sumx2b = 0;
			      		var sumyb = 0;
			      		var sumxyb = 0;

				 }}	

				for (var mu = 1; mu <= contador; mu++) {

							      		sumxb += Number(wedeo[mu]);
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

				var m2r = Number(m2).toLocaleString();
				var br = Number(b).toLocaleString();	

				for (var ni = 1; ni <= contador ; ni++) {
								for (var ki = 1; ki <= n; ki++) {								

						we[ni] = ultimovalor[ni] * m2;		


						feor[ni] = Number(feo[ni]).toLocaleString()
						wedeor[ni] = Number(wedeo[ni]).toLocaleString()
						dpr[ni] = Number(dp[ni]).toLocaleString()
						tdr[ni] = Number(td[ni]).toLocaleString()
						qtdr[ni] = Number(qtd[ni]).toLocaleString()
						ultimovalorr[ni] = Number(ultimovalor[ni]).toLocaleString()
						wer[ni] = Number(we[ni]).toLocaleString()
			}}
							
			}}

			else{ 

				alert("No hay intrusión de agua"); }

					var result = ' <div class="row  resultados"><div class="col text-center"><h4><b>Resultados</b></h4></div></div><div class="row text-center"><div class="col-6"><br><b><i>t<sub>D</sub></i> tiempo adimensional</b> <br>'+ tdcr +' adim</div><div class="col-6"><br><b><i>R<sub>a</sub>/R<sub>e</sub></i> relación radio del acuífero-radio del yacimiento</b> <br>'+ tarr +' adim</div><div class="col-6"><br><b>tamaño del acuífero</b> <br>'+ tar +' </div><div class="col-6"><br><b><i>N</i> petróleo original en sitio</b> <br>'+ br +' BN</div><div class="col-6"><br><b><i>B</i> constante de intrusión de agua</b> <br>'+ m2r +' BY/lpca</div></div>';					

						$('#resultados').html(result);

							var filasRes = "";

						var thead= '<thead><tr><th scope="col">N°</th><th scope="col"> &Delta;P (lpca)</th><th scope="col"> t<sub>D</sub> (adim)</th><th scope="col"> Qt<sub>D</sub> (adim)</th><th scope="col"> &Sigma; &Delta;P·Qt<sub>D</sub> (lpca)</th><th scope="col"> F/E<sub>o</sub> (BN)</th><th scope="col"> &Sigma; &Delta;P·Qt<sub>D</sub>/E<sub>o</sub> (lpca·BN/BY)</th><th scope="col">W<sub>e</sub> (BY)</th></tr></thead><tbody id="tbody"></tbody>'
						
						$('.table-hover-resultados').html(thead);

					 for (var o = 1; o <= contador; o++) 
					 {
					 	var filaRes = '<tr><th scope="row">'+ o + '</th><td>'+ dpr[o]+ '</td><td>'+ tdr[o] + '</td><td>'+ qtdr[o]+  '</td><td>'+ ultimovalorr[o] +' </td><td>' + feor[o] +' </td><td>' + wedeor[o] +' </td><td>' + wer[o] +'</td></tr>';

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
 			var fila = '<tr><th scope="row">'+ i + '</th><td><input id="t'+i+""+i+'" class="form-control" name=""></td><td><input id="pe'+i+""+(i+1)+ '" class="form-control " name=""></td><td><input id="f'+i+""+(i+2)+ '" class="form-control " name=""></td><td><input  id="eo'+i+""+(i+3)+ '" class="form-control" name=""></td></tr>';

		 	var filas = filas.concat(fila);
	 	 }

      	  $('#cuerpo-tabla').html(filas);

    });

});