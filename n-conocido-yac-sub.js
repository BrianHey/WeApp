$(document).ready(function (){

	$('.generar').click( function (){
			
			var pi = $('#pi').val();
			var p = $('#p').val();
			var n = $('#n').val();
			var np = $('#np').val();
			var bo  = $('#bo').val();
			var boi = $('#boi').val();
			var wp = $('#wp').val();
			var bw = $('#bw').val();
			var ce = $('#ce').val();

			var deltap = pi-p;
			var x = (ce*boi*deltap);
			var y = (np*bo);
			var z = (wp*bw);
			var w = (n*x);
			var we = (y+z-w ) *bw ;

			var wer = Number(we).toLocaleString();

			var result = ' <div class="row  resultados"><div class="col text-center"><h4><b>Resultados</b></h4></div></div><div class="row text-center"><div class="col"><br><b><i>W<sub>e</sub></i> intrusión de agua</b> <br> '+ wer +' BY</div> </div> ';

			$('#resultados').html(result);
	});
	
});