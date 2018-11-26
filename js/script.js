$(document).ready(function(){
	//ripples
	$(".header").ripples({
		dropRadius: 25,
		perturbance: 0.6
	});
});

//smooth scroll
$('.header-link').click(function(link){
	link.preventDefault();

	let target = $(this).attr('href');

	$('html, body').stop().animate({
		scrollTop: $(target).offset().top - 100
	}, 1000);
})