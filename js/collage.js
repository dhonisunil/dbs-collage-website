// aside open and close
function navbarcontrol () {
const sidebar = document.querySelector(".side-bar");

const aside = document.querySelector(".aside-container");

const closebar = document.querySelector(".aside-x-bar");

const openaside = () => {
    
    aside.classList.add("show-aside");
};
const opennav = () => {
    aside.classList.remove("show-aside");
}
sidebar.addEventListener("click",openaside);

closebar.addEventListener("click",opennav);
};
navbarcontrol ();
// aside open and close

// sticky nav strat

function stickynavcode () {
    const navbarsticky = document.querySelector(".main-nav");

window.addEventListener("scroll", function sticky () {
 const scrollnumber = window.scrollY;
 const responsive = window.innerWidth >= 992 ? 100 :80 ;
 if (scrollnumber >= responsive){
    navbarsticky.classList.add("sticky-nav");
 }
 else {
    navbarsticky.classList.remove("sticky-nav");
 }
});
};
stickynavcode ();
// sticky nav end