'use strict';

var transDuration = 0.5;

function pageInit() {

	window.scrollTo(0, 0);

	thisNavItem_active = document.getElementById('navItem01');
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

var thisNavItem_active;
var thisNavItemX;
var scrollDuration = 0.5;
var thisAnchor;

function scrollToActive(thisNavItem) {

	thisNavItem_active = thisNavItem;
	thisNavItemX = getDims(thisNavItem.id)[0] - getDims("navContainer01")[0];

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


window.onresize = function() {
	thisNavItemX = getDims(thisNavItem_active.id)[0] - getDims("navContainer01")[0];

	var reScrollTL = new TimelineMax({delay:0});

	reScrollTL
		.set(NAV_btn_active, {x:thisNavItemX}, "frame01 +=0")
		.set(window, {scrollTo:{y:thisAnchor, autoKill:false}}, "frame01 +=0")
	;
};
