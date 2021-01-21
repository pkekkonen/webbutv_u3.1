function sleep(ms) {  return new Promise(resolve => setTimeout(resolve, ms));}$(document).ready(function() {  $(function() {    if (typeof(Storage) !== "undefined") {      let res = sessionStorage.getItem("visited");            //if the home page has been visited before during this session, animation is not to be shown again      if (res == "true") {        //place the images in the right spot        let rightFirst = parseInt($("div.first").css("left"));        rightFirst += 700;        $("div.first").css("left", rightFirst);        let rightSecond = parseInt($("div.second").css("right"));        rightSecond += 700;        $("div.second").css("right", rightSecond);        //add links        $("#cafe").add("#cafe-text").wrapAll("<a href='page2.html'></a>");        $("#cake").add("#cake-text").wrapAll('<a href="page1.html"></a>');        //add transformation to the images        $("div.img").on({          mouseenter: function() {            $(this).css("transform", "scale(1.1, 1.1)");          },          mouseleave: function() {            $(this).css("transform", "scale(1, 1)");          }        });      } else {								//animate the company name         var $name = $('#company-name');        var $wordList = $('#company-name').text().split("");        let noOfLetters = $wordList.length;        $('#company-name').text("");        $.each($wordList, function(idx, elem) {          var newEL = $("<span/>").text(elem).css({            "opacity": "0",            "font-family": "paganini, serif",            "font-style": "normal",            "font-weight": "300",            "letter-spacing": "20px"          });          newEL.appendTo($name);          newEL.delay(idx * 100);          newEL.animate({            opacity: 1          }, {            duration: 1100,            complete: function() {              if (idx == noOfLetters - 15)              	//start to move the images after the last letter is animated                moveImages();            }          });        });      }    } else {      document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";    }  });		/**	* Animate the images 	*/  function moveImages() {    $("div.first")      .animate({        "left": "+=736"      }, 2500)      .animate({        "left": "-=36"      }, {        duration: 2000,        complete: function() {          $("#cafe").add("#cafe-text").wrapAll("<a href='page2.html'></a>");          $("#cake").add("#cake-text").wrapAll('<a href="page1.html"></a>');          $("div.img").on({            mouseenter: function() {              $(this).css("transform", "scale(1.1, 1.1)");            },            mouseleave: function() {              $(this).css("transform", "scale(1, 1)");            }          });        }      });    $("div.second")      .animate({        "right": "+=736"      }, 2500)      .animate({        "right": "-=36"      }, 2000)    }});