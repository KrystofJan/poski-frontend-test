let showing = false;

function showMenu(){
    showing = !showing;
    if (showing === true){
        document.getElementById("hidden-menu").style.display = "flex";
        document.getElementById("socials-menu").style.display = "none";
    }
    else{
        document.getElementById("hidden-menu").style.display = "none";
        document.getElementById("socials-menu").style.display = "flex";
    }
}