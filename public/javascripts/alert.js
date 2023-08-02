if($){
	function generate(type,msg, destaque){
		var span = document.createElement('span');
		var strong = document.createElement('span');
		span.className = "alert";
		$(strong).css({'font-weight':'700','font-size':'1.2em'});
		
		if(type === 'info'){
			$(strong).css({'color':'#3388cc'})
			
		}else if(type === 'erro'){
			$(strong).css({'color':'rgb(255,11,11)'})
			
		}else if(type === 'aviso'){
			$(strong).css({'color':'rgb(238,183,17)'})
			
		}else if(type === 'sucesso'){
			$(strong).css({'color':'rgb(0,202,51)'})
		}
		strong.innerText = destaque;
		span.appendChild(strong);
		span.innerHTML += msg;
		$(span).css({
			'background-color':'#222',
			'color':'#fff'
		})
		
		document.body.appendChild(span);
		return span;
	}
	 function alerta(type, obj){
		 if(typeof obj === "object"){
			var msg = obj.msg !== undefined ? obj.msg : "";
			var destaque = obj.destaque !== undefined ? obj.destaque : "";
			
			
			return{
				show: function(timeout){
					var alert = generate(type.replace(/\s/g,''), msg, destaque);
					var centerAlert = (($(document).innerWidth()/2) - ($(alert).width()/1.8))+"px";
					$(alert).css({'left':centerAlert});
					
					
					$(alert).animate({
						'top':'10%'
					}, 700, function(){
						setTimeout(function(){
							$(alert).animate({
								'top':'-190px'
							}, 700, function(){
								$(alert).remove()
							})
						}, timeout)
					})
				}
			}
		 }
	}
	
	//==========MODAL================
	
	function Modal(){
		var modal = $('.a-modal');
		var overlay = $('.a-overlay');
		return {
			show: function(width, children){
				modal.css('width',width*100+'%');
				$('.a-overlay').fadeIn('');
				modal.css('left',($(document).innerWidth()/2 - $('.a-modal').width()/2)+'px');
				if(typeof children === "string" && children.length){
					
				}else if(typeof children === "object"){
					
				}else{
					modal.fadeIn('')
				}
			},
			hide: function(){
				$('.a-overlay').fadeOut();
				modal.fadeOut('')
			}
		}
	}
	var modal = Modal();
	$('[data-modal-show-plus]').on('click', function(){
		modal.show(0.9)
		$('[data-dialog]').hide();
		$('[data-form-evento]').show();
	});
	$("[data-modal-close]").on('click', function(){
			$('.a-modal').css('position','absolute');
			modal.hide();
	});
	
	
	$('#image-evento').hide();
	$('[data-btn-status]').on('click', function(){
		if($(this).text() === "seguinte"){
			$('#info-evento').slideUp('');
			$('#image-evento').slideDown('');
			$(this).text("voltar");
		}else{
			$('#image-evento').slideUp('');	
			$('#info-evento').slideDown('');
			$(this).text("seguinte");
		}
	})
}
