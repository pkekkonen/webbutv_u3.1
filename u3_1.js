/*ArrayBooleanDateMathNumberStringRegExpglobalThis*///skriv in event, räkna ut om hur många dagar det är//efter klockan 19 blir det automatiskt night shift //man får välja vilken form man har och längd etc  så räknar den ut arean eller radien// // var val = document.getElementById("radio").value;// var val = document.getElementById("figure").value;// document.write( ' <h3>' + "ejkeewkje"  + ' </ h3>');// // alert("jhhdshjdh");// confirm("confirm");// var name = prompt("enter your name:" );// // // while(!(document.getElementById("figure").checked)) {// //if(val == "circle") {// 	alert("Hej");// 	document.write( ' <h3>' + document.getElementById("figure").value;  + ' </ h3>');// }// // // var myWindow;// //   myWindow = window.open("", "myWindow", "width=200,height=100");//   myWindow.document.write("<p>This is 'myWindow'</p>");// // //  myWindow.close();//TODO: timeOut is used once, and setInterval goes on for ever// TODO: use prompt var maxNoOfRows = 5;$(document).ready(function(){	var noOfRows = 1;	var results = "";		$("#done-btn").click(function(){		results = "";		var figure = $('#figure').find(":selected").text();		$("#add-btn").attr("disabled",false); //TODO: check if input is valid?? 		$("#s1").children("#row").each(function() {// 			alert($(this).find("#figure").find(":selected").text());			var res=0;			switch($(this).find("#figure").find(":selected").text()) {				case "Cirkel":					var radius = $(this).find('input[name ="radius"]').val();					//TODO: fråga om enhet					results = results +"Cirkel med radie "+radius +"cm: ";					res = (isNaN(radius)||radius<0)? "Invalid input." : Math.pow(radius, 2)*Math.PI;					results = results+ res+"cm^2.\n";					break;				case "Kvadrat":					var sideA = $(this).find('input[name ="side-a"]').val();					var sideB = $(this).find('input[name ="side-b"]').val();					results = results+"Kvadrat med sida "+sideA+ "cm och sida "+sideB+"cm:";					res = (isNaN(sideA)||isNaN(sideB)||sideA<0||sideB<0)? "Invalid input.":sideA*sideB;					results = results+ res+"cm^2.\n";				  break;				default:			}			$(this).children("#res").each(function() {				$(this).remove();			});			$(this).append('<span id="res">'+res+'</span>');		});	});		$("#add-btn").click(addRow);		function addRow() {		if(noOfRows +1 <= maxNoOfRows) {			$( "#s1" ).append('<span id="row"></br><label for="figure">Figur:</label><select id="figure"><option value="" disabled selected>Välj figur</option><option value="circle">Cirkel</option><option value="square">Kvadrat</option></select><button type="button" id="delete-btn">Ta bort</button></span>');			noOfRows++;	//	$("button#delete-btn").css({"float": "right", "margin-right": "200", "position": "absolute"});		}		if(noOfRows == maxNoOfRows)			$("#add-btn").attr("disabled",true);	}	$("#s1").on('click', '#delete-btn', function() {// 	    $(this).find('br').remove();		$(this).parent().remove();		noOfRows--;		$("#add-btn").attr("disabled",false);//  	$(this).closest('span').remove();//     	$(this).parent().find('</br>').remove();    });    	$("#s1").on('change', '#figure', function() {		var selected = $(this).find(":selected").text();		$(this).siblings("#input").each(function() {			 $( this ).remove();		});		switch(selected) {			case "Cirkel":  				$(this).parent().append('<label id="input" for="radius">Radie:</label><input type="number" min="0" id="input" name="radius" class="input">');			  	break;			case "Kvadrat":  				$(this).parent().append('<label id="input" for="side-a">Sida A:</label><input type="number" min="0" id="input" name="side-a" class="input"><label id="input" for="side-b">Sida B:</label><input type="number" min="0" id="input" name="side-b" class="input">');			  break;			default:			  // code block		}    });    	$("form").submit(function(){	  alert("Tack för din feedback!");	});		$(document).keydown(function(event) {      	var key = (event.keyCode ? event.keyCode : event.which);      	if (key == '27')         	pressedEsc();          	}); 		function pressedEsc() {		var answer = confirm("Vill du verkligen radera allt?");  		if (answer) {    		$("#s1 span").remove();	       	 	noOfRows = 0;        	addRow();  		} 		}		//make available when pressed done btn	$("#open-btn").click(function() {  		myWindow = window.open("", "myWindow", "width=200,height=100");  		myWindow.document.write("<pre><p>"+results+"</p></pre><button onclick='self.close()'>Gå tillbaka</button>");    });    	$( "h1" ).hover(  		function() {    		$( this ).css({"font-family": "paganini, serif","font-style": "normal","font-weight": "300","letter-spacing": "5px"});  		},   		function() {    		$( this ).css({"font-family": "paganini, serif","font-style": "normal","font-weight": "300","letter-spacing": "3px"});  		}	);});