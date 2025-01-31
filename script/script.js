//Marquee card
	const marqueCard = new Swiper('.marquee-card', {
	  loop: true,
	  slidesPerView: 5,  
	  spaceBetween: 25,  

	  breakpoints: {
	    1440: {
	      slidesPerView: 4,
	    },
	    1024: {
	      slidesPerView: 3, 
	    },
	    768: {
	      slidesPerView: 2,
	    },
	    0: {
	      slidesPerView: 1,
	    },
	  },
	});
// Slider js
	const blogSwiper = new Swiper('.blog-swiper', {
	  loop: true,
	  slidesPerView: 6,  
	  spaceBetween: 15,  

	  navigation: {
	    nextEl: '.swiper-button-nextt',   
	    prevEl: '.swiper-button-prevv',   
	  },

	  breakpoints: {
	    1440: {
	      slidesPerView: 4,
	    },
	    1024: {
	      slidesPerView: 3, 
	    },
	    768: {
	      slidesPerView: 2,
	  	  spaceBetween: 20,  

	    },
	    0: {
	      slidesPerView: 1,
	    },
	  },
	});

	window.addEventListener('resize', function() {
	  swiper.update();
	});

	const prevButton = document.getElementById('prevarr');
	const nextButton = document.getElementById('nextarr');

	prevButton.addEventListener('click', function() {
	  swiper.slidePrev();
	});

	nextButton.addEventListener('click', function() {
	  swiper.slideNext();
	});
// Small car
	const smallCar = new Swiper('.small-car-slider', {
	  loop: true,
	  slidesPerView:  9,  
	  spaceBetween: 18,  

	  navigation: {
	    nextEl: '.swiper-button-next-small',   
	    prevEl: '.swiper-button-prev-small',   
	  },

	  breakpoints: {
	    1440: {
	      slidesPerView: 9,
	    },
	    1024: {
	      slidesPerView: 5, 
	    },
	    768: {
	      slidesPerView: 4,
	    },
	    0: {
	      slidesPerView: 3,
	    },
	  },
	});

	window.addEventListener('resize', function() {
	  swiper.update();
	});

	const prevButtonS = document.getElementById('prevarr-small');
	const nextButtonS = document.getElementById('nextarr-small');

	prevButtonS.addEventListener('click', function() {
	  swiper.slidePrev();
	});

	nextButtonS.addEventListener('click', function() {
	  swiper.slideNext();
	});
// Review car
	const reviewSlide = new Swiper('.review-slide', {
	  loop: true,
	  slidesPerView: 4,  
	  spaceBetween: 15,  

	  navigation: {
	    nextEl: '.swiper-button-next-r',   
	    prevEl: '.swiper-button-prev-r',   
	  },

	  breakpoints: {
	    1440: {
	      slidesPerView: 4,
	    },
	    1024: {
	      slidesPerView: 3, 
	    },
	    768: {
	      slidesPerView: 3,
	    },
	    0: {
	      slidesPerView: 2,
	    },
	  },
	});

	window.addEventListener('resize', function() {
	  swiper.update();
	});

	const prevButtonR = document.getElementById('prevarr-rvu');
	const nextButtonR = document.getElementById('nextarr-rvu');

	prevButtonR.addEventListener('click', function() {
	  swiper.slidePrev();
	});

	nextButtonR.addEventListener('click', function() {
	  swiper.slideNext();
	});
// Small cars slide 
	const smallCarsSlide = new Swiper('.small-cars', {
	  loop: true,
	  slidesPerView: 5,  
	  spaceBetween: 15,  

	  navigation: {
	    nextEl: '.swiper-btn-next-cars',      
	  },

	  breakpoints: {
	    1440: {
	      slidesPerView: 5,
	    },
	    1024: {
	      slidesPerView: 5, 
	  	  spaceBetween: 10,  
	    },
	    768: {
	      slidesPerView: 5,
	    },
	    0: {
	      slidesPerView: 3,
	  	  spaceBetween: 5,  
	    },
	  },
	});

	window.addEventListener('resize', function() {
	  swiper.update();
	});

	const nextButCars = document.getElementById('nextCar');

	nextButCars.addEventListener('click', function() {
	  swiper.slideNext();
	});
// Small cars slide 2
	const smallCarsSlide2 = new Swiper('.small-cars-2', {
	  loop: true,
	  slidesPerView: 7,  
	  spaceBetween: 15,  

	  navigation: {
	    nextEl: '.swiper-btn-next-cars-2',      
	  },

	  breakpoints: {
	    1440: {
	      slidesPerView: 6,
	    },
	    1024: {
	      slidesPerView: 6, 
	    },
	    768: {
	      slidesPerView: 5,
	    },
	    0: {
	      slidesPerView: 4,
	  	  spaceBetween: 10,  
	    },
	  },
	});

	window.addEventListener('resize', function() {
	  swiper.update();
	});

	const nextButCars2 = document.getElementById('nextCar-2');

	nextButCars2.addEventListener('click', function() {
	  swiper.slideNext();
	});
// Recent blog 
	const recentBlog = new Swiper('.recent-blog-slider', {
	  loop: true,
	  slidesPerView: 4,  
	  spaceBetween: 15,  

	  navigation: {
	    nextEl: '.swiper-btn-next-rblog',   
	    prevEl: '.swiper-btn-prev-rblog',   
	  },

	  breakpoints: {
	    1440: {
	      slidesPerView: 4,
	    },
	    1024: {
	      slidesPerView: 3, 
	    },
	    768: {
	      slidesPerView: 2,
	    },
	    0: {
	      slidesPerView: 1,
	    },
	  },
	});

	window.addEventListener('resize', function() {
	  swiper.update();
	});

	const prevBbtnRblog = document.getElementById('prevarr-rblog');
	const nextBbtnRblog = document.getElementById('nextarr-rblog');

	prevBbtnRblog.addEventListener('click', function() {
	  swiper.slidePrev();
	});

	nextBbtnRblog.addEventListener('click', function() {
	  swiper.slideNext();
	});	