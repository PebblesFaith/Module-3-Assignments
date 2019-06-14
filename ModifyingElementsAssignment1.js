/*Create a variable list to store the ("ul") document object elememt.*/
var list = document.getElementsByTagName("ul")[0];
/* After, you have create the variable list name then return the value to the HTML list */
list.innerHTML += "<li>Starfruits</li>";

/*Create a variable list1 to store the ("span") document object element for deleting "bad" word from the 
  paragraph (p) HTML webpage.*/
var list1 = document.getElementsByTagName("span")[0];
/* After, you have create the variable list1 name will remove the "bad" word from the ("span") document
   object element to the HTML webpage.*/
list1.removeChild(list1.childNodes[0]);

/*Create a variable list2 to store the ("span") document object element to add "good" word to the paragraph (p)
  HTML webpage.*/
var list2 = document.getElementsByTagName("span")[0];
/* After, you have create the variable list2 name will add the "good" word from the ("span") document
   object element to the HTML webpage.*/
list2.innerHTML += "good";

var day = document.getElementById("day");