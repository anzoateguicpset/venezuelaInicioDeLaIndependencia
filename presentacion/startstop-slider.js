// SET THIS VARIABLE FOR DELAY, 1000 = 1 SECOND
var delayLength = 10000;
	
function doMove(panelWidth, tooFar) {
	var leftValue = $("#mover").css("left");
	
	// Fix for IE
	if (leftValue == "auto") { leftValue = 0; };
	
	var movement = parseFloat(leftValue, 10) - panelWidth;
	
	if (movement == tooFar) {
		$(".slide img").animate({
			"top": -270
		}, function() {
			$("#mover").animate({
				"left": 0
			}, function() {
				$(".slide img").animate({
					"top": 134
				});
			});
		});
	}
	else {
		$(".slide img").animate({
			"top": -270
		}, function() {
			$("#mover").animate({
				"left": movement
			}, function() {
				$(".slide img").animate({
					"top": 134
				});
			});
		});
	}
}

$(function(){
	
    var $slide1 = $("#slide-1");

	var panelWidth = $slide1.css("width");
	var panelPaddingLeft = $slide1.css("paddingLeft");
	var panelPaddingRight = $slide1.css("paddingRight");

	panelWidth = parseFloat(panelWidth, 10);
	panelPaddingLeft = parseFloat(panelPaddingLeft, 10);
	panelPaddingRight = parseFloat(panelPaddingRight, 10);

	panelWidth = panelWidth + panelPaddingLeft + panelPaddingRight;
	
	var numPanels = $(".slide").length;
	var tooFar = -(panelWidth * numPanels);
	var totalMoverwidth = numPanels * panelWidth;
	$("#mover").css("width", totalMoverwidth);

	$("#slider").append('<b><a href="#" id="slider-stopper">Detener</a></b>');

	sliderIntervalID = setInterval(function(){
		doMove(panelWidth, tooFar);
	}, delayLength);
	
	$("#slider-stopper").click(function(){
		if ($(this).text() == "Detener") {
			clearInterval(sliderIntervalID);
		 	$(this).text("Avanzar");
		}
		else {
			sliderIntervalID = setInterval(function(){
				doMove(panelWidth, tooFar);
			}, delayLength);
		 	$(this).text("Detener");
		}
		 
	});

});
