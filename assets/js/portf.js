$(document).ready(function() {
    $(".outlineMe").fadeIn(2300);
	$(".outlineMe").animate({
        left: '0px', // how far you want to move to the left
        opacity: '0.80', // how much you want to blend
    });

});

$("#aboutMe").hover(function() {
	$("#aboutMe .circleIconContainer").animate({
		height: "250px",
		width: "250px",
		paddingBottom: "30px",
	});
	
	$("#aboutMe .hoverFX").animate({
		opacity: "0.45",
	});
	
	$("#aboutMe .circleIcon").animate({
		height: "250px",
		width: "250px",
			
	});
	
	$("#aboutMe .aboutMeTXT").animate({
		opacity: "1",
	});

	}, function() {
		$("#aboutMe .circleIconContainer").animate({
		height: "350px",
		width: "350px",
		paddingBottom: "0px",
	});
	
	$("#aboutMe .hoverFX").animate({
		opacity: "0",
	});
	
	$("#aboutMe .circleIcon").animate({
		height: "350px",
		width: "350px",
	});
	
	$("#aboutMe .aboutMeTXT").animate({
		opacity: "0",
	});
	
});

$("#projects").hover(function() {
	$("#projects .circleIconContainer").animate({
		height: "275px",
		width: "275px",
		paddingTop: "3px",
	});
	
	$("#projects .hoverFX").animate({
		opacity: "0.45",
	});
	
	$("#projects .circleIcon").animate({
		height: "275px",
		width: "275px",
			
	});
	
	$("#projects .projectTXT").animate({
		opacity: "1",
	});


	}, function() {
		$("#projects .circleIconContainer").animate({
		height: "350px",
		width: "350px",
		paddingTop: "0px",
	});
	
	$("#projects .hoverFX").animate({
		opacity: "0",
	});
	
	$("#projects .circleIcon").animate({
		height: "350px",
		width: "350px",
	});

	$("#projects .projectTXT").animate({
		opacity: "0",
	});
});

$("#coursework").hover(function() {
	$("#coursework .circleIconContainer").animate({
		height: "270px",
		width: "270px",
	});
	
	$("#coursework .hoverFX").animate({
		opacity: "0.35",
	});
	
	$("#coursework .circleIcon").animate({
		height: "270px",
		width: "270px",
			
	});
	
	$("#coursework .courseworkTXT").animate({
		opacity: "1",
	});

	}, function() {
		$("#coursework .circleIconContainer").animate({
		height: "350px",
		width: "350px",
	});
	
	$("#coursework .hoverFX").animate({
		opacity: "0",
	});
	
	$("#coursework .circleIcon").animate({
		height: "350px",
		width: "350px",
	});
	
	$("#coursework .courseworkTXT").animate({
		opacity: "0",
	});

});