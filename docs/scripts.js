// Handles all interactivity of the web page
// Created: 16/07/2025

// Salads & Starters
function handleSalads(){
    const saladList = document.getElementById("SaladsList");
    const dropS = document.getElementById("dropSalads");

    if (saladList.hidden === true){
        saladList.hidden = false;
        dropS.srcset = "assets/dropup.svg";
        dropS.src = "assets/dropup.png";
        dropS.alt = "dropup";
    }else{
        saladList.hidden = true;
        dropS.srcset = "assets/dropdown.svg";
        dropS.src = "assets/dropdown.png";
        dropS.alt = "dropdown";
    }
}

// Our Dishes
function handleDishes(){
    const dishesList = document.getElementById("DishesList");
    const dropD = document.getElementById("dropDishes");

    if (dishesList.hidden === true){
        dishesList.hidden = false;
        dropD.srcset = "assets/dropup.svg";
        dropD.src = "assets/dropup.png";
        dropD.alt = "dropup";
    }else{
        dishesList.hidden = true;
        dropD.srcset = "assets/dropdown.svg";
        dropD.src = "assets/dropdown.png";
        dropD.alt = "dropdown";
    }

}

// Mixed Plates
function handleMixed(){
    const mixedList = document.getElementById("MixedList");
    const dropM =  document.getElementById("dropMixed");

    if (mixedList.hidden === true){
        mixedList.hidden = false;
        dropM.srcset = "assets/dropup.svg";
        dropM.src = "assets/dropup.png";
        dropM.alt = "dropup";
    }else{
        mixedList.hidden = true;
        dropM.srcset = "assets/dropdown.svg";
        dropM.src = "assets/dropdown.png";
        dropM.alt = "dropdown";
    }

}

// Souvlaki Pita
function handleSouvlaki(){
    const souvlakiList = document.getElementById("SouvlakiList");
    const dropS = document.getElementById("dropSouvlaki");

    if (souvlakiList.hidden === true){
        souvlakiList.hidden = false;
        dropS.srcset = "assets/dropup.svg";
        dropS.src = "assets/dropup.png";
        dropS.alt = "dropup";
    }else{
        souvlakiList.hidden = true;
        dropS.srcset = "assets/dropdown.svg";
        dropS.src = "assets/dropdown.png";
        dropS.alt = "dropdown";
    }

}

// Drinks
function handleDrinks(){
    const drinksList = document.getElementById("DrinksList");
    const dropDr = document.getElementById("dropDrinks");


    if (drinksList.hidden === true){
        drinksList.hidden = false;
        dropDr.srcset = "assets/dropup.svg";
        dropDr.src = "assets/dropup.png";
        dropDr.alt = "dropup";
    }else{
        drinksList.hidden = true;
        dropDr.srcset = "assets/dropdown.svg";
        dropDr.src = "assets/dropdown.png";
        dropDr.alt = "dropdown";
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
