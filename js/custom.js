$(document).ready(function(){

	$("#slidePage").animate({
		right:"-=1300px",
	}, 5000);


   $("#EraserDiv").click( function(){

      $("#EraserDiv").fadeOut(3000);

	});

   var isLightOn = true;

		$("#lightSwitch").click(function(){
			flipTheLightSwitch();
		});

    function flipTheLightSwitch(){

		if(isLightOn){

			$("#lightSwitch").val("Change");

			$("body").css("background", "green");

			//$("#revealDiv").last().addClass("yellow");
			//this didnt work.


			isLightOn = false;
		} else{

			$("body").css("background", "grey");

			$("#lightSwitch").val("Change");
			
			
			isLightOn = true;
		}
	}

	$("#scrollRight").animate({
		right:"-=280px",
	}, 5000);	
//the scrollRight div should land right behind revealDiv
});