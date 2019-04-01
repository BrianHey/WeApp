$(document).ready(function (){

	var contador = 0;
	var we = new Array();
	we[0]= 0;
	var cs = new Array();
	cs[0]= 0;
	var t  = new Array();
	t[0]= 0;
	var dt  = new Array();
	dt[0] = 0 ;
	var dtr  = new Array();
	dtr[0] = 0 ;
	var pe  = new Array();
	pe[0]= 0;
	var logt  = new Array();
	logt[0] = 0 ;
	var logtr  = new Array();
	logtr[0] = 0 ;
	var dp  = new Array();
	dp[0] = 0 ;
	var dpr  = new Array();
	dpr[0] = 0 ;
	var cs  = new Array();
	cs[0] = 0 ;
	var acs  = new Array();
	acs[0] = 0 ;
	var acsr  = new Array();
	acsr[0] = 0 ;
	var x2  = new Array();
	x2[0] = 0 ;
	var xy = new Array();
	xy[0] = 0;
	var we  = new Array();
	var wer  = new Array();
	var numwe  = new Array();
	var denwe  = new Array();
		
	$('.generar').click( function (){			

			var pi = $('#pi').val();			

			for (var i = 1; i <= contador; i++) {

				 	t[i] = $('#cuerpo-tabla').find("#t"+i+i).val();		 
					pe[i] = $('#cuerpo-tabla').find("#pe"+i+""+(i+1)).val();
					cs[i] = $('#cuerpo-tabla').find("#cs"+i+""+(i+2)).val();
										 
			}

			for (var u =1 ;  u < contador; u++) {

					dt[u] = (t[(u+1)] - t[(u-1)] ) / 2;			 	
				 	dp[u] =	(pi - pe[(u)]);			 	
				 	acs[u] = 1 / cs[u];	
				    logt[u] = Math.log10(t[u]);			    
				    x2[u] = Math.pow(acs[u], 2);
			      	xy[u] = logt[u] * acs[u];

			      	var sumx = 0;
			      	var sumx2 = 0;
			      	var sumy = 0;
			      	var sumxy = 0;

			      }

					for (var mc = 1; mc < contador; mc++) {

						sumx += Number(acs[mc]);
						sumy += Number(logt[mc]);
						sumx2 += Number(x2[mc]);
						sumxy += Number(xy[mc]);							      		
															}	

					var numm1 = ( (contador-1) * sumxy ) - ( sumx * sumy );
					var denm1 = ( (contador-1) * sumx2 ) -  Math.pow(sumx,2);
					var m1 = numm1 / denm1 ;
					var numb2 = (sumy) - (m1 * sumx);
					var denb2 = (contador-1);
					var b2 = numb2 / denb2;		
					var a = Math.pow(10, -b2) ;

				for (var mu = 1; mu < contador; mu++) {

						numwe[mu] =  m1 * dp[mu] * dt[mu] ;
						denwe[mu] = Math.log10(a*t[mu]);
						we[mu] = numwe[mu] / denwe[mu];

				var b2r = Number(b2).toLocaleString();
				var ar = Number(a).toLocaleString();
				dtr[mu] = Number(dt[mu]).toLocaleString();
				dpr[mu] = Number(dp[mu]).toLocaleString();
				acsr[mu] = Number(acs[mu]).toLocaleString();
				logtr[mu] = Number(logt[mu]).toLocaleString();
				wer[mu] = Number(we[mu]).toLocaleString();
			}

				var result = ' <div class="row  resultados"><div class="col text-center"><h4><b>Resultados</b></h4></div></div><div class="row text-center"><div class="col-6"><br><b><i>a</i> constante de conversión del tiempo</b> <br>'+ ar +' adim</div><div class="col-6"><br><b><i>C<sub>h</sub></i> constante de intrusión de agua de Hurst</b> <br>'+ b2r +' BN/lpca·día</div></div>';

				$('#resultados').html(result);
				
				var filasRes = "";

				var thead= '<thead><tr><th scope="col">N°</th><th scope="col"> &Delta;t (días)</th><th scope="col"> &Delta;P (lpca)</th><th scope="col"> 1/C<sub>s</sub> (lpca·día/BY)</th><th scope="col"> log(t)</th><th scope="col">W<sub>e</sub> (BY)</th></tr></thead><tbody id="tbody"></tbody>'

				$('.table-hover-resultados').html(thead);

					 for (var o = 1; o < contador; o++) 
					 {
					 	var filaRes = '<tr><th scope="row">'+ o + '</th><td>'+ dtr[o] + '</td><td>'+ dpr[o] + '</td><td>'+ acsr[o] + '</td><td>' + logtr[o] + '</td><td>' +  wer[o];+'</td></tr>';

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
		 	var fila = '<tr><th scope="row">'+ i + '</th><td><input id="t'+i+""+i+ '" class="form-control" name=""></td><td><input id="pe'+i+""+(i+1)+ '" class="form-control " name=""></td><td><input id="cs'+i+""+(i+2)+ '" class="form-control " name=""></td></tr>';

		 	var filas = filas.concat(fila);
	 	 }

      	  $('#cuerpo-tabla').html(filas);
    });
});