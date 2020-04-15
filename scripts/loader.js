var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("box").style.display = "flex";
}

$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".exp-box").each(function() {
      
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      
      if (objectBottom < windowBottom) { 
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } else { 
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
    });
  }).scroll(); 
});

$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".project-block").each(function() {
      
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      
      
      if (objectBottom < windowBottom) { 
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } else { 
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
    });
  }).scroll(); 
});

$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".contact-box").each(function() {
      
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      
      
      if (objectBottom < windowBottom) { 
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } else { 
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
    });
  }).scroll(); 
});