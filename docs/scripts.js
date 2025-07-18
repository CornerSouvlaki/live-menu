// Handles all interactivity of the web page
// Created: 16/07/2025

// smooth transaction for dropdown
function transDrop(dropdown){
    // the class attribute needs to be removes so the animation can
    // play again.
    dropdown.hidden = false;
    dropdown.classList.remove("animate-fade-in");
    void dropdown.offsetWidth;
    dropdown.className = "animate-fade-in";
}

// Salads & Starters
function handleSalads(){
    const saladList = document.getElementById("SaladsList");
    const dropS = document.getElementById("dropSalads");

    if (saladList.hidden === true){
        saladList.hidden = false;
        dropS.hidden = true;
        dropS.srcset = "assets/dropup.svg";
        dropS.src = "assets/dropup.png";
        dropS.alt = "dropup";
        transDrop(dropS);
        // i could have used classList.add for this but i didnt know its
        // existence and i dont want to change it in case it breaks!
        saladList.className = "flex flex-col items-center space-y-20 animate-fade-in-down"
    }else{
        saladList.className = "flex flex-col items-center space-y-20 animate-fade-out-up animate-duration-400"
        setTimeout(() => {
            saladList.hidden = true;
        }, 400);

        dropS.hidden = true;
        dropS.srcset = "assets/dropdown.svg";
        dropS.src = "assets/dropdown.png";
        dropS.alt = "dropdown";
        transDrop(dropS);
    }
}

// Our Dishes
function handleDishes(){
    const dishesList = document.getElementById("DishesList");
    const dropD = document.getElementById("dropDishes");

    if (dishesList.hidden === true){
        dishesList.hidden = false;
        dropD.hidden = true;
        dropD.srcset = "assets/dropup.svg";
        dropD.src = "assets/dropup.png";
        dropD.alt = "dropup";
        transDrop(dropD);
        dishesList.className = "flex flex-col items-center space-y-20 animate-fade-in-down"
    }else{
        // animations
        dishesList.className = "flex flex-col items-center space-y-20 animate-fade-out-up animate-duration-400"
        setTimeout(() => {
            dishesList.hidden = true;
        }, 400);

        dropD.hidden = true;
        dropD.srcset = "assets/dropdown.svg";
        dropD.src = "assets/dropdown.png";
        dropD.alt = "dropdown";
        transDrop(dropD);

    }
}

// Mixed Plates
function handleMixed(){
    const mixedList = document.getElementById("MixedList");
    const dropM =  document.getElementById("dropMixed");

    if (mixedList.hidden === true){
        mixedList.hidden = false;
        dropM.hidden = true;
        dropM.srcset = "assets/dropup.svg";
        dropM.src = "assets/dropup.png";
        dropM.alt = "dropup";
        transDrop(dropM);
        mixedList.className = "flex flex-col items-center space-y-20 animate-fade-in-down"
    }else{
        // animations
        mixedList.className = "flex flex-col items-center space-y-20 animate-fade-out-up animate-duration-400"
        setTimeout(() => {
            mixedList.hidden = true;
            dropM.srcset = "assets/dropdown.svg";
            dropM.src = "assets/dropdown.png";
            dropM.alt = "dropdown";
        }, 400);

        dropM.hidden = true;
        dropM.srcset = "assets/dropdown.svg";
        dropM.src = "assets/dropdown.png";
        dropM.alt = "dropdown";
        transDrop(dropM);
    }
}

// Souvlaki Pita
function handleSouvlaki(){
    const souvlakiList = document.getElementById("SouvlakiList");
    const dropS = document.getElementById("dropSouvlaki");

    if (souvlakiList.hidden === true){
        souvlakiList.hidden = false;
        dropS.hidden = true;
        dropS.srcset = "assets/dropup.svg";
        dropS.src = "assets/dropup.png";
        dropS.alt = "dropup";
        transDrop(dropS);
        souvlakiList.className = "flex flex-col items-center space-y-20 animate-fade-in-down"
    }else{
        // animations
        souvlakiList.className = "flex flex-col items-center space-y-20 animate-fade-out-up animate-duration-400"
        setTimeout(() => {
            souvlakiList.hidden = true;
        }, 400);

        dropS.hidden = true;
        dropS.srcset = "assets/dropdown.svg";
        dropS.src = "assets/dropdown.png";
        dropS.alt = "dropdown";
        transDrop(dropS);
    }
}

// Drinks
function handleDrinks(){
    const drinksList = document.getElementById("DrinksList");
    const dropDr = document.getElementById("dropDrinks");

    if (drinksList.hidden === true){
        drinksList.hidden = false;
        dropDr.hidden = true;
        dropDr.srcset = "assets/dropup.svg";
        dropDr.src = "assets/dropup.png";
        dropDr.alt = "dropup";
        transDrop(dropDr);
        drinksList.className = "flex flex-col items-center space-y-20 animate-fade-in-down"
    }else{
        // animations
        drinksList.className = "flex flex-col items-center space-y-20 animate-fade-out-up animate-duration-400"
        setTimeout(() => {
            drinksList.hidden = true;
            dropDr.srcset = "assets/dropdown.svg";
            dropDr.src = "assets/dropdown.png";
            dropDr.alt = "dropdown";
        }, 400);

        dropDr.hidden = true;
        dropDr.srcset = "assets/dropdown.svg";
        dropDr.src = "assets/dropdown.png";
        dropDr.alt = "dropdown";
        transDrop(dropDr);
    }
}

// handle language changes
function changeLanguage(){
    const bodyID = document.body.id;
    const grButton = document.getElementById("GRbut");
    const engButton = document.getElementById("ENGbut");
    const hGR = document.getElementById("GRh");
    const hENG = document.getElementById("ENGh");

    if (bodyID === "GR"){
        // for GR button
        grButton.classList.add("bg-secondary");
        hGR.classList.remove("text-secondary");
        hGR.classList.add("text-primary");

        // for ENG button
        engButton.classList.remove("bg-secondary");
        hENG.classList.remove("text-primary");
        hENG.classList.add("text-secondary");
    }
    else if (bodyID === "ENG"){
        // for ENG button
        engButton.classList.add("bg-secondary");
        hENG.classList.remove("text-secondary");
        hENG.classList.add("text-primary");

        // for GR button
        grButton.classList.remove("bg-secondary");
        hGR.classList.remove("text-primary");
        hGR.classList.add("text-secondary");
    }
}

// event listeners
const saladButton = document.getElementById("Salads");
saladButton.addEventListener("click",handleSalads);

const dishesButton = document.getElementById("Dishes");
dishesButton.addEventListener("click",handleDishes);

const mixedButton = document.getElementById("Mixed");
mixedButton.addEventListener("click",handleMixed);

const souvlakiButton = document.getElementById("Souvlaki");
souvlakiButton.addEventListener("click",handleSouvlaki);

const drinksButton = document.getElementById("Drinks");
drinksButton.addEventListener("click",handleDrinks);

// call this in an non blocking event loop to handle changes
changeLanguage();

