function sleep(ms) {  return new Promise(resolve => setTimeout(resolve, ms));}$(document).ready(function() {  if ($("#cake").css("height") > $("#cake").css("width")) {    $("img").css("height", "100%");    $("img").css("width", "auto");  }  $(function() {    if (typeof(Storage) !== "undefined") {      let res = sessionStorage.getItem("visited");      if (res == "true") {        let rightFirst = parseInt($("div.first").css("left"));        rightFirst += 700;        $("div.first").css("left", rightFirst);        let rightSecond = parseInt($("div.second").css("right"));        rightSecond += 700;        $("div.second").css("right", rightSecond);        $("#cafe").add("#cafe-text").wrapAll("<a href='page2.html'></a>");        $("#cake").add("#cake-text").wrapAll('<a href="page1.html"></a>');        $("div.img").on({          mouseenter: function() {            $(this).css("transform", "scale(1.1, 1.1)");          },          mouseleave: function() {            $(this).css("transform", "scale(1, 1)");          }        });      } else {        //get the welcome msg element        var $all_msg = $('#welcome_msg');        //get a list of letters from the welcome text        var $wordList = $('#welcome_msg').text().split("");        let noOfLetters = $wordList.length;        //clear the welcome text msg        $('#welcome_msg').text("");        //loop through the letters in the $wordList array        $.each($wordList, function(idx, elem) {          //create a span for the letter and set opacity to 0          var newEL = $("<span/>").text(elem).css({            "opacity": "0",            "font-family": "paganini, serif",            "font-style": "normal",            "font-weight": "300",            "letter-spacing": "20px"          });          //append it to the welcome message          newEL.appendTo($all_msg);          //set the delay on the animation for this element          newEL.delay(idx * 100);          //animate the opacity back to full 1          newEL.animate({            opacity: 1          }, {            duration: 1100,            complete: function() {              if (idx == noOfLetters - 15)                moveImages();            }          });        });      }    } else {      document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";    }  });  function moveImages() {    $("div.first")      .animate({        "left": "+=736"      }, 2500)      .animate({        "left": "-=36"      }, {        duration: 2000,        complete: function() {          $("#cafe").add("#cafe-text").wrapAll("<a href='page2.html'></a>");          $("#cake").add("#cake-text").wrapAll('<a href="page1.html"></a>');          $("div.img").on({            mouseenter: function() {              $(this).css("transform", "scale(1.1, 1.1)");            },            mouseleave: function() {              $(this).css("transform", "scale(1, 1)");            }          });        }      });    $("div.second")      .animate({        "right": "+=736"      }, 2500)      .animate({        "right": "-=36"      }, 2000)  };});