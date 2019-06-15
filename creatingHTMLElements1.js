

var newHeading = document.createElement("h2");
newHeading.innerHTML = "Learning the relationship between DOM API document object nodes and HTML elements are fun to watch my JavaScript language coding transfomations onto the HTML webpage.";
document.getElementById("p1").append(newHeading);


var newText = document.createTextNode("Hi, I'm new here");
document.getElementById("p2").append(newText);

var originalList= document.getElementById("myList2").lastChild;
var newItem = originalList.cloneNode(true);
document.getElementById("myList1").appendChild(newItem);
