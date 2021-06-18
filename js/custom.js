//Scroll animation
window.addEventListener("load", function (){

    //Page loader animation
    document.querySelector(".page-loader").classList.add("fade-out");
    setTimeout(function (){
        document.querySelector(".page-loader").style.display = "none";
    },1000)

    AOS.init();
})

//Toggle navbar
const navToggle = document.querySelector(".nav-toggler");
navToggle.addEventListener("click", toggleNav);

function toggleNav(){
    navToggle.classList.toggle("active");
    document.querySelector(".nav").classList.toggle("open");
}

//Close menu when clicking on a nav item
document.addEventListener("click",function (e){
    if(e.target.closest(".nav-item")){
        toggleNav();
    }
});

//Sticky header
window.addEventListener("scroll", function (){
    if(this.pageYOffset > 60){
        document.querySelector(".header").classList.add("sticky");
    } else{
        document.querySelector(".header").classList.remove("sticky");
    }
});

//Menu tabs
const menuTabs = document.querySelector(".menu-tabs");
menuTabs.addEventListener("click", function (e){
  if(e.target.classList.contains("menu-tab-item") && !e.target.classList.contains("active")){
      const target = e.target.getAttribute("data-target");
      //console.log(target);
      menuTabs.querySelector(".active").classList.remove("active");
      e.target.classList.add("active");
      const menuSection = document.querySelector(".menu-section");
      menuSection.querySelector(".menu-tab-content.active").classList.remove("active");
      menuSection.querySelector(target).classList.add("active");

      //Animation on scroll
      AOS.init();
  }
})