/* Create variable to get the <ul> element from HTML page in order to insert a new node (itemMove). */
var unorderedList1 = document.getElementById("list1");

/* Create variable to get the <ul> element from HTML page in order to insert a new node (listitems). */
var unorderedList2 = document.getElementById("list2");


/* Create variable to move the fifth (5th) list element or the fourth (index 4) element from the first (1st)
   unordered list and append the fourth (index 4) element to the second (2nd) unordered list in the last row. */
var itemMove = unorderedList1.children[4];
unorderedList2.appendChild(itemMove);

/* Create variable to get a collection of the second (2nd) unordered element's children. */
var listitems = unorderedList2.children;

/* And, insert the fourth (index 4) element before the first (index 1) element in the second (2nd)
   unordered list. */
unorderedList2.insertBefore(itemMove, listitems[0]);