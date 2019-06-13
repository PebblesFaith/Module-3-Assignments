function myFunction() {
    var c = document.body.children;
    var txt = "";
    var i;
    for (i = 0; i < c.length; i++) {
      txt = txt + c[i].tagName + "<br>";
    }
  
    document.getElementById("demo").innerHTML = txt;
  }