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

function loading(element){
    const articles = document.getElementsByClassName("article");
    const description = document.getElementsByClassName("description-title");
    const getDesc = element.firstElementChild.innerText.split("\n");
    let element_title = ""
    let date = "No Date"
    if (element.classList.contains("two")){
        element_title = getDesc[0];
    }
    else{
        element_title = getDesc[1];
        date = getDesc[2];
    }

    let height_sum = 0;
    for (let i = 0; i < articles.length; i++) {
        height_sum += articles[i].offsetHeight;
    }
    let desc_length = 0;
    for (let i = 0; i < description.length; i++) {
        desc_length += description[i].innerHTML.length;
    }
    console.log("Počet příspěvků: " + articles.length);
    console.log("Průměrná výška příspěvků: " + height_sum/articles.length);
    console.log("Součet délek nadpisů příspěvků (charakteru v prispevku): " + desc_length);
    console.log("název, datum, délku: " +element_title + ", " + date + ", " + element_title.length);
    
    document.getElementById("loading-screen").style.display = "flex";
    setTimeout(() => {document.getElementById("loading-screen").style.display = "none";}, 1000);
    
}
