$(function(){
    $(".id").keypress(function(){
      $(".loginLight").addClass("loginGreen");
    });
    $(".cert-input").keypress(function(){
      $(".cert-btn-right").addClass("cert-btn-right2");
    });
    $(".phone-input").keypress(function(){
      $(".phone-right-btn").addClass("phone-right-btn2");
    });

    $(".allread").click(function(){
      $(".notice-block").addClass("Opacity");
    }); 
  });