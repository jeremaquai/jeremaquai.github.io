//Coded by Jeremaquai

// Create Variables
const personalProjectsClosed = document.getElementById('closed-personal-projects');
const personalProjectsOpened = document.getElementById('opened-personal-projects');
const codecademyProjectsClosed = document.getElementById('closed-codecademy-projects');
const codecademyProjectsOpened = document.getElementById('opened-codecademy-projects');
const personalProjectsList = document.getElementById('personal-projects');
const codecademyProjectsList = document.getElementById('codecademy-projects');
const jtPageClosed = document.getElementById('jt-page-closed');
const jtPageOpened = document.getElementById('jt-page-opened');
const jtPageInfo = document.getElementById('jt-page-info');
const htmlCheatClosed = document.getElementById('html-cheat-closed');
const htmlCheatOpened = document.getElementById('html-cheat-opened');
const htmlCheatInfo = document.getElementById('html-cheat-info');
const teacozyClosed = document.getElementById('teacozy-closed');
const teacozyOpened = document.getElementById('teacozy-opened');
const teacozyInfo = document.getElementById('teacozy-info');
const excursionClosed = document.getElementById('excursion-closed');
const excursionOpened = document.getElementById('excursion-opened');
const excursionInfo = document.getElementById('excursion-info');
const colmarClosed = document.getElementById('colmar-closed');
const colmarOpened = document.getElementById('colmar-opened');
const colmarInfo = document.getElementById('colmar-info');
const eightballClosed = document.getElementById('eightball-closed');
const eightballOpened = document.getElementById('eightball-opened');
const eightballInfo = document.getElementById('eightball-info');
const mindcraftClosed = document.getElementById('mindcraft-closed');
const mindcraftOpened = document.getElementById('mindcraft-opened');
const mindcraftInfo = document.getElementById('mindcraft-info');
const designSystemClosed = document.getElementById('design-system-closed');
const designSystemOpened = document.getElementById('design-system-opened');
const designSystemInfo = document.getElementById('design-system-info');
const serpentsClosed = document.getElementById('serpents-closed');
const serpentsOpened = document.getElementById('serpents-opened');
const serpentsInfo = document.getElementById('serpents-info');
const mjfClosed = document.getElementById('mjf-closed');
const mjfOpened = document.getElementById('mjf-opened');
const mjfInfo = document.getElementById('mjf-info');
const portfolioClosed = document.getElementById('portfolio-v1-closed');
const portfolioOpened = document.getElementById('portfolio-v1-opened');
const portfolioInfo = document.getElementById('portfolio-v1-info');
const numberGuesserClosed = document.getElementById('number-guesser-closed');
const numberGuesserOpened = document.getElementById('number-guesser-opened');
const numberGuesserInfo = document.getElementById('number-guesser-info');
const cardCheckerClosed = document.getElementById('card-checker-closed');
const cardCheckerOpened = document.getElementById('card-checker-opened');
const cardCheckerInfo = document.getElementById('card-checker-info');
const organismClosed = document.getElementById('organism-closed');
const organismOpened = document.getElementById('organism-opened');
const organismInfo = document.getElementById('organism-info');


// Hide Elements
personalProjectsOpened.hidden = true;
codecademyProjectsOpened.hidden = true;
personalProjectsList.hidden = true;
jtPageOpened.hidden = true;
jtPageInfo.hidden = true;
htmlCheatOpened.hidden = true;
htmlCheatInfo.hidden = true;
codecademyProjectsList.hidden = true;
teacozyOpened.hidden = true;
teacozyInfo.hidden = true;
excursionOpened.hidden = true;
excursionInfo.hidden = true;
colmarOpened.hidden = true;
colmarInfo.hidden = true;
eightballOpened.hidden = true;
eightballInfo.hidden = true;
mindcraftOpened.hidden = true;
mindcraftInfo.hidden = true;
designSystemOpened.hidden = true;
designSystemInfo.hidden = true;
serpentsOpened.hidden = true;
serpentsInfo.hidden = true;
mjfOpened.hidden = true;
mjfInfo.hidden = true;
portfolioOpened.hidden = true;
portfolioInfo.hidden = true;
numberGuesserOpened.hidden = true;
numberGuesserInfo.hidden = true;
cardCheckerOpened.hidden = true;
cardCheckerInfo.hidden = true;
organismOpened.hidden = true;
organismInfo.hidden = true;


// On Click Functions

personalProjectsClosed.onclick = function() {
    personalProjectsClosed.hidden = true;
    personalProjectsOpened.hidden = false;
    personalProjectsList.hidden = false;
}

personalProjectsOpened.onclick = function() {
    personalProjectsOpened.hidden = true;
    personalProjectsClosed.hidden = false;
    personalProjectsList.hidden = true;
} 

codecademyProjectsClosed.onclick = function() {
    codecademyProjectsClosed.hidden = true;
    codecademyProjectsOpened.hidden = false;
    codecademyProjectsList.hidden = false;
}

codecademyProjectsOpened.onclick = function() {
    codecademyProjectsOpened.hidden = true;
    codecademyProjectsClosed.hidden = false;
    codecademyProjectsList.hidden = true;
}

jtPageClosed.onclick = function() {
    jtPageClosed.hidden = true;
    jtPageOpened.hidden = false;
    jtPageInfo.hidden = false;
}

jtPageOpened.onclick = function() {
    jtPageOpened.hidden = true;
    jtPageClosed.hidden = false;
    jtPageInfo.hidden = true;
}

htmlCheatClosed.onclick = function() {
    htmlCheatClosed.hidden = true;
    htmlCheatOpened.hidden = false;
    htmlCheatInfo.hidden = false;
}

htmlCheatOpened.onclick = function() {
    htmlCheatOpened.hidden = true;
    htmlCheatInfo.hidden = true;
    htmlCheatClosed.hidden = false;
}

teacozyClosed.onclick = function() {
    teacozyClosed.hidden = true;
    teacozyOpened.hidden = false;
    teacozyInfo.hidden = false;
}

teacozyOpened.onclick = function() {
    teacozyOpened.hidden = true;
    teacozyInfo.hidden = true;
    teacozyClosed.hidden = false;
}

excursionClosed.onclick = function() {
    excursionClosed.hidden = true;
    excursionOpened.hidden = false;
    excursionInfo.hidden = false;
}

excursionOpened.onclick = function() {
    excursionOpened.hidden = true;
    excursionInfo.hidden = true;
    excursionClosed.hidden = false;
}

colmarClosed.onclick = function() {
    colmarClosed.hidden = true;
    colmarOpened.hidden = false;
    colmarInfo.hidden = false;
}

colmarOpened.onclick = function() {
    colmarOpened.hidden = true;
    colmarInfo.hidden = true;
    colmarClosed.hidden = false;
}

eightballClosed.onclick = function() {
    eightballClosed.hidden = true;
    eightballOpened.hidden = false;
    eightballInfo.hidden = false;
}

eightballOpened.onclick = function() {
    eightballOpened.hidden = true;
    eightballInfo.hidden = true;
    eightballClosed.hidden = false;
}

mindcraftClosed.onclick = function() {
    mindcraftClosed.hidden = true;
    mindcraftOpened.hidden = false;
    mindcraftInfo.hidden = false;
}

mindcraftOpened.onclick = function() {
    mindcraftOpened.hidden = true;
    mindcraftInfo.hidden = true;
    mindcraftClosed.hidden = false;
}

designSystemClosed.onclick = function() {
    designSystemClosed.hidden = true;
    designSystemOpened.hidden = false;
    designSystemInfo.hidden = false;
}

designSystemOpened.onclick = function() {
    designSystemOpened.hidden  = true;
    designSystemInfo.hidden = true;
    designSystemClosed.hidden = false;
}

serpentsClosed.onclick = function() {
    serpentsClosed.hidden = true;
    serpentsInfo.hidden = false;
    serpentsOpened.hidden = false;
}

serpentsOpened.onclick = function() {
    serpentsOpened.hidden = true;
    serpentsInfo.hidden = true;
    serpentsClosed.hidden = false;
}

mjfClosed.onclick = function() {
    mjfClosed.hidden = true;
    mjfOpened.hidden = false;
    mjfInfo.hidden = false;
}

mjfOpened.onclick = function() {
    mjfOpened.hidden = true;
    mjfInfo.hidden = true;
    mjfClosed.hidden = false;
}

portfolioClosed.onclick = function() {
    portfolioClosed.hidden = true;
    portfolioOpened.hidden = false;
    portfolioInfo.hidden = false;
}

portfolioOpened.onclick = function() {
    portfolioOpened.hidden = true;
    portfolioInfo.hidden = true;
    portfolioClosed.hidden = false;
}

numberGuesserClosed.onclick = function() {
    numberGuesserClosed.hidden = true;
    numberGuesserOpened.hidden = false;
    numberGuesserInfo.hidden = false;
}

numberGuesserOpened.onclick = function() {
    numberGuesserOpened.hidden = true;
    numberGuesserInfo.hidden = true;
    numberGuesserClosed.hidden = false;
}

cardCheckerClosed.onclick = function() {
    cardCheckerClosed.hidden = true;
    cardCheckerOpened.hidden = false;
    cardCheckerInfo.hidden = false;
}

cardCheckerOpened.onclick = function() {
    cardCheckerOpened.hidden = true;
    cardCheckerInfo.hidden = true;
    cardCheckerClosed.hidden = false;
}

organismClosed.onclick = function() {
    organismClosed.hidden = true;
    organismOpened.hidden = false;
    organismInfo.hidden = false;
}

organismOpened.onclick = function() {
    organismOpened.hidden = true;
    organismInfo.hidden = true;
    organismClosed.hidden = false;
}

