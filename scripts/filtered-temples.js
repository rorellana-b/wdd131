const dates = document.querySelector("#currentyear");
const last = document.querySelector("#modification");

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
navigation.classList.toggle('show');
hamButton.classList.toggle('show');

});

const today = new Date();


dates.innerHTML = `&copy<span>${today.getFullYear()}</span> Ronal Balmore Orellana Bonilla - El Salvador`;

last.innerHTML = `Last Modification:${document.lastModified}`;

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "El Salvador",
    location: "San Salvador, El Salvador",
    dedicated: "2011, Agoust, 21",
    area: 60642,
    imageUrl:
    "https://www.churchofjesuschrist.org/imgs/8c084fef6033bfd96c430cec43236af0b41740f5/full/320%2C/0/default"
  },
  // Add more temple objects here...
];

createTempleCard(temples);

const oldTemples = document.querySelector("#oldTemple");
const homelink = document.querySelector("#homeTemple");
const newTemples = document.querySelector("#newTemple");
const largeTemples = document.querySelector("#largeTemple");
const smallTemples = document.querySelector("#smallTemple");


homelink.addEventListener( 'click', () => {
  createTempleCard(temples);
});

oldTemples.addEventListener("click", () => {
  const otemple = temples.filter((temple) => {
    const year = new Date(temple.dedicated).getFullYear();
    return year <= 1990;
  });
  createTempleCard(otemple);
});

newTemples.addEventListener("click", () => {
  const ntemple = temples.filter((temple) => {
    const year = new Date(temple.dedicated).getFullYear();
    return year >= 2000;
  });
  createTempleCard(ntemple);
});

smallTemples.addEventListener("click", () => {
  const stemple = temples.filter((temple) => temple.area < 10000);
  createTempleCard(stemple);
});

largeTemples.addEventListener("click", () => {
  const ltemple = temples.filter((temple) => temple.area >= 90000);
  createTempleCard(ltemple);
});



function createTempleCard(filteredTemples) {
  document.querySelector(".res-grid").innerHTML = "";
  filteredTemples.forEach(temple => {
    let card = document.createElement('section');
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class = "Label">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class = "Label">Decication:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class = "Label">Size:</span> ${temple.area} sq ft`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    document.querySelector(".res-grid").appendChild(card);

  });
}



