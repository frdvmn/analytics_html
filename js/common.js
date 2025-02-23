$(function() {

	new WOW().init();

	$(".hamburger").click(function(){
		$(this).toggleClass("is-active");

		if($(this).hasClass('is-active')){
			$('.mnu_top').slideDown(300);
		}else{
			$('.mnu_top').slideUp(300);
		}
	});

	$(".rev_nav > div").click(function () {
		const allRevnav = $(".rev_nav > div")

		allRevnav.not($(this)).removeClass("active")
		$(this).addClass("active")
		
		const revItem = $(this).attr("data-revnav")
		$(`${revItem}`).addClass("active")

		$(".rev_item").not($(`${revItem}`)).removeClass("active")
				
	})

});