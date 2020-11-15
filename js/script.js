window.addEventListener("scroll",function(){
var nav = document.getElementById("navBar");
var ham = document.getElementById("hamMenu");
// var top = document.getElementById("goToTop");
nav.classList.toggle("sticky",window.scrollY>0);
ham.classList.toggle("hide",window.scrollY==0);
if(window.scrollY==0){
    // $(".hide").hide();
    // if ($(window).width() <= 400){
    //   $("#logo_ph").hide();
    // }
    $(".btn-dange").hide();
  }
else{
  // if ($(window).width() <= 400){
  //   $("#logo_ph").show();
  // }
    $(".btn-dange").show();
    // $(".hide").show();
}
$(".toShow").show();
});
