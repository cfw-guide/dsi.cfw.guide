/*
GreedyNav.js - http://lukejacksonn.com/actuate
Licensed under the MIT license - http://opensource.org/licenses/MIT
Copyright (c) 2015 Luke Jackson
*/

$(function() {

	var $btn1 = $('nav.greedy-nav button.greedy-nav__toggle');
	var $btn2 = $('nav.greedy-nav button.langsel');
	var $vlinks = $('nav.greedy-nav .visible-links');
	var $hlinks1 = $('nav.greedy-nav .hidden-links.links-menu');
	var $hlinks2 = $('nav.greedy-nav .hidden-links.lang-menu');
  
	var numOfItems = 0;
	var totalSpace = 0;
	var closingTime = 1000;
	var breakWidths = [];
  
	// Get initial state
	$vlinks.children().outerWidth(function(i, w) {
	  totalSpace += w;
	  numOfItems += 1;
	  breakWidths.push(totalSpace);
	});
  
	var availableSpace, numOfVisibleItems, requiredSpace, timer1, timer2;
  
	function check() {
  
	  // Get instant state
	  availableSpace = $vlinks.width() - $btn1.width() - $btn2.width() - $('nav.greedy-nav .site-title').width();
	  numOfVisibleItems = $vlinks.children().length;
	  requiredSpace = breakWidths[numOfVisibleItems - 1];
  
	  // There is not enought space
	  if (requiredSpace > availableSpace) {
		$vlinks.children().last().prependTo($hlinks1);
		numOfVisibleItems -= 1;
		check();
		// There is more than enough space
	  } else if (availableSpace > breakWidths[numOfVisibleItems]) {
		$hlinks1.children().first().appendTo($vlinks);
		numOfVisibleItems += 1;
		check();
	  }
	  // Update the button accordingly
	  $btn1.attr("count", numOfItems - numOfVisibleItems);
	  if (numOfVisibleItems === numOfItems)
		$btn1.addClass('hidden');
	  else
	  	$btn1.removeClass('hidden');
	}
  
	// Window listeners
	check();
	$(window).resize(function() { check() });

	$btn1.on('click', function() {
		$hlinks1.toggleClass('hidden');
		if (!$hlinks2.hasClass('hidden'))
			$hlinks2.addClass('hidden');

		clearTimeout(timer2);
	});
  
	$hlinks1
		.on('mouseleave', function () { timer1 = setTimeout(function () {$hlinks1.addClass('hidden'), closingTime}) })
		.on('mouseenter', function () { clearTimeout(timer1) });

	$btn2.on('click', function() {
		$hlinks2.toggleClass('hidden');
		if (!$hlinks1.hasClass('hidden'))
			$hlinks1.addClass('hidden');

		clearTimeout(timer1);
	});

	$hlinks2
		.on('mouseleave', function () { timer2 = setTimeout(function () {$hlinks2.addClass('hidden'), closingTime}) })
		.on('mouseenter', function () { clearTimeout(timer2) });

	// close when clicking somewhere else
	$('body').click(function(e) {
		if ($(e.target).closest('nav.greedy-nav').length !== 0)
			return;

		$hlinks1.addClass('hidden');
		$hlinks2.addClass('hidden');
	});
  });
  