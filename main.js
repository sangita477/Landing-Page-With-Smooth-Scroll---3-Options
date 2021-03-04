// Option 2 - JQuery Smooth Screoll
//$('.navbar a').on{'click', function(e){
	//if (this.hash !==''} {
		//e.preventDefault();

		//$('html,body') .animate({
			//scrollTop:$(hash) offset().top                                                                                                                                                                                                                                                                                                               
	   // },800);
   // }
//});

// Option 3 - SmoothScroll
const scroll = new SmoothScroll('.navbar a[href*="#"]', {
	speed:800
});