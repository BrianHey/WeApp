$(document).ready(function (){
$('.collapse').collapse();
	$('.generar').click( function (){
			
			var n = $('#n').val();
			var np = $('#np').val();
			var bo  = $('#bo').val();
			var boi = $('#boi').val();
			var wp = $('#wp').val();
			var bw = $('#bw').val();
			var bg = $('#bg').val();
			var bgi = $('#bgi').val();
			var rp = $('#rp').val();
			var rs = $('#rs').val();
			var rsi = $('#rsi').val();
			var m = $('#m').val();

			var w = bg * (rp - rsi);
			var x = ( Number(bo) + Number(w) );
			var a = np * x;

			var b = wp * bw; 
			var r = bo - boi;
			var s = bg * (rsi - rs);
			var t = ((m*boi)/bgi)*(bg-bgi);
			var y = r + s + t;
			var c = n * y;
			var we = ( a + b - c ) * bw;

			var wer = Number(we).toLocaleString();		

			var result = ' <div class="row  resultados"><div class="col text-center"><h4><b>Resultados</b></h4></div></div><div class="row text-center"><div class="col"><br><b><i>W<sub>e</sub></i> intrusión de agua</b> <br> '+ wer +' BY</div> </div> ';

			$('#resultados').html(result);

	});	
});