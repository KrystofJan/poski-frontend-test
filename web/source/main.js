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
    // const date = document.getElementsByClassName("date");
    const getDesc = element.firstElementChild.innerText.split("\n");
   
    element_title = getDesc[1];
    date = getDesc[2];
    read_length = getDesc[2].split(' / ')
    read_length_date = read_length[0]
    read_length_length = read_length[1]


    let height_sum = 0;
    for (let i = 0; i < articles.length; i++) {
        height_sum += articles[i].offsetHeight;
    }
    
    let desc_length = 0;
    for (let i = 0; i < document.getElementsByClassName("date").length; i++) {
        desc_length+=parseInt(document.getElementsByClassName("date")[i].innerHTML.split(" / ")[1].split(" ")[0])
    }
    let desc_2 = 0;
    for (let i = 0; i < description.length; i++) {
        desc_2+=description[i].innerHTML.length;
    }
    console.log("Počet příspěvků: " + articles.length);
    console.log("Průměrná výška příspěvků: " + height_sum/articles.length);
    // MAYBE ?
    console.log("Součet délek nadpisů příspěvků (prvni delka charakteru, pak delka minut): " + desc_2 +", "+desc_length);
    console.log("název; datum; délku: " +element_title + "; " + read_length_date + "; " + read_length_length);
    
    document.getElementById("loading-screen").style.display = "flex";
    setTimeout(() => {document.getElementById("loading-screen").style.display = "none";}, 1000);
    
}
