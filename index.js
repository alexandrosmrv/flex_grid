$("h1").hover(function(){
    $(this).addClass("infojs");
},function(){
    $(this).removeClass("infojs");
});

$(".firstphoto ,.secondphoto,.thirdphoto,.fourthphoto").hover(function(){
    $(this).addClass("photolarge");
},function(){
    $(this).removeClass("photolarge");
});

$(".fifthphoto ,.sixthphoto,.seventhphoto").hover(function(){
    $(this).addClass("photoRotate");
},function(){
    $(this).removeClass("photoRotate");
});

$(".eighthphoto, .ninhthphoto, .tenthphoto, .eleventhphoto").hover(function(){
    $(this).addClass("borderphotos");
},function(){
    $(this).removeClass("borderphotos");
});

$(".h1paralax").hover(function(){
    $(this).addClass("h1paralaxjs");
},function(){
    $(this).removeClass("h1paralaxjs");
});

$(document).ready(function(){
    $(window).scroll(function() {
        if ($(document).scrollTop() > 3120) {
          $(".gridcontainer").addClass("scrolljs");
        } else {
          $(".gridcontainer").removeClass("scrolljs");
        }
      });
    });

    $(".finalphoto1, .finalphoto2, .finalphoto3, .finalphoto4, .finalphoto5").hover(function(){
        $(this).addClass("finalcontainerjs");
    },function(){
        $(this).removeClass("finalcontainerjs");
    });
