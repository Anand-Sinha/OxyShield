window.addEventListener("scroll",function(){
var nav = document.getElementById("navBar");
var ham = document.getElementById("hamMenu");
// var top = document.getElementById("goToTop");
nav.classList.toggle("sticky",window.scrollY>0);
ham.classList.toggle("hide",window.scrollY==0);
if(window.scrollY==0){
    // $(".hide").hide();

    $(".btn-dange").hide();
  }
else{
    $(".btn-dange").show();
    // $(".hide").show();
}
$(".toShow").show();
});
