//written by Adhil Aug 16 2021
var otime = 9; //opening time in 24hr
var ctime = 17; //cosing time in 24hr
var holiday = ["1225", "815", "819", "820", "821", "823", "828", "830", "911", "921", "109", "1014", "1015", "1019", "114", "1113", "1211"]
//holidays refer to sw docs | 1225 means dec 25 -xmas
var lockdown = 0; //if 1, school remains closed (0/1)
var itsholiday = 0; // don't change this 
var now = new Date();
var hour = now.getHours();
var day = now.getDay();
var month = now.getMonth() + 1;
var date = now.getDate();
var displayMsgBox = false;
var displayMsgBox_Delay = true;


setInterval(updatests, 3000);

function updatests() {
	now = new Date();
	hour = now.getHours();
	day = now.getDay();
	month = now.getMonth() + 1;
	date = now.getDate();

	if (holiday.includes(month.toString() + date.toString())) {
		itsholiday = 1; //it's a holiday
	}
	else {
		itsholiday = 0; //it's not a holiday
	}

	if ((day != 7) && (hour >= otime) && (hour < ctime) && (itsholiday == 0) && (lockdown == 0)) {
		if (document.getElementById("whours").innerHTML != "✓ SCHOOL OPENED") {
			document.getElementById("whours").innerHTML = "&#10003; SCHOOL OPENED";
			document.getElementById("whours").style.color = "green";
		}
	}
	else {
		if (document.getElementById("whours").innerHTML != "⚠ SCHOOL CLOSED") {
			document.getElementById("whours").innerHTML = "&#9888; SCHOOL CLOSED";
			document.getElementById("whours").style.color = "red";
		}
	}
}

function homepagefn() {
	if (displayMsgBox_Delay == true) {
		setTimeout(showpopup, 60000);
	}
	if (displayMsgBox == true) {
		if (screen.width >= 767) {
			document.getElementById("msgBox1").style.display = "inline-block";
		}

	}
}

function showpopup() {
	if (screen.width >= 767) {
		//alert("not working");
		document.getElementById("msgBox1").style.display = "inline-block";
	}
}

function closeMsgBox() {
	document.getElementById("msgBox1").className += "-disabled";
	setTimeout(closeMsgBoxX, 1000);
}
function closeMsgBoxX() {
	document.getElementById("msgBox1").style.display = "none";
}

function testAlgo() {
	alert("Day : " + day + "| current hour : " + hour + " | opening time: " + otime + " | closing time: " + ctime + " | holiday? " + itsholiday + " | lockdown? " + lockdown);

}

(function ($) {
	"use strict";

	/* ..............................................
	Loader 
	................................................. */

	$(window).on('load', function () {
		$('.preloader').fadeOut();
		$('#preloader').delay(550).fadeOut('slow');
		$('body').delay(450).css({ 'overflow': 'visible' });
	});

	/* ..............................................
	Navbar Bar
	................................................. */

	$('.navbar-nav .nav-link').on('click', function () {
		var toggle = $('.navbar-toggler').is(':visible');
		if (toggle) {
			$('.navbar-collapse').collapse('hide');
		}
	});

	/* ..............................................
	Fixed Menu
	................................................. */

	$(window).on('scroll', function () {
		if ($(window).scrollTop() > 50) {
			$('.top-header').addClass('fixed-menu');
		} else {
			$('.top-header').removeClass('fixed-menu');
		}
	});

	/* ..............................................
	Properties Filter
	................................................. */
	var Container = $('.container');
	Container.imagesLoaded(function () {
		var portfolio = $('.properties-menu');
		portfolio.on('click', 'button', function () {
			$(this).addClass('active').siblings().removeClass('active');
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({
				filter: filterValue
			});
		});
		var $grid = $('.properties-list').isotope({
			itemSelector: '.properties-grid'
		});

	});

	/* ..............................................
	Gallery
	................................................. */

	$(document).ready(function () {
		$('.popup-gallery').magnificPopup({
			delegate: 'a',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
			},
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
				titleSrc: function (item) {
					return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
				}
			}
		});
	});

	/* ..............................................
	Scroll To Top
	................................................. */

	$(document).ready(function () {

		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#scroll-to-top').fadeIn();
			} else {
				$('#scroll-to-top').fadeOut();
			}
		});

		$('#scroll-to-top').click(function () {
			$("html, body").animate({ scrollTop: 0 }, 50);
			return false;
		});

	});




}(jQuery));

