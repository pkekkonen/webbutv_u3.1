$(document).ready(function() {	$(function() {	  $('#main-menu').smartmenus();   });	//Stop animations from happening if returning to homepage	if (typeof(Storage) !== "undefined") {	  sessionStorage.setItem("visited", "true");	} else {	  document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";	}});