const dates = document.querySelector("#currentyear");
const last = document.querySelector("#modification");

const visitDisplay = document.querySelector(".visits");



const today = new Date();

dates.innerHTML = `&copy<span>${today.getFullYear()}</span> Ronal Balmore Orellana Bonilla - El Salvador`;

last.innerHTML = `Last Modification:${document.lastModified}`;

// Counting the visits to my page 
let numVisits = Number(window.localStorage.getItem("visits-ls"));
numVisits++;
localStorage.setItem("visits-ls", numVisits);

visitDisplay.innerHTML = numVisits