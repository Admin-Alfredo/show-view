$(function(){
	resizeBanner()
	$(window).on('scroll', resizeBanner)
	$(window).on('mousemove', resizeBanner)
	$(window).on('resize', resizeBanner)
	
	function resizeBanner(){
		var img = $('#img-banner');
		img.width(window.innerWidth);
	};
	setInterval(trocaBanner, 2000);
	
	var images = [
		"/images/bg-pub-dest-2.png",
		"/images/bg-pub-dest-3.png",
		"/images/bg-pub-dest-1.png",
	];
	var index = 0; 
	function trocaBanner(){
		var imgTroca = document.getElementById('img-banner');
		if(index === images.length) index = 0;
		imgTroca.src = images[index];
		index++;
	}
	//RESPONSIVE-IMAGE
	init();//inicializando...
	$(document).on('scroll',init)
	$(document).on('mousemove', init)
	$(window).on('resize', init);//redimencione as imagens
	function init(){
		var responsive = $('.responsive-image');
		responsive.width(responsive.parent().innerWidth());
	}
})