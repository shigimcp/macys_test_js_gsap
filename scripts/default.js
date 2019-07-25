'use strict';

var transDuration = 0.5;


//<!--/* ========================= INITIALIZE PAGE ========================= */-->

function pageInit() {

	window.scrollTo(0, 0);

}


//==================== FUNCTION: getDims(thisElem) ====================

function getDims(thisElem) {

	var thisX = document.getElementById(thisElem).getBoundingClientRect().x;
	var thisY = document.getElementById(thisElem).getBoundingClientRect().y;
	var thisW = document.getElementById(thisElem).getBoundingClientRect().width;
	var thisH = document.getElementById(thisElem).getBoundingClientRect().height;

	return [thisX, thisY, thisW, thisH];
}


//==================== FUNCTION: navOver(thisNavItem, thisColor) ====================

function navOver(thisNavItem, thisColor) {
	TweenMax.to(thisNavItem, transDuration, {backgroundColor:thisColor, ease:Power3.easeOut});
}


//==================== FUNCTION: scrollToActive(thisNavItem) ====================

function scrollToActive(thisNavItem) {

	var scrollDuration = 0.5;
	var thisAnchor;
	var thisNavItemX = getDims(thisNavItem.id)[0] - getDims("navContainer01")[0];


	switch(thisNavItem.id) {

		case 'navItem01':
			thisAnchor = "#triAnchor01";
			break;

		case 'navItem02':
			thisAnchor = "#triAnchor02";
			break;

		case 'navItem03':
			thisAnchor = "#triAnchor03";
			break;

		case 'navItem04':
			thisAnchor = "#postPregAnchor01";
			break;

		default:
			console.log('Move along folks! Nothing to see here...');
	}


	var scrollTL = new TimelineMax({delay:0});

	scrollTL
		.to(NAV_btn_active, scrollDuration, {x:thisNavItemX, ease:Power3.easeOut}, "frame01 +=0")
		.to(window, scrollDuration, {scrollTo:{y:thisAnchor, autoKill:false}, ease:Power3.easeOut}, "frame01 +=0")
	;
}