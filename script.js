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

let homeupcomingtextstate = false; 
function homeupcomingtext() {
    if (homeupcomingtextstate == false) { //expand 
        document.getElementById("homeupcomingdescription").innerHTML = "Created by our student-led music association, this international playlist blends live performances from young musicians with AI-generated pieces composed using student-written algorithms. Combining music, technology, and therapy, it’s designed to support emotional well-being in hospitals and retirement homes—helping seniors reconnect with memories and find comfort through sound. "; 
        document.getElementById("homeupcomingh3").style.transform = "translateY(-75%)"; 
        document.getElementById("homeupcomingdescription").style.transform = "translateY(-40%)"; 
        document.getElementById("homeupcomingbutton").style.transform = "translate(36%, -600%)"; 
        document.getElementById("homeupcomingbutton").innerHTML = "Show Less"; 
    } else { //shrink 
        document.getElementById("homeupcomingdescription").innerHTML = "Created by our student-led music association, this international playlist blends live performances from young musicians with AI-generated pieces composed using student-written algorithms. Combining music..."; 
        document.getElementById("homeupcomingh3").style.transform = "none"; 
        document.getElementById("homeupcomingdescription").style.transform = "none"; 
        document.getElementById("homeupcomingbutton").style.transform = "none"; 
        document.getElementById("homeupcomingbutton").style.transform = "translate(36%, 0%)"; 
        document.getElementById("homeupcomingbutton").innerHTML = "Show More"; 
    }
    homeupcomingtextstate = !homeupcomingtextstate; 


} 

window.onload = function() {
  emailjs.init("osOerPkbsXjU8BTFC");
}

function homecontactus_sendemail() {
    const templateParams = {
        name: document.getElementById("FirstName").value + " " + document.getElementById("Lastname").value, 
        time: new Date().toLocaleTimeString(), 
        message: document.getElementById("Message").value + "\n\nEmail: " + document.getElementById("Email").value + "\nPhone Number: " + document.getElementById("Phone").value, 
    }; 

    const serviceID = "service_alexon9"; 
    const templateID = "template_kc9rdwd";

    emailjs.send(serviceID, templateID, templateParams).then(function(response) {
        alert("Email sent successfully!"); 
    }, function(error) {
        alert("Failed to send email, please try again. "); 
    }); 

    document.getElementById("FirstName").value = null; 
    document.getElementById("Lastname").value = null; 
    document.getElementById("Email").value = null; 
    document.getElementById("Message").value = null; 
    document.getElementById("Phone").value = null; 

    console.log(templateParams); 
}