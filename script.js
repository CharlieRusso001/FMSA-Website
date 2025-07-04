function loadingerror(fallbackid, imgid) {
    document.getElementById(imgid).style.display = 'none'; 
    document.getElementById(fallbackid).style.display='block'; 
} 

function scrollup() {
    window.scrollTo({
        top: 0, 
        behavior: "smooth"
    }); 
} 

function navbarbuttonclick(id) {
    const navbar = document.getElementById("nav-link"); 

    const buttons = navbar.getElementsByTagName("button"); 

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.textDecoration = "none"; 
    }

    document.getElementById(id).style.textDecoration = "underline"; 
}