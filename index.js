const menuIcon=document.getElementById("menu-icon")
var lastScrollTop = 0;
var navbar = document.getElementById("navbar");
menuIcon.addEventListener("click", ()=>{
    navbar.classList.toggle("navbar")
    
})

var delta = 5;
var navbarHeight = navbar.offsetHeight;

window.addEventListener("scroll", function() {
  var currentScroll = window.pageYOffset;

  if (Math.abs(lastScrollTop - currentScroll) <= delta)
    return;

  if (currentScroll > lastScrollTop && currentScroll > navbarHeight) {
    navbar.classList.remove("active");
  } else {
    navbar.classList.add("active");
  }

  lastScrollTop = currentScroll;
});
