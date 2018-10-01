
var money = 0;
var ticketsGiven = 0;
var peopleArrested = 0;
var crimeRate = 0.0;
var tickRate = 500;

var cuffsUnlocked = false;
var battonsUnlocked = false;
var tasersUnlocked = false;
var gunsUnlocked = false;
var carsUnlocked = false;
var workersUnlocked = false;
var evidenceLocker = false;
var jailUnlocked = false;
var helicopterUnlocked = false;
var tankUnlocked = false;
var captainUnlocked = false;



function earnMoney(x){
    money += x;
    document.getElementById("money").innerHTML = money;
};

//////////////////////////////////////////////////////
//Ticket Information
var ticketPerArrest = 1;
var ticketIncCost = 1;
var ticketUpgrades = 1;

function ticketSomeone(x){
    earnMoney(x * ticketPerArrest);
    ticketsGiven++;
    checkUpgrades();
};

function increaseTicket(x){
    ticketIncCost = Math.ceil(10 * Math.pow(1.3, ticketUpgrades));
    if(money >= ticketIncCost){
        ticketUpgrades++;
        money -= ticketIncCost;
        ticketPerArrest = ticketUpgrades;
        document.getElementById("ticketEarning").innerHTML = ticketPerArrest;
        document.getElementById("money").innerHTML = money;
    }
    var nextCost = Math.ceil(10 * Math.pow(1.3, ticketUpgrades));
    document.getElementById("ticketPriceCost").innerHTML = nextCost;
};
//////////////////////////////////////////////////////

//////////////////////////////////////////////////////
//Handcuff Information

//////////////////////////////////////////////////////

//////////////////////////////////////////////////////
//Batton Information
function battons(x){

};
//////////////////////////////////////////////////////

//Game Loop

window.setInterval(function(){
   
}, tickRate);

function checkUpgrades(){
    if(peopleArrested >= 10 && !battonsUnlocked){
        showUpgrade("battons");
        battonsUnlocked = true;
    }
    if(peopleArrested >= 25 && !tasersUnlocked){
        showUpgrade("tasers");
        tasersUnlocked = true;
    }
    if(peopleArrested >= 50 && !gunsUnlocked){
        showUpgrade("guns");
        gunsUnlocked = true;
    }
    if(peopleArrested >= 100 && !carsUnlocked){
        showUpgrade("cars");
        carsUnlocked = true;
    }
    if(peopleArrested >= 150 && !workersUnlocked){
        showUpgrade("workers");
        workersUnlocked = true;
    }
}

//Utility functions
function showUpgrade(name){
    var x = document.getElementById(name);
    x.style.display = block;
}