$(document).ready(function() {
    $(".outlineMe").fadeIn(2300);
	$(".outlineMe").animate({
        left: '0px', // how far you want to move to the left
        opacity: '0.80', // how much you want to blend
    });

});

$("#hoverFXContainer").hover(function() {
	$("#blueCircleIconContainer").animate({
		height: "150px",
		width: "150px",
		paddingTop: "15px",
	});
	
	$("#blueCircleIcon").animate({
		height: "150px",
		width: "150px",
			
	});}, function() {
		$("#blueCircleIconContainer").animate({
		height: "350px",
		width: "350px",
	});
	
	$("#blueCircleIcon").animate({
		height: "350px",
		width: "350px",
	});
});