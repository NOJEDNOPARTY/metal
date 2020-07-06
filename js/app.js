var common = {
	init: function() {
		common.main();
		common.owl();
		common.charts();
	},
	main: function(){

		function fixedHead() {
			$('.header-wrap').addClass('fixed');
			$('body').css({'margin-top':$('.header-wrap').outerHeight()})
			if ($(window).scrollTop() > 0)  {
				$('.header-wrap').addClass('shadow');
			}else {
				$('.header-wrap').removeClass('shadow');
			}
		};

		fixedHead();

		$(window).resize(function() {
			fixedHead();
		});
		$(window).scroll(function() {
			fixedHead();
		});

		$('.menu-trigger').click(function(event){
			event.preventDefault();
			$('.header-wrap').toggleClass('open');
			$('header').slideToggle('fast');
			$('body').toggleClass('hidden');
		})

		var bLazy = new Blazy({});


		$('.anchor').click(function(event){
			event.preventDefault();
			var id  = $(this).attr('href'),
			top = $(id).offset().top;
			$('body,html').animate({scrollTop: top - 150}, 3000);
			if($('.header-wrap').hasClass('open') == true) {
				$('.header-wrap').removeClass('open');
				$('header').slideToggle('fast');
				$('body').removeClass('hidden');
			}

		});

		$('.tabs-section a').click(function(e){
			e.preventDefault();
			if($(this).hasClass('.active') == false) {
				var tabCnt = '.' + $(this).attr('data-cnt');
				$('.tabs-section a.active, .tab-cnt').removeClass('active')
				$(tabCnt).addClass('active')
				$(this).addClass('active');
				var bLazy = new Blazy({});
			}
		});

		$('.tel-trigger').mask("+380(99) 999-99-99");


	},
	owl: function(){

		$('.services-info-slider').owlCarousel({
			loop:true,
			items: 1,
			margin:0,
			nav: true,
			dots: false,
			autoHeight: true,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
		})

		var sertificates = $('.sertificates-slider');

		sertificates.owlCarousel({
			loop:true,
			items: 4,
			margin:30,
			nav: true,
			dots: false,
			autoHeight: true,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			navContainer: '.sertificates .slider-triggers',
			responsive:{
				0:{
					items:1,
				},
				450:{
					items:2,
				},
				601:{
					items:3,
				},
				993:{
					items:4,
				}
			}
		})
		

		$('.sertificates .slider-triggers button.owl-next').click(function() {
			sertificates.trigger('next.owl.carousel');
			var bLazy = new Blazy({});
		});

		$('.sertificates .slider-triggers button.owl-prev').click(function() {
			sertificates.trigger('prev.owl.carousel', [300]);
			var bLazy = new Blazy({});
		});
	},
	charts: function(){
		var ctx = document.getElementById('myChart');
		var myChart = new Chart(ctx, {
			type: 'line',
			data: {
				labels: ['22.05.2020', '24.05.2020', '26.05.2020', '28.05.2020', '30.05.2020', '1.06.2020'],
				datasets: [{
					label: '',
					data: [6680, 7430, 7100, 7280, 7560, 7070],
					backgroundColor: [
						'rgba(237, 32, 76, 0.05)',
						'rgba(237, 32, 76, 0.05)',
						'rgba(237, 32, 76, 0.05)',
						'rgba(237, 32, 76, 0.05)',
						'rgba(237, 32, 76, 0.05)',
						'rgba(237, 32, 76, 0.05)',
					],
					borderColor: [
						'rgb(255, 0, 56)',
						'rgb(255, 0, 56)',
						'rgb(255, 0, 56)',
						'rgb(255, 0, 56)',
						'rgb(255, 0, 56)',
						'rgb(255, 0, 56)',
						'rgb(255, 0, 56)',
					],
					borderWidth: 1
				}]
			},
			options: {
				maintainAspectRatio: false,
				spanGaps: false,
				elements: {
					line: {
						tension: 0.4
					}
				},
				plugins: {
					filler: {
						propagate: true
					},
				}
			}
		});
	}
};

(function() {
	common.init();
}());
