
	function saveCanvas(){
		html2canvas(document.querySelector("#tabla-formulario")).then(

			canvas => {

				var image = canvas.toDataURL("image/jpg", 1.0).replace("image/jpg", "image/octet-stream");
				console.log(image);
				window.location.href=image;
			  }
			);
}