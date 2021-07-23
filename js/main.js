$(function () {
	$(".slick").slick({
		arrows: false,
		slidesToShow: 4,
		slidesToScroll: 4,
		dots: true,
		autoplay: true,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});

	$(".open-menu").click(function (e) {
		$(".mobile-menu").removeClass("d-none");
		e.stopPropagation();
	});

	$("body").click(function (e) {
		if (!e.target.closest(".mobile-menu") || e.target === $(".mobile-menu__close")[0]) {
			$(".mobile-menu").addClass("d-none");
		}
	});
});
