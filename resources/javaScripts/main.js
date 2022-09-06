// Coded by Jeremaquai

// Create variables
const menuButton = document.getElementById('menu');
const menuOpenButton = document.getElementById('menu-open');
const menuList = document.getElementById('menu-list');



// Hide elements

menuOpenButton.hidden = true;
menuList.hidden = true;



// on click Functions

menuButton.onclick = function() {
    menuButton.hidden = true;
    menuOpenButton.hidden = false;
    menuList.hidden = false;
}

menuOpenButton.onclick = function() {
    menuOpenButton.hidden = true;
    menuList.hidden = true;
    menuButton.hidden = false;
}

