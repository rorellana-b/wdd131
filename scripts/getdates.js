const date = document.querySelector("#currentyear");

const today = new Date();


date.innerHTML = `getFullYear(): <span class="highlight">${today.getFullYear()}</span>`;