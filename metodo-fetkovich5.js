$(document).ready(function (){

	var contador = 0;
	var t = new Array();
	t[0] = 0;
	var dt = new Array();
	dt[0] = 0;
	var pe = new Array();
	pe[0] = 0;
	var we = new Array();
	we[0] = 0;
	var dwe = new Array();
	dwe[0] = 0;
	var wer = new Array();
	var pa = new Array();
	var pr = new Array();
	var par = new Array();
	var padp = new Array();
	var padpr = new Array();	
	var dwer = new Array();
	var exp = new Array();
	var dp = new Array();
	var x = new Array()
	var dpr = new Array();
	var a = new Array();
	var aa = new Array();
	var bb = new Array();
	var denj = new Array();
	var j = new Array();
	var ji = new Array();
	var jr = new Array();
	var jir = new Array();
	var const1 = 0.00708;
	var const2 = 1;
	var const3 = 0.0142;
	var const4 = 1000;
	var pic = 3.14159;
	var barril = 5.615;
	var circulo = 360;
		
	$('.generar').click( function (){			

			var pi = $('#pi').val();
			var re = $('#re').val();
			var ra = $('#ra').val();
			var ha = $('#ha').val();		
			var muw = $('#muw').val();
			var ka = $('#ka').val();
			var fia = $('#fia').val();
			var cea = $('#cea').val();
			var theta = $('#theta').val();

			var wi = ((pic * ((ra*ra) - (re*re))  * (ha*fia)) / barril);
			var f = (theta / circulo);
			var wei = cea * wi * pi * f;
			var numj = const1 * ka * const4 * ha * (theta / circulo);

			var wir = Number(wi).toLocaleString();
			var weir = Number(wei).toLocaleString();

			for (var i = 1; i <= contador; i++) {

			t[i] = $('#cuerpo-tabla').find("#t"+i+i).val();		 
			pe[i] = $('#cuerpo-tabla').find("#pe"+i+""+(i+1)).val(); 	
				
			}

			for (var u = 1 ; u <= contador; u++) {	

			bb[u] = (const3 * ka * t[u]) / (f * muw * cea);
			aa[u] = Math.sqrt(bb[u]);
			denj[u] = muw * (Math.log(aa[u]/re));
			j[u] = numj / denj[u];
			ji[u] = (j[u] * pi) / (wei);

			jr[u] = Number(j[u]).toLocaleString();
			jir[u] = Number(ji[u]).toLocaleString();		

			if (u <= 1) {

			x[u] = Number(pi) + Number(pe[u]);
			dp[u] = x[u] / 2;	

			} else {

			x[u] = Number(pe[u-1]) + Number(pe[u]); 
			dp[u] = x[u] / 2;

			}
					pa[u] = pi * (const2 - (we[u-1] / wei));
					padp[u] = pa[u] - dp[u];
					dt[u] = t[u] - t[u-1];
					a[u] = -ji[u] * dt[u];
					exp[u] = const2 - Math.exp(a[u]);				
					dwe[u] = (wei / pi) * padp[u] * exp[u];
					we[u] = dwe[u] + we[u-1];

					dpr[u] = Number(dp[u]).toLocaleString();
					padpr[u] = Number(padp[u]).toLocaleString();
					par[u] = Number(pa[u]).toLocaleString();
					dwer[u] = Number(dwe[u]).toLocaleString();
					wer[u] = Number(we[u]).toLocaleString();							
				}				
					var result = ' <div class="row  resultados"><div class="col text-center"><h4><b>Resultados</b></h4></div></div><div class="row text-center"><div class="col-6"><br><b><i>W<sub>i</sub></i> volumen inicial de agua en el acuífero</b> <br>'+ wir +' BY</div><div class="col-6"><br><b><i>W<sub>ei</sub></i> máxima intrusión de agua posible</b> <br>'+ weir +' BY</div></div>';
					$('#resultados').html(result);
							
					var filasRes = "";

					var thead= '<thead><tr><th scope="col">N°</th><th scope="col"> J (BY/lpca·día)</th><th scope="col"> J·P<sub>i</sub>/W<sub>ei</sub> (1/día)</th><th scope="col"> (P)<sub>n</sub> (lpca)</th><th scope="col"> (P<sub>a</sub>)<sub>n-1</sub> (lpca)</th><th scope="col"> (P<sub>a</sub>)<sub>n-1</sub> - (P)<sub>n</sub> (lpca)</th><th scope="col"> (&Delta;W<sub>e</sub>)<sub>n</sub> (BY)</th><th scope="col">W<sub>e</sub> (BY)</th></tr></thead><tbody id="tbody"></tbody>'

					 $('.table-hover-resultados').html(thead);	

					 for (var p = 1; p <= contador; p++) 
					 {
					 	var filaRes = '<tr><th scope="row">'+ p + '</th><td>' + jr[p] + '</td><td>' + jir[p] + '</td><td>' + dpr[p] + '</td><td>' + par[p] + '</td><td>' + padpr[p] + '</td><td>' + dwer[p] + '</td><td>' + wer[p]; +'</td></tr>';

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
		var fila = '<tr><th scope="row">'+ i + '</th><td><input id="t'+i+""+i+ '" class="form-control" name=""></td><td><input id="pe'+i+""+(i+1)+ '" class="form-control " name=""></td></tr>';
	 	
	 	var filas = filas.concat(fila);
	 	 }

      	  $('#cuerpo-tabla').html(filas);
    });
});