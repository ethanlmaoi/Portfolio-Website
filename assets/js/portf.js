
var btnShrunk = false; // becomes true when they shrink and go to the side


// animate into phone
$("#cambrio_icon").click(function() {
	$("#cambrio_container").addClass("rotate");
	$("#cambrio_icon").animate({
		opacity: "0"
	});
});

$(window).scroll(function() {
	var $height = $(window).scrollTop();
  	if ($height > 600) {
	}
});

$(document).ready(function() {
    $(".outlineMe").fadeIn(2300);
	
	$(".outlineMe").animate({
        left: '46px', // how far you want to move to the left
        opacity: '1.0', // how much you want to blend
    });
	
	$("#aboutMe").delay(2300).animate({
		marginLeft: "25%",
		opacity: "1",
    }, 1500);
	
	$("#projects").delay(2300).animate({
		marginLeft: "38%",
		opacity: "1",
    }, 1500);
	
	$("#coursework").delay(2300).animate({
		marginLeft: "51%",
		opacity: "1",
    }, 1500);
	
	$("#work").delay(2300).animate({
		marginLeft: "64%",
		opacity: "1",
    }, 1500);
	
	$("#skills").delay(2300).animate({
		marginLeft: "77%",
		opacity: "1",
    }, 1500);

});

function collapseBtns()
{
	
	$("#aboutMe").css("position","fixed");
	$("#projects").css("position","fixed");
	$("#coursework").css("position","fixed");
	$("#work").css("position","fixed");
	$("#skills").css("position","fixed");
	
	$("#aboutMe").animate({
		marginLeft: "0",
    	bottom: "800",
    	right: "0",
		height: "150px",
    	width: "200px",
	});
	$("#projects").animate({
		marginLeft: "0",
    	bottom: "700",
    	right: "0",
		height: "150px",
    	width: "200px",
	});
	$("#coursework").animate({
		marginLeft: "0",
    	bottom: "600",
    	right: "0",
		marginBottom: "0",
		height: "150px",
    	width: "200px",
	});
	$("#work").animate({
		marginLeft: "0",
    	bottom: "500",
    	right: "0",
		marginBottom: "0",
		height: "150px",
    	width: "200px",
	});
	$("#skills").animate({
		marginLeft: "0",
    	bottom: "400",
    	right: "0",
		marginBottom: "0",
		height: "150px",
    	width: "200px",
	});
	$("#aboutMe").addClass("shrink");
	$("#projects").addClass("shrink");
	$("#coursework").addClass("shrink");
	$("#work").addClass("shrink");
	$("#skills").addClass("shrink");
}

$("#aboutMe").click(function() {
	if (!btnShrunk) { collapseBtns(); btnShrunk = true;}
	$('html, body').animate({
        scrollTop: $("#aboutMePG").offset().top /*scrolls to the About Me page*/
    }, 900);
});

$("#projects").click(function() {
	if (!btnShrunk) { collapseBtns(); btnShrunk = true;}
	$('html, body').animate({
        scrollTop: $("#projectsPG").offset().top /*scrolls to the About Me page*/
    }, 900);
});

$("#coursework").click(function() {
	if (!btnShrunk) { collapseBtns(); btnShrunk = true;}
	$('html, body').animate({
        scrollTop: $("#courseworkPG").offset().top /*scrolls to the About Me page*/
    }, 900);
});

$("#work").click(function() {
	if (!btnShrunk) { collapseBtns(); btnShrunk = true;}
	$('html, body').animate({
        scrollTop: $("#workPG").offset().top /*scrolls to the About Me page*/
    }, 900);
});

$("#skills").click(function() {
	if (!btnShrunk) { collapseBtns(); btnShrunk = true;}
	$('html, body').animate({
        scrollTop: $("#skillsPG").offset().top /*scrolls to the About Me page*/
    }, 900);
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
		height: "285px",
		width: "285px",
		paddingTop: "3px",
	});
	
	$("#projects .hoverFX").animate({
		opacity: "0.45",
	});
	
	$("#projects .circleIcon").animate({
		height: "285px",
		width: "285px",
			
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
		opacity: "0.27",
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

$("#work").hover(function() {
	$("#work .circleIconContainer").animate({
		height: "280px",
		width: "280px",
	});
	
	$("#work .hoverFX").animate({
		opacity: "0.4",
	});
	
	$("#work .circleIcon").animate({
		height: "280px",
		width: "280px",
			
	});
	
	$("#work .workTXT").animate({
		opacity: "1",
	});

	}, function() {
		$("#work .circleIconContainer").animate({
		height: "350px",
		width: "350px",
	});
	
	$("#work .hoverFX").animate({
		opacity: "0",
	});
	
	$("#work .circleIcon").animate({
		height: "350px",
		width: "350px",
	});
	
	$("#work .workTXT").animate({
		opacity: "0",
	});

});

$("#skills").hover(function() {
	$("#skills .circleIconContainer").animate({
		height: "295px",
		width: "295px",
	});
	
	$("#skills .hoverFX").animate({
		opacity: "0.2",
	});
	
	$("#skills .circleIcon").animate({
		height: "295px",
		width: "295px",
			
	});
	
	$("#skills .skillsTXT").animate({
		opacity: "1",
	});

	}, function() {
		$("#skills .circleIconContainer").animate({
		height: "350px",
		width: "350px",
	});
	
	$("#skills .hoverFX").animate({
		opacity: "0",
	});
	
	$("#skills .circleIcon").animate({
		height: "350px",
		width: "350px",
	});
	
	$("#skills .skillsTXT").animate({
		opacity: "0",
	});

});
