function loadingerror(fallbackid, imgid) {
    document.getElementById(imgid).style.display = 'none'; 
    document.getElementById(fallbackid).style.display='block'; 
} 

function scrollup() {
    console.log("scrooll"); 
    window.scrollTo({
        top: 0, 
        behavior: "smooth"
    }); 
}