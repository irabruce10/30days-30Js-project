const key = "5ea6d2d405d85b936245b654206c31fb";

const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let searchBox = document.querySelector(".search input");
let searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function getWeather(city) {
  const response = await fetch(url + city + `&appid=${key}`);
  let data = await response.json();

  if (response.status == 404) {
    document.querySelector(".message").style.display = "block";

    document.querySelector(".weather").style.display = "none";
  } else {
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    console.log(data);

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "image/cloud.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "image/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "image/drizzle.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "image/sun.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "image/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".message").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  getWeather(searchBox.value);
});
