const key = "5ea6d2d405d85b936245b654206c31fb";

const url =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=linz";

async function getWeatherData() {
  const response = await fetch(url + `&appid=${key}`);
  const data = await response.json();
  console.log(data);

  //   if (response.ok) {
  //     return data;
  //     console.log(data);
  //   } else {
  //     throw new Error(`HTTP error! status: ${response.status}`);
  //   }
}

getWeatherData();
