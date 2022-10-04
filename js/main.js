var UserName = document.querySelector(".user-name")
var TravelCountry = document.querySelector(".travel-country")
var Btn = document.querySelector(".btn-yes")
var Greeting = document.querySelector(".user")
var Result = document.querySelector(".travel")
var BtnDiv = document.querySelector(".buttons")

function traveling (event) {
    var Name = prompt("What is your name?")
    UserName.innerHTML = Name
    if (typeof Name == 'string') {
        var Travel = prompt("Where do you want to travel?")
    TravelCountry.innerHTML = Travel
        var Budget = prompt("What is your budget?")
        if (Budget >= 1500) {
            var LetsGo = alert("Very good! You can travel")
            Greeting.innerHTML = "Now you can travel " + Name + "!"
            Result.innerHTML = Travel + "'s " + "wait you"
            BtnDiv.style.display = "none"
        }
        else {
            alert("Oh no. You can't travel because you dont have enough money.")
            var more = 1500-Budget
            Greeting.innerHTML = "You have " + Budget + "$."
            Result.innerHTML = "You need more " + more + "$"    
            BtnDiv.style.display = "none"   
        }
    }
    else {
        alert("Enter correct name")
    }
}

Btn.addEventListener("click", (evt) => {
    traveling(event)
})