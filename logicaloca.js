var ta = 4.5;
			      	  	var td = [2.7, 7.1];

			      	    var tabla = ta;
						var tdTable = new Array();
						var qtdTable = new Array();

						var x1 = '';
						var x2 = '';
						var x3 = '';
						var y1 = '';
						var y2 = '';

						var interpolaciones = new Array();
						


			      	 for (var z = 0; z < td.length ; z++) {

			      	 
			      	  // console.time('loop');
						$.ajax({
				          url:"consultatd.php",
				          method:"POST",
				          data:{tabla:tabla, td:td},
				          cache:"false",
				          success:function(data) {

				          		console.log(" arruba ", td);
				          	for (var g = 0; g<= td.length ; g++) {
				          				console.log("abbuja ", td);
				          						// console.log(" tdes? " , td[g]);
										          	// console.time('laap');
										          	// console.log(data);
										          	tdTable.push(data);
										          	var tdTableArray = JSON.parse(tdTable);
										          	console.log(" por aqui ", tdTableArray);
										          	// console.log("Td consulta ",td);
										          	// console.log(tdTableArray);
										          	// tdTableArray.forEach(function(valor){console.log(valor)});
							   }
				          }
				        });

				      //    $.ajax({
										// 		          url:"consultaqtd.php",
										// 		          method:"POST",
										// 		          data:{tabla:tabla, tduno: tdTableArray[0], tddos :tdTableArray[1]},
										// 		          cache:"false",
										// 		          success:function(data) {
										// 		       		// console.log("td table array" ,tdTableArray);

										// 		          	qtdTable.push(data);
										// 		          	var qtdTableArray = JSON.parse(qtdTable);
										// 		          	// console.log(qtdTableArray)


										// 		          	var x1 = tdTableArray[0];
										// 		          	var x2 = tdTableArray[1];
										// 		          	var y1 = qtdTableArray[0];
										// 		          	var y2 = qtdTableArray[1];
												          	  	

										// 		          	  	 var interpolacion = y1 + ( (  (td - x1) / (x2 - x1) ) * ( y2 - y1 )   );
										// 		          	  	 interpolaciones.push(interpolacion);
										// 		          	  	 // console.log(" aqui " ,Number(x1), Number(x2),Number(y1), Number(y2), td)
										// 		          	  	 // console.log(" interpoleichons 21212" ,interpolaciones.length);
										// 		          	  	 console.log(" interpoleichons " ,interpolaciones);
										// 		          	  	  // console.timeEnd('laap');

									      						 	
										// 		          	// qtdTableArray.forEach(function(valor){console.log(valor)});
										// 		          }
			   				// });



				        // console.log(" interpoleichons " ,interpolaciones.length);
				        // console.timeEnd('loop');
			      	 }