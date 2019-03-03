$(document).ready(function () {
    
    
    /*loader*/
$(".load-content").fadeOut(4000);
     /*scroll-top*/
	var scroltopbtn = $("#top");
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			scroltopbtn.fadeIn();
		} else {
			$(scroltopbtn).fadeOut();
		}
	});
	scroltopbtn.on('click', function () {
		$('html , body').animate({
			scrollTop: 0
		}, 600);
	});

});


/*slider1*/

   function moveTo(el) {
  if (el == "fifth") {
    var selected = $(".six").next();
  } else if (el == "third") {
    var selected = $(".second").prev();
  } else {
    var selected = el;
  }
  var next = $(selected).next();
  var prev = $(selected).prev();
  var prevSecond = $(prev).prev();
  var nextSecond = $(next).next();
  $(selected).removeClass().addClass("fourth");
  $(prev).removeClass().addClass("third");
  $(next).removeClass().addClass("fifth");
  $(nextSecond).removeClass().addClass("six");
  $(prevSecond).removeClass().addClass("second");
  $(nextSecond).nextAll().removeClass().addClass('seventh');
  $(prevSecond).prevAll().removeClass().addClass('first');

}



/*owl*/

  $('.owl-carousel').owlCarousel({
         rtl:true,
         loop:true,
         margin:10,
         nav:true,
         autoplay:true,
         autoplayTimeout:5000,
         responsive:{
         0:{
         items:2
         },
         600:{
         items:2
         },
         1000:{
         items:5
         }
         }
         })

/*wow*/
$('#scroll div').click(function() {
  moveTo($(this));
});
  wow = new WOW(
      {
          animateClass: 'animated',
          offset:       100,
          callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();

















$(document).ready(function() {
    
  $('.pour') //Pour Me Another Drink, Bartender!
    .delay(0)
    .animate({
      height: '150px'
      }, 1500)
    .delay(15600);

    $('.pourTube') //Pour Me Another Drink, Bartender!
      .delay(0)
      .animate({
        height: '150px'
        }, 0)
      .delay(15600);

  $('#liquid') // I Said Fill 'Er Up!
    .delay(1300)
    .animate({
      height: '170px'
    }, 15000);

  $('.beer-foam') // Keep that Foam Rollin' Toward the Top! Yahooo!
    .delay(3400)
    .animate({
      bottom: '200px'
      }, 2500);
  });






