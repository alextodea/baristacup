"use strict";
(function(){
	var App = function(){
		//Header handler
		var Header = function(el){
			el.on("click", ".burger-menu-container", onBurgerMenuClick);

			function onBurgerMenuClick() {
				el.toggleClass("active");
			}

			return this;
		}

		//Slider handler
		function Slider(el) {
			var that = this;
			this.slideIndex = 1;
			this.slides = el.find(".slide-item");

			function showSlides(n) {
				that.slides.removeClass("slider-active");
				if(n > that.slides.length) {
					that.slideIndex = 1;
				} else if(n < 1) {
					that.slideIndex = that.slides.length;
				}
				that.slides.eq(that.slideIndex - 1).addClass("slider-active");
			}

			showSlides(that.slideIndex);	

			function nextSlide(n) {
				showSlides(that.slideIndex += n);				
			}

			setInterval(function () {
				nextSlide(1);
			}, 4000);

			return Slider;
		}

		$(".header").each(function(){
			new Header($(this));
		});

		$(".slider-container").each(function() {
			new Slider($(this));
		});

		return this;
	}
	new App();
}());


