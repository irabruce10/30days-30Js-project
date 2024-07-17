const key = "5ea6d2d405d85b936245b654206c31fb";

const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let searchBox = document.querySelector(".search input");
let searchBtn = document.querySelector(".search button");

async function getWeather(city) {
  const response = await fetch(url + city + `&appid=${key}`);
  let data = await response.json();
  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temperature").innerHTML =
    Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
}

searchBtn.addEventListener("click", () => {
  getWeather(searchBox.value);
});
