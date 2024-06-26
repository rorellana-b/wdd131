const dates = document.querySelector("#currentyear");
const last = document.querySelector("#modification");

const today = new Date();

dates.innerHTML = `&copy<span>${today.getFullYear()}</span> Ronal Balmore Orellana Bonilla - El Salvador`;
last.innerHTML = `Last Modification:${document.lastModified}`;

// show botton in small html
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
navigation.classList.toggle('show');
hamButton.classList.toggle('show');

});



const foodList = [
    {
      foodName: "Pupusas",
      kind: "anytime",
      preparation: "30 min",
      description:"Pupusas are versatile, delicious and go with everything. They are the typical dish of El Salvador and very popular in Honduras.",
      imageUrl:"../images/pupusas.jpeg"
    },
    {
        foodName: "Nuegados",
        kind: "anytime",
        preparation: "20 min",
        description: "Nuégados , or Salvadoran buñuelos , are a sweet-tasting dish that is usually enjoyed as an appetizer before lunch or even dinner.",
        imageUrl:"../images/nuegados.webp"
      },  
      {
        foodName: "Chilate",
        kind: "anytime",
        preparation: "20 min",
        description: "Salvadoran chilate is one of the most traditional drinks found in the rich gastronomy of this country. It is usually served as something to drink in the afternoons, although it is also drunk as an accompaniment to some dishes.",
        imageUrl:"../images/chilate.webp"
      },
      {
        foodName: "Rice and chicken",
        kind: "Luch",
        preparation: "30 min",
        description: "Salvadoran rice and chicken is a delicius way to mix tasty ingradients. It is usually served as lunch and is easy to carry to any place.",
        imageUrl:"../images/rice_and_chiken.webp"
      },
      {
        foodName: "Tomato pork Ribs",
        kind: "Luch",
        preparation: "45 min",
        description: "Taste these entomatated pork ribs , one of the most homey recipes in El Salvador.Pork ribs are one of those meats that you can  eat almost every day because of their particular flavor and how easy it is to combine them with many ingredients.",
        imageUrl:"../images/pork_ribs.webp"
      }
    // Add more temple objects here...
  ];

  document.querySelector(".res-grid").innerHTML = "";
  foodList.forEach(food => {
    let card = document.createElement('section');
    let name = document.createElement("h3");
    let kind = document.createElement("p");
    let preparation = document.createElement("p");
    let description = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = food.foodName;
    kind.innerHTML = `<span class = "Label">Kind:</span> ${food.kind}`;
    preparation.innerHTML = `<span class = "Label">Preparation:</span> ${food.preparation}`;
    description.innerHTML = `<span class = "Label">Description:</span> ${food.description}`;
    img.setAttribute("src", food.imageUrl);
    img.setAttribute("alt", `${food.name} Temple`);
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(kind);
    card.appendChild(preparation);
    card.appendChild(description);
    card.appendChild(img);

    document.querySelector(".res-grid").appendChild(card);
  });


  