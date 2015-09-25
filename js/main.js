$(window).scroll(function () {
	console.log($('.speech_bubble').offset().top);
	if ($('.speech_bubble').offset().top < 450) {
		$(".navigation").css("opacity", ".7");
		$(".self_portrait").animate({
			right : "-45px"
		}, 500);
		$(".speech_bubble").css('visibility', 'visible').animate({
			right : "130px"
		}, 500);
	}
	else if ($('.speech_bubble').offset().top > 600) {
		// $(".self_portrait").hide();
		$(".speech_bubble").css('visibility', 'hidden');
	}
	else {
		$(".navigation").css("opacity", "1");
	}
});

 // CONTACT, DEUCES POP OUT //
	var dueces_HI = new Waypoint({
		element: document.getElementById('contact'),
		handler: function() {
		$(".dueces").animate({
			right: '-70px',
			top: '120px'
		});
		$(".self_portrait").css('visibility', 'hidden');
		}
		});

// CONTACT, DUECES DISAPPEAR //
	var dueces_BYE = new Waypoint({
	element: document.getElementById('contact'),
	handler: function(direction) {
		if (direction === 'up') {
			$(".dueces").hide();
			$(".self_portrait").css('visibility', 'visible');
		}

		if (direction === 'down') {
			$(".dueces").show();
		}
  }
});




