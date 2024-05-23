function dialog() {
    let userName = prompt("Your name:");
    if (userName) {
    alert(`Hi, ${userName}! How are you?`);
    let response;
    do {
    response = prompt("How do you feel?");
    if (response === "fine") {
    alert("Nice! Keep going!");
    } else if (response === "bad") {
    alert("Don't worry, it's going to be alright!");
    } else {
    alert("Sorry, i can't understand you. Please try again");
    }
    } while (response !== "fine" && response !== "bad");
    } else {
    alert("Please enter your full name to start a dialog");
    }
    }


    function showInfo(firstName, lastName, position = "Web developer") {
    alert("Surname: " + lastName + "\nName: " + firstName + "\nPosition: " + position);
    }
    
    function compare(){
    let a, b;
    
    do {
    a = prompt("Enter first number:");
    } while(a === null || a.trim() === "" || isNaN(a));
    do {
    b = prompt("Enter second number:");
    } while(b === null || b.trim() === "" || isNaN(b));
    if(a > b) {
    alert(a);
    } else if(a < b) {
    alert(b);
    } else {
    alert("Numbers are equal.");
    }}

    function changeBackground(color){
    document.body.style.backgroundColor = color;
    setTimeout(function() {
    document.body.style.backgroundColor = ""; 
    }, 30000); 
    }
    function redirect() {
    setTimeout(function() {
    location.href = "https://www.yamaha.com/en/";
    }, 1000);
    }
    var element = document.getElementById("example-element");
    element.innerHTML = "<p>Our guitars have a five-year guarantee.</p>";
    var element = document.getElementById ("example1-element") ;
    element.outerHTML = "<div>We have the biggest range of products on the market</div>";
    var textNode = document.createTextNode("<-Press here") ;
    document.body.appendChild(textNode);

    var element = document.getElementById("example2-element");
    element.textContent = "We also have music accessories";
    var newParagraph = document.createElement("p");
    var paragraphText = document.createTextNode("Melody");
    newParagraph.appendChild(paragraphText);
    document.body.appendChild (newParagraph);
    function showDeveloperInfo(lastName, firstName, position = "Developer") {

    let infoString = "Surname: " + lastName + "<br>" +
    "Name: " + firstName + "<br>" +
    "Position: " + position;
    
    let developerInfoElement = document.getElementById("developer-info");

    developerInfoElement.innerHTML = infoString;
    }
    showDeveloperInfo("Yatsenko", "Lilia ");