

function accessingDOM () {
    var headings = document.getElementsByClassName('h1');
    document.getElementsByClassName('h1') = headings[0].innerHTML;

}

/*function accessingDOM1 () {
    var headings = document.querySelectorAll('.h1');
    document.querySelectorAll('.h1') = headings[0].innerHTML;

}
*/
