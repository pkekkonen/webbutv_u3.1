/*ArrayBooleanDateMathNumberStringRegExpglobalThis*///skriv in event, räkna ut om hur många dagar det är//efter klockan 19 blir det automatiskt night shift //man får välja vilken form man har och längd etc  så räknar den ut arean eller radien// // var val = document.getElementById("radio").value;// var val = document.getElementById("figure").value;// document.write( ' <h3>' + "ejkeewkje"  + ' </ h3>');// // alert("jhhdshjdh");// confirm("confirm");// var name = prompt("enter your name:" );// // // while(!(document.getElementById("figure").checked)) {// //if(val == "circle") {// 	alert("Hej");// 	document.write( ' <h3>' + document.getElementById("figure").value;  + ' </ h3>');// }// // // var myWindow;// //   myWindow = window.open("", "myWindow", "width=200,height=100");//   myWindow.document.write("<p>This is 'myWindow'</p>");// // //  myWindow.close();$(document).ready(function(){	$("#done-btn").click(function(){		var figure = $('#figure').find(":selected").text(); 		$("#s1").children("#row").each(function() {// 			alert($(this).find("#figure").find(":selected").text());			var res=0;			switch($(this).find("#figure").find(":selected").text()) {				case "Cirkel":					res = Math.pow($(this).parent().find("input").val(), 2)*Math.PI;					break;				case "Kvadrat":				  break;				default:			}			alert(res);		//	$(this).parent().append('<p>'+res+"</p>");		});	});		$("#add-btn").click(function(){		$( "#s1" ).append('<div id="row"> <label for="figure">Figur:</label><select id="figure"><option value="" disabled selected>Välj figur</option><option value="circle">Cirkel</option><option value="square">Kvadrat</option></select><button type="button" id="delete-btn">Ta bort</button>');	});	$("#s1").on('click', '#delete-btn', function() {    	$(this).closest('div').remove();    });    	$("#s1").on('change', '#figure', function() {		var selected = $(this).find(":selected").text();		$(this).siblings("#input").each(function() {			 $( this ).remove();		});		switch(selected) {			case "Cirkel":  				$(this).parent().append('<label id="input" for="radius">Radie:</label><input type="number" min="0" id="input" name="radius">');			  	break;			case "Kvadrat":  				$(this).parent().append('<label id="input" for="side-a">Sida A:</label><input type="number" min="0" id="input" name="side-a"><label id="input" for="side-b">Sida B:</label><input type="number" min="0" id="input" name="side-b">');			  break;			default:			  // code block		}    });    });