function anexoImage(url){
	var image = document.createElement('img');
	image.className = "image-anexo"
	image.src = url;
	return image.outerHTML;
}

function readerAnexo(inputId, outputId){
	$('#'+inputId).on('change', function(event){
		var reader = new FileReader();
		var url = null;
		if(/image/g.test(event.target.files[0].type)){
			var file = event.target.files[0];
			if(window.URL){
				url = window.URL.createObjectURL(file);
			}else if(window.webkitURL){
				url = window.webkitURL.createObjectURL(file)
			}
			reader.readAsDataURL(file);
			reader.onprogress = function(progress){
				if(progress.lengthComputable){
					console.log('progress...',progress.loaded, progress.total);
				}
			}
			reader.onload = function(){
				document.getElementById(outputId).innerHTML = anexoImage(reader.result);
			}
		}else{
			alerta('aviso',{destaque:"Seleciona apenas imagens.",msg:""}).show(1000)
		}
	})
}
readerAnexo('imgMin','drop-image-min');
readerAnexo('imgMed','drop-image-med');
readerAnexo('imgMax','drop-image-max');