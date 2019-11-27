$(function() {

	// swiper

	var swiperProduct = new Swiper('.product-swiper', {
			
		// slidesPerView: 3,
		// slidesPerColumn: 2,


		// slidesOffsetBefore: 10,   
		slidesOffsetAfter: 20,   
		spaceBetween: 20,

		 // ,
		width: 920,
		slidesPerView: 4,
		pagination: {
			el: '.swiper-pagination',
			type: 'progressbar',
		},
		breakpoints: { 
			// when window width is >= 480px
			980: {
				// slidesPerView: 4,
				spaceBetween: 30,
				slidesOffsetBefore: 30,    
				width: 1125,
				
			} 
		  }
	  });
	//
	var swiperAdvantages = new Swiper('.advantages-swiper', {	
		spaceBetween: 10,	 
		// width: 515,
		slidesPerView: 1,
 		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		}
	  });


	// var swiper = new Swiper('.swiper-container', {
    //   slidesPerView: 3,
    //   slidesPerColumn: 2,
    //   spaceBetween: 30,
    //   pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    //   },
    // });
});
