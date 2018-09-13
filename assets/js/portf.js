$(document).ready(function() {
    $(".outlineMe").fadeIn(2300);
	$(".outlineMe").animate({
        left: '0px', // how far you want to move to the left
        opacity: '0.80', // how much you want to blend
    });

});

$("#blueIconContainer").hover(function() {
	$("#blueCircleIcon").animate({
		height: "200px",
		width: "200px",
		
	});}, function() {
		$("#blueCircleIcon").animate({
		height: "350px",
		width: "350px",
		});
	});