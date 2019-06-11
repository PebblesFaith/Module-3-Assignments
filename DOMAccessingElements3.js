function myFunction() {
    var x = document.getElementsByTagName("LI");
    document.getElementById("demo").innerHTML = x[2].innerHTML;
}



var arr=document.getElementsByTagName("img");

for(var x=0; x<arr.length; x++) { 
    arr[x].url="('c:/Users/sarai/Documents/Pictures/antonio-grosz-1471591-unsplash.jpg')"; 
}