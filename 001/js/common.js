
$(function(){
	$('.voice_list').slick({
		accessibility: false,
		autoplay: true,
		speed: 1000,
		arrows: false
	});
	$('.main_slider_list').slick({
		accessibility: false,
		fade: true,
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 1500,
		arrows: false
	});
  });

function menuFunc(obj){
	var menuState = $(obj).data('menu');
	if(menuState ==  "close"){
		//$('.menu_list').slideDown();
		$(obj).data('menu', 'open').addClass('open');
	}else if(menuState == 'open'){
		//$('.menu_list').slideUp();
		$(obj).data('menu', 'close').removeClass('open');;
	}
 }