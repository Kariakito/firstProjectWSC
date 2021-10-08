// document.getElementById("myBtn").addEventListener("click", displayDate);

/*
btn.addEventListener("click", ()=>{
    window.location.replace(URL);
});

3 - pick random

const months = ["January", "February", "March", "April", "May", "June", "July"];

const random = Math.floor(Math.random() * months.length);
console.log(random, months[random]);
*/



let veggie;
let meat;
let dessert;

const vegYes = document.getElementById("vegYes");
const vegNo = document.getElementById("vegNo");
const meatYes = document.getElementById("meatYes");
const meatNo = document.getElementById("meatNo");
const desYes = document.getElementById("desYes");
const desNo = document.getElementById("desNo");

const yesColor = "./formIcons/yes_c.png";
const yesBlack = "./formIcons/yes_bw.png";
const noColor = "./formIcons/no_c.png";
const noBlack = "./formIcons/no_bw.png";


vegYes.addEventListener("click", ()=>{
    veggie = true;
    vegYes.src = yesColor;
    vegNo.src = noBlack;
    console.log(`veg: ${veggie}`);
});

vegNo.addEventListener("click", ()=>{
    veggie = false;
    vegYes.src = yesBlack;
    vegNo.src = noColor;
    console.log(`veg: ${veggie}`);
});

meatYes.addEventListener("click", ()=>{
    meat = true;
    meatYes.src = yesColor;
    meatNo.src = noBlack;
    console.log(`meat: ${meat}`);
});

meatNo.addEventListener("click", ()=>{
    meat = false;
    meatYes.src = yesBlack;
    meatNo.src = noColor;
    console.log(`meat: ${meat}`);
});

desYes.addEventListener("click", ()=>{
    dessert = true;
    desYes.src = yesColor;
    desNo.src = noBlack;
    console.log(`dessert: ${dessert}`);
});

desNo.addEventListener("click", ()=>{
    dessert = false;
    desYes.src = yesBlack;
    desNo.src = noColor;
    console.log(`dessert: ${dessert}`);
});

// dessert recepies - objects

const desRecepie1 = {
    recepieName: "Quesillo",
    recepieAddress: "dessertRecepie1.html",
};

const desRecepie2 = {
    recepieName: "Dolce de Lechoza or Papaya",
    recepieAddress: "dessertRecepie2.html",
};

// meat recepies - objects

const meatRecepie1 = {
    recepieName: "Pabellon Criollo",
    recepieAddress: "meatRecepie1.html",
};

const meatRecepie2 = {
    recepieName: "Areapa Reina Pepiada",
    recepieAddress: "meatRecepie2.html",
};

// vegetarian recepies - objects

const vegRecepie1 = {
    recepieName: "Cachapas",
    recepieAddress: "vegRecepie1.html",
};

const vegRecepie2 = {
    recepieName: "Tostones or Patacones",
    recepieAddress: "vegRecepie2.html",
};

// recepie collections - arrays

const vegArray = [vegRecepie1, vegRecepie2];
const meatArray = [meatRecepie1, meatRecepie2];
const desArray = [desRecepie1, desRecepie2];


document.getElementById("submitMenu").addEventListener("click", ()=> {
    
    if(veggie === true){
        console.log("veg recipe");

        // pick random vegetarian recepie

        const random = Math.floor(Math.random() * vegArray.length);
        
        // creat and showcase link to random recepie

        const a = document.createElement('a');
        const linkText = document.createTextNode(vegArray[random].recepieName);

        a.appendChild(linkText);
        a.title = vegArray[random].recepieName;

        console.log(a.title);

        a.href = vegArray[random].recepieAddress;

        console.log(a.href);
        document.getElementById("formOutputDiv").appendChild(a);
    }
    if(meat === true){
        console.log("meat recipe");

        // pick random meat recepie

        const random = Math.floor(Math.random() * meatArray.length);
        
        // creat and showcase link to random recepie

        const a = document.createElement('a');
        const linkText = document.createTextNode(meatArray[random].recepieName);

        a.appendChild(linkText);
        a.title = meatArray[random].recepieName;

        console.log(a.title);

        a.href = meatArray[random].recepieAddress;

        console.log(a.href);
        document.getElementById("formOutputDiv").appendChild(a);
    }
    if(dessert === true){
        console.log("dessert recipe");

        // pick random dessert recepie

        const random = Math.floor(Math.random() * desArray.length);
        
        // creat and showcase link to random recepie

        const a = document.createElement('a');
        const linkText = document.createTextNode(desArray[random].recepieName);

        a.appendChild(linkText);
        a.title = desArray[random].recepieName;

        console.log(a.title);

        a.href = desArray[random].recepieAddress;

        console.log(a.href);
        document.getElementById("formOutputDiv").appendChild(a);
    }
});