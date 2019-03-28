/*
 * Botton change
 */
var abajo = "images//abajo.png";
var derecha = "images//derecha.png";
var today = new Date();
var months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
var days = ["SUNDAY", "MONDAY", "TUESDEY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];

main();

function main(){
	remaining();
	loadCalendar();
	var btnDelete = document.querySelectorAll(".delete");
	for(var i = 0; i < btnDelete.length; i++){
		btnDelete[i].addEventListener("click", removeEmail);
	}
}

$(document).ready(
	function(){
		
		$(".date > img").click(function(){
			if($(this).attr("src") === abajo){
				$(this).attr("src", derecha);
				$(this).parent().parent().siblings().hide()
			} else{
				$(this).attr("src", abajo);
				$(this).parent().parent().siblings().show()
			}
		});
	}
);

/*
 * Delete
 */
function removeEmail(){
	document.querySelector(".email[meta-email='" + this.getAttribute("meta-email") + "']").remove();
	
	remaining();
}

function remaining(){
	var msn = document.querySelectorAll(".delete").length;
	document.querySelector("#remain").innerText = msn;
}

/*
 * Calendar
 */
function loadCalendar(){
	document.querySelector("#date").innerText = today.getDate() + " / " + months[today.getMonth()] + " / " + days[today.getDay() - 1] ;
}
