const dates = document.querySelector("#currentyear");
const last = document.querySelector("#modification");

const visitDisplay = document.querySelector(".visits");



const today = new Date();

dates.innerHTML = `&copy<span>${today.getFullYear()}</span> Ronal Balmore Orellana Bonilla - El Salvador`;

last.innerHTML = `Last Modification:${document.lastModified}`;

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        avg_rating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

let choice = document.querySelector("#cproduct")

products.forEach(product => {
    let object = document.createElement('option');

    object.innerHTML = `<option value="">${product.name}</option>`

    choice.appendChild(object)

} );

// Counting the visits to my page 
let numVisits = Number(window.localStorage.getItem("visits-ls"));

localStorage.setItem("visits-ls", numVisits);

numVisits++;
visitDisplay.innerHTML = numVisits




