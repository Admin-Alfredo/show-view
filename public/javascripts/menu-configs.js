$(document).ready(function(){
	if(window.location.pathname == "/"){
		//scroll menu fixed no top
		$(document).on('scroll', function(){
			var menu = document.querySelector('.menu');
			var rectBanner = document.querySelector('.banner').getBoundingClientRect();
			if(menu.getBoundingClientRect().y <= 0){
				$(menu).css({
					'position':'fixed',
					'top':'0px',
					'width':'100%',
					'z-index':'10',
					'box-shadow':'0 1px 4px #aaa'
				})
			}
			if(rectBanner.y + rectBanner.height >= 0){
				$(menu).css({
					'position':'relative',
					'box-shadow':'none'
				})
			}
		})
	}
})