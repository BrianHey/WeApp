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
	var circulo = 360;
	var pic = 3.14159;
		
	$('.generar').click( function (){	

			var pi = $('#pi').val();
			var pe = $('#pe').val();
			var re = $('#re').val();
			var ha = $('#ha').val();		
			var muw = $('#muw').val();
			var ka = $('#ka').val();
			var fia = $('#fia').val();
			var cea = $('#cea').val();
			var theta = $('#theta').val();
			var ta = $('#ta').val();
			var t = $('#t').val();
			
			var b = const1 * Math.pow(re, 2) * ha * fia * cea * (theta/ circulo);
			var tdc = (const2*ka)/(muw*fia*cea*(re*re));
			var td = tdc * t;
			var br = Number(b).toLocaleString();
			var tdcr = Number(tdc).toLocaleString();

			var dp = (pi - pe)/2;

			var dpr = Number(dp).toLocaleString();
			var tdr = Number(td).toLocaleString();


		

						var tabla = ta;
						var tdTable = new Array();
						var qtdTable = new Array();

						var x1 = '';
						var x2 = '';
						var x3 = '';
						var y1 = '';
						var y2 = '';

						var interpolaciones = new Array();
						var interpolacion= '';

						var tdTable = new Array();
						var qtdTable = new Array();

						$.ajax({
				          url:"consultatd.php",
				          method:"POST",
				          data:{tabla:tabla, td:td},
				          cache:"false",
				          success:function(data) {
				          		tdTable.push(data);
								var tdTableArray = JSON.parse(tdTable);
								console.log(" por aqui ", tdTableArray);

								 $.ajax({
									url:"consultaqtd.php",
									method:"POST",
									data:{tabla:tabla, tduno: tdTableArray[0], tddos :tdTableArray[1]},
									cache:"false",
									success:function(data){
																qtdTable.push(data);
																var qtdTableArray = JSON.parse(qtdTable);
																var x1 = tdTableArray[0];
																var x2 = tdTableArray[1];
																var y1 = qtdTableArray[0];
																var y2 = qtdTableArray[1];
																interpolacion = y1 + ( (  (td - x1) / (x2 - x1) ) * ( y2 - y1 )   );
																interpolaciones.push(interpolacion);
																		          	  
																var we = ( dp * ((interpolacion)));
																
																var wer = Number(we).toLocaleString();
																console.log(interpolacion);

																var result = ' <div class="row  resultados"><div class="col text-center"><h4><b>Resultados</b></h4></div></div><div class="row text-center"><div class="col-6"><br><b><i>t<sub>D</sub></i> tiempo adimensional</b> <br>'+ tdcr +' adim</div><div class="col-6"><br><b><i>B</i> constante de intrusión de agua</b> <br>'+ br +' BY/lpca</div></div>';
																$('#resultados').html(result);

																	var filasRes = "";

																var thead= '<thead><tr><th scope="col">N°</th><th scope="col"> &Delta;P (lpca)</th><th scope="col"> t<sub>D</sub> (adim)</th><th scope="col"> Qt<sub>D</sub> (adim)</th><th scope="col">W<sub>e</sub> (BY)</th></tr></thead><tbody id="tbody"></tbody>'

																$('.table-hover-resultados').html(thead);

															
															 
															 	var filaRes = '<tr><th scope="row">'+ 1 + '</th><td>'+ dpr+ '</td><td>'+ tdr + '</td><td>'+ interpolacion +  '</td><td>' + wer +'</td></tr>';

															 	var filasRes = filasRes.concat(filaRes);
														 	 

													      	  $('#tbody').html(filasRes);
													} });
								} });

			   		
			   				




					
				

				});

			      	 


});