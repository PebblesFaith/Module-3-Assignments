
var list = document.getElementsByTagName("ul")[0];
list.innerHTML += "<li>garlic</li>";



var list1 = document.getElementsByTagName("span")[0];
list1.removeChild(list1.childNodes[0]);

var list2 = document.getElementsByTagName("span")[0];
list2.innerHTML += "good";


var day = document.getElementById("day");