function sleep(ms) {  return new Promise(resolve => setTimeout(resolve, ms));}$(document).ready(function(){    if($("#cake").css("height") > $("#cake").css("width")) {    	$("img").css("height", "100%");    	$("img").css("width", "auto");    }        $("img").on({		mouseenter: function () {			$(this).parent().find("div.image-text").stop().animate({			  	"letter-spacing": "34px"			}, 450);			$(this).parent().parent().stop().animate({			  	"height": "550px",				"width": "660px"			}, 450);			$(this).css({"width":"100%"});// 			$(this).parent().css("height", "510px");// 			$(this).parent().css("width", "612px");		},		mouseleave: function () {			$(this).parent().find("div.image-text").animate({			  	"letter-spacing": "30px"			}, 450);			$(this).parent().parent().animate({			  	"height": "500px",				"width": "600px"			}, 450);					$(this).css({"width":"100%"});	// 			$(this).parent().css("height", "500px");// 			$(this).parent().css("width", "600px");    	}	});		$(function() {		//get the welcome msg element		var $all_msg = $('#welcome_msg');		//get a list of letters from the welcome text		var $wordList = $('#welcome_msg').text().split("");		let noOfLetters = $wordList.length;		//clear the welcome text msg		$('#welcome_msg').text("");		//loop through the letters in the $wordList array		$.each($wordList, function(idx, elem) {		  //create a span for the letter and set opacity to 0		  	var newEL = $("<span/>").text(elem).css({				"opacity": "0",				"font-family": "paganini, serif",				"font-style": "normal",				"font-weight": "300",				"letter-spacing": "20px"			});			//append it to the welcome message			newEL.appendTo($all_msg);			//set the delay on the animation for this element			newEL.delay(idx * 100);			//animate the opacity back to full 1			newEL.animate({			  	opacity: 1			}, 			{duration: 1100, 			complete: function() {				if(idx == noOfLetters-15)					moveImages();						//TODO: make sure that one cant click on image or interfer before it is done					//maybe also, if one clicks, the animation stops					}			});		});	});		function moveImages() {		$("div.first")			.animate({ "left": "+=736"}, 2500 )			.animate({ "left": "-=36"}, 2000 )		$("div.second")			.animate({ "right": "+=736"}, 2500 )			.animate({ "right": "-=36"}, 2000 )				}		});