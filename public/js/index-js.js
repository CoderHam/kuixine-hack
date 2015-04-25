/*----------------------Page Script--------------------------*/
var windowHeight = $(window).height();
var windowWidth = $(window).width();
var currentSlide = 1;
var timeID;

function nextSlide () {
    if(currentSlide>0 && currentSlide<5) {
        var n = currentSlide;
        var currClassID = "slide"+n;
        var nextClassID = "slide"+(n+1);
        $("."+currClassID).css({transitionDuration: "2s", transitionTimingFunction: "ease-out", top: "-"+windowHeight+"px" });
        $("."+nextClassID).css({top: "0px" });
        currentSlide++;
        clearTimeout(timeID);
        timeID = setTimeout(function() {
            $("."+nextClassID+" .text").css({opacity: "1", bottom: "50px"});
        }, 1000);
    } else if(currentSlide==5) {
        $(".carousel").fadeOut(1500);
    }
}

function init () {
    $(".carousel").height(windowHeight);
    $(".slide").height(windowHeight);
    $(".slide1").css("top", "0px");
    $(".slide2, .slide3, .slide4, .slide5").css("top", windowHeight+"px");
    $(".carousel-btn").click(function () {
        nextSlide();
    });
}

$(document).ready(function () {
    if(windowWidth<767 || sessionStorage.getItem("converge")) {
        new QueryLoader2(document.querySelector("body"), {
            fadeOutTime: 1000,
            minimumTime: 100,
            maxTime: 30000,
            percentage: true,
            onComplete: function () {}
        });
    } else {
        $("#dynamicCarousel").load("dynamic-carousel.html", function() {
            new QueryLoader2(document.querySelector("body"), {
                fadeOutTime: 1000,
                minimumTime: 100,
                maxTime: 30000,
                percentage: true,
                onComplete: function () {
                    $(".slide1 .text").css({opacity: "1", bottom: "50px"});
                }
            });
            sessionStorage.setItem("converge", "true");
            init();
        });
    }
    $("#oCarousel").owlCarousel({
        singleItem: true,
        autoPlay: true,
        pagination: true,
        addClassActive: true
    });
});
/*-----------------------------------------------------------*/