
const dates = document.querySelector("#currentyear");
const last = document.querySelector("#modification");
const windChill = document.querySelector("#windchill");

const today = new Date();


dates.innerHTML = `&copy<span>${today.getFullYear()}</span> Ronal Balmore Orellana Bonilla - El Salvador`;

last.innerHTML = `Last Modification:${document.lastModified}`;

const temperature = 35;
const windSpeed = 5;

function windchill(temp, wind) {
    var windC = (35.74 + (0.6215 * temp)) - (35.75 * Math.pow(wind, 0.16)) + (0.4275 * temp * Math.pow(wind, 0.16))

    return Math.round(windC);
}

if (temperature>=10 && windSpeed>4.8){
    var an = windchill(temperature,windSpeed);
    windChill.innerHTML=`${an}&deg;C`;
}else{
    windChill.innerHTML=`N/A`;
}

