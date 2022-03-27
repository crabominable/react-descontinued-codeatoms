/*$("#left-artist-arrow").click(function() {

});

$("#right-artist-arrow").click(function() {
    
});*/

$("#left-dev-arrow").click(function() {
    $("#redux").fadeOut("fast");
    $("#jquery").fadeOut("fast");
    $("#node").fadeOut("fast");
    $("#lua").fadeOut("fast", function() {
        $("#html").fadeIn("fast");
        $("#css").fadeIn("fast");
        $("#js").fadeIn("fast");
        $("#react").fadeIn("fast");
    });
});

$("#right-dev-arrow").click(function() {
    $("#html").fadeOut("fast");
    $("#css").fadeOut("fast");
    $("#js").fadeOut("fast");
    $("#react").fadeOut("fast", function() {
        $("#redux").fadeIn("fast");
        $("#jquery").fadeIn("fast");
        $("#node").fadeIn("fast");
        $("#lua").fadeIn("fast");
    });
});

function slide1(){
  $('#img-hero').css("background-image", "url(./src/imagens/Bannerhome.png)");
  setTimeout(function(){
    slide2();
  }, 10000);
}

function slide2(){
  $('#img-hero').css("background-image", "url(./src/imagens/Bannerhome2.png)");
  setTimeout(function(){
    slide1();
  }, 10000);
}

$(document).ready(function() {
  setTimeout(function(){
    slide2();
  }, 10000);
})

$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 120) {
      $('#fade-content-container').css({opacity: "1", transition: "1s"});
    }
    var x = $(this).scrollTop();
    if (x > 840) {
      $('#fade-content-container-how-section').css({opacity: "1", transition: "1s"});
    }
    var z = $(this).scrollTop();
    if (z > 2300) {
      $('#fade-info-text-container').css({opacity: "1", transition: "1s"});
    }
    var v = $(this).scrollTop();
    if (v > 2550) {
      $('#fade-info-data-container').css({opacity: "1", transition: "1s"});
    }
  });

/*$("#fade-content-container").on('scroll',function(){
    $("#fade-content-container").css({opacity:"1"});
 });*/